import React from 'react';
import styled from "styled-components";
import {propsList} from "src/styles/consts.ts";
import {Link} from "react-router-dom";
interface ButtonNavBar{
    href: string,
    name: string,
    hrefBlock: string
}
const ButtonNavBar_bones: React.FC<ButtonNavBar> = ({href, name, hrefBlock}) => {
    const ButtonNavBar = styled.button`
      border-radius: 24px;
      overflow: hidden;
      position: relative;
      z-index: 3;
      padding-top: calc(${propsList['pixel4']} * 2);
      padding-bottom: calc(${propsList['pixel4']} * 2);
      padding-left: calc(${propsList['pixel4']} * 4);
      padding-right: calc(${propsList['pixel4']} * 4);
      border: none;
      background: none;
      cursor: pointer;
      a{
        text-decoration: none;
        color: white;
      }
      &::before{
        content: "";
        position: absolute;
        background: ${propsList['orange']};
        height: 230px;
        width: 230px;
        border-radius: 50%;
        margin-top: 5vh;
        transition: all .5s ease-in-out;
        z-index: -1;
      }
      &:hover{
        &::before{
          margin-top: -50%;
          margin-left: -30%;
        }
      }
    `
    return (
        <ButtonNavBar>
            <Link to={href}>
                <a href={hrefBlock}>
                    {name}
                </a>
            </Link>
        </ButtonNavBar>
    );
};

export default ButtonNavBar_bones;