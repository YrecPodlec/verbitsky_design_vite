import {BigDesktopQuery, ButtonOnPages, DesktopQuery, MobileQuery, TabletQuery, TitleBig} from "src/components";
import styled from "styled-components";

const SectionUnique_bones = () => {
    const SectionUnique = styled.div`
      display: flex;
      align-items: flex-end;
      margin: 0 auto;
      margin-top: 50px;
      flex-direction: column;
      ${BigDesktopQuery(``)}
      ${DesktopQuery(``)}
      ${TabletQuery(``)}
      ${MobileQuery(``)}
    `
    const List = styled.div`
      display: flex;
      margin-top: 50px;
      div{
        width: 50%;
        display: flex;
        font-size: 24px;
        flex-direction: column;
        justify-content: space-between;
      }
      .imageBox{
        width: 550px;
        height: 450px;
        margin: 0 auto;
        background-image: url("/images/moscow-resident/1-moscow-resident.webp");
        background-size: cover;
        background-position: center;
      }
      .articles_button{
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }
    `
    return (
        <SectionUnique>
            <div>
                <TitleBig text={'УНИКАЛЬНОСТЬ'}/>
            </div>
            <List>
                <div>
                    <p>Мой дизайн – это прежде всего формирование
                        оздоровительной среды, которая помогает
                        поддерживать физическое и психологическое
                        благополучие человека.
                        <br/>
                        <br/>
                        Вы получаете не только стильное помещение,
                        отвечающее всем критериям моды и стиля. Но и
                        пространство, которое работает на социальные и
                        психологические потребности его обитателей.
                        <br/>
                        <br/>
                        Пространство, которое положительно влияет на
                        ваше настроение, ум и поведение, независимо от
                        обстоятельств или сезона.</p>
                </div>
                <div>
                    <div className={'imageBox'} />
                </div>
            </List>
            <List>
                <div>
                    <div className={'imageBox'} />
                </div>
                <div>
                    <p>В этом и заключается, применение такой науки как
                        VASTU, в формировании комфортного для каждого
                        человека пространства, сохраняя его здоровье,
                        создавая интерьер, как убежище для человека
                        <br/>
                        <br/>
                        Применяя принципы салютогенного дизайна
                        <br/>
                        <br/>
                        Подробнее о Vastu и салютогенном дизайне, вы
                        можете прочитать статью, перейдя в
                        соответствующий раздел</p>
                    <article className={'articles_button'}>
                        <h3>Подробнее в моих статьях:</h3>
                        <ButtonOnPages href='/articles' name={'СТАТЬИ'}/>
                    </article>
                </div>
            </List>
        </SectionUnique>
    );
};

export default SectionUnique_bones;