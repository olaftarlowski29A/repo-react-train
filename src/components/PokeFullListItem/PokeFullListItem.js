import styled from "styled-components";
import { keyframes } from "styled-components";

const PokeFullListItem = (props) => {
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
    background: #4682b4;
    width: 170px;
    height: 200px;
    margin: 10px;
    border: 2px solid transparent;
    transition: 0.1s ease-in-out;
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

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

  const HeadlineName = styled.h3`
    font-size: 24px;
    text-transform: capitalize;
    color: #e0e0e0;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  `;

  const Image = styled.img`
    margin: 1px;
  `;

  return (
    <ItemWrapper>
      <HeadlineName>
        {props.id}. {props.name}
      </HeadlineName>
      <Image src={props.image} alt={`Pokemon ${props.name}`} />
    </ItemWrapper>
  );
};

export default PokeFullListItem;
