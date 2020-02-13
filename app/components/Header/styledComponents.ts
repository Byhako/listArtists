import styled from 'styles/styled-components';
import { colors } from '../../global-styles';

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.palette.black2};
  color: ${colors.palette.white};
  font-weight: 600;
  font-size: 1.1em;;
  width: 100%;
  height: 7%;
  padding: 0 22px;
  p.text2 {
    font-size: 0.8em;;
    padding-right: 12px;
  }
`;
