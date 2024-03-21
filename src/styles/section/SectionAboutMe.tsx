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
import {useState} from "react";
import {AnimatePresence, motion, Variants} from "framer-motion";

const SectionAboutMe_bones = () => {
    const Tabs = [
        {
            name: 'Диплом Магистра',
            photo: '',
            render: () => {
                return <img src='/masters degree.svg' alt=''/>
            }
        },
        {
            name: 'Доп диплом',
            photo: '',
            render: () => {
                return <div>TAB 2</div>
            }
        }
    ]

    const TabVariants:Variants = {
        initial:{
            x: -200,
            opacity: 0
        },
        enter:{
            x: 0,
            opacity: 1
        },
        exit:{
            x: 200,
            opacity: 0
        }
    }

    const [activeTab, setActiveTab] = useState(Tabs[0])
    const handleClickTabs = (e: any, tab: any) => {
        e.preventDefault()
        setActiveTab(tab)
    }
    const isSelected = (tab: any) => activeTab.name === tab.name
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
  const TabOfImages = styled.div`
    width: 50%;
      .TabButton{
        display: flex;
        justify-content: space-between;
        gap: 16px;
        .TabItem{
          padding: 16px;
          a{
            color: white;
            text-decoration: none;
          }
        }
        .Selected{
          border-bottom: 4px solid ${propsList['DarkGreen']};
        }
      }
    .TabContainer{
      width: 100%;
      margin: 32px auto;
      background-color: ${propsList['backgroundDarker']};
      padding: 16px;
      overflow: hidden;
      min-height: 60vh;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: auto;
        height: auto;
      }
    }
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
          <TabOfImages>
              <div className={'TabButton'}>
                  {
                      Tabs.map((tab, index) => (
                          <div key={index} className={isSelected(tab) ? 'TabItem Selected' : 'TabItem'}>
                              <a href="#" onClick={(e: any) => handleClickTabs(e, tab)}>
                                  {tab.name}
                              </a>
                              {isSelected(tab) && <motion.div layoutId='indicator' className={'TabIndicator'}/>}
                          </div>
                      ))}
              </div>
              <div className={'TabContainer'}>
                  <AnimatePresence mode='wait'>
                      <motion.div
                          key={activeTab.name || "empty"}
                          variants={TabVariants}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          transition={{
                              duration: .3
                          }}
                      >
                          {activeTab && activeTab?.render()}
                      </motion.div>
                  </AnimatePresence>
              </div>
          </TabOfImages>
        </SectionAboutMe_bones>
    );
};

export default SectionAboutMe_bones;