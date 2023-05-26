import { PrismaClient } from "@prisma/client";
import bcrypt, { genSalt } from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;

  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "password dan confirm password tidak cocok" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: hashPassword,
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
        expiresIn: "20s",
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
        expiresIn: "1d",
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
