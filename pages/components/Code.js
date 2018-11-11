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
  color: white;
`;

const Section = styled.div`
  margin: 0;
`

const Block = styled.div`
  padding: 100px 0 150px 0 ;
  background-color: black;
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

export default () => (
  <Block>
    <Container>
    <Section>
        <Styledh1><Red>code</Red></Styledh1>
    </Section>
    <Section>
      <FlexWrapper>
        <Text>
          <Styledp>fmt.Println(“used golang to build a smart EVSE controller”)</Styledp>
          <Styledp>System.out.println(“used java for the backend of various projects“);</Styledp>
          <Styledp>println(“used scala with akka for various backends“)</Styledp>
          <Styledp>alert( ‘used javascript with react and redux for various frontends’ );</Styledp>
        </Text>
      </FlexWrapper>
    </Section>
    </Container>
  </Block>
);
