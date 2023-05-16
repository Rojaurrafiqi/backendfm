import { PrismaClient } from "@prisma/client";
import { query, response } from "express";
const prisma = new PrismaClient();

export const getTipeKamar = async (req, res) => {
  try {
    const response = await prisma.tipe_kamar_ranap.findMany({
      select: {
        id: true,
        tipe: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const deleteTipeKamar = async (req, res) => {
  try {
    const data = await prisma.tipe_kamar_ranap.delete({
      where: parseInt(req.params.id),
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const postTipeKamar = async (req, res) => {
  const { tipe } = req.body;
  try {
    const createdData = await prisma.tipe_kamar_ranap.create({
      data: {
        tipe: tipe,
      },
    });
    res.status(201).json(createdData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
