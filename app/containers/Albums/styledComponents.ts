import styled from 'styles/styled-components';
import { colors } from '../../global-styles';
import { Link } from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const ContentAlbums = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeaderAlbum = styled.div`
  width: 100%;
  height: 40%;
  background: rgb(1,0,10);
  background: linear-gradient(rgba(47,47,47,1) 0%, rgba(0,0,0,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Artist = styled.div`
  display: flex;
  border-radius: 50%;
  background-color: ${colors.palette.white};
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 20px;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 20%;
  position: absolute;
  bottom: 10px;
`;

export const Name = styled.p`
  margin: 0;
  color: ${colors.palette.white};
  font-size: 1.4em;
`;

export const Start = styled(Icon)`
  color: yellow;
  font-size: 0.6em;
`;

export const Popularity = styled(Name)`
  margin-left: 3px;
  font-size: 0.6em;
`;

export const ListAlbums = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.palette.black3};
  width: 100%;
  height: 60%;
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

export const Wrapper = styled.div`
  width: 70%
  margin: 0 auto;
  overflow-y: scroll;
  height: 95%;
`;

export const Title = styled.p`
  margin: 10px 0;
  color: ${colors.palette.white};
  font-size: 1.4em;
`;

export const Album = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Line = styled.div`
  margin-left: 10px;
  border-bottom: 1px solid ${colors.palette.gray};
  display: flex;
  align-items: center;
  width: calc(100% - 50px);
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px);
`;

export const NameAlbum = styled(Link)`
  margin: 10px 0 0;
  color: ${colors.palette.white};
  font-size: 1em;
  text-decoration: none;
  &:hover {
    color: ${colors.palette.link};
  }
`;

export const Tracks = styled.p`
  margin: 0 0 10px;
  color: ${colors.palette.white};
  font-size: 0.9em;
  span {
    color: ${colors.palette.gray};
  }
`;
