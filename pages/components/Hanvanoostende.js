import React from 'react';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  width: 100%;

  @media ${props => props.theme.device.phone} {
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  width: calc(100% - 10vw);
  max-width: 1000px
  margin: 0 auto;
`;

const Section = styled.div`
  margin: 0;
`

const Block = styled.div`
  padding: 0 0 150px 0;

`

const Red = styled.text`
  color: red;
`

const Styledh1 = styled.h1`
  font-size: 375%
`
const Styledp = styled.p`
  font-size: 125%
  margin-top: 50px;
`

const Image = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;

  @media ${props => props.theme.device.phone} {
    display: none;
  }
`;

export default () => (
  <Block>
    <Container>
    <Section>
        <Styledh1><Red>h a n</Red> v a n o o s t e n d e</Styledh1>
    </Section>
    <Section>
      <FlexWrapper>
        <Text>
          <Styledp><Red>han</Red> writes code</Styledp>
          <Styledp><Red>han</Red> has fun with computers</Styledp>
          <Styledp><Red>han</Red> automates tests</Styledp>
          <Styledp><Red>han</Red> builds pipelines</Styledp>
          <Styledp>han <Red>&lt;3</Red> to meet new people [contact]</Styledp>
        </Text>
        <Image>
          <img
            src="../../static/images/programmer.svg"
            width="400"
            height="380"
            alt="programmer"
          />
        </Image>
      </FlexWrapper>
    </Section>
    </Container>
  </Block>
);
