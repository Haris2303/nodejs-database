import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can execute sequential transaction", async () => {
    const [otong, ucup] = await prismaClient.$transaction(
      [
        prismaClient.customer.create({
          data: {
            id: "OTONG",
            name: "Otong Surotong",
            email: "otong@localhost",
            phone: "123",
          },
        }),
        prismaClient.customer.create({
          data: {
            id: "UCUP",
            name: "Ucup Surucup",
            email: "ucup@localhost",
            phone: "321",
          },
        }),
      ],
      {
        timeout: 5,
      }
    );

    expect(otong.id).toBe("OTONG");
    expect(otong.name).toBe("Otong Surotong");
    expect(ucup.id).toBe("UCUP");
    expect(ucup.name).toBe("Ucup Surucup");
  });

  it("should can execute interactive transaction", async () => {
    const [otong, ucup] = await prismaClient.$transaction(
      async (prisma) => {
        const otong = await prisma.customer.create({
          data: {
            id: "OTONG1",
            name: "Otong Surotong",
            email: "otong1@localhost",
            phone: "123123",
          },
        });

        const ucup = await prismaClient.customer.create({
          data: {
            id: "UCUP1",
            name: "Ucup Surucup",
            email: "ucup1@localhost",
            phone: "321321",
          },
        });

        return [otong, ucup];
      },
      {
        timeout: 5,
      }
    );

    expect(otong.id).toBe("OTONG1");
    expect(otong.name).toBe("Otong Surotong");
    expect(ucup.id).toBe("UCUP1");
    expect(ucup.name).toBe("Ucup Surucup");
  });
});
