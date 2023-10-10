import HomeHeader from "@/components/HomeHeader";
import HomeStats from "@/components/HomeStats";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {



  return (
<Layout>
      <HomeHeader />
      <HomeStats />
    </Layout>
  ) 
}
