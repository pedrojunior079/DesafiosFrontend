import next from "next";
import Image from "next/image";
import logo from "@/public/img/CodeLab.png";
import styles from "./Navbar.css";

function Navbar(){
  return(
    <nav className="div">
       <div>
       <Image src={logo} alt="CodeLab"/>
       </div>
       <div>
       <input id="input-search" type="text" placeholder="Pesquisar no Blog"/>
       </div>
    </nav>
  )
}

export default Navbar;
