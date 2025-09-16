import { myProjects } from "../constants";
import { TimelineProject } from "../components/ProjectTimeline";

const Projects = () => {
  return (
    <div className="w-full c-space section-spacing " id="projects">
      <TimelineProject data={myProjects} />
    </div>
  );
};

export default Projects;
