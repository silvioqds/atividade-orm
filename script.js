"use strict";
// import { Prisma, PrismaClient, User } from "@prisma/client";
// const prisma = new PrismaClient({
//   log: ["query", "info", "warn", "error"],
// });
// async function main() {
//   let posts = await prisma.post.findMany();
//   console.log(posts);
//   try {
//     const deletedUsers = await prisma.post.deleteMany({
//       where: {
//         id: {
//           gt: 0, //gt maior ou igual á || gte: Maior que
//         },
//       },
//     });
//     console.log(deletedUsers);
//   } catch (e) {
//     console.log(e);
//   }
//   let users = await prisma.user.findMany();
//   console.log(users);
//   try {
//     const deletedUsers = await prisma.user.deleteMany({
//       where: {
//         id: {
//           gt: 0, //gt maior ou igual á || gte: Maior que
//         },
//       },
//     });
//     console.log(deletedUsers);
//   } catch (e) {
//     console.log(e);
//   }
//   const newUser = await prisma.user.create({
//     data: {
//       email: "silvioqueiroz@gmail.com",
//       name: "Silvio",
//     },
//   });
//   //PEGANDO USUARIOS DEPOIS DE INSERIR
//   users = await prisma.user.findMany();
//   console.log(users);
//   const UserWithPost = await prisma.user.create({
//     data: {
//       email: "larissa.smpl@gmail.com",
//       name: "Larissa",
//       posts: {
//         create: {
//           title: "Larissa Ketlyn Title",
//           text: "Larissa Ketlyn Text!!",
//         },
//       },
//     },
//   });
//   console.log(
//     "----------------------- QUERIES ---------------------------------"
//   );
//   console.log("LEFT JOIN");
//   const userAndPostLeftJoin = await prisma.user.findMany({
//     include: {
//     //  posts: true,
//     },
//   });
//   console.log(userAndPostLeftJoin);
//   console.log("INNER JOIN");
//   const userAndPostInnerJoin = await prisma.user.findMany({
//     include: {
//       posts: true,
//     },
//     where: {
//       posts: {
//         some: {
//           NOT: {
//             id: 0,
//           },
//         },
//       },
//     },
//   });
//   class PostRepository {
//     public async findByTitleAndText(title: string, text: string) {
//       return await prisma.post.findMany({
//         where: {
//           title: title,
//           text: { contains: text },
//         },
//       });
//     }
//   }
//   const posts2 = await new PostRepository().findByTitleAndText('Larissa Ketlyn Title', '!')
//   console.log(posts2)
//   console.log('QUERY NATIVA')
//   const usersnative = await prisma.$queryRaw<User[]>(Prisma.sql`select * from user`)
//   console.log(usersnative)
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.log(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
//# sourceMappingURL=script.js.map