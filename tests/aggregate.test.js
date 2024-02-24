import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able query using aggregate", async () => {
    const result = await prismaClient.product.aggregate({
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _sum: {
        price: true,
      },
      _avg: {
        price: true,
      },
    });

    expect(result._min.price).toBe(1000);
    expect(result._max.price).toBe(7000);
    expect(result._sum.price).toBe(18000);
    expect(result._avg.price).toBe(3600);
  });

  it("should can do aggregate function with group by", async () => {
    const result = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _sum: {
        price: true,
      },
      _avg: {
        price: true,
      },
    });

    console.info(result);
  });

  it("should can do aggregate function with group by and having", async () => {
    const result = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _sum: {
        price: true,
      },
      _avg: {
        price: true,
      },
      having: {
        price: {
          _avg: {
            gt: 3000,
          },
        },
      },
    });

    console.info(result);
  });
});
