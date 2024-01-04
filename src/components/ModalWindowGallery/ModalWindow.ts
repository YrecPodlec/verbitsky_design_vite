import styled from "styled-components";
import {propsList} from "src/styles/consts.ts";
export const ModalGallery_bones = styled.div<{display: string}>`
      position: fixed;
      display: ${props => props.display};
      flex-direction: column;
      width: 96vw;
      min-height: 80vh;
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
    
`