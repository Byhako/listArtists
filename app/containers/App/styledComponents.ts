import styled from 'styles/styled-components';
import { colors } from '../../global-styles';

export const AppWrapper = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0;
  background-color: ${colors.palette.black};
`;

export const GlobalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
