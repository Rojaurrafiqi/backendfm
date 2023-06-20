/*
  Warnings:

  - You are about to drop the column `agama` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_pasien_desa` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_pasien_detail` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_pasien_kec` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_pasien_kota` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_pasien_provinsi` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_pj_desa` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_pj_detail` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_pj_kec` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_pj_kota` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `alamat_pj_provinsi` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `golongan_darah` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `kelamin` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `kitas` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `kontak_pasien` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `kontak_pj` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `nama_lengkap` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `nama_penanggungjawab` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `no_kitas` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `no_rm` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `pekerjaan` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `pendidikan` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `status_kawin` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_lahir` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `tempat_lahir` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `rekam_medis_pasien` table. All the data in the column will be lost.
  - Added the required column `id_agama` to the `rekam_medis_pasien` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no_mr` to the `rekam_medis_pasien` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rekam_medis_pasien` DROP COLUMN `agama`,
    DROP COLUMN `alamat_pasien_desa`,
    DROP COLUMN `alamat_pasien_detail`,
    DROP COLUMN `alamat_pasien_kec`,
    DROP COLUMN `alamat_pasien_kota`,
    DROP COLUMN `alamat_pasien_provinsi`,
    DROP COLUMN `alamat_pj_desa`,
    DROP COLUMN `alamat_pj_detail`,
    DROP COLUMN `alamat_pj_kec`,
    DROP COLUMN `alamat_pj_kota`,
    DROP COLUMN `alamat_pj_provinsi`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `golongan_darah`,
    DROP COLUMN `kelamin`,
    DROP COLUMN `kitas`,
    DROP COLUMN `kontak_pasien`,
    DROP COLUMN `kontak_pj`,
    DROP COLUMN `nama_lengkap`,
    DROP COLUMN `nama_penanggungjawab`,
    DROP COLUMN `no_kitas`,
    DROP COLUMN `no_rm`,
    DROP COLUMN `pekerjaan`,
    DROP COLUMN `pendidikan`,
    DROP COLUMN `published`,
    DROP COLUMN `status_kawin`,
    DROP COLUMN `tanggal_lahir`,
    DROP COLUMN `tempat_lahir`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `alamat` VARCHAR(191) NULL,
    ADD COLUMN `cuti_tahunan` VARCHAR(191) NULL,
    ADD COLUMN `date_modified` VARCHAR(191) NULL,
    ADD COLUMN `date_registered` VARCHAR(191) NULL,
    ADD COLUMN `foto` VARCHAR(191) NULL,
    ADD COLUMN `gelar_blk` VARCHAR(191) NULL,
    ADD COLUMN `gelar_dpn` VARCHAR(191) NULL,
    ADD COLUMN `gol_darah` VARCHAR(191) NULL,
    ADD COLUMN `id_agama` VARCHAR(191) NOT NULL,
    ADD COLUMN `id_desa` INTEGER NULL,
    ADD COLUMN `id_finger` VARCHAR(191) NULL,
    ADD COLUMN `id_grupsdm` INTEGER NULL,
    ADD COLUMN `id_jk` VARCHAR(191) NULL,
    ADD COLUMN `id_jpdd` INTEGER NULL,
    ADD COLUMN `id_kabkota` INTEGER NULL,
    ADD COLUMN `id_kantor` INTEGER NULL,
    ADD COLUMN `id_kawin` INTEGER NULL,
    ADD COLUMN `id_kecamatan` INTEGER NULL,
    ADD COLUMN `id_kelp_sdm` INTEGER NULL,
    ADD COLUMN `id_pekerjaan_sts` INTEGER NULL,
    ADD COLUMN `id_prodi` INTEGER NULL,
    ADD COLUMN `id_prov` INTEGER NULL,
    ADD COLUMN `id_ruangan` INTEGER NULL,
    ADD COLUMN `id_shift` INTEGER NULL,
    ADD COLUMN `idcardexpired` VARCHAR(191) NULL,
    ADD COLUMN `idcardpaid` VARCHAR(191) NULL,
    ADD COLUMN `idcardprinted` VARCHAR(191) NULL,
    ADD COLUMN `idcardtaked` VARCHAR(191) NULL,
    ADD COLUMN `isdefault` VARCHAR(191) NULL,
    ADD COLUMN `jenis_identitas` VARCHAR(191) NULL,
    ADD COLUMN `ket_spesialisasi` VARCHAR(191) NULL,
    ADD COLUMN `kode_dpjp` VARCHAR(191) NULL,
    ADD COLUMN `nama_user` VARCHAR(191) NULL,
    ADD COLUMN `nip` VARCHAR(191) NULL,
    ADD COLUMN `nip_lama` VARCHAR(191) NULL,
    ADD COLUMN `no_hp` VARCHAR(191) NULL,
    ADD COLUMN `no_identitas` VARCHAR(191) NULL,
    ADD COLUMN `no_karpeg` VARCHAR(191) NULL,
    ADD COLUMN `no_kk` VARCHAR(191) NULL,
    ADD COLUMN `no_mr` VARCHAR(191) NOT NULL,
    ADD COLUMN `no_mr_lama` VARCHAR(191) NULL,
    ADD COLUMN `no_sip` VARCHAR(191) NULL,
    ADD COLUMN `npwp` VARCHAR(191) NULL,
    ADD COLUMN `riwayat_alergi_makanan` VARCHAR(191) NULL,
    ADD COLUMN `riwayat_alergi_obat` VARCHAR(191) NULL,
    ADD COLUMN `sts_allowed_credit` VARCHAR(191) NULL,
    ADD COLUMN `sts_prioritas` VARCHAR(191) NULL,
    ADD COLUMN `sts_tarif_dikelola_dokter` VARCHAR(191) NULL,
    ADD COLUMN `sts_update` VARCHAR(191) NULL,
    ADD COLUMN `tanda_tangan` VARCHAR(191) NULL,
    ADD COLUMN `tarif_konsul` VARCHAR(191) NULL,
    ADD COLUMN `tgl_lhr` VARCHAR(191) NULL,
    ADD COLUMN `tmp_lhr` VARCHAR(191) NULL,
    ADD COLUMN `tmt_cpns` VARCHAR(191) NULL,
    ADD COLUMN `tmt_pensiun` VARCHAR(191) NULL,
    ADD COLUMN `tmt_pns` VARCHAR(191) NULL,
    ADD COLUMN `user_modified` VARCHAR(191) NULL,
    ADD COLUMN `user_registered` VARCHAR(191) NULL;
