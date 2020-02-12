import styled from 'styles/styled-components';
import { colors } from '../../global-styles';

export const ContentNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${colors.palette.black};
  width: 100%;
  height: 115px;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.palette.black2};
  color: ${colors.palette.white};
  font-weight: 600;
  font-size: 19px;
  width: 100%;
  height: 64px;
  padding: 0 22px;
  p.text2 {
    font-size: 14px;
    padding-right: 12px;
  }
`;
