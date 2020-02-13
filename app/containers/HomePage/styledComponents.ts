import styled from 'styles/styled-components';
import { colors } from '../../global-styles';
import { Link } from 'react-router-dom';

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
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const NameArtist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #0000008c;
  cursor: default;
  &:hover {
    background-color: #44411d52;
  }
`;

export const GoArtist = styled(Link)`
  color: ${colors.palette.white};
  text-decoration: none;
  &:hover {
    color: ${colors.palette.link};
    font-weight: 600;
    background-color: #0000008c;
  }
`;

export const Play = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  &:hover {
    background-color: ${colors.palette.link};
    cursor: pointer;
  }
`;
