import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Polar } from "@polar-sh/sdk";
import { polar, checkout, portal, webhooks } from "@polar-sh/better-auth";
import { routes } from "@/config/routes";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// });

// const prisma = new PrismaClient({
//   adapter: adapter,
// });

const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  server: "sandbox",
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    autoSignIn: false,
  },
  plugins: [
    nextCookies(),
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "a8fd5580-e9b7-486a-8a56-48f16388ef68",
              slug: "small",
            },
            {
              productId: "ae583fc5-7c7a-4215-90fe-a16326684357",
              slug: "medium",
            },
            {
              productId: "eae9648f-1cb7-420c-96aa-83fa7c712274",
              slug: "large",
            },
          ],
          successUrl: routes.dashboard,
          authenticatedUsersOnly: true,
        }),
        portal(),
        webhooks({
          secret: process.env.POLAR_WEBHOOK_SECRET!,
          onOrderPaid: async (order) => {
            const externalCustomerId = order.data.customer.externalId;

            if (!externalCustomerId) {
              console.error("No external customer ID found.");
              throw new Error("No external customer ID found");
            }
            const productId = order.data.productId;
            console.log({ productId });
            let creditsToAdd = 0;
            switch (productId) {
              case "a8fd5580-e9b7-486a-8a56-48f16388ef68":
                creditsToAdd = 50;
                break;
              case "ae583fc5-7c7a-4215-90fe-a16326684357":
                creditsToAdd = 200;
                break;
              case "eae9648f-1cb7-420c-96aa-83fa7c712274":
                creditsToAdd = 400;
                break;
            }
            await prisma.user.update({
              where: { id: externalCustomerId },
              data: {
                credits: { increment: creditsToAdd },
              },
            });
            revalidatePath(routes.dashboard);
          },
        }),
      ],
    }),
  ],
});
