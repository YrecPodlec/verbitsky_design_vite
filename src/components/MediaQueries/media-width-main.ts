import { css } from 'styled-components';
const MaxWidthBigDesktop = '3840px';
const MinWidthBigDesktop = '1800px';

const MaxWidthDesktop = '1800px';
const MinWidthDesktop = '1152px';

const MaxTablet = '1152px';
const MinTablet = '900px';

const MaxMobile = '900px';
const MinMobile = '100px';

export const BigDesktopQuery_bones = (styles: string) => css`
  @media (max-width: ${MaxWidthBigDesktop}) and (min-width: ${MinWidthBigDesktop}){
    margin-left: 5%;
    margin-right: 5%;
    ${styles}
  }
`;

export const DesktopQuery_bones = (styles: string) => css`
  @media (max-width: ${MaxWidthDesktop}) and (min-width: ${MinWidthDesktop}){
    margin-left: 5%;
    margin-right: 5%;
    ${styles}
  }
`;

export const TabletQuery_bones = (styles: string) => css`
  @media (max-width: ${MaxTablet}) and (min-width: ${MinTablet}){
    margin-left: 5%;
    margin-right: 5%;
    ${styles}
  }
`;

export const MobileQuery_bones = (styles: string) => css`
  @media (max-width: ${MaxMobile}) and (min-width: ${MinMobile}){
    ${styles}
  }
`;