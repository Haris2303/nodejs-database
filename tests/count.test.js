import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can show count", async () => {
    const total = await prismaClient.customer.count({
      where: {
        name: "Budi Siregar",
      },
    });

    expect(total).toBe(1);
  });
});
