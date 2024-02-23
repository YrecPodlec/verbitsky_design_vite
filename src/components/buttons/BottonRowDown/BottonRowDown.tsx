import React from 'react';
import styled from "styled-components";

const BottonRowDown_bones:React.FC = () => {
    const BlockDivRow = styled.div`
      align-items: center;
      display: flex;
      justify-content: space-around;
      a{
        display: flex;
        max-width: 100%;
        max-height: 100%;
        color: white;
        text-decoration: none;
        justify-content: center;
        flex-direction: column;
        img{
          height: 50px;
        }
      }
    `
    return (
        <BlockDivRow>
            <a href="#ScrollBlock">
                УЗНАТЬ БОЛЬШЕ
                <img src="/row.svg" alt=""/>
            </a>
        </BlockDivRow>
    );
};

export default BottonRowDown_bones;