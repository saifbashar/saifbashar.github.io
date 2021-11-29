import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import leaf from '../../Assets/Projects/leaf.png';
import emotion from '../../Assets/Projects/emotion.jpeg';
import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';
import suicide from '../../Assets/Projects/suicide.png';
import bitsOfCode from '../../Assets/Projects/blog.png';
import { BiLinkExternal } from 'react-icons/bi';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src="" alt="card-img" />
              <Card.Body>
                <Card.Title>CARSMAX – Find Your Best Cars</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  <span className="fw-bold">Project Overview:</span>
                  <br />
                  <ul>
                    <li>A fully functional full-stack web app based on MERN</li>
                    <li>
                      In this e-commerce project, users can purchase any car
                      based on their preferences. After placing the order, the
                      order status is pending, after approval by admin order
                      status changed to shipped. If he/she is logged in he/she
                      can see all his orders on the dashboard page.
                    </li>
                    <li>
                      It has a customized admin panel where the admin can add a
                      product, delete a product shipped the order, and make an
                      admin
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="primary"
                  href="https://github.com/saifbashar/carsmax"
                  target="_blank"
                >
                  <BiLinkExternal /> &nbsp;
                  <span>View Project</span>
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src="" alt="card-img" />
              <Card.Body>
                <Card.Title>TRAVELERS – Book Your Place </Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  <span className="fw-bold">Project Overview:</span>
                  <br />
                  <ul>
                    <li>
                      A fully functional travel booking site using MERN stack.
                    </li>
                    <li>
                      A travel booking site where a user can book his tour plan.
                      To book a plan, the user must log in.
                    </li>
                    <li>
                      An admin manages all bookings, add new service, and
                      confirm the order but for the testing purpose, all users
                      are admin.
                    </li>
                  </ul>
                  <br></br>
                  <span className="fw-bold">Technologies Used: </span>

                  <span>
                    React JS, Node JS, Node Express, MongoDB, Firebase, React
                    Bootstrap, Heroku
                  </span>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="primary"
                  href="https://github.com/saifbashar/travelers"
                  target="_blank"
                >
                  <BiLinkExternal /> &nbsp;
                  <span>View Project</span>
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src="" alt="card-img" />
              <Card.Body>
                <Card.Title>Medicare – Check-up Your Health </Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  <span className="fw-bold">Project Overview:</span>
                  <br />
                  <ul>
                    <li>A medical checkup site was created by using react.</li>
                    <li>
                      On this website, users can get healthcare-related services
                      but to get service users must log in.
                    </li>
                    <li>
                      It has a registration and login page, after logging in
                      users can directly get an online appointment service.
                    </li>
                  </ul>
                  <span className="fw-bold">Technologies Used: </span>

                  <span>React JS, React Router, React Bootstrap, Firebase</span>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="primary"
                  href="https://github.com/saifbashar/medicare"
                  target="_blank"
                >
                  <BiLinkExternal /> &nbsp;
                  <span>View Project</span>
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src="" alt="card-img" />
              <Card.Body>
                <Card.Title>CARSMAX – Find Your Best Cars</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  <span className="fw-bold">Project Overview:</span>
                  <br />
                  <ul>
                    <li>A fully functional full-stack web app based on MERN</li>
                    <li>
                      In this e-commerce project, users can purchase any car
                      based on their preferences. After placing the order, the
                      order status is pending, after approval by admin order
                      status changed to shipped. If he/she is logged in he/she
                      can see all his orders on the dashboard page.
                    </li>
                    <li>
                      It has a customized admin panel where the admin can add a
                      product, delete a product shipped the order, and make an
                      admin
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" href="" target="_blank">
                  <BiLinkExternal /> &nbsp;
                  <span>View Project</span>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
