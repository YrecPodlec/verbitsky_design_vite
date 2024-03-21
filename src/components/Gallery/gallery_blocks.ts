import styled from "styled-components";

export const Gallery_blocks_bones = styled.div`
  margin: 0 auto;
  display: flex;
  & > div{
    margin: 0 auto;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

export const Gallery_item_bones = styled.div<{bg: string}>`
  width: 28%;
  height: 300px;
  margin: 24px auto;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 0 60px 0 0;
  & > div {
    cursor: pointer;
    opacity: 0;
    border-radius: 0 60px 0 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      opacity: 1;
    }
  }
`