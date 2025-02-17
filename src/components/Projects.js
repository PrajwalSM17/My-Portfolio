import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { BilglassgruppenProject } from "./projectsData";
import { plantasgenProject } from "./projectsData";
import { vinceLiveProject } from "./projectsData";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Throughout my career, I have worked on a diverse range of
                    front-end and full-stack projects, leveraging Vue.js,
                    React.js, Node.js, AWS Lambda, and Office JS to build
                    scalable and efficient web applications. My expertise lies
                    in enhancing user experiences, optimizing data processing
                    workflows, and improving system stability.
                  </p>
                  <p>
                    Across these projects, I have streamlined data processing,
                    enhanced user experiences, and built scalable solutions. My
                    expertise in UI frameworks like PrimeVue and Kendo UI, along
                    with AWS serverless technologies, has allowed me to deliver
                    efficient, high-performance applications. I thrive in
                    collaborative environments, ensuring timely project delivery
                    while maintaining code quality and system stability.{" "}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                      style={{cursor:"pointer"}}
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Bilglassgruppen</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">VinceLive</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Plantasgen</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {BilglassgruppenProject.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          {vinceLiveProject.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          {plantasgenProject.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="backgroundImage"></img>
    </section>
  );
};
