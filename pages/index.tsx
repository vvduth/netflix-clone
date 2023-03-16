import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import userCurrentUser from "@/hooks/useCurrentUser";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = userCurrentUser();
  return (
    <>
      <h1 className="text-white text-3xl font-bold underline">
        Nextflix clone
      </h1>
      <p className="text-white">Logged in as {user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Log out
      </button>
    </>
  );
}
