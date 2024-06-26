import styled from "styled-components";
import {BigDesktopQuery, ButtonOnPages, DesktopQuery, TabletQuery, TitleBig} from "src/components";
import { propsList } from "src/styles/consts.ts";
import { motion } from "framer-motion";
import { useState } from "react";

const SectionGalleryHome_bones = () => {
    const [ImgIndex, setImgIndex] = useState(0);
    const totalImages = propsList.CarouselGalleryHome.images.length;

    const RowDown = () => {
        setImgIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const RowUp = () => {
        setImgIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };

    const SectionGallery = styled.section`
      .mainBlocks2 {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        .GalleryTextCenter{
          display: flex;
          align-items: center;
          height: 100%;
          div{
            p:nth-child(1){
              font-size: 24px;
            }
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 64px;
          }
        }
        
        .ButtonsLine {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 74vh;
          background-color: rgba(0, 81, 87, 0.8);;
          z-index: 999;
          button {
            cursor: pointer;
            padding: 16px;
            min-height: 64px;
            border: none;
            background: none;
            background-image: url("/row.svg");
            background-size: cover;
            background-position: center;

            &:nth-child(1) {
              rotate: 180deg;
            }
          }
        }

        .ContainerImages {
          position: relative;
          overflow: hidden;
          width: 100%;
          .ContainerImagesInner {
            height: 74vh;
            gap: 4px;
            display: flex;
            flex-direction: column;
            .containerImg {
              width: 100%;
              height: 90%;
              background-position: center;
              background-size: cover;
              flex-shrink: 0;

              &::before {
                content: attr(data-before-content);
                align-items: center;
                justify-content: center;
                display: flex;
                background-color: rgba(0, 0, 0, 0.4);
                position: absolute;
                text-align: center;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }

      display: flex;
      margin: 50px auto;
      ${BigDesktopQuery(``)}
      ${DesktopQuery(``)}
      ${TabletQuery(``)}
    `;

    return (
        <SectionGallery>
            <div className="mainBlocks2">
                <TitleBig text={'ГАЛЕРЕЯ'} />
                <div className={'GalleryTextCenter'}>
                    <div>
                        <p>
                            Вы можете ознакомится с галереей проектов, где для вас представлены подробные Чертежи, Коллажи и Визуализации
                            <br/>
                            <br/>
                            Вы можете посмотреть мои работы в галерее. Мой послужной список достаточно обширный,
                            за весь период работы проектировала дизайн интерьера в разных городах и странах
                            <br/>
                            <br/>
                            Перейдя на вкладку "Шоу Рум", вы можете детально ознакомится с проектами
                        </p>
                        <ButtonOnPages href='/show-room' name={'ШОУ РУМ'}/>
                    </div>
                </div>
            </div>
            <div className="mainBlocks2">
                <motion.div className={'ButtonsLine'}>
                    <button onClick={RowUp}>
                        <div />
                    </button>
                    <button onClick={RowDown}>
                        <div />
                    </button>
                </motion.div>
                <motion.div className="ContainerImages">
                    <motion.div
                        animate={{
                            translateY: `-${ImgIndex * 85}%`
                        }}
                        transition={{ duration: 0.5 }}
                        className="ContainerImagesInner"
                    >
                        {propsList.CarouselGalleryHome.images.map((value, index) => (
                            <motion.div key={index}
                                        data-before-content={propsList.CarouselGalleryHome.text[index]}
                                        style={{
                                            backgroundImage: `url(${value})`,
                                        }}
                                        className={'containerImg'}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </SectionGallery>
    );
};

export default SectionGalleryHome_bones;
