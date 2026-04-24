import LoginPage from "@/modules/presentation/auth/login-page";
import { requireUnauth } from "@/lib/auth-utils";

const LoginPageMain = async () => {
  await requireUnauth("home");
  return <LoginPage />;
};

export default LoginPageMain;
