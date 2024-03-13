import {BigDesktopQuery, ButtonOnPages, DesktopQuery, MobileQuery, TabletQuery, TitleBig} from "src/components";
import styled from "styled-components";
import parse from "html-react-parser";
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useLayoutEffect, useRef} from "react";
gsap.registerPlugin(ScrollTrigger)
const SectionUnique_bones = () => {
    const BlockRef = useRef([]);
    BlockRef.current = [];
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animateBlocks = () => {
            BlockRef.current.forEach((el) => {
                gsap.from(el, {
                    y: 100,
                    scale: 0.5,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top center+=100',
                        toggleActions: 'play none none reverse'
                    }
                });
            });
        };

        animateBlocks();
    }, [BlockRef]);


    const addToRefs = (el: never) => {
        if (el && !BlockRef.current.includes(el)){
            BlockRef.current.push(el)
        }
    }
    const DataUnique = [
        {
            id: '1',
            photo: '/images/river-park/1-river.webp',
            text: "Мой дизайн – это прежде всего формирование\n" +
                "                        оздоровительной среды, которая помогает\n" +
                "                        поддерживать физическое и психологическое\n" +
                "                        благополучие человека"
        },
        {
            id: '2',
            photo: '/images/dubai/1-dubai.webp',
            text: "Вы получаете не только стильное помещение,\n" +
                "отвечающее всем критериям моды и стиля. Но и\n" +
                "пространство, которое работает на социальные и\n" +
                "психологические потребности его обитателей"
        },
        {
            id: '3',
            photo: '/images/los-angeles/5-la.webp',
            text: "Пространство, которое положительно влияет на\n" +
                "            ваше настроение, ум и поведение, независимо от\n" +
                "            обстоятельств или сезона"
        },
        {
            id: '4',
            photo: '/images/moscow-resident/7.jpg',
            text: `
            В этом и заключается, применение такой науки как
                VASTU, в формировании комфортного для каждого
                человека пространства, сохраняя его здоровье,
                создавая интерьер, как убежище для человека
                <br/>
                Применяя принципы салютогенного дизайна
            `
        }
    ]
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
    const MainBlockUnique = styled.div`
      display: flex;
      background-image: url(${(props) => props.resource});
      background-size: cover;
      background-position: center;
      height: 80vh;
      margin: 32px auto;
      outline: 2px solid white;
      outline-offset: -16px;
      box-shadow: 0px -90px 60px -6px rgba(0, 0, 0, 1) inset;
      div {
        background-color: rgba(0, 0, 0, 0.6);
        outline: 2px solid white;
        outline-offset: -36px;
        width: 100%;
        height: 100%;
        align-items: center;
        display: flex;
        p{
          width: 80%;
          margin: 0 auto;
          text-align: center;
          font-size: 48px;
        }
      }
    `
    return (
        <SectionUnique>
            <div>
                <TitleBig text={'УНИКАЛЬНОСТЬ'}/>
            </div>
            {DataUnique.map((value, index, array) =>
                <MainBlockUnique key={value.id} id={value.id} resource={array[index].photo} ref={addToRefs}>
                    <div>
                        <p>
                            {parse(array[index].text)}
                        </p>
                    </div>
                </MainBlockUnique>
            )}
            <article className={'articles_button'}>
                <h3>Подробнее в моих статьях:</h3> <br/>
                <ButtonOnPages href='/articles' name={'СТАТЬИ'}/>
            </article>
        </SectionUnique>
    );
};

export default SectionUnique_bones;