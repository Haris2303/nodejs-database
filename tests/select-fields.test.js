import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create and select fields", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "NANANG",
        name: "Nanang",
        email: "nanang@localhost",
        phone: "08123432",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customer.id).toBe("NANANG");
    expect(customer.name).toBe("Nanang");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("should can select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        email: "asc",
      },
    });

    console.info(customers);

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
