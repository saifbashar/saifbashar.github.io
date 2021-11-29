import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/home-main.svg';
import ContactForm from '../ContactForm/ContactForm';
import Particle from '../Particle';
import Project from '../Project/Project';
import Home2 from './Home2';
import Svg from './Svg';
import Type from './Type';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Saif Bashar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img src={homeLogo} alt="home pic" className="img-fluid" /> */}
              <Svg></Svg>
            </Col>
          </Row>
        </Container>
      </Container>
      <Project></Project>
      <Home2 />
    </section>
  );
}

export default Home;
