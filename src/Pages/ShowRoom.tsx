import React from 'react';
import {SectionBlock} from "src/styles";
import styled from "styled-components";
import {propsList} from "src/styles/consts.ts";
import {BottonRowDown} from "src/components";

const BlockLeft = styled.div`
  width: 50%;
  padding-top: 7vh;
  padding-bottom: 7vh;
  background-color: ${propsList['DarkGreen']};
  text-align: center;
  overflow: hidden;
  h1{
    padding: 15px;
    font-size: 64px;
  }
  div{
    margin: 25px auto;
  }
`
const ImageBlockGallery = styled.div`
  width: 328px;
  height: 484px;
  background-image: url(${(props) => props.content});
  background-size: cover;
  border-radius: 150px 150px 0 0;
  position: relative;
  &:nth-child(2){
    left: 4vw;
  }
  &::after {
    content: '';
    position: relative;
    border: 1px solid white;
    display: block;
    border-radius: 150px 150px 0 0;
    height: 100%;
    top: -105%;
    left: 5%;
  }
`
const ImagesRow = styled.div`
  display: flex;
`
// BLOCK RIGHT
const BlockRight = styled.div`
    width: 50%;
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: center;
  h1{
    font-size: 64px;
  }
  h2{
    font-size: 32px;
  }
  p{
    font-size: 24px;
  }
`
const BlockRowBottonMain = styled.div`
    
`
const ShowRoom_bones: React.FC = () => {
    return (
        <main>
            <SectionBlock>
                <BlockLeft>
                    <h1>FIND YOUR DESIGN</h1>
                    <ImagesRow>
                        <ImageBlockGallery content={'/images/moscow-resident/2-moscow-resident.webp'}/>
                        <ImageBlockGallery content={'/images/krylaty/1-krylaty.webp'}/>
                    </ImagesRow>
                    <BlockRowBottonMain>
                        <BottonRowDown/>
                    </BlockRowBottonMain>
                </BlockLeft>
                <BlockRight>
                    <h1>ГАЛЕРЕЯ</h1>
                    <h2>ПРОЕКТОВ</h2>
                    <br/>
                    <p>Вам представлены лучшие проекты,
                        вы можете ознакомиться с ними</p>
                    <br/>
                    <p>
                        При клике откроется модальное окно,
                        с полной информацией об объекте и все изображения
                    </p>
                </BlockRight>
            </SectionBlock>
        </main>
    );
};

export default ShowRoom_bones;