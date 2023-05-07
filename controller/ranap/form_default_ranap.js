import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//   get data
export const form_default_ranap = async (req, res) => {
  try {
    const response = await prisma.form_default_ranap.findMany({
      select: {
        id: true,
        nama_form: true,
      },
      orderBy: {
        nama_form: "asc",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const form_default_post_ranap = async (req, res) => {
  const { nama_form } = req.body;
  try {
    const rm_Data = await prisma.form_default_ranap.create({
      data: {
        nama_form: nama_form,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const delete_form_default_ranap = async (req, res) => {
  try {
    const data = await prisma.form_default_ranap.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
