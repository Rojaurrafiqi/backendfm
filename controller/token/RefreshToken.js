import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

// export const refreshToken = async (req, res) => {
//   try {
//     const refreshToken = req.cookies.refreshToken;
//     if (!refreshToken) return res.sendStatus(401);
//     const user = await prisma.users.findMany({
//       where: {
//         refresh_token: refreshToken,
//       },
//     });
//     if (!user[0]) return res.sendStatus(403);
//     jwt.verify(
//       refreshToken,
//       process.env.REFRESH_TOKEN_SECRET,
//       (err, decoded) => {
//         if (err) return res.sendStatus(403);
//         const userId = user[0].id;
//         const nameUser = user[0].name;
//         const emailUser = user[0].email;
//         const accessToken = jwt.sign(
//           { userId, nameUser, emailUser },
//           process.env.ACCESS_TOKEN_SECRET,
//           {
//             expiresIn: "15s",
//           }
//         );
//         res.json({ accessToken });
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token not found" });
    }

    // Verifikasi refresh token
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: "Invalid refresh token" });
        }

        const userId = decoded.userId;
        const user = await prisma.users.findUnique({ where: { id: userId } });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        // Generate akses token baru
        const accessToken = jwt.sign(
          {
            userId: user.id,
            nameUser: user.name,
            emailUser: user.email,
            jabatan: user.jabatan,
            id_rm: user.id_rm,
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "15s" }
        );

        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.error("Error refreshing token:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
