/*
 *
 * Albums
 *
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Link } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import makeSelectAlbums from './selectors';
import { makeSelectApp } from '../App/selectors';
import { makeSelectHome } from '../HomePage/selectors';
import play from '../../images/play-icon2.png';

import { getAlbums, setAlbums } from './actions';
import { setAlbum } from '../Songs/actions';
import { load } from '../App/actions';

import saga from './saga';

import {
  ContentAlbums,
  HeaderAlbum,
  Artist,
  Row,
  Name,
  Start,
  Popularity,
  ListAlbums,
  Wrapper,
  Title,
  Album,
  Img,
  Line,
  Text,
  NameAlbum,
  Tracks,
  Play,
} from './styledComponents';

const stateSelector = createStructuredSelector({
  dataAlbums: makeSelectAlbums(),
  dataHome: makeSelectHome(),
  dataApp: makeSelectApp(),
});

interface Props {
  [x: string]: any;
}

function Albums(props: Props) {
  useInjectSaga({ key: 'albums', saga: saga });
  const {
    dataHome: { artistSelected },
    dataApp: { widthWindow },
    dataAlbums: { albums },
  } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const data: any = {...artistSelected};
  const artisId: number = props.match.params.id;

  useEffect((): any => {
    dispatch(load(true));
    dispatch(getAlbums(artisId));
    return () => dispatch(setAlbums([]));
  }, []);

  useEffect(() => {
    if (albums.length) {
      dispatch(load(false));
    }
  }, [albums]);

  return (
    <ContentAlbums>
      <HeaderAlbum>
        <Artist
          style={{
            backgroundImage: `url(${data.image})`,
            height: `${widthWindow * 0.1}px`,
            width: `${widthWindow * 0.1}px`,
          }}
        />
        <Row>
          <Name>{data.name}</Name>
          <Start iconName="FavoriteStarFill" className="FavoriteStarFill" />
          <Popularity>{data.popularity}</Popularity>
        </Row>
      </HeaderAlbum>

      <ListAlbums>
        <Wrapper>
          <Title>Albunes</Title>
          {albums.map((item: any) => (
            <Album key={item.id} onClick={() => dispatch(setAlbum({...item, artisId }))}>
              <Link to={`/album/${item.id}`}>
                <Img src={item.image} />
              </Link>
              <Line>
                <Text>
                  <NameAlbum to={`/album/${item.id}`}>{item.name}</NameAlbum>
                  <Tracks>Canciones: <span>{item.total_tracks}</span></Tracks>
                </Text>
                <a href={item.spotify_url} target="_blank">
                  <Play src={play} />
                </a>
              </Line>
            </Album>
          ))}
        </Wrapper>
      </ListAlbums>
    </ContentAlbums>
  );
}

export default Albums;
