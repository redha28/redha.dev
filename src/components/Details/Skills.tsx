import { desainSkill, softSkill, technicalSkill } from "../../data/data";
import folderIcon from "../../images/icon/folder.png";

type PropsSkills = {
  page: string;
  Skillpage: number;
  setPrevPage: React.Dispatch<React.SetStateAction<string>>;
  setSkillpage: React.Dispatch<React.SetStateAction<number>>;
};
const Skills = (props: PropsSkills) => {
  const renderPageContent = () => {
    switch (props.Skillpage) {
      case 1:
        return (
          <>
            {technicalSkill.map((data, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex flex-col gap-2 font-bold w-28 h-28 justify-center items-center rounded-lg p-4 text-white hover:bg-white hover:bg-opacity-40 hover:cursor-pointer`}>
                  <div className="w-16 h-16">
                    <img
                      src={data.url}
                      alt={data.title}
                      className={`${
                        data.bg ? "bg-white rounded-full" : "text-white"
                      } w-full h-full object-contain`}
                    />
                  </div>
                  {/* Judul */}
                  <p className="text-center text-sm">{data.title}</p>
                </div>
              );
            })}
          </>
        );
      case 2:
        return (
          <>
            {softSkill.map((data, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex flex-col gap-2 font-bold w-28 h-28 justify-center items-center rounded-lg p-4 text-white hover:bg-white hover:bg-opacity-40 hover:cursor-pointer`}>
                  <div className="w-16 h-16">
                    <img
                      src={data.url}
                      alt={data.title}
                      className={`${
                        data.bg ? "bg-white rounded-full" : "text-white"
                      } w-full h-full object-contain`}
                    />
                  </div>
                  {/* Judul */}
                  <p className="text-center text-sm">{data.title}</p>
                </div>
              );
            })}
          </>
        );
      case 3:
        return (
          <>
            {desainSkill.map((data, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex flex-col gap-2 font-bold w-28 h-28 justify-center items-center rounded-lg p-4 text-white hover:bg-white hover:bg-opacity-40 hover:cursor-pointer`}>
                  <div className="w-16 h-16">
                    <img
                      src={data.url}
                      alt={data.title}
                      className={`${
                        data.bg ? "bg-white rounded-full" : "text-white"
                      } w-full h-full object-contain`}
                    />
                  </div>
                  {/* Judul */}
                  <p className="text-center text-sm">{data.title}</p>
                </div>
              );
            })}
          </>
        );
      case 0:
        return (
          <>
            <div
              className="text-white flex flex-col items-center w-28 h-max hover:bg-white hover:bg-opacity-40 hover:cursor-pointer"
              onClick={() => {
                props.setSkillpage(1);
              }}>
              <img src={folderIcon} alt="" />
              <p>Technical Skills</p>
            </div>
            <div
              className="text-white flex flex-col items-center w-28 h-max hover:bg-white hover:bg-opacity-40 hover:cursor-pointer"
              onClick={() => {
                props.setSkillpage(2);
              }}>
              <img src={folderIcon} alt="" />
              <p>Soft Skills</p>
            </div>
            <div
              className="text-white flex flex-col items-center w-28 h-max hover:bg-white hover:bg-opacity-40 hover:cursor-pointer"
              onClick={() => {
                props.setSkillpage(3);
              }}>
              <img src={folderIcon} alt="" />
              <p>Desain Skill</p>
            </div>
          </>
        );
    }
  };
  return (
    <div className="flex-[10] grid grid-cols-5 gap-4 py-4 pl-4 w-full overflow-y-scroll scrollbar-custom overflow-hidden">
      {renderPageContent()}
    </div>
  );
};

export default Skills;
