import styled from "styled-components";
import {propsList} from "src/styles/consts.ts";
import React from "react";
interface CardOfPrice {
    UrlAddressImage: string,
    PositionPhoto: string,
    Title: string,
}
const CardOfPrice_bones: React.FC<CardOfPrice> = ({UrlAddressImage, PositionPhoto, Title}) => {
    const ImageCard = styled.div`
      height: 192px;
      width: 100%;
      background-image: url(${UrlAddressImage});
      background-size: cover;
      background-position: ${PositionPhoto};
    `
    const CardOfPrice = styled.div`
      width: 350px;
      background-color: rgb(42, 43, 49);
      border: 4px solid ${propsList.pinkLight};
      &:hover{
        transform: translateX(64px) translateY(-32px);
      }
      ul {
        margin-left: 32px;
      }
      h1 {
        padding: 16px;
        font-size: 32px;
      }
      h2 {
        font-size: 20px;
        padding-bottom: 8px;
      }
      div:nth-child(3) {
        margin-left: 16px;
        padding-bottom: 24px;
        div{
          padding-bottom: 8px;
        }
      }
    `
    return (
        <CardOfPrice>
            <ImageCard/>
            <h1>{Title}</h1>
            <div>
                <div>
                    <h2>Включают в себя:</h2>
                    <div dangerouslySetInnerHTML={{__html: propsList.FirstCard.first}}/>
                </div>
                <div>
                    <h2>Дополнительные Услуги:</h2>
                    <div dangerouslySetInnerHTML={{__html: propsList.FirstCard.second}}/>
                </div>
            </div>
        </CardOfPrice>
    );
};

export default CardOfPrice_bones;