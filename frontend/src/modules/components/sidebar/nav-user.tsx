"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { routes } from "@/config/routes";
// import { sidebarData } from "@/config/data";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Images, ImageUp, LogOut, Settings2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavUser = () => {
  // const { user } = sidebarData;
  const { isMobile, setOpenMobile } = useSidebar();
  const currentPathname = usePathname();

  const { data } = authClient.useSession();
  const user = data?.user;

  const handleMenuClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            className="w-full"
            render={
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground w-full cursor-pointer"
                tooltip="User Settings"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={""}
                    alt={user?.name}
                    className="rounded-lg"
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user?.name}</span>
                  <span className="truncate text-xs">{user?.email}</span>
                </div>
              </SidebarMenuButton>
            }
          />

          <DropdownMenuGroup>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage src={""} alt={user?.name} />
                    <AvatarFallback className="rounded-full">SJ</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user?.name}</span>
                    <span className="truncate text-xs">{user?.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className="cursor-pointer"
                  render={
                    <Link
                      href={routes.createImage}
                      onClick={handleMenuClick}
                      className={cn(
                        "flex items-center gap-2",
                        currentPathname === routes.createImage && "bg-muted",
                      )}
                    >
                      <Images />
                      <span>Create Image</span>
                    </Link>
                  }
                ></DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  render={
                    <Link
                      href={routes.projects}
                      onClick={handleMenuClick}
                      className={cn(
                        "flex items-center gap-2",
                        currentPathname === routes.projects && "bg-muted",
                      )}
                    >
                      <ImageUp />
                      <span>Projects</span>
                    </Link>
                  }
                ></DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  render={
                    <Link
                      href={routes.settings}
                      onClick={handleMenuClick}
                      className={cn(
                        "flex items-center gap-2",
                        currentPathname === routes.settings && "bg-muted",
                      )}
                    >
                      <Settings2 />
                      <span>Settings</span>
                    </Link>
                  }
                ></DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuGroup>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavUser;
