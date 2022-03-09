import styled from "styled-components";
import { keyframes } from "styled-components";

const moveImage = keyframes`
  from {
    transform: translateX(0px);
  }
  10% {
   transform: translateX(5px);
 }
 40% {
   transform: translateX(-5px);
 }
 60% {
   transform: translateX(5px);
 }
 90% {
   transform: translateX(-5px);
 }
 to {
   transform: translateX(0px);
 }
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  width: 150px;
  margin: 10px;
  border: 2px solid #f2f2f2;
  transition: 0.1s ease-in-out;
  border-radius: 5px;

  &:hover {
    border: 2px solid #79b9e1;
  }
  &:hover img {
    animation: ${moveImage} 1s;
  }

  @media (max-width: 768px) {
    width: 130px;
  }
`;
const FigureItem = styled.figure`
  background: #f2f2f2;
  border-radius: 5px;
  width: 100%;
  margin: 0;

  img {
    width: 100%;
    height: auto;
  }
`;
const TextboxInfo = styled.div`
  padding-left: 12px;
  p {
    font-family: "Montserrat", sans-serif;
    margin: 0.5em 0;
    font-size: 18px;
    color: #919191;
    padding-top: 2px;
  }
  h3 {
    font-family: "Smooch Sans", sans-serif;
    margin: 0.5em 0;
    color: #313131;
    font-size: 22px;
    text-transform: capitalize;
    /* @media (max-width: 768px) {
    font-size: 18px;
  } */
  }
`;

const PokeFullListItem = (props) => {
  return (
    <ItemWrapper>
      <FigureItem>
        <img src={props.image} alt={`Pokemon ${props.name} picture`} />
      </FigureItem>
      <TextboxInfo>
        <p>#{props.id}</p>
        <h3>{props.name}</h3>
      </TextboxInfo>
    </ItemWrapper>
  );
};

export default PokeFullListItem;
