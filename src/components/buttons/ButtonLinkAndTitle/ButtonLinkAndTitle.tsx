import styled from "styled-components";
import React from "react";
import {propsList} from "src/styles/consts.ts";

interface TitleBig{
    text: string
}

const TitleBig_bones: React.FC<TitleBig> = ({text}) => {
    const TitleLink = styled.div`
      padding: 16px;
      background-color: ${propsList.pinkLight};
      border-radius: 32px;
    `
    return (
        <TitleLink>
            <h1>
                {text}
            </h1>
        </TitleLink>
    );
};

export default TitleBig_bones;