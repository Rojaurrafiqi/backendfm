import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//pengambilan nomor dari kios ambil nomor antrian
export const addNomorAntrianDariKios = async (req, res) => {
  try {
    const { huruf } = req.body;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const tanggal = `${day}-${month}-${year}`;
    const waktu = currentDate.toISOString().split("T")[1].split(".")[0]; // Extract time in HH:MM:SS format

    const cekNomor = await prisma.antrian.findFirst({
      where: {
        huruf: huruf,
      },
      orderBy: {
        id: "desc",
      },
    });

    let nomor;

    if (cekNomor) {
      const lastNomor = parseInt(cekNomor.nomor);
      const nextNomor = lastNomor + 1;
      nomor = nextNomor.toString().padStart(1, "0");
    } else {
      nomor = "1";
    }

    const newData = await prisma.antrian.create({
      data: {
        tanggal: tanggal,
        waktu: waktu,
        nomor: nomor,
        huruf: huruf,
      },
    });

    res.status(200).json(newData);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

// mendapatkan no antrian sesuai loket
// get data
export const getAllJumlahAntrian = async (req, res) => {
  try {
    const totalAntrian = await prisma.antrian.count();

    res.status(200).json({ totalAntrian });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const getJumlahAntrianUmum = async (req, res) => {
  try {
    const totalAntrian = await prisma.antrian.count({
      where: {
        huruf: "A",
      },
    });

    res.status(200).json({ totalAntrian });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const getJumlahAntrianBpjs = async (req, res) => {
  try {
    const totalAntrian = await prisma.antrian.count({
      where: {
        huruf: "B",
      },
    });

    res.status(200).json({ totalAntrian });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getJumlahAntrianAsuransi = async (req, res) => {
  try {
    const totalAntrian = await prisma.antrian.count({
      where: {
        huruf: "C",
      },
    });

    res.status(200).json({ totalAntrian });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// mendapatkan nilai antrian sekarang, antrian selanjutnya
export const filterAntrian = async (req, res) => {
  const { huruf, loket } = req.query;
  try {
    const getAntrian = await prisma.antrian.findFirst({
      where: {
        huruf: huruf,
        loket: parseInt(loket),
      },
      orderBy: {
        id: "desc",
      },
      select: {
        huruf: true,
        nomor: true,
      },
    });

    if (getAntrian) {
      const nomor = parseInt(getAntrian.nomor) + 1;
      const nextAntrian = nomor.toString().padStart(4, "0");

      const data = {
        noAntrian: getAntrian.nomor,
        hurufAntrian: getAntrian.huruf,
      };
      res.status(200).json({ data });
    } else {
      const response = await prisma.antrian.findFirst({
        where: {
          huruf: huruf,
          loket: null,
        },
        orderBy: {
          id: "asc",
        },
      });

      const data = {
        noAntrian: response.nomor,
        hurufAntrian: response.huruf,
      };

      res.status(200).json({ data });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// mendapatkan id antrian yang belum ditangani
export const getIdAntrianFree = async (req, res) => {
  const { huruf } = req.query;
  try {
    const data = await prisma.antrian.findFirst({
      where: {
        huruf: huruf,
        loket: null,
      },
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
      },
    });

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// tangani antrian di admin
export const tanganiAntrian = async (req, res) => {
  const { loket } = req.body;
  try {
    const update = await prisma.antrian.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        loket: loket,
      },
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
