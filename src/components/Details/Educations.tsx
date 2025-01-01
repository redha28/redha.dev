import { education, experience } from "../../data/data";

function Educations() {
  return (
    <div className="flex-[10] flex-row flex py-4 px-4 w-full overflow-y-scroll scrollbar-custom overflow-hidden">
      <div>
        <h1 className="text-xl font-bold text-white mb-4">Experience</h1>
        <div>
          {experience.map((data, key) => {
            return (
              <div key={key} className="text-gray-300 flex flex-col gap-2">
                <p className="text-white font-bold">{data.title}</p>
                <p className="border-b-2">{data.company}</p>
                <p className="mb-8">{data.desc}</p>
              </div>
            );
          })}
        </div>
        <h2 className="text-white font-bold text-xl mb-4">Education</h2>
        <div>
          {education.map((data, key) => {
            return (
              <div key={key} className="text-gray-300 flex flex-col gap-2">
                <p className="text-white font-bold">{data.title}</p>
                <p className="border-b-2">{data.major}</p>
                <p className="mb-8">{data.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Educations;
