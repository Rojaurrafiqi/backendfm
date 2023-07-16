import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// show all data pasien
export const getAllPasien = async (req, res) => {
  const { search, page, limit } = req.query;
  const searchQuery = search
    ? {
        OR: [
          { no_identitas: { contains: search } },
          { nama_user: { contains: search } },
          { no_mr: { contains: search } },
          { tgl_lhr: { contains: search } },
        ],
      }
    : {};

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
        gender_data: {
          select: {
            id_gender: true,
            jenis_kelamin: true,
          },
        },
        tgl_lhr: true,
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

export const getDataById = async (req, res) => {
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

export const createData = async (req, res) => {
  const lastRm = await prisma.rekam_medis_pasien.findFirst({
    select: {
      no_mr: true,
    },
    orderBy: {
      no_mr: "desc",
    },
  });

  const newRm = lastRm ? lastRm.no_mr + 1 : 1;

  const {
    id,
    id_finger,
    foto,
    tanda_tangan,
    no_mr,
    no_mr_lama,
    kode_dpjp,
    gelar_dpn,
    nama_user,
    gelar_blk,
    id_shift,
    tmp_lhr,
    tgl_lhr,
    id_jk,
    id_kawin,
    id_agama,
    gol_darah,
    berat_lahir,
    id_jpdd,
    id_prodi,
    id_pekerjaan,
    id_pekerjaan_sts,
    id_kantor,
    id_grupsdm,
    tarif_konsul,
    sts_tarif_dikelola_dokter,
    ket_spesialisasi,
    no_sip,
    id_ruangan,
    tmt_cpns,
    nip,
    no_karpeg,
    npwp,
    id_desa,
    alamat,
    jenis_identitas,
    no_identitas,
    no_kk,
    no_hp,
    email,
    grup_user,
    sts_user,
    sts_prioritas,
    id_prov,
    id_kabkota,
    id_kecamatan,
    id_kelp_sdm,
    nip_lama,
    cuti_tahunan,
    tmt_pensiun,
    tmt_pns,
    sts_allowed_credit,
    riwayat_alergi_obat,
    riwayat_alergi_makanan,
    idcardprinted,
    idcardtaked,
    idcardpaid,
    idcardexpired,
    date_registered,
    user_registered,
    date_modified,
    user_modified,
    isdefault,
    password,
    sts_update,
  } = req.body;
  try {
    const rm_Data = await prisma.rekam_medis_pasien.create({
      data: {
        id: id,
        id_finger: id_finger,
        foto: foto,
        tanda_tangan: tanda_tangan,
        no_mr: newRm,
        no_mr_lama: no_mr_lama,
        kode_dpjp: kode_dpjp,
        gelar_dpn: gelar_dpn,
        nama_user: nama_user,
        gelar_blk: gelar_blk,
        id_shift: id_shift,
        tmp_lhr: tmp_lhr,
        tgl_lhr: tgl_lhr,
        id_jk: id_jk,
        id_kawin: id_kawin,
        id_agama: id_agama,
        gol_darah: gol_darah,
        berat_lahir: berat_lahir,
        id_jpdd: id_jpdd,
        id_prodi: id_prodi,
        id_pekerjaan: id_pekerjaan,
        id_pekerjaan_sts: id_pekerjaan_sts,
        id_kantor: id_kantor,
        id_grupsdm: id_grupsdm,
        tarif_konsul: tarif_konsul,
        sts_tarif_dikelola_dokter: sts_tarif_dikelola_dokter,
        ket_spesialisasi: ket_spesialisasi,
        no_sip: no_sip,
        id_ruangan: id_ruangan,
        tmt_cpns: tmt_cpns,
        nip: nip,
        no_karpeg: no_karpeg,
        npwp: npwp,
        id_desa: id_desa,
        alamat: alamat,
        jenis_identitas: jenis_identitas,
        no_identitas: no_identitas,
        no_kk: no_kk,
        no_hp: no_hp,
        email: email,
        grup_user: grup_user,
        sts_user: sts_user,
        sts_prioritas: sts_prioritas,
        id_prov: id_prov,
        id_kabkota: id_kabkota,
        id_kecamatan: id_kecamatan,
        id_kelp_sdm: id_kelp_sdm,
        nip_lama: nip_lama,
        cuti_tahunan: cuti_tahunan,
        tmt_pensiun: tmt_pensiun,
        tmt_pns: tmt_pns,
        sts_allowed_credit: sts_allowed_credit,
        riwayat_alergi_obat: riwayat_alergi_obat,
        riwayat_alergi_makanan: riwayat_alergi_makanan,
        idcardprinted: idcardprinted,
        idcardtaked: idcardtaked,
        idcardpaid: idcardpaid,
        idcardexpired: idcardexpired,
        date_registered: date_registered,
        user_registered: user_registered,
        date_modified: date_modified,
        user_modified: user_modified,
        isdefault: isdefault,
        password: password,
        sts_update: sts_update,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateData = async (req, res) => {
  const {
    id: id,
        id_finger: id_finger,
        foto: foto,
        tanda_tangan: tanda_tangan,
        no_mr: newRm,
        no_mr_lama: no_mr_lama,
        kode_dpjp: kode_dpjp,
        gelar_dpn: gelar_dpn,
        nama_user: nama_user,
        gelar_blk: gelar_blk,
        id_shift: id_shift,
        tmp_lhr: tmp_lhr,
        tgl_lhr: tgl_lhr,
        id_jk: id_jk,
        id_kawin: id_kawin,
        id_agama: id_agama,
        gol_darah: gol_darah,
        berat_lahir: berat_lahir,
        id_jpdd: id_jpdd,
        id_prodi: id_prodi,
        id_pekerjaan: id_pekerjaan,
        id_pekerjaan_sts: id_pekerjaan_sts,
        id_kantor: id_kantor,
        id_grupsdm: id_grupsdm,
        tarif_konsul: tarif_konsul,
        sts_tarif_dikelola_dokter: sts_tarif_dikelola_dokter,
        ket_spesialisasi: ket_spesialisasi,
        no_sip: no_sip,
        id_ruangan: id_ruangan,
        tmt_cpns: tmt_cpns,
        nip: nip,
        no_karpeg: no_karpeg,
        npwp: npwp,
        id_desa: id_desa,
        alamat: alamat,
        jenis_identitas: jenis_identitas,
        no_identitas: no_identitas,
        no_kk: no_kk,
        no_hp: no_hp,
        email: email,
        grup_user: grup_user,
        sts_user: sts_user,
        sts_prioritas: sts_prioritas,
        id_prov: id_prov,
        id_kabkota: id_kabkota,
        id_kecamatan: id_kecamatan,
        id_kelp_sdm: id_kelp_sdm,
        nip_lama: nip_lama,
        cuti_tahunan: cuti_tahunan,
        tmt_pensiun: tmt_pensiun,
        tmt_pns: tmt_pns,
        sts_allowed_credit: sts_allowed_credit,
        riwayat_alergi_obat: riwayat_alergi_obat,
        riwayat_alergi_makanan: riwayat_alergi_makanan,
        idcardprinted: idcardprinted,
        idcardtaked: idcardtaked,
        idcardpaid: idcardpaid,
        idcardexpired: idcardexpired,
        date_registered: date_registered,
        user_registered: user_registered,
        date_modified: date_modified,
        user_modified: user_modified,
        isdefault: isdefault,
        password: password,
        sts_update: sts_update,
  } = req.body;

  try {
    const rm_Data = await prisma.rekam_medis_pasien.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id: id,
        id_finger: id_finger,
        foto: foto,
        tanda_tangan: tanda_tangan,
        no_mr: newRm,
        no_mr_lama: no_mr_lama,
        kode_dpjp: kode_dpjp,
        gelar_dpn: gelar_dpn,
        nama_user: nama_user,
        gelar_blk: gelar_blk,
        id_shift: id_shift,
        tmp_lhr: tmp_lhr,
        tgl_lhr: tgl_lhr,
        id_jk: id_jk,
        id_kawin: id_kawin,
        id_agama: id_agama,
        gol_darah: gol_darah,
        berat_lahir: berat_lahir,
        id_jpdd: id_jpdd,
        id_prodi: id_prodi,
        id_pekerjaan: id_pekerjaan,
        id_pekerjaan_sts: id_pekerjaan_sts,
        id_kantor: id_kantor,
        id_grupsdm: id_grupsdm,
        tarif_konsul: tarif_konsul,
        sts_tarif_dikelola_dokter: sts_tarif_dikelola_dokter,
        ket_spesialisasi: ket_spesialisasi,
        no_sip: no_sip,
        id_ruangan: id_ruangan,
        tmt_cpns: tmt_cpns,
        nip: nip,
        no_karpeg: no_karpeg,
        npwp: npwp,
        id_desa: id_desa,
        alamat: alamat,
        jenis_identitas: jenis_identitas,
        no_identitas: no_identitas,
        no_kk: no_kk,
        no_hp: no_hp,
        email: email,
        grup_user: grup_user,
        sts_user: sts_user,
        sts_prioritas: sts_prioritas,
        id_prov: id_prov,
        id_kabkota: id_kabkota,
        id_kecamatan: id_kecamatan,
        id_kelp_sdm: id_kelp_sdm,
        nip_lama: nip_lama,
        cuti_tahunan: cuti_tahunan,
        tmt_pensiun: tmt_pensiun,
        tmt_pns: tmt_pns,
        sts_allowed_credit: sts_allowed_credit,
        riwayat_alergi_obat: riwayat_alergi_obat,
        riwayat_alergi_makanan: riwayat_alergi_makanan,
        idcardprinted: idcardprinted,
        idcardtaked: idcardtaked,
        idcardpaid: idcardpaid,
        idcardexpired: idcardexpired,
        date_registered: date_registered,
        user_registered: user_registered,
        date_modified: date_modified,
        user_modified: user_modified,
        isdefault: isdefault,
        password: password,
        sts_update: sts_update,
      },
    });
    res.status(200).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteData = async (req, res) => {
  const { no_rm, kitas } = req.body;
  try {
    const rm_Data = await prisma.rekam_medis_pasien.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const listPekerjaan = async (req, res) => {
  try {
    const data_pekerjaan = await prisma.pekerjaan.findMany();
    res.status(200).json(data_pekerjaan);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// create data tambah list tindakan
export const createPekerjaan = async (req, res) => {
  const { nama_pekerjaan } = req.body;

  try {
    const data_tindakan = await prisma.pekerjaan.create({
      data: {
        nama_pekerjaan: nama_pekerjaan,
      },
    });
    res.status(201).json(data_tindakan);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// agama

export const listAgama = async (req, res) => {
  try {
    const data = await prisma.agama.findMany();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// create data tambah list tindakan
export const createListAgama = async (req, res) => {
  const { list_agama } = req.body;

  try {
    const data = await prisma.agama.create({
      data: {
        list_agama: list_agama,
      },
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// status kawin
export const listStatusKawin = async (req, res) => {
  try {
    const data = await prisma.status_kawin.findMany();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// create data tambah list tindakan
export const createListStatusKawin = async (req, res) => {
  const { list_status_kawin } = req.body;

  try {
    const data = await prisma.status_kawin.create({
      data: {
        list_status_kawin: list_status_kawin,
      },
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// pendidikan
export const listPendidikan = async (req, res) => {
  try {
    const data = await prisma.pendidikan.findMany();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// create data tambah list tindakan
export const createListPendidikan = async (req, res) => {
  const { list_pendidikan } = req.body;

  try {
    const data = await prisma.pendidikan.create({
      data: {
        list_pendidikan: list_pendidikan,
      },
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// golongan darah
export const listGolonganDarah = async (req, res) => {
  try {
    const data = await prisma.golongan_darah.findMany();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// create data tambah list tindakan
export const createListGolonganDarah = async (req, res) => {
  const { list_golongan_darah } = req.body;

  try {
    const data = await prisma.golongan_darah.create({
      data: {
        list_golongan_darah: list_golongan_darah,
      },
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
