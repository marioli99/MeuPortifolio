import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 4rem 0 4rem;
`;

export const TitleAbout = styled.h1`
  background-color: bisque;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const TextAbout = styled.p`
  margin-bottom: 1rem;
`;
export const ListAbout = styled.ul`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const LiAbout = styled.li`
  width: 30vw;
  height: 20vh;
  border: solid 1px black;
  background-color: plum;
  margin: 20px 10px 20px 10px;
`;
