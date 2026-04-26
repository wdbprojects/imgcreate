"use client";

import { usePathname } from "next/navigation";
import { routes } from "@/config/routes";
import SidebarTriggerCustom from "@/modules/components/misc/sidebar-trigger-custom";
import Link from "next/link";

const AppLogo = () => {
  const pathname = usePathname();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <div className="gap-2p-1 flex min-w-60 flex-0 shrink-0 items-center">
      {isDashboard && <SidebarTriggerCustom />}
      <Link href={routes.home} className="flex flex-row items-center gap-0">
        <h6 className="text-primary text-xl font-bold tracking-tight">Image</h6>
        <h6 className="text-foreground text-xl font-bold tracking-tight">
          Create
        </h6>
      </Link>
    </div>
  );
};

export default AppLogo;
