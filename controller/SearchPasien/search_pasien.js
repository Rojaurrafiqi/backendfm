import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// mencari data pasien
export const searchDataPasien = async (req, res) => {
  const { nama, nik, tgl_lahir, nomr, page, limit } = req.query;
  const searchQuery = {};

  //pencarian pasien bisa dari query nama, nik, tgl lahir, nomr pasien
  if (nama) {
    searchQuery.nama_user = {
      contains: nama,
    };
  }
  if (nik) {
    searchQuery.no_identitas = {
      contains: nik,
    };
  }
  if (tgl_lahir) {
    searchQuery.tgl_lhr = {
      equals: tgl_lahir,
    };
  }
  if (nomr) {
    searchQuery.no_mr = {
      contains: nomr,
    };
  }

  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;

  try {
    const countQuery = await prisma.rekam_medis_pasien.count({
      where: {
        ...searchQuery,
      },
    });

    const totalItems = countQuery;
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.rekam_medis_pasien.findMany({
      where: {
        ...searchQuery,
      },
      select: {
        id: true,
        no_mr: true,
        nama_user: true,
        no_identitas: true,
        tgl_lhr: true,
        gender_data: {
          select: {
            id_gender: true,
            jenis_kelamin: true,
          },
        },
      },
      orderBy: {
        id: "desc",
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

//   get data pasien by id
export const getDataPasienById = async (req, res) => {
  try {
    const response = await prisma.rekam_medis_pasien.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
