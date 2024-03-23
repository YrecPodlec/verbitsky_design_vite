import styled from "styled-components";
import {BigDesktopQuery, DesktopQuery, TabletQuery} from "src/components";

const Footer_bones = () => {
    const FooterBlock = styled.footer`
      width: 100%;
      background-color: #005157;
      margin-top: 50px;
    `
    const FooterInnerContent = styled.div`
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ${BigDesktopQuery(``)}
      ${DesktopQuery(``)}
      ${TabletQuery(``)}
      div{
        padding: 32px;
      }
      .ImageLogo{
        width: 250px;
        img{
          width: 100%;
        }
      }
      .MediumBlock{
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: space-between;
        .Contacts{
          align-items: flex-start;
          justify-content: flex-start;
          display: flex;
          flex-direction: column;
          gap: 16px;
          a{
            color: white;
          }
        }
        div{
          padding: 0;
          text-align: center;
        }
      }
    `
    return (
        <FooterBlock>
            <FooterInnerContent>
                <div className={'ImageLogo'}>
                    <img src="/Logo_white.webp" alt=""/>
                </div>
                <div className={'MediumBlock'}>
                    <div className={'Contacts'}>
                        <h1>КОНТАКТЫ:</h1>
                        <p>+7-950-06-12-752</p>
                        <a href="https://t.me/IrinaV752">t.me/IrinaV752</a>
                        <p>@verbitskaya5272</p>
                        <p>verbitsky.vastu@gmail.com</p>
                    </div>
                    <div className={'Contacts'}>
                        <h1>САЙТ РАЗРАБОТАН:</h1>
                        <p>
                            Vite + React
                        </p>
                        <p>MongoDB</p>
                        <p>Framer-Motion</p>
                        <p>Styled-Components</p>
                        <p>
                            <a href="#">
                                Страница Разработчика
                            </a>
                        </p>
                    </div>
                </div>
                <div>
                    <p>Verbitsky | Ирина Вербицкая - Дизайнер интерьеров, город Москва | Работаю также дистанционно, из любой точки мира</p>
                </div>
                <div>
                    <p>&copy; Все права защищены | "VERBITSKY" 2024</p>
                </div>
            </FooterInnerContent>
        </FooterBlock>
    );
};

export default Footer_bones;