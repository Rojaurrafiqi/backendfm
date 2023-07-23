import { PrismaClient } from "@prisma/client";
import bcrypt, { genSalt } from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const register = async (req, res) => {
  const {
    name,
    email,
    password,
    confPassword,
    jabatan,
    status,
    jenis_kelamin,
    id_rm,
  } = req.body;

  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "password dan confirm password tidak cocok" });

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: hashPassword,
        jabatan: jabatan,
        jenis_kelamin: jenis_kelamin,
        status: status,
        id_rm: id_rm,
      },
    });
    res.json({ msg: "register berhasil" });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const data = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
        jabatan: true,
        status: true,
        email: true,
        refresh_token: true,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUser = async (req, res) => {
  const { search, page, limit, jabatan, status } = req.query;
  const searchQuery = search
    ? {
        OR: [{ name: { contains: search } }],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;

  try {
    let whereCondition = searchQuery;
    if (jabatan) {
      whereCondition = {
        ...searchQuery,
        jabatan: {
          equals: jabatan,
        },
      };
    }

    if (status) {
      whereCondition = {
        ...whereCondition,
        status: {
          equals: status,
        },
      };
    }

    const totalItems = await prisma.users.count({ where: whereCondition });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.users.findMany({
      where: whereCondition,
      select: {
        id: true,
        name: true,
        jabatan: true,
        status: true,
        email: true,
      },
      skip: skipNumber,
      take: limitNumber,
    });

    res.status(200).json({
      data: getData,
      totalItems,
      totalPages,
      currentPage: pageNumber,
    });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.users.findMany({
      where: {
        email: email,
      },
    });
    if (!user || user.length === 0) {
      return res.status(400).json({ msg: "User not found" });
    }

    const match = await bcrypt.compare(password, user[0].password);
    if (!match) {
      return res.status(400).json({ msg: "Wrong password" });
    }

    const userId = user[0].id;
    const nameUser = user[0].name;
    const emailUser = user[0].email;

    const accessToken = jwt.sign(
      {
        userId,
        nameUser,
        emailUser,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        // expiresIn: "20s", dinon aktifkan sementara, untuk proses developmen, nnti ketika deploy harus pakai ini lagi
        expiresIn: "7d",
      }
    );
    const refreshToken = jwt.sign(
      {
        userId,
        nameUser,
        emailUser,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );

    await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        refresh_token: refreshToken,
      },
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 1000,
      // secure: true // untuk menggunakan https
    });

    res.json({ accessToken });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token not found" });
    }

    // Hapus refresh token dari database (gunakan Prisma)
    await prisma.users.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        refresh_token: null,
      },
    });

    // Hapus cookie refresh token pada respons
    res.clearCookie("refreshToken");

    res.json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete users
export const deleteUser = async (req, res) => {
  try {
    const data = await prisma.users.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// untuk dipakai pada form pendaftaran user baru pada field select jabatan di FE user
export const getJabatan = async (req, res) => {
  try {
    const data = await prisma.jabatan.findMany({
      select: {
        id: true,
        nama_jabatan: true,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// data user by id
export const getUserById = async (req, res) => {
  try {
    const data = await prisma.users.findUnique({
      where: {
        id: Number(req.params.id),
      },
      select: {
        id: true,
        name: true,
        email: true,
        jabatan: true,
        jenis_kelamin: true,
        id_rm: true,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
