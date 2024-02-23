import styled from "styled-components";
import {BigDesktopQuery, DesktopQuery, MobileQuery, TabletQuery} from "src/components";
const SectionBlock_bones = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  ${BigDesktopQuery(``)}
  ${DesktopQuery(``)}
  ${TabletQuery(``)}
  ${MobileQuery(`
  flex-direction: column;
  `)}
`

export default SectionBlock_bones;