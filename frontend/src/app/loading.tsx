import { Spinner } from "@/components/ui/spinner";

const LoadingPage = async () => {
  return (
    <div className="flex h-full w-full items-center justify-center border">
      <Spinner className="text-primary size-30" />
    </div>
  );
};

export default LoadingPage;
