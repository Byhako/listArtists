import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

import { useInjectSaga } from 'utils/injectSaga';
import makeSelectSongs from './selectors';
import { getSongs, setSongs } from './actions';
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
    dispatch(getSongs(props.match.params.id));
    return () => dispatch(setSongs([]));
  }, []);

  const handleAudio = (action: string, id: number) => {
    const elementClick = document.getElementById(id.toString());
    const elementOld = document.getElementById(audioId.toString());

    if (action === 'play') {
      if (elementOld) elementOld.pause();
      if (elementClick) elementClick.play();
      setAudioId(id);
    } else {
      if (elementClick) elementClick.pause();
      setAudioId(-99);
    }
  };

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
          </div>
        ) : (
          <Spinner size={SpinnerSize.large} />
        )}
      </ListSongs>
    </ContentSongs>
  );
}

export default Songs;
