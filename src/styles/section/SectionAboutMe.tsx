import styled from "styled-components";
import {
    BigDesktopQuery,
    ButtonAboutMe,
    ButtonOnPages,
    DesktopQuery,
    MobileQuery,
    TabletQuery,
    TitleBig
} from "src/components";
import {propsList} from "src/styles/consts.ts";
const SectionAboutMe_bones = () => {
    const TextNumber1 = 'TextNumber1';
    const TextNumber2 = 'TextNumber2';
    const TextNumber3 = 'TextNumber3';
  const SectionAboutMe_bones = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  ${BigDesktopQuery(``)}
  ${DesktopQuery(``)}
  ${TabletQuery(``)}
  ${MobileQuery(`
  flex-direction: column;
  `)}
`
  const ImageBackground = styled.div`
  background-image: url("/images/4_country_house/1.jpg");
  height: 80vh;
  background-size: cover;
  background-position: center;
    width: 50%;
    ${MobileQuery(`
    width: 100%;
    height: 35vh;
    background-position: bottom;
  `)}
`
  const AboutMeList = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: flex-start;
    justify-content: space-between;
    margin-right: 32px;
    gap: 64px;
    ${MobileQuery(`
    width: 95%;
    margin: 16px auto;
  `)}
    .list_buttons{
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
      gap: 64px;
    }
    .articles_button{
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: flex-start;
    }
  `
    return (
        <SectionAboutMe_bones>
          <AboutMeList>
            <TitleBig text={'ОБО МНЕ'}/>
            <div className={'list_buttons'}>
                <ButtonAboutMe AboutMeData={propsList.AboutMeText[TextNumber1]} question={'Имею степень магистра, факультета Архитектуры и дизайна'} />
                <ButtonAboutMe AboutMeData={propsList.AboutMeText[TextNumber2]} question={'Большой опыт работы и множество проектов в разных стилях'} />
                <div className={'articles_button'}>
                    <h3>Больше проектов в Шоу Руме:</h3>
                    <ButtonOnPages href='/show-room' name={'ШОУ РУМ'}/>
                </div>
                <ButtonAboutMe AboutMeData={propsList.AboutMeText[TextNumber3]} question={'Большая база поставщиков, комплектация по доступным ценам'} />
            </div>
              <div className={'articles_button'}>
                  <h3>Подробнее в моих статьях:</h3>
                  <ButtonOnPages href='/articles' name={'СТАТЬИ'}/>
              </div>
          </AboutMeList>
          <ImageBackground />
        </SectionAboutMe_bones>
    );
};

export default SectionAboutMe_bones;