import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "BUDI",
          name: "Budi Siregar",
          email: "budi@localhost",
          phone: "0823432",
        },
        {
          id: "ASEP",
          name: "Asep Villain",
          email: "asep@localhost",
          phone: "0825343",
        },
      ],
    });

    expect(count).toBe(2);
  });

  it("should can update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "budi123@localhost",
      },
      where: {
        name: "Budi Siregar",
      },
    });

    expect(count).toBe(1);
  });

  it("should can delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Otong Surotong",
      },
    });

    expect(count).toBe(2);
  });

  it("should can read many records", async () => {
    const customers = await prismaClient.customer.findMany({});

    for (const customer of customers) {
      console.info(
        `id: ${customer.id}, name: ${customer.name}, email: ${customer.email}`
      );
    }

    expect(customers.length).toBe(4);
  });
});
