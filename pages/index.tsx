import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import userCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import BillBoard from "@/components/BillBoard";
import MoviesList from "@/components/MoviesList";
import useMoviesList from "@/hooks/useMoviesList";
import useFav from "@/hooks/useFav";
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

  const {data: movies } = useMoviesList() ; 
  const {data: favMovies } = useFav() ; 
  const { data: user } = userCurrentUser();
  return (
    <>
      <Navbar />
      <BillBoard />
      <div className="pb-40">
        <MoviesList data={movies} title="Trending now"/> 
        <MoviesList data={favMovies} title="My List"/> 
      </div>
    </>
  );
}
