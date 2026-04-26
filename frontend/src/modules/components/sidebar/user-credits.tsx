import { Coins } from "lucide-react";
import UpgradeButton from "@/modules/components/sidebar/upgrade-button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const UserCredits = ({ credits }: { credits: number }) => {
  return (
    <SidebarGroup className="bg-muted rounded-md border border-pink-200 p-0 dark:border-pink-950">
      <SidebarGroupLabel>Credits and Tokens</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="block w-full">
          <SidebarMenuItem className="z-100">
            <SidebarMenuButton
              className="relative flex justify-between bg-transparent hover:bg-transparent focus:bg-transparent focus-visible:ring-0 active:bg-transparent data-[active=false]:bg-transparent"
              variant="outline"
              tooltip={`User Credits: ${credits}. Expand the sidebar to upgrade.`}
            >
              <Coins className="size-4 text-yellow-500 transition-colors duration-200 group-hover:text-yellow-400" />
              <div className="mb-2 flex flex-col">
                <span className="text-foreground text-center text-sm font-bold">
                  {credits}
                </span>
                <span className="text-muted-foreground text-xs leading-tight">
                  Credits
                </span>
              </div>
              <UpgradeButton />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default UserCredits;
