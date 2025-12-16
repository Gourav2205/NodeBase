import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";


const Page = async () => {
  await requireAuth()

  const data = await caller.getUsers()

  return (
    <div className="min-h-screen flex min-w-screen justify-center items-center flex-col gap-y-6">
      Protected page
      <div>
        {JSON.stringify(data)}
      </div>
      <LogoutButton/>
    </div>
  );
}

export default Page;
