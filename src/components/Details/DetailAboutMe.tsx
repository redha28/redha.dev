import Draggable from "react-draggable";
import { useRef, useState } from "react";
import HomeNav from "../Nav/ExplorerNav";
import HeaderExplorer from "../../layouts/Explorer/HeaderExplorer";
import AboutMeHandle from "./AboutMeHandle";

type DetailAboutMeProps = {
  setDragable: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function DetailAboutMe(props: DetailAboutMeProps) {
  const ref = useRef(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [page, setPage] = useState("Home");
  const [prevPage, setPrevPage] = useState("Home");
  const [skillPage, setSkillPage] = useState(0);

  return (
    <Draggable
      handle=".title-bar"
      nodeRef={ref}
      disabled={fullScreen}
      position={position}
      onStop={(_, data) => {
        setPosition({ x: data.x, y: data.y });
      }}>
      <div
        className={`${
          fullScreen
            ? `w-screen h-screen absolute top-0 right-0`
            : `w-[70%] h-[70%]`
        } bg-black  border-neutral-700 shadow-lg border-[1.5px] pointer-events-auto rounded-md flex flex-col`}
        ref={ref}>
        <HeaderExplorer
          setDragable={props.setDragable}
          setIsOpen={props.setIsOpen}
          setFullScreen={setFullScreen}
          setPosition={setPosition}
          fullScreen={fullScreen}
          setPage={setPage}
          prevPage={prevPage}
          page={page}
          setSkillPage={setSkillPage}
          skillPage={skillPage}
        />
        <div className="flex w-full h-full overflow-y-auto">
          <HomeNav
            setPage={setPage}
            page={page}
            setPrevPage={setPrevPage}
            setSkillPage={setSkillPage}
          />
          <AboutMeHandle
            setPage={setPage}
            page={page}
            setPrevPage={setPrevPage}
            skillPage={skillPage}
            setSkillPage={setSkillPage}
          />
        </div>
      </div>
    </Draggable>
  );
}

export default DetailAboutMe;
