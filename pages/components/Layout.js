import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import theme from './theme';

/* eslint-disable no-unused-expressions */
injectGlobal`
  @font-face {
    font-family: AndaleMono;
    font-weight: 400;
    src: url(../../static/fonts/AndaleMono.woff2),
    url(../../static/fonts/AndaleMono.woff);
  }

  @font-face {
    font-family: AndaleMono;
    font-weight: 700;
    src: url(../../static/fonts/AndaleMono.woff2),
    url(../../static/fonts/AndaleMono.woff);
  }

html {
  height: 100%;
}

* {
  box-sizing: border-box;
}

body {
    font-family: 'AndaleMono';
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    line-height: 1.5;

   > div:first-child {
      height: 100%;
    }
  }`;

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  > * {
    flex-shrink: 0;
  }
`;

export default children => (
  <ThemeProvider theme={theme}>
    <PageWrapper>
      <main {...children} />
    </PageWrapper>
  </ThemeProvider>
);
