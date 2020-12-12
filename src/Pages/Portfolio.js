import React from "react";
import Project from "../Project"
import Container from 'react-bootstrap/Container';
import projects from "../Projects.json"

function Portfolio() {
    const myInstagramClone = projects[0]
    const Scheduler = projects[1]
    const Dashboard = projects[2]
    const Petstagram = projects[3]
    const Password = projects[4]
    const Notes = projects[5]
    return (
        <Container>
            <Project {...myInstagramClone} />
            <Project {...Scheduler} />
            <Project {...Dashboard} />
            <Project {...Petstagram} />
            <Project {...Password} />
            <Project {...Notes} />
        </Container>
    );
}
export default Portfolio;