import React from 'react';
import {Div50, SectionBlock} from "src/styles";
import styled from "styled-components";
import {propsList} from "src/styles/consts.ts";
import {BottonRowDown, MobileQuery, TextBackground} from "src/components";

const BlockLeftHomeMain = styled.div`
  //background-color: rgba(255, 79, 79, 0.35);
  //border-radius: 0 35% 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div:nth-child(1){
    img{
      width: 350px;
      border-radius: 50px;
    }
  }
  div:nth-child(2){
    h1:nth-child(1){
      font-size: 36px;
    }
    h1:nth-child(2){
      font-size: 24px;
    }
  }
  ${MobileQuery(`
    margin: 0;
    background-color: rgba(229, 0, 0, 0.4);
    div:nth-child(1) {
      height: 300px;
      overflow: hidden;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        border-radius: 0;
      }
    }

    div:nth-child(2) {
      padding: 8px;
      h1:nth-child(1) {
        font-size: 24px;
      }
      h1:nth-child(2) {
        font-size: 16px;
      }
    }
  `)}
`
const H1textName = styled.h1`
  font-weight: normal;
  text-align: right;
  border-bottom: 1px solid ${(props) => props.color};
  font-style: ${(props) => props.typeof};
`

const BlockImageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/miami/1-miami.webp");
  background-size: cover;
  background-position: center;
  font-size: 20px;
  ${MobileQuery(`
    margin: 0;
    font-size: 16px;
  `)}
`
const BlackBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 10% auto 10%;
`
const BlockCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// OLD VARIANT

// const BackWave = styled.section`
//   width: 100%;
//   height: 377px;
//   background-image: url("/WaveBackground.svg");
//   background-size: cover;
// `
// const BlockWaveText = styled.div`
//     margin: 0 auto;
//     display: flex;
//     justify-content: space-between;
//   div{
//     width: 50%;
//     padding-top: 25px;
//     font-size: 32px;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     justify-content: space-around;
//   }
// `
// const BlockInfoExperience = styled.p`
//   background-color: ${propsList['pinkLight']};
//   padding: 8px;
//   border-radius: 25px;
//   text-align: center;
// `

// RENDER:

const HomePage_bones: React.FC = () => {
    return (
        <main>
            <TextBackground>
                <h1>DESIGN</h1>
                <h1>INTERIOR</h1>
            </TextBackground>
            {/*BLOCK 1*/}
            <SectionBlock>
                <Div50>
                    <BlockImageBackground>
                        <BlackBackground>
                            <div>тут будет инфа</div>
                            <BlockCenter>
                                <div>ТУТ БУДЕТ ТЕКСТ</div>
                            </BlockCenter>
                            <div id={'ScrollBlock'}>
                                <BottonRowDown/>
                            </div>
                        </BlackBackground>
                    </BlockImageBackground>
                </Div50>
                <div style={{margin: "0 auto"}}>
                    <BlockLeftHomeMain>
                        <div>
                            <img src="/verbitsky%20irina.webp" alt=""/>
                        </div>
                        <div>
                            <H1textName typeof={'normal'} color={`${propsList['pinkLight']}`}>ИРИНА ВЕРБИЦКАЯ</H1textName>
                            <H1textName typeof={'italic'} color={`${propsList['pinkLight']}`}>Дизайнер Интерьеров</H1textName>
                        </div>
                    </BlockLeftHomeMain>
                </div>
            </SectionBlock>

            {/*OLD VARIANT*/}

            {/*section 2*/}
            {/*<BackWave>*/}
            {/*    <BlockWaveText>*/}
            {/*        <div>*/}
            {/*            <p>*/}
            {/*                Дизайн который лечит!*/}
            {/*                С применением салютогенного дизайна,*/}
            {/*                с технологией vastu*/}
            {/*            </p>*/}
            {/*            <br/>*/}
            {/*            <p>*/}
            {/*                Практикующий дизайнер, с 2010 года*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <H1textName title={'64px'} typeof={'normal'}*/}
            {/*                        color={`${propsList['pinkLight']}`}>*/}
            {/*                SEE MORE*/}
            {/*            </H1textName>*/}
            {/*            <BlockInfoExperience>*/}
            {/*                ОПЫТ РАБОТЫ БОЛЕЕ 13 ЛЕТ*/}
            {/*            </BlockInfoExperience>*/}
            {/*        </div>*/}
            {/*    </BlockWaveText>*/}
            {/*</BackWave>*/}

            <div style={{height:"100vh"}}>
                sdasd
            </div>

        </main>
    );
};

export default HomePage_bones;