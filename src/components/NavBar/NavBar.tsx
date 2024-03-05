import React, {useState} from 'react';
import styled from "styled-components";
import {propsList} from 'src/styles/consts.ts'
import {Link} from "react-router-dom";
import {BigDesktopQuery, ButtonNavBar, DesktopQuery, MobileQuery, TabletQuery} from "src/components";
const NavBar_bones: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [marginLeftPos, setMarginLeftPos] = useState({
        left: '-120vw',
    });

    const handleClickMenuBurger = () => {
        setIsOpen((prev) => !prev);
        if (isOpen){
            setMarginLeftPos(
                {
                    left: '-120vw'
                }
            );
        } else {
            setMarginLeftPos({
                left: '0'
            });
            console.log(marginLeftPos)
        }
    }

    const HeaderNavBar = styled.header`
      background-color: ${propsList["background"]};
      width: 100%;
      height: 50px;
      position: fixed;
      top: 0;
      z-index: 999;
    `
    const NavNavBar = styled.nav`
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      div{
        display: flex;
        justify-content: space-between;
        .header_logo, a{
          height: 50px;
          width: 150px;
          background-size: cover;
          img{
            width: 100%;
            height: 100%;
            background-size: cover;
          }
        }
        div:nth-child(2){
          font-size: 42px;
          display: none;
        }
      }
      ${BigDesktopQuery(``)}
      ${DesktopQuery(``)}
      ${TabletQuery(`
      flex-direction: column;
      margin: 0;
      div{
        div:nth-child(2){
          display: block;
        }
      }
      `)}
      ${MobileQuery(`
      flex-direction: column;
      margin: 0;
      div{
        div:nth-child(2){
          display: block;
        }
      }
      `)}
    `;
    const ButtonBlocks = styled.div`
      display: flex;
      gap: calc(${propsList['pixel4']} * 4);
      justify-content: center;
      align-items: center;
      transition: all 1s ease-in-out;
      ${TabletQuery(`
        background-color: ${propsList.background};
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        padding: 16px;
        margin: 0;
        transform: translateX(${marginLeftPos.left});
      `)}
      ${MobileQuery(`
        background-color: ${propsList.background};
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        padding: 16px;
        transform: translateX(${marginLeftPos.left});
      `)}
    `
    return (
        <HeaderNavBar>
            <NavNavBar>
                <div>
                    <div>
                        <Link to='/'>
                            <a href="#main">
                                <img src="/Logo_white.webp" alt=""/>
                            </a>
                        </Link>
                    </div>
                    <div onClick={handleClickMenuBurger}>
                        X
                    </div>
                </div>
                <ButtonBlocks>
                    <ButtonNavBar href='/show-room' name='ШОУ РУМ'/>
                    {/*<ButtonNavBar href='/' name='УСЛУГИ' hrefBlock='#price'/>*/}
                    {/*<ButtonNavBar href='/suppliers' name='ПОСТАВЩИКИ' hrefBlock=''/>*/}
                    {/*<ButtonNavBar href='/articles' name='СТАТЬИ' hrefBlock=''/>*/}
                    {/*<ButtonNavBar href='/' name='ОБО МНЕ' hrefBlock='#about-me'/>*/}
                    {/*<ButtonNavBar href='/contacts' name='КОНТАКТЫ' hrefBlock=''/>*/}
                </ButtonBlocks>
            </NavNavBar>
        </HeaderNavBar>
    );
};

export default NavBar_bones;