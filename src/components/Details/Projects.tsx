import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { project } from "../../data/data";

function Projects() {
  return (
    <div className="flex-[10] grid grid-cols-2 py-4 px-4 w-full overflow-y-scroll scrollbar-custom gap-3">
      {project.map((projectData, projectIdx) => (
        <div
          key={projectIdx}
          className="flex flex-col gap-3 p-4 rounded-lg shadow-md hover:bg-gray-800 border hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer"
          onClick={() => {
            window.location.href = projectData.url;
          }}>
          {/* Header */}
          <div className="flex justify-between items-center">
            <FaGithubSquare className="text-white text-4xl cursor-pointer hover:scale-110 transition-transform" />
            <FaArrowUpRightFromSquare className="text-white text-xl cursor-pointer hover:scale-110 transition-transform" />
          </div>
          {/* Title */}
          <h2 className="text-white text-lg font-bold">{projectData.title}</h2>
          {/* Description */}
          <p className="text-gray-400 text-sm">{projectData.desc}</p>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-4">
            {projectData.techStack?.map((tech, techIdx) => (
              <div
                key={`${projectIdx}-${techIdx}`}
                className="flex items-center gap-2 p-2 border border-gray-600 rounded-lg bg-gray-700">
                <img
                  src={tech.url || ""}
                  alt={tech.title}
                  className="w-8 h-8 object-contain"
                />
                <p className="text-white text-sm">{tech.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
