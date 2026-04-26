import { getUserCreditsAction } from "@/_actions/credit-actions";
import { Separator } from "@/components/ui/separator";
import {
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarRail,
} from "@/components/ui/sidebar";
import NavMain from "@/modules/components/sidebar/nav-main";
import NavUser from "@/modules/components/sidebar/nav-user";
import UserCredits from "@/modules/components/sidebar/user-credits";

const DashboardSidebarContent = async () => {
  const result = await getUserCreditsAction();
  const credits = result?.success ? result.credits : 0;

  return (
    <SidebarInset className="rounded-md">
      {/* <SidebarHeader>Sidebar Header</SidebarHeader> */}
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <UserCredits credits={credits} />
        <Separator />
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </SidebarInset>
  );
};

export default DashboardSidebarContent;
