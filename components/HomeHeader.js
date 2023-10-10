import { useSession } from "next-auth/react";

export default function HomeHeader() {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between text-blue-900">
      <h2 className="mt-0">
        <div className="flex gap-2 items-center">
          <img
            src={session?.user?.image}
            alt=""
            className="w-6 h-6 rounded-md sm:hidden"
          />
          <div>Hello, {session?.user?.email}</div>
        </div>
      </h2>
      <div className=" sm:block">
        <div className="flex bg-gray-400 gap-1 rounded-lg overflow-hidden text-black">
          <img
            src={session?.user?.image}
            alt=""
            className="w-6 h-6 rounded-md"
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </div>
  );
}
