import styled from "styled-components";
import {propsList} from "src/styles/consts.ts";
export const BigModalFirstBlock_bones = styled.div<{display: string}>`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  top: 0;
  display: ${props => props.display};
`
export const ModalGallery_bones = styled.div`
      position: fixed;
      display: flex;
      flex-direction: column;
      width: 96vw;
      height: 90vh;
      background-color: ${propsList['backgroundModal']};
      z-index: 999;
      top: calc(50% - 42vh);
      left: calc(50% - 48vw);
      padding: 16px;
      border-radius: 32px;
  & > h1{
    font-size: 24px;
    text-align: center;
    padding-bottom: 24px;
  }
`
export const CloseBtn_bones = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  & > div{
    cursor: pointer;
    font-size: 24px;
  }
`
export const ModalDescriptionProject_bones = styled.div`
  width: 100%;
  max-height: 150px;
  display: flex;
  & div > h1{
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 8px;
  }& div > h4{
    padding-bottom: 8px;
  }
`
export const ModalImagesGalleryList_bones = styled.div`
  overflow-y: auto;
  max-width: 96vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  justify-content: space-between;
`
export const DivImageGallery_bones = styled.div<{url: string}>`
  background-image: url(${props => props.url});
  width: 15vw;
  height: 25vh;
  background-size: cover;
  background-position: center;
  margin-bottom: 4vh;
`