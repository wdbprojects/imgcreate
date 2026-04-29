import { auth } from "@/lib/auth";
import { requireAuth } from "@/lib/auth-utils";
import CustomerPortalRedirect from "@/modules/sidebars/customer-portal-redirect";
import { headers } from "next/headers";

const CustomerPortalPage = async () => {
  await requireAuth();
  const session = await auth.api.getSession({ headers: await headers() });

  return <CustomerPortalRedirect />;
};

export default CustomerPortalPage;
