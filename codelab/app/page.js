import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./page/Navbar";
import Main from "./page/Main";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
    </>
    
  );
}
