"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarData } from "@/config/data";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const NavMain = () => {
  const currentPathname = usePathname();
  const { setOpenMobile, isMobile } = useSidebar();

  const handleMenuClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarMenu>
      {sidebarData.navMain.map((item) => {
        return (
          <SidebarGroup key={item.id}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((link) => {
                  return (
                    <SidebarMenuItem key={link.id} className="z-100">
                      <SidebarMenuButton
                        className="flex w-full"
                        variant="default"
                        isActive={link.url === currentPathname}
                        tooltip={link.title}
                      >
                        <Link
                          href={link.url}
                          className="flex h-8 w-full items-center justify-start"
                          onClick={handleMenuClick}
                        >
                          <div className="flex items-center justify-start gap-2">
                            {link.icon && <link.icon />}
                            {link.title}
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        );
      })}
    </SidebarMenu>
  );
};

export default NavMain;
