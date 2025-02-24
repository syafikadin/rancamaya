import Image from "next/image";
import styles from "./styles.css";
import About from "./_components/About";
import Rooms from "./_components/Rooms";
import HeroSection from "./_components/HeroSection";

export default async function Home() {
  async function bookingSearchAction(formatedRange) {
    "use server";
    redirect(`/rooms?range=${formatedRange}`);
  }
  return (
    <>
      <HeroSection bookingSearchAction={bookingSearchAction} />
      <About />
      <Rooms />
    </>
  );
}
