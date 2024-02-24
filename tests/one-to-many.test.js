import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can insert and include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "BUDI",
        title: "Insert Comment",
        description: "Description Comment",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("should can insert and many relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "ALEX",
        name: "Alex",
        email: "alex@localhost",
        phone: "0812341324",
        comments: {
          createMany: {
            data: [
              {
                title: "Comment 1",
                description: "Description 1",
              },
              {
                title: "Comment 2",
                description: "Description 2",
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customer);
  });

  it("should can find many with filter relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "Comment",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(JSON.stringify(customers));
  });
});
