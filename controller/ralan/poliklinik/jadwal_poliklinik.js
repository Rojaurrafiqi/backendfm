import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataJadwalPoliklinik = async (req, res) => {
  const { search, page, limit, poli, hari } = req.query;
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
          equals: Number(poli), // parse id dari string ke number atau int
        },
      };
    }
    if (hari) {
      whereCondition = {
        ...searchQuery,
        id_hari: {
          equals: Number(hari), // parse id dari string ke number atau int
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
        id_poli: true,
        id_hari: true,
        id_dokter: true,
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

// Retrieve jadwal_poli data
export const getJadwalPoli = async (req, res) => {
  try {
    const { nama_poli, nama_hari } = req.query;
    let jadwalPolis;

    if (nama_poli && nama_hari) {
      jadwalPolis = await prisma.jadwal_poliklinik.findMany({
        where: {
          poliklinik_data: {
            nama_poliklinik: nama_poli, // Use the value of the nama_poli parameter
          },
          hari: {
            list_nama_hari: nama_hari, // Use the value of the nama_hari parameter
          },
        },
        include: {
          poliklinik_data: true,
          hari: true,
          dokter_data: true,
        },
      });
    } else if (nama_poli) {
      jadwalPolis = await prisma.jadwal_poliklinik.findMany({
        where: {
          poliklinik_data: {
            nama_poliklinik: nama_poli, // Use the value of the nama_poli parameter
          },
        },
        include: {
          poliklinik_data: true,
          hari: true,
          dokter_data: true,
        },
      });
    } else if (nama_hari) {
      jadwalPolis = await prisma.jadwal_poliklinik.findMany({
        where: {
          hari: {
            list_nama_hari: nama_hari, // Use the value of the nama_hari parameter
          },
        },
        include: {
          poliklinik_data: true,
          hari: true,
          dokter_data: true,
        },
      });
    } else {
      jadwalPolis = await prisma.jadwal_poliklinik.findMany({
        include: {
          poliklinik_data: true,
          hari: true,
          dokter_data: true,
        },
      });
    }

    res.json(jadwalPolis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
