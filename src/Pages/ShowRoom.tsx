import React, {useEffect, useState} from 'react';
import {SectionBlock} from "src/styles";
import styled from "styled-components";
import {propsList} from "src/styles/consts.ts";
import {BottonRowDown} from "src/components";
import {DatabaseImages} from 'src/data/database.ts'

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

const GalleryBlockMain = styled.section`
  display: flex;
  width: ${propsList['width1410']};
  margin: 0 auto;
`
const GalleryBlockContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  div {
    width: 450px;
    height: 300px;
    margin-bottom: 32px;
    &:hover{
      cursor: pointer;
      & > div{
        opacity: 1;
      }
    }
    img {
      border-radius: 0 64px 0 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    div {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 0 64px 0 0;
      align-items: center;
      display: flex;
      opacity: 0;
      h1 {
        width: 100%;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
`
const IntoModalGallery = styled.div`
  display: flex;
  justify-content: flex-end;
  div{
    padding: 12px;
    border-radius: 25px;
    background-color: ${propsList["orangeLight"]};
    cursor: pointer;
  }
`
const BaseBlockContent = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  div:nth-child(1){
    height: 100%;
    width: 50%;
  }
  div:nth-child(2){
    
    height: 100%;
    width: 50%;
  }
`
const ShowRoom_bones: React.FC = () => {
    const [DisplayOfModal, SetDisplayOfModal] = useState('none')
    const [OffsetOfModal, SetOffsetOfModal] = useState(0)
    const ModalGallery = styled.div`
      position: fixed;
      display: ${DisplayOfModal};
      justify-content: space-between;
      flex-direction: column;
      width: 84vw;
      min-height: 80vh;
      background-color: ${propsList['backgroundModal']};
      z-index: 999;
      top: calc(50% - 40vh);
      left: calc(50% - 42vw);
      padding: 16px;
      border-radius: 32px;
      opacity: ${OffsetOfModal};
    `

    const [DataBaseContainer, SetDataBaseContainer] = useState(DatabaseImages)

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
            {/*Gallery*/}
            <GalleryBlockMain>
                <GalleryBlockContent>
                {

                }
                </GalleryBlockContent>
            </GalleryBlockMain>
            <ModalGallery>
                {/*верхняя строка*/}
                <IntoModalGallery>
                    <div onClick={() => {SetDisplayOfModal('none'),
                        SetOffsetOfModal(0)}}>
                        X
                    </div>
                </IntoModalGallery>
                {/*контент*/}
                <BaseBlockContent>
                    {/*изображения*/}
                    <div>

                    </div>
                </BaseBlockContent>
                {/*Нижняя строка*/}
                <IntoModalGallery>

                </IntoModalGallery>
            </ModalGallery>
        </main>
    );
};

export default ShowRoom_bones;