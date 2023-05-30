import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataJadwalPoliklinik = async (req, res) => {
  const { search, page, limit, poli } = req.query;
  const searchQuery = search
    ? {
        OR: [{ dokter_data: { nama_dokter: { contains: search } } }],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;

  try {
    let whereCondition = searchQuery;
    if (poli) {
      whereCondition = {
        ...searchQuery,
        id_poli: {
          equals: Number(poli), // Use 'poli' instead of 'id_poli'
        },
      };
    }

    const totalItems = await prisma.jadwal_poliklinik.count({
      where: whereCondition,
    });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.jadwal_poliklinik.findMany({
      where: whereCondition,
      select: {
        id: true,
        jam: true,
        poliklinik_data: {
          select: {
            id: true,
            nama_poliklinik: true,
          },
        },
        hari: {
          select: {
            id: true,
            list_nama_hari: true,
          },
        },
        dokter_data: {
          select: {
            id: true,
            nama_dokter: true,
          },
        },
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

// export const getAllDataJadwalPoliklinik = async (req, res) => {
//   try {
//     const getData = await prisma.jadwal_poliklinik.findMany({
//       select: {
//         id: true,
//         nama_poliklinik: true,
//       },
//     });
//     res.status(200).json(getData);
//   } catch (error) {
//     res.status(404).json({ msg: message.error });
//   }
// };

export const postDataJadwalPoliklinik = async (req, res) => {
  const { id_poli, id_hari, id_dokter, jam } = req.body;
  try {
    const postData = await prisma.jadwal_poliklinik.create({
      data: {
        id_poli: id_poli,
        id_hari: id_hari,
        id_dokter: id_dokter,
        jam: jam,
      },
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteDataJadwalPoliklinik = async (req, res) => {
  try {
    const deleteData = await prisma.jadwal_poliklinik.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getDataNamaHari = async (req, res) => {
  try {
    const getData = await prisma.nama_hari.findMany({
      select: {
        id: true,
        list_nama_hari: true,
      },
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getNamaDokter = async (req, res) => {
  try {
    const getData = await prisma.dokter.findMany({
      select: {
        id: true,
        nama_dokter: true,
      },
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
