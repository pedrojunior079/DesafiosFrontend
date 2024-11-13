import styles from "./Main.css";
import Image from "next/image";
import div from "@/public/img/div.png";
import div1 from "@/public/img/div1.png";
import div2 from "@/public/img/div2.png";

function Main(){
  return(
    <div className="cards">
      <div className="card-active">
         <div className="card image">
            <Image src={div} alt="div"/>
            <h2 className="h2">O que é linguagem de programação? Conheça as principais</h2>
	          <p className="p">Uma das mais populares vertentes da tecnologia da informação, a área de 
              programação segue tendo muita demanda de trabalho justamente pela velocidade com 
              que dispositivos tecnológicos vêm avançando.</p>
         </div>
      </div>

      <div className="card1">
           <div className="card1_image1">
              <Image src={div1} alt="div1"/>
              <h2 className="h2">GitHub agora permite fazer login sem precisar de senha</h2>
              <p className="p">
                O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método 
                de autenticação sem senhas. A novidade está disponível em uma versão beta pública 
                e pode substituir a autenticação em dois fatores.
              </p>
           </div>
        </div> 
        
        <div className="card2">
         <div className="card2_image2">
          <Image src={div2} alt="div2"/>
          <h2 className="h2">Por que os hiperlinks são azuis em sua maioria?</h2>
          <p className="p">
            Quem navega na internet, certamente já percebeu que ela conta com diversos recursos 
            para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os 
            hiperlinks – uma palavra ou termo clicável que direciona o leitor.
          </p>
         </div>
       </div> 
    </div>
  );
}

export default Main;