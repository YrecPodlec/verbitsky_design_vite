import React from 'react';
import styled from "styled-components";

const BottonRowDown_bones:React.FC = () => {
    const BlockDivRow = styled.div`
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      flex-direction: column;
      h5{
        cursor: pointer;
      }
      img{
        max-height: 65%;
      }
    `
    return (
        <BlockDivRow>
            <h5>УЗНАТЬ БОЛЬШЕ</h5>
            <img src="/row.svg" alt=""/>
        </BlockDivRow>
    );
};

export default BottonRowDown_bones;