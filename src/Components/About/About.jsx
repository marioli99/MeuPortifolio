import React from "react";
import * as S from "../About/About"

function About (){
    return(
        <S.Container>
        <S.TitleAbout>Quem sou eu?</S.TitleAbout>
        <S.TextAbout>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa non error voluptatem, et nemo laboriosam commodi quo ea unde temporibus, doloremque eligendi, modi incidunt laudantium repudiandae ratione voluptates similique!</S.TextAbout>
        <S.TextAbout>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur delectus natus sunt facere perferendis quos in neque officiis dignissimos mollitia culpa minima odio eveniet deserunt, iure repudiandae voluptatibus asperiores nulla?</S.TextAbout>
        <h2>Minhas habilidades</h2>
        <S.ListAbout>
            <li>lorem</li>
            <li>lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
        </S.ListAbout>
        </S.Container>
    )
}
export default About