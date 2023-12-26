import React from 'react';
import styled from "styled-components";
import {propsList} from 'src/styles/consts.ts'
import {Link} from "react-router-dom";
import {ButtonNavBar} from "src/components";
const NavBar_bones: React.FC = () => {
    const HeaderNavBar = styled.header`
      background-color: ${propsList["background"]};
      width: 100%;
      height: 50px;
      position: fixed;
      top: 0;
      z-index: 999;
    `
    const NavNavBar = styled.nav`
      width: ${propsList['width1410']};
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .header_logo, a, img{
        height: 50px;
        width: 150px;
        background-size: cover;
      }
    `
    const ButtonBlocks = styled.div`
      display: grid;
      gap: calc(${propsList['pixel4']} * 4);
      grid-template-columns: repeat(6, minmax(0, 1fr));
      justify-content: center;
      align-items: center;
    `
    return (
        <HeaderNavBar>
            <NavNavBar>
                <div className={'header_logo'}>
                    <Link to='/'>
                        <a href="#main">
                            <img src="/public/logo_header.webp" alt=""/>
                        </a>
                    </Link>
                </div>
                <ButtonBlocks>
                    <ButtonNavBar href='/' name='УСЛУГИ' hrefBlock='#price'/>
                    <ButtonNavBar href='/show-room' name='ШОУ РУМ' hrefBlock=''/>
                    <ButtonNavBar href='/suppliers' name='ПОСТАВЩИКИ' hrefBlock=''/>
                    <ButtonNavBar href='/articles' name='СТАТЬИ' hrefBlock=''/>
                    <ButtonNavBar href='/' name='ОБО МНЕ' hrefBlock='#about-me'/>
                    <ButtonNavBar href='/contacts' name='КОНТАКТЫ' hrefBlock=''/>
                </ButtonBlocks>
            </NavNavBar>
        </HeaderNavBar>
    );
};

export default NavBar_bones;