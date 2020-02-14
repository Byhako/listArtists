import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { getArtists, selectArtist } from './actions';
import { load } from '../App/actions';
import { makeSelectHome } from './selectors';
import { makeSelectApp } from '../App/selectors';
import play from '../../images/play-icon2.png';

import saga from './saga';
import {
  ContentHome,
  WrappArtists,
  FooterHome,
  Artist,
  ContentArtist,
  NameArtist,
  GoArtist,
  Play,
} from './styledComponents';

const stateSelector = createStructuredSelector({
  dataHome: makeSelectHome(),
  dataApp: makeSelectApp(),
});

export default function HomePage() {
  useInjectSaga({ key: 'home', saga: saga });
  const dispatch = useDispatch();
  const { dataHome: { artists }, dataApp: { widthWindow } } = useSelector(stateSelector);
  const size = widthWindow / 8;

  useEffect(() => {
    dispatch(load(true));
    dispatch(getArtists());
  }, []);

  useEffect(() => {
    if (artists.length) {
      dispatch(load(false));
    }
  }, [artists]);

  return (
    <ContentHome>
      <WrappArtists>
        {artists.map((item: any) => (
          <ContentArtist
            key={item.id}
            style={{height: size, width: size}}
          >
            <Artist style={{ backgroundImage: `url(${item.image})` }}>
            <NameArtist>
              <GoArtist
                onClick={() => dispatch(selectArtist(item))}
                to={`/artists/${item.id}`}
              >{item.name}</GoArtist>
              <a href={item.spotify_url} target="_blank">
                <Play src={play} />
              </a>
            </NameArtist>
            </Artist>
          </ContentArtist>
        ))}
      </WrappArtists>
      <FooterHome />
    </ContentHome>
  );
}
