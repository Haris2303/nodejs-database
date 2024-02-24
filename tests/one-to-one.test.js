import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "BUDI",
        customer_id: "BUDI",
        balance: 2000000,
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);
  });

  it("should be able to create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "YANTO",
        name: "Yanto Santoso",
        email: "yanto@localhost",
        phone: "0823412334",
        wallet: {
          create: {
            id: "YANTO",
            balance: 300000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should be able to find with relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "BUDI",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should be able to find many one to one with relation filter", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });
});
