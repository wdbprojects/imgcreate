"use client";

import { usePathname } from "next/navigation";
import { routes } from "@/config/routes";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbComp = () => {
  const path = usePathname();

  const getPageTitle = (path: string) => {
    switch (path) {
      case routes.dashboard:
        return "Dashboard";
      case routes.createImage:
        return "Create Image";
      case routes.projects:
        return "Projects";
      case routes.settings:
        return "Settings";
      default:
        break;
    }
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={routes.home}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={routes.dashboard}>Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{getPageTitle(path)}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComp;
