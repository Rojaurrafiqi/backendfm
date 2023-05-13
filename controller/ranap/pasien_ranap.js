import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// search data pasien from rekam medis to ranap
export const search_data_pasien = async (req, res) => {
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

// register pasien method post
export const pendaftaran_ranap = () => {
  // try {
  // } catch() {
  // },
};
// show pasien ranap method get

// delete pasien ranap method delete

// edit pasien ranap method update
