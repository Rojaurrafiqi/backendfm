import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//   get data
export const form_default = async (req, res) => {
  try {
    const response = await prisma.form_default_igd.findMany({
      select: {
        nama_form: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const form_default_post = async (req, res) => {
  const { nama_form } = req.body;
  try {
    const rm_Data = await prisma.form_default_igd.create({
      data: {
        nama_form: nama_form,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
