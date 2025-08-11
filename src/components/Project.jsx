import { useState } from "react";
import ProjectViews from "./ProjectViews";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between py-10 space-y-6 sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        {/* Image above title */}
        <div className="flex flex-col items-start sm:items-start gap-4">
          <img
            src={image}
            alt={title}
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
          <div>
            <p className="text-2xl font-semibold">{title}</p>
            <div className="flex flex-wrap gap-3 mt-2 text-sand">
              {tags.map((tag) => (
                <span key={tag.id} className="text-sm">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 cursor-pointer hover-animation"
        >
          Click Project
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Modal */}
      {isHidden && (
        <ProjectViews
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
