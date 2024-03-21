import styled from "styled-components";
import {BigDesktopQuery, DesktopQuery, TabletQuery, TitleBig} from "src/components";
const Articles_bones = () => {
    const SectionArticles = styled.section`
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      ${BigDesktopQuery(``)}
      ${DesktopQuery(``)}
      ${TabletQuery(``)}
    `
    const SectionBlock = styled.div`
      display: flex;
      margin-top: 64px;
      .Div50_article{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
    const Div50 = styled.div`
      width: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `
    const ImageBlock = styled.div<{bg: string}>`
      width: 85%;
      min-height: 65vh;
      background-image: url(${props => props.bg});
      background-size: cover;
      background-position: center;
      border-radius: 48px;
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      transition: all .4s ease-in-out;
      top: 0;
      left: 0;
      p {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 24px;
        font-size: 24px;
        cursor: pointer;
      }
      &::before {
        box-sizing: border-box;
        content: '';
        position: absolute;
        background-color: rgba(0, 81, 87, 0.8);
        clip-path: polygon(0 94%, 100% 85%, 100% 100%, 0 100%);
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 48px;
      }
      &:hover{
        top: -2vh;
        left: -2vh;
        p{
          right: 5vw;
        }
      }
    `
    return (
        <SectionArticles>
            <SectionBlock>
                <Div50>
                    <TitleBig text={'СТАТЬИ'}/>
                </Div50>
                <Div50>

                </Div50>
            </SectionBlock>
            <SectionBlock>
                <div className={'Div50_article'}>
                    <ImageBlock bg={'/images/dubai/1-dubai.webp'}>
                        <p>Прочитать статью</p>
                    </ImageBlock>
                </div>
                <div className={'Div50_article'}>
                    <p>
                        Невероятный текст
                    </p>
                </div>
            </SectionBlock>
        </SectionArticles>
    );
};

export default Articles_bones;