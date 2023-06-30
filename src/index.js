"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ["query", "info", "warn", "error"],
});
function DeleteAllUsersAndAuthor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedAuthor = yield prisma.author.deleteMany({
                where: {
                    id: {
                        gt: 0, //gt maior ou igual á || gte: Maior que
                    },
                },
            });
            console.log(deletedAuthor);
            const deletedUsers = yield prisma.user.deleteMany({
                where: {
                    id: {
                        gt: 0, //gt maior ou igual á || gte: Maior que
                    },
                },
            });
            console.log(deletedUsers);
        }
        catch (e) {
            console.log(e);
        }
    });
}
function createAuthorWithUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma.user.create({
                data: {
                    email: "silvioqds@example.com",
                    name: "Silvio",
                    surname: "Queiroz",
                },
            });
            const author = yield prisma.author.create({
                data: {
                    tags: "romance, suspense",
                    userId: user.id,
                },
            });
            console.log("Author criado:", author);
        }
        catch (error) {
            console.error("Erro ao criar author:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma.user.create({
                data: {
                    email: "Teste@example.com",
                    name: "João",
                    surname: "Silva",
                },
            });
            return user.id;
        }
        catch (error) {
            console.error("Erro ao criar usuário teste:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function createPostWithComment() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
DeleteAllUsersAndAuthor().then(() => __awaiter(void 0, void 0, void 0, function* () {
    const userId = yield createUser();
    yield createAuthorWithUser();
}));
//# sourceMappingURL=index.js.map