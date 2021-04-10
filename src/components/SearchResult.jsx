import React from 'react';

import styled from '@emotion/styled';

import Song from './Song';

import List from '../styles/List';

const SeeMore = styled.button({
  backgroundColor: 'transparent',
  border: 'none',
  marginTop: '30px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '30px',
  '&:hover': {
    cursor: 'pointer',
  },
});

const Results = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  width: '720px',
});

export default function SearchResult({ musics, onMoreClick, onListenClick }) {
  return (
    <>
      <List>
        <Results>
          {musics?.map((music) => (
            <Song
              resultToken
              key={String(music.id.videoId)}
              music={music}
              onListenClick={onListenClick}
            />
          ))}
        </Results>
        <SeeMore type="button" onClick={onMoreClick}>See More</SeeMore>
      </List>
    </>
  );
}
