import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import makeSelectSongs from './selectors';
import { getSongs, setSongs } from './actions';
import { load } from '../App/actions';

import { makeSelectApp } from '../App/selectors';
import play from '../../images/play-icon2.png';
import pause from '../../images/pause-icon.png';
import noPreview from '../../images/noPreview.jpg';

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
  Botton,
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

  const [audioId, setAudioId] = useState(-99);

  useEffect((): any => {
    dispatch(load(true));
    dispatch(getSongs(props.match.params.id));
    return () => dispatch(setSongs([]));
  }, []);

  useEffect(() => {
    if (dataSongs.length) {
      dispatch(load(false));
    }
  }, [dataSongs]);

  const handleAudio = (action: string, id: number) => {
    const elementClick = document.getElementById(id.toString()) as HTMLAudioElement;
    const elementOld = document.getElementById(audioId.toString()) as HTMLAudioElement;

    if (action === 'play') {
      if (elementOld) elementOld.pause();
      if (elementClick) elementClick.play();
      setAudioId(id);
    } else {
      if (elementClick) elementClick.pause();
      setAudioId(-99);
    }
  };

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
        <Column>
          <Name>{data.name}</Name>
          <Tracks>Canciones: <span>{data.total_tracks}</span></Tracks>
        </Column>
      </HeaderSong>

      <ListSongs>
        {dataSongs.length && dataSongs[0].no_songs === 'no_songs' ? (
          <NotFound>No pudimos encontrar canciones.</NotFound>
        ) : (
          <Wrapper>
            <Title>
              Canciones
              <GoBack to={`/artists/${data.artisId}`}>Lista de albunes</GoBack>
            </Title>
            {dataSongs.map((item: any) => (
              <Song key={item.id}>
                <Text>
                  <NameSong href={item.spotify_url} target="_blank">
                    {item.name}
                  </NameSong>
                </Text>
                {item.preview_url ? (
                  <React.Fragment>
                    <audio id={item.id} src={item.preview_url} />
                    {audioId === item.id ? (
                      <Botton src={pause} onClick={() => handleAudio('pause', item.id)} />
                    ) : (
                      <Botton src={play} onClick={() => handleAudio('play', item.id)} />
                    )}
                  </React.Fragment>
                ) : (
                  <Botton src={noPreview}/>
                )}
              </Song>
            ))}
          </Wrapper>
        )}
      </ListSongs>
    </ContentSongs>
  );
}

export default Songs;
