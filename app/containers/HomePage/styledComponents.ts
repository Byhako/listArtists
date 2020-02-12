import styled from 'styles/styled-components';
import { colors } from '../../global-styles';

export const ContentHome = styled.div`
  display: flex;
  background-color: ${colors.palette.black1};
  border-top: 3px solid ${colors.palette.black};
  width: 100%;
  height: inherit;
  position: relative;
`;

export const FooterHome = styled.div`
  display: flex;
  background-color: ${colors.palette.black3};
  width: 100%;
  height: 101px;
  position: fixed;
  bottom: 38px;
`;
