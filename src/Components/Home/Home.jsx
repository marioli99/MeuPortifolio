import React from "react";
import  * as S from "./HomeStyle"
import Typical from "react-typical";

function Home (){
    return(
        <S.ContainerHome>
        
        <S.TextHome>
        <h1>
        <Typical
        steps={[' ', 3000,'Bem vindo !', 3000 , 'Bem vindo ! 👀', 1000,  ]}
        loop={Infinity}
      /> </h1>
        <p>Seja bem vindo, me chamo Mariana Oliveira e este é meu portifólio : D </p>
        <p>

        </p>
        </S.TextHome>

      <S.image></S.image>
        
        </S.ContainerHome>
    )
}
export default Home