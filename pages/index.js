import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();


  return <Layout>
    <div className="flex justify-between text-blue-900">
      <div>
        <h2>Hello, {session?.user?.email}</h2>
      </div>
      <div className="flex bg-gray-400 gap-1 rounded-lg overflow-hidden text-black">
        <img src={session?.user?.image} alt="" className="w-6 h-6" />
        <span className="px-2">{session?.user?.name}</span>
      </div>
    </div>
  </Layout>;
}
