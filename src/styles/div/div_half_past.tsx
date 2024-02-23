import styled from "styled-components";
import {MobileQuery} from "src/components";
const Div50_bones = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  ${MobileQuery(`
  margin: 0;
  width: 100%;
  `)}
`

export default Div50_bones;