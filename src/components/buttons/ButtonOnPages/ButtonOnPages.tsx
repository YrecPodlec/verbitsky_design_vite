import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {propsList} from "src/styles/consts.ts";
interface ButtonOnPages{
    name: string,
    href: string
}
const ButtonOnPages_bones: React.FC<ButtonOnPages> = ({name, href}) => {
    const ButtonOnPages = styled.button`
      display: flex;
      padding: 8px;
      color: white;
      background-color: ${propsList.orange};
      border: none;
      cursor: pointer;
      justify-content: space-between;
      transition: all .4s ease-in-out;
      min-width: 16px;
      font-size: 16px;
      gap: 8px;
      border-radius: 24px;
      &:hover{
        min-width: 65%;
        margin-left: 24px;
      }
      div{
        cursor: pointer;
      }
      a{
        text-decoration: none;
        color: white;
      }
    `
    return (
        <ButtonOnPages>
            <Link to={href}>
                <a>
                    {name}
                </a>
            </Link>
            <p>&rarr;</p>
        </ButtonOnPages>
    );
};

export default ButtonOnPages_bones;