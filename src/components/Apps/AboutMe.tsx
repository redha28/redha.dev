import { useState } from "react";
import Folder from "../../images/icon/folder.png";
import DetailAboutMe from "../Details/DetailAboutMe";

type AboutMeProps = {
  setDragable: React.Dispatch<React.SetStateAction<boolean>>;
};

function AboutMe(props: AboutMeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSetDragable = (dragable: boolean) => {
    props.setDragable(dragable);
  };

  return (
    <>
      <div
        className="h-[100%] w-[100%] flex flex-col justify-center items-center p-1 
              hover:bg-white hover:opacity-75
              rounded-lg shadow-lg text-white hover:text-primary cursor-pointer"
        onDoubleClick={() => {
          setIsOpen(true);
          handleSetDragable(false);
        }}>
        <img
          src={Folder}
          alt="About Me"
          className="no-drag"
          draggable={false}
          width={50}
          height={50}
        />
        <p className="font-bold">AboutMe</p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center"
          draggable={false}>
          <DetailAboutMe
            setDragable={props.setDragable}
            setIsOpen={setIsOpen}
          />
        </div>
      )}
    </>
  );
}

export default AboutMe;
