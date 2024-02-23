import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "OTONG",
        name: "Otong Surotong",
        phone: "08233333333",
        email: "otong@localhost",
      },
    });

    expect(customer.id).toBe("OTONG");
    expect(customer.name).toBe("Otong Surotong");
    expect(customer.phone).toBe("08233333333");
    expect(customer.email).toBe("otong@localhost");
  });
});

describe("Prisma Client", () => {
  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Otong Surotong Strong",
      },
      where: {
        id: "OTONG",
      },
    });

    expect(customer.id).toBe("OTONG");
    expect(customer.name).toBe("Otong Surotong Strong");
    expect(customer.phone).toBe("08233333333");
    expect(customer.email).toBe("otong@localhost");
  });
});

describe("Prisma Client", () => {
  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "OTONG",
      },
    });

    expect(customer.id).toBe("OTONG");
    expect(customer.name).toBe("Otong Surotong Strong");
    expect(customer.phone).toBe("08233333333");
    expect(customer.email).toBe("otong@localhost");
  });
});

describe("Prisma Client", () => {
  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "OTONG",
      },
    });

    expect(customer.id).toBe("OTONG");
    expect(customer.name).toBe("Otong Surotong Strong");
    expect(customer.phone).toBe("08233333333");
    expect(customer.email).toBe("otong@localhost");
  });
});
