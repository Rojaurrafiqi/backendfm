import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// apabila user jabatan dokter, maka detail user yang tampil adalah data user tersebut sebagai dokter
export const getDetailUserDokter = async (req, res) => {
  try {
    const data = await prisma.dokter.findMany({
      where: {
        id_user: Number(req.params.id),
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//untuk sementara hanya yang user jabatan dokter dulu yang dibuat detail nya

export const postDetailUserDokter = async (req, res) => {
  const {
    id_user,
    nama_dokter,
    spesialis,
    sub_spesialis,
    nomor_hp,
    alamat,
    email,
    tanggal_lahir,
    jenis_kelamin,
    tempat_lahir,
  } = req.body;
  try {
    const postData = await prisma.dokter.create({
      data: {
        id_user: id_user,
        nama_dokter: nama_dokter,
        spesialis: spesialis,
        sub_spesialis: sub_spesialis,
        nomor_hp: nomor_hp,
        alamat: alamat,
        email: email,
        tanggal_lahir: tanggal_lahir,
        tempat_lahir: tempat_lahir,
        jenis_kelamin: jenis_kelamin,
      },
    });
    res.status(201).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
