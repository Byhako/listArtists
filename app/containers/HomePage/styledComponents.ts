import styled from 'styles/styled-components';
import { colors } from '../../global-styles';

export const ContentHome = styled.div`
  display: flex;
  background-color: ${colors.palette.black1};
  border-top: 3px solid ${colors.palette.black};
  width: 100%;
  height: 93%;
  justify-content: flex-start;
  position: relative;
`;

export const WrappArtists = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  height: max-content;
`;

export const FooterHome = styled.div`
  display: flex;
  background-color: ${colors.palette.black3};
  width: 100%;
  height: 12%;
  position: absolute;
  bottom: 0;
`;

export const ContentArtist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Artist = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: ${colors.palette.white};
`;