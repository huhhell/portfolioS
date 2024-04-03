import styled from "styled-components";
import Project from "../../data/projects.ts";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo.tsx";
import Gallery from "../../components/Gallery/Gallery.tsx";


interface Props {
    project: Project,
    // openProject: (id: number) => void
}

export default function ProjectPage({project}: Props) {

    return <Container>
        <ProjectInfo project={project} />
        <Gallery images={project.img}/>
    </Container>
}


const Container = styled.section`
    display: flex;
    gap: 5vw;
    padding: 40px;
`


