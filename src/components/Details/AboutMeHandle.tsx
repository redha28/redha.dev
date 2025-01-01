import Educations from "./Educations";
import Introdution from "./Introdution";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import rIcon from "../../images/icon/r-icon.jpg";
import eduIcon from "../../images/icon/edu.png";
import skillsIcon from "../../images/icon/skills.png";
import myStuffsIcon from "../../images/icon/projects.png";
import resumeIcon from "../../images/icon/resume.png";

type PropsAboutMeHandle = {
  page: string;
  skillPage: number;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setPrevPage: React.Dispatch<React.SetStateAction<string>>;
  setSkillPage: React.Dispatch<React.SetStateAction<number>>;
};

const AboutMeHandle = (props: PropsAboutMeHandle) => {
  const handlePage = (value: string) => {
    props.setPage((prev: string) => {
      props.setPrevPage(prev);
      return prev;
    });
    return props.setPage(value);
  };
  const renderPageContent = () => {
    switch (props.page) {
      case "Introdutions":
        return <Introdution />;
      case "Education":
        return <Educations />;
      case "Skills":
        return (
          <Skills
            setPrevPage={props.setPrevPage}
            Skillpage={props.skillPage}
            page={props.page}
            setSkillpage={props.setSkillPage}
          />
        );
      case "Projects":
        return <Projects />;
      case "Resume":
        return <Resume />;
      case "Home":
        return (
          <div className="flex-[10] flex flex-col gap-4 py-4 px-4 w-full">
            <span
              className="flex w-full items-center gap-2 text-white px-1 py-4 hover:bg-white hover: bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md"
              onClick={() => {
                handlePage("Introdutions");
              }}>
              <img
                src={rIcon}
                alt=""
                width={30}
                height={30}
                className="rounded-lg"
              />
              <p>Introdution</p>
            </span>
            <span
              className="flex items-center gap-2 text-white px-1 py-4 hover:bg-white hover: bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md"
              onClick={() => {
                handlePage("Education");
              }}>
              <img src={eduIcon} alt="" width={30} height={30} />
              <p>Education</p>
            </span>
            <span
              className="flex items-center gap-2 text-white px-1 py-4 hover:bg-white hover: bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md"
              onClick={() => {
                handlePage("Skills");
                props.setSkillPage(0);
              }}>
              <img src={skillsIcon} alt="" width={30} height={30} />
              <p>Skills</p>
            </span>
            <span
              className="flex items-center gap-2 text-white px-1 py-4 hover:bg-white hover: bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md"
              onClick={() => {
                handlePage("Projects");
              }}>
              <img src={myStuffsIcon} alt="" width={30} height={30} />
              <p>Projects</p>
            </span>
            <span
              className="flex items-center gap-2 text-white px-1 py-4 hover:bg-white hover: bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md"
              onClick={() => {
                handlePage("Resume");
              }}>
              <img src={resumeIcon} alt="" width={30} height={30} />
              <p>Resume</p>
            </span>
          </div>
        );
    }
  };
  return <>{renderPageContent()}</>;
};

export default AboutMeHandle;
