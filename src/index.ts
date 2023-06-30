import { Prisma, PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function DeleteAllUsersAndAuthor() {
  try {
    const deletedAuthor = await prisma.author.deleteMany({
      where: {
        id: {
          gt: 0, //gt maior ou igual á || gte: Maior que
        },
      },
    });

    console.log(deletedAuthor);

    const deletedUsers = await prisma.user.deleteMany({
      where: {
        id: {
          gt: 0, //gt maior ou igual á || gte: Maior que
        },
      },
    });

    console.log(deletedUsers);
  } catch (e) {
    console.log(e);
  }
}

async function createAuthorWithUser() {
  try {
    const user = await prisma.user.create({
      data: {
        email: "silvioqds@example.com",
        name: "Silvio",
        surname: "Queiroz",
      },
    });

    const author = await prisma.author.create({
      data: {
        tags: "romance, suspense",
        userId: user.id,
      },
    });

    console.log("Author criado:", author);
  } catch (error) {
    console.error("Erro ao criar author:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function createUser() {
  try {
    const user = await prisma.user.create({
      data: {
        email: "Teste@example.com",
        name: "João",
        surname: "Silva",
      },
    });

   return user.id;
  } catch (error) {
    console.error("Erro ao criar usuário teste:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function createPostWithComment() {
  
}

DeleteAllUsersAndAuthor().then(async () => {
  const userId = await createUser();
  await createAuthorWithUser();
});

