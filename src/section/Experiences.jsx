import { TimelineWork } from "../components/WorkTimeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="c-space section-spacing min-h-screen" id="experience">
      <TimelineWork data={experiences} />
    </div>
  );
};

export default Experiences;
