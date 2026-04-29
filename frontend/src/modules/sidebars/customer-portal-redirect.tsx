"use client";

import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";

const CustomerPortalRedirect = () => {
  useEffect(() => {
    const portal = async () => {
      await authClient.customer.portal();
    };
    void portal();
  }, []);
  return (
    <div className="flex min-h-100 items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Spinner className="text-primary size-30" />
        <p className="text-muted-foreground text-sm">
          Loading your customer portal...
        </p>
      </div>
    </div>
  );
};

export default CustomerPortalRedirect;
