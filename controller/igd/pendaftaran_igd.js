import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// mencari data pasien
export const search_data_pasien = async (req, res) => {
  //   const { search, page = 1, pageSize = 5 } = req.query;
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search || "";
  const offset = limit * page;

  const totalRows = await prisma.rekam_medis_pasien.count({
    where: {
      OR: [
        // { no_rm: parseInt(search) },
        { kitas: { contains: search } },
        { nama_lengkap: { contains: search } },
      ],
    },
  });

  const totalPages = Math.ceil(totalRows / limit);

  const response = await prisma.rekam_medis_pasien.findMany({
    where: {
      OR: [
        // { no_rm: parseInt(search) },
        { kitas: { contains: search } },
        { nama_lengkap: { contains: search } },
      ],
    },

    // menampilkan data sesuai kebutuhan saja
    //   select: {
    //         id: true,
    //         no_rm: true,
    //         kitas:true,
    //         no_kitas:true,
    //         nama_lengkap: true,
    //         tanggal_lahir: true,
    //         kelamin: true,
    //         kontak_pasien: true,
    //         tempat_lahir:true,
    //         golongan_darah:true
    //     },
    skip: offset,
    take: limit,
    orderBy: {
      id: "desc",
    },
  });

  res.status(200).json({
    data: response,
    page: page,
    limit: limit,
    totalRows: totalRows,
    totalPages: totalPages,
  });
};

//   get data pasien by id
export const pasien_by_id = async (req, res) => {
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

// setelah data didapat, pasien didaftarkan ke igd
export const pendaftaran_igd = async (req, res) => {
  const {
    id_pasien_rm,
    tgl_masuk,
    jam_masuk,
    cara_masuk,
    asal_rujukan,
    alasan_rujukan,
    dokter_merujuk,
    pembayaran_igd,
  } = req.body;
  try {
    const rm_Data = await prisma.pasien_igd.create({
      data: {
        id_pasien_rm: id_pasien_rm,
        tgl_masuk: tgl_masuk,
        jam_masuk: jam_masuk,
        cara_masuk: cara_masuk,
        asal_rujukan: asal_rujukan,
        alasan_rujukan: alasan_rujukan,
        dokter_merujuk: dokter_merujuk,
        pembayaran_igd: pembayaran_igd,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const data_pasien_igd_by_id = async (req, res) => {
  try {
    const response = await prisma.pasien_igd.findUnique({
      where: {
        id: Number(req.params.id),
      },
      select: {
        id: true,
        tgl_masuk: true,
        jam_masuk: true,
        cara_masuk: true,
        pasien_rm: {
          select: {
            no_rm: true,
            nama_lengkap: true,
          },
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const tindakan_by_id = async (req, res) => {
  try {
    const response = await prisma.tindakan_igd.findMany({
      where: {
        id_pasien_igd: Number(req.params.id),
      },
      select: {
        id: true,
        jam_tindakan: true,
        pasien_igd: {
          select: {
            id: true,
            id_pasien_rm: true,
            jam_masuk: true,
          },
        },
        list_tindakan_igd: {
          select: {
            id: true,
            tindakan: true,
          },
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// create data tindakan
export const create_tindakan_pasien_igd_by_id = async (req, res) => {
  const { id_list_tindakan_igd, id_pasien_igd, jam_tindakan, catatan } =
    req.body;

  try {
    const data_tindakan = await prisma.tindakan_igd.create({
      data: {
        id_list_tindakan_igd: id_list_tindakan_igd,
        id_pasien_igd: id_pasien_igd,
        jam_tindakan: jam_tindakan,
        catatan: catatan,
      },
    });
    res.status(201).json(data_tindakan);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// create data tambah list tindakan
export const create_list_tindakan_igd = async (req, res) => {
  const { tindakan } = req.body;

  try {
    const data_tindakan = await prisma.list_tindakan_igd.create({
      data: {
        tindakan: tindakan,
      },
    });
    res.status(201).json(data_tindakan);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// hapus data tindakan pasien
export const hapus_tindakan_pasien_igd = async (req, res) => {
  try {
    const data = await prisma.tindakan_igd.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// hapus data list tindakan
export const hapus_list_tindakan_igd = async (req, res) => {
  try {
    const data = await prisma.list_tindakan_igd.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// tampilkan data pasien igd yang blm ditangani
export const data_pasien_igd = async (req, res) => {
  try {
    const response = await prisma.pasien_igd.findUnique({
      select: {
        id: true,
        tanggal_masuk: true,
        jam_masuk: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const semua_pasien_igd = async (req, res) => {
  try {
    const data = await prisma.pasien_igd.findMany({
      where: {
        triase_ats_pasien_igd: {
          none: {
            plan: { not: null },
          }, // Menggunakan 'none' untuk memfilter data yang tidak memiliki relasi
        },
      },

      select: {
        id: true,
        tgl_masuk: true,
        jam_masuk: true,
        cara_masuk: true,
        asal_rujukan: true,
        alasan_rujukan: true,
        dokter_merujuk: true,
        jam_masuk: true,
        pasien_rm: {
          select: {
            id: true,
            no_rm: true,
            nama_lengkap: true,
            kelamin: true,
          },
        },
      },
    });

    res.status(200).json(data); // send the data back to the client as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// menampilkan list pasien igd yang sedang dalam penanganan
export const list_pasien_igd_penanganan = async (req, res) => {
  try {
    const data = await prisma.pasien_igd.findMany({
      select: {
        id: true,
        tgl_masuk: true,
        jam_masuk: true,
        jam_masuk: true,
        status: true,
        pasien_rm: {
          select: {
            id: true,
            no_rm: true,
            nama_lengkap: true,
            kelamin: true,
          },
        },
        triase_ats_pasien_igd: {
          select: {
            id: true,
            plan: true,
          },
          where: {
            plan: {
              not: null,
            },
          },
        },
      },

      where: {
        status: {
          not: "selesai",
        },
        triase_ats_pasien_igd: {
          some: {
            plan: {
              not: null,
            },
          },
        },
      },
    });

    res.status(200).json(data); // send the data back to the client as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const pasien_igd_by_id = async (req, res) => {
  try {
    const data = await prisma.pasien_igd.findUnique({
      where: {
        id: Number(req.params.id),
      },
      select: {
        id: true,
        tgl_masuk: true,
        jam_masuk: true,
        cara_masuk: true,
        asal_rujukan: true,
        alasan_rujukan: true,
        dokter_merujuk: true,
        jam_masuk: true,
        pasien_rm: {
          select: {
            id: true,
            no_rm: true,
            nama_lengkap: true,
            tanggal_lahir: true,
            no_kitas: true,
            kelamin: true,
            alamat_pasien_provinsi: true,
            alamat_pasien_kota: true,
            alamat_pasien_desa: true,
            alamat_pasien_detail: true,
            agama: true,
            kontak_pasien: true,
          },
        },
      },
    }); // retrieve all pasien_igd data

    res.status(200).json(data); // send the data back to the client as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const pencarian_pasien = async (req, res) => {
  const response = await prisma.rekam_medis_pasien.findUnique({
    where: {
      id: Number(req.params.id),
    },

    select: {
      id: true,
      no_rm: true,
      nama_lengkap: true,
      no_kitas: true,
      kelamin: true,
      tanggal_lahir: true,
    },
  });
  res.status(200).json(response);
};

export const deleteDataIgd = async (req, res) => {
  try {
    const data = await prisma.pasien_igd.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const checkoutIgd = async (req, res) => {
  const { status, id_pasien_rm } = req.body;
  try {
    const data = await prisma.pasien_igd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_pasien_rm: id_pasien_rm,
        status: status,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
