import { FiHome } from "react-icons/fi";
import { FaImage } from "react-icons/fa6";
import rIcon from "../../images/icon/r-icon.jpg";
import eduIcon from "../../images/icon/edu.png";
import skillsIcon from "../../images/icon/skills.png";
import myStuffsIcon from "../../images/icon/projects.png";
import resumeIcon from "../../images/icon/resume.png";

type PropsExplorerNav = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setPrevPage: React.Dispatch<React.SetStateAction<string>>;
  setSkillPage: React.Dispatch<React.SetStateAction<number>>;
};

function HomeNav(props: PropsExplorerNav) {
  const handlePage = (value: string) => {
    props.setPage((prev: string) => {
      props.setPrevPage(prev);
      return prev;
    });
    props.setPage(value);
  };

  // console.log(props.page);
  return (
    <div className="flex-[2] w-full border-r-2 border-t-2 border-gray-400 p-3">
      <nav className="flex flex-col gap-4">
        <span
          className={`flex items-center gap-2 font-semibold p-1 rounded-md opacity-80 hover:bg-white hover:bg-opacity-80 hover:text-primary hover:cursor-pointer ${
            props.page === "Home" ? "bg-white text-primary" : "text-white"
          }`}
          onClick={() => {
            handlePage("Home");
            props.setSkillPage(0);
          }}>
          <FiHome />
          <p>Home</p>
        </span>
        <span
          className={`flex items-center gap-2 p-1 hover:bg-white hover:bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md ${
            props.page === "Image" ? "bg-white text-primary" : "text-white"
          }`}>
          <FaImage />
          <p>Image</p>
        </span>
        <div className="border border-gray-600"></div>
        {props.page !== "Home" && (
          <>
            <span
              className={`flex items-center gap-2 p-1 hover:bg-white hover:bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md ${
                props.page === "Introdutions"
                  ? "bg-white text-primary"
                  : "text-white"
              }`}
              onClick={() => {
                handlePage("Introdutions");
                props.setSkillPage(0);
              }}>
              <img
                src={rIcon}
                alt=""
                width={30}
                height={30}
                className="rounded-lg"
              />
              <p>Introduction</p>
            </span>
            <span
              className={`flex items-center gap-2 p-1 hover:bg-white hover:bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md ${
                props.page === "Education"
                  ? "bg-white text-primary"
                  : "text-white"
              }`}
              onClick={() => {
                handlePage("Education");
                props.setSkillPage(0);
              }}>
              <img src={eduIcon} alt="" width={30} height={30} />
              <p>Education</p>
            </span>
            <span
              className={`flex items-center gap-2 p-1 hover:bg-white hover:bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md ${
                props.page === "Skills" ? "bg-white text-primary" : "text-white"
              }`}
              onClick={() => {
                handlePage("Skills");
                props.setSkillPage(0);
              }}>
              <img src={skillsIcon} alt="" width={30} height={30} />
              <p>Skills</p>
            </span>
            <span
              className={`flex items-center gap-2 p-1 hover:bg-white hover:bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md ${
                props.page === "Projects"
                  ? "bg-white text-primary"
                  : "text-white"
              }`}
              onClick={() => {
                handlePage("Projects");
                props.setSkillPage(0);
              }}>
              <img src={myStuffsIcon} alt="" width={30} height={30} />
              <p>Projects</p>
            </span>
            <span
              className={`flex items-center gap-2 p-1 hover:bg-white hover:bg-opacity-80 hover:text-primary hover:cursor-pointer font-semibold rounded-md ${
                props.page === "Resume" ? "bg-white text-primary" : "text-white"
              }`}
              onClick={() => {
                handlePage("Resume");
                props.setSkillPage(0);
              }}>
              <img src={resumeIcon} alt="" width={30} height={30} />
              <p>Resume</p>
            </span>
          </>
        )}
      </nav>
    </div>
  );
}

export default HomeNav;
