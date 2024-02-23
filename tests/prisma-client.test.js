import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("Should be able to connect to database", async () => {
    await prismaClient.$connect();

    // do something

    // await prismaClient.$disconnect();
  });
});
