"use client";

import { addUserCredit, getUserAction } from "@/_actions/test-actions";
import { Button, buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { authClient, useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Crown, Sparkles } from "lucide-react";

const UpgradeButton = () => {
  // const session = useSession();

  const upgrade = async () => {
    await authClient.checkout({
      products: [
        "a8fd5580-e9b7-486a-8a56-48f16388ef68",
        "ae583fc5-7c7a-4215-90fe-a16326684357",
        "eae9648f-1cb7-420c-96aa-83fa7c712274",
      ],
    });
  };

  /*   const upgradeNew = async () => {
    await prisma.user.update({
      where: { id: userId },
      data: {
        credits: { increment: 25 },
      },
    });
  }; */

  /* const getCredits = async () => {
    if (userId) {
      await addUserCredit(userId);
      const { data } = await getUserAction(userId);
      alert(`User credits now: ${data?.credits}`);
    }
  }; */

  return (
    <div
      onClick={upgrade}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "group relative mb-1 ml-0 overflow-hidden border-orange-400/50 bg-linear-to-r from-orange-400/10 to-pink-500/10 px-6 text-orange-400 transition-all duration-300 hover:border-orange-500/70 hover:bg-linear-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-orange-500/25",
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <Crown className="size-4 transition-transform duration-300 group-hover:rotate-12" />
        <span className="font-medium">Upgrade</span>
      </div>
    </div>
  );
};

export default UpgradeButton;
