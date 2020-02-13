import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Link } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import makeSelectSongs from './selectors';
import { getSongs, setSongs } from './actions';
import { makeSelectApp } from '../App/selectors';
import play from '../../images/play-icon2.png';

import saga from './saga';

import {
  ContentSongs,
  HeaderSong,
  Album,
  GoBack,
  Column,
  Name,
  Tracks,
  ListSongs,
  Wrapper,
  Title,
  Song,
  Text,
  NameSong,
  Play,
  NotFound,
} from './styledComponents';

const stateSelector = createStructuredSelector({
  songs: makeSelectSongs(),
  dataApp: makeSelectApp(),
});

interface Props {
  [x: string]: any;
}

function Songs(props: Props) {
  useInjectSaga({ key: 'songs', saga: saga });
  const { songs: { album, listSongs }, dataApp: { widthWindow } } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const dataSongs: any = [...listSongs];
  const data: any = {...album};

  useEffect((): any => {
    dispatch(getSongs(props.match.params.id));
    return () => dispatch(setSongs([]));
  }, []);
  console.log(dataSongs);
  return (
    <ContentSongs>
      <HeaderSong>
        <Album
          style={{
            backgroundImage: `url(${data.image})`,
            height: `${widthWindow * 0.1}px`,
            width: `${widthWindow * 0.1}px`,
          }}
        />
        <GoBack to={`/artists/${data.artisId}`}>Albunes</GoBack>
        <Column>
          <Name>{data.name}</Name>
          <Tracks>Canciones: <span>{data.total_tracks}</span></Tracks>
        </Column>
      </HeaderSong>

      <ListSongs>
        {dataSongs.length ? (
          <div style={{ width: '100%' }}>
            {dataSongs[0].no_songs === 'no_songs' ? (
              <NotFound>No pudimos encontrar canciones.</NotFound>
            ) : (
              <Wrapper>
                <Title>Canciones</Title>
                {dataSongs.map((item: any) => (
                  <Song key={item.id}>
                    <Text>
                      <NameSong href={item.spotify_url} target="_blank">
                        {item.name}
                      </NameSong>
                    </Text>
                    <a href={item.spotify_url} target="_blank">
                      <Play src={play} />
                    </a>
                  </Song>
                ))}
              </Wrapper>
            )}
          </div>
        ) : (
          <Spinner size={SpinnerSize.large} />
        )}
      </ListSongs>
    </ContentSongs>
  );
}

export default Songs;
