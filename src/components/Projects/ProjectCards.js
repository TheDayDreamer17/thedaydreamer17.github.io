import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const renderGithubButton = props.ghLink !== "";
  const renderImage = props.isVideo === false;
  return (
    <Card className="project-card-view">
      {
        renderImage && (
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        )
      }
      {
        !renderImage && (
          <video
            preload="metadata"
            loop
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
            src={`${props.imgPath}`} >
          </video>
        )
      }
      <Card.Body style={{ zIndex: 2 }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {
          renderGithubButton && (
            < Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )

        }
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{
              marginLeft: "10px"
            }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card >
  );
}
export default ProjectCards;
