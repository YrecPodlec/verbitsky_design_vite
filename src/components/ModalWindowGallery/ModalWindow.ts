import styled from "styled-components";
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
  background-color: #01010c;
  z-index: 999;
  top: calc(50% - 42vh);
  left: calc(50% - 48vw);
  padding: 16px;
  border-radius: 32px;

  & > h1 {
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
  max-width: 96vw;
  box-sizing: border-box;
  columns: 4;
  overflow-y: scroll;
  padding: 16px;
`
export const DivImageGallery_bones = styled.div`
  width: 100%;
  margin-bottom: 16px;
  img{
    max-width: 100%;
    border-radius: 25px;
    cursor: pointer;
    z-index: 999;
  }
`

// КАРТИНКА
export const ImageModalWindow_bones = styled.div<{display: string}>`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  top: 0;
  display: ${props => props.display};
  & > div:nth-child(1){
    position: absolute;
    margin: 5vh auto;
  }
  & > img{
    position: relative;
    margin: 0 auto;
    padding: 48px;
    border-radius: 64px;
  }
`