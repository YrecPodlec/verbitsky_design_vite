import styled from "styled-components";
const TextBackground_bones = styled.span`
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: rgba(0,0,0,0.71);
  z-index: -99;
  h1{
    font-size: 250px;
    font-weight: normal;
    &:nth-child(2){
      margin-left: auto;
    }
  }
`
export default TextBackground_bones;