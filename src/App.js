import React , { Fragment } from 'react';
import styled from 'styled-components';
import Router from './components/UI/Router';
import MainHeader from './components/Header/Header';
import Body from './components/UI/Body';
import ShortLinks from './components/ShorterLink/ShortLink';
import Statics from './components/Statics/Statics';
import FooterTop from './components/Footer/FooterTop';
import Footer from './components/Footer/Footer';


const Container = styled.div`
  margin:auto;

  @media (max-width:376px){
    max-width: 376px;
    display: inline-block;
  }
`;

function App() {
  return (
    <Fragment >
      <Container>
      <MainHeader />
      <Body>
      <ShortLinks/>
      <Statics />
      </Body>
      <FooterTop />
      <Footer/>
      <Router/>
      </Container>
    </Fragment>
  );
}

export default App;
