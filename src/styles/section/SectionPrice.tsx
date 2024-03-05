import {BigDesktopQuery, CardOfPrice, DesktopQuery, MobileQuery, TabletQuery, TitleBig} from "src/components";
import styled from "styled-components";
import {propsList} from "src/styles/consts.ts";

const SectionPrice_bones = () => {
    const NumberCard_1 = 'FirstCard';
    const SectionPrice_bones = styled.section`
      margin: 0 auto;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 64px;
      ${BigDesktopQuery(``)}
      ${DesktopQuery(``)}
      ${TabletQuery(``)}
      ${MobileQuery(`
      
      `)}
      .listOfCards{
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
`
    return (
        <SectionPrice_bones>
            <div>
                <TitleBig text={'УСЛУГИ'}/>
            </div>
            <div className={'listOfCards'}>
                <CardOfPrice CardData={propsList[NumberCard_1]}/>
                <CardOfPrice CardData={propsList[NumberCard_1]}/>
                <CardOfPrice CardData={propsList[NumberCard_1]}/>
            </div>
        </SectionPrice_bones>
    );
};

export default SectionPrice_bones;