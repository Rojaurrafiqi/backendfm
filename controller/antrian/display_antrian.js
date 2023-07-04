import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDisplayAntrianNomor = async (req, res) => {
  const { huruf } = req.query;
  try {
    const getData = await prisma.antrian.findFirst({
      where: {
        huruf: huruf,
        loket: {
          not: null,
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    if (getData) {
      const data = {
        huruf: getData.huruf,
        nomor: getData.nomor.toString().padStart(4, "0"),
        loket: getData.loket,
      };
      res.status(200).json({ data });
    } else {
      const data = {
        huruf: huruf,
        nomor: "0000",
        loket: "00",
      };
      res.status(200).json({ data });
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getDisplayAntrianSelesai = async (req, res) => {
  try {
    const data = await prisma.antrian.findMany({
      where: {
        loket: {
          not: null,
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
