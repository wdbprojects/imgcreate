import { auth } from "@/lib/auth";
import { requireAuth } from "@/lib/auth-utils";
import UserSettingsForm from "@/modules/components/dashboard/user-settings-form";
import { headers } from "next/headers";

const SettingsPage = async () => {
  await requireAuth();
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div className="mt-0">
      <h1 className="text-primary text-start text-2xl font-semibold">
        Account Settings
      </h1>
      <p className="text-sm tracking-normal">
        Manage your account preferences and security
      </p>
      {/* <UserSettingsForm session={session ?? {}} /> */}
      <UserSettingsForm
        userId={session?.user?.id ?? ""}
        email={session?.user?.email ?? ""}
        name={session?.user?.name ?? ""}
      />
    </div>
  );
};

export default SettingsPage;
