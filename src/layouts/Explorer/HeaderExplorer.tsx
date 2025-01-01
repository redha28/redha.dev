import iconR from "../../images/icon/r-icon.jpg";
import { IoClose } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import newIcon from "../../images/options/new.png";
import cutIcon from "../../images/options/cut.png";
import copyIcon from "../../images/options/copy.png";
import pasteIcon from "../../images/options/paste.png";
import renameIcon from "../../images/options/rename.png";
import shareIcon from "../../images/options/share.png";
import deleteIcon from "../../images/options/delete.png";
import sortIcon from "../../images/options/sort.png";
import viewIcon from "../../images/options/view.png";
import filterIcon from "../../images/options/filter.png";
import dotsIcon from "../../images/options/dots.png";
import detailsIcon from "../../images/options/details.png";
import { FiHome } from "react-icons/fi";

type PropsHeaderExplorer = {
  setDragable: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
  fullScreen: boolean;
  setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  prevPage: string;
  page: string;
  setSkillPage: React.Dispatch<React.SetStateAction<number>>;
  skillPage: number;
};

function HeaderExplorer(props: PropsHeaderExplorer) {
  const handleSetDragable = (dragable: boolean) => {
    props.setDragable(dragable);
  };
  const handleSetIsOpen = (isOpen: boolean) => {
    props.setIsOpen(isOpen);
  };

  const handleFullScreen = () => {
    props.setFullScreen((prev: boolean) => {
      const isFullScreen = !prev;

      if (isFullScreen) {
        // Reset position when entering fullscreen
        props.setPosition({ x: 0, y: 0 });
      }

      return isFullScreen;
    });
  };

  const handleBeforePage = () => {
    if (props.skillPage !== 0) {
      props.setSkillPage(0);
      props.setPage(props.page);
      return;
    }
    if (props.prevPage === "Home" && props.page === "Home") {
      // Jangan lakukan navigasi jika salah satu adalah "Home"
      return;
    }

    // Lakukan navigasi ke halaman sebelumnya
    props.setPage(props.prevPage);
  };

  return (
    <>
      <div className="title-bar">
        <div className="text-white h-9 w-full flex justify-end select-none">
          <div
            className="material-symbols-outlined hover:bg-neutral-800 mb-2 w-11 flex justify-center items-center text-xl"
            onClick={() => {
              handleSetDragable(true);
              handleSetIsOpen(false);
            }}>
            <FaMinus />
          </div>
          <div
            className="material-symbols-outlined hover:bg-neutral-800 mb-2 w-11 flex justify-center items-center text-sm"
            onClick={() => {
              handleFullScreen();
            }}>
            <FaRegSquare />
          </div>
          <div
            className="material-symbols-outlined hover:bg-red-700 mb-2 w-12 flex justify-center items-center text-xl"
            onClick={() => {
              handleSetDragable(true);
              handleSetIsOpen(false);
            }}>
            <IoClose />
          </div>
        </div>
      </div>
      <div className="content text-white select-none title-bar">
        <div className="absolute bg-neutral-800 top-[6.5px] h-[2em] left-[6px] w-60 rounded-t-lg flex">
          <div className="flex justify-between items-center w-full">
            <div className="pl-2 text-xs flex">
              <img
                draggable="false"
                src={iconR}
                alt="main icons"
                className="w-5 h-5 mr-2 rounded-sm"
              />
              <p>{props.page}</p>
            </div>
            <div className="material-symbols-outlined hover:bg-neutral-800 m-0.5 w-6 rounded-md flex justify-center items-center text-lg">
              <IoClose />
            </div>
          </div>
          <div className="material-symbols-outlined absolute left-60 ml-0.5 h-7 w-8 flex justify-center hover:bg-neutral-800 rounded-md items-center text-xl">
            <IoMdAdd />
          </div>
        </div>
        <div className="bg-neutral-800 w-full h-12 border-neutral-700 border-b-[1.5px] mt-1 flex">
          <div className="flex justify-around w-48 py-2 items-center">
            <button
              className={`material-symbols-outlined font-extralight text-xl  rounded-md 
                }`}
              onClick={handleBeforePage}>
              <FaArrowLeft
                className={`${
                  props.skillPage !== 0 ||
                  (props.page !== "Skills" && props.prevPage !== "Skills") ||
                  props.page !== props.prevPage
                    ? "text-white hover:bg-neutral-600 hover:bg-opacity-50"
                    : "text-gray-500 hover:cursor-default"
                }`}
              />
            </button>
            <div className="material-symbols-outlined font-extralight text-xl text-gray-500">
              <FaArrowRight />
            </div>
            <div className="material-symbols-outlined font-extralight text-xl text-gray-500 rounded-md">
              <FaArrowUp />
            </div>
            <div className="material-symbols-outlined font-extralight text-xl text-gray-500 rounded-md">
              <IoReloadOutline />
            </div>
          </div>
          <div className="flex bg-neutral-700 bg-opacity-50 my-1.5 rounded-md items-center text-sm px-2 mx-2 flex-grow gap-2 font-extralight">
            <div className="material-symbols-outlined font-extralight">
              <FiHome />
            </div>
            {props.page !== "Home" && (
              <div className="flex justify-center items-center gap-2 h-full">
                <MdNavigateNext />
                <p>{props.page}</p>
              </div>
            )}
            {props.skillPage !== 0 && (
              <div className="flex justify-center items-center gap-2 h-full">
                <MdNavigateNext />
                <p>
                  {{
                    1: "Technical Skills",
                    2: "Soft Skills",
                    3: "Design Skills",
                  }[props.skillPage] || "Unknown Skill"}
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-between bg-neutral-700 bg-opacity-50 my-1.5 rounded-md items-center text-sm px-4 mr-3 w-[19.3em]">
            <div className="opacity-80">Search About Me</div>
            <div className="material-symbols-outlined font-extralight text-sm">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="bg-neutral-900 w-full h-[3.4rem] border-neutral-700 border-b-[1.5px] flex justify-between">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-24 h-full text-xs gap-1 border-neutral-700 border-r-[1.5px] opacity-45">
              <img
                draggable="false"
                src={newIcon}
                alt="new"
                className="w-5 h-5"
              />
              New
              <div className="material-symbols-outlined text-sm">
                <MdExpandMore />
              </div>
            </div>
            <div className="flex h-full w-72 justify-around items-center border-neutral-700 border-r-[1.5px] opacity-45">
              <img
                draggable="false"
                src={cutIcon}
                alt="cut"
                className="h-5 w-5"
              />
              <img
                draggable="false"
                src={copyIcon}
                alt="copy"
                className="h-5 w-5"
              />
              <img
                draggable="false"
                src={pasteIcon}
                alt="paste"
                className="h-7 w-7"
              />
              <img
                draggable="false"
                src={renameIcon}
                alt="rename"
                className="h-5 w-5"
              />
              <img
                draggable="false"
                src={shareIcon}
                alt="share"
                className="h-5 w-5"
              />
              <img
                draggable="false"
                src={deleteIcon}
                alt="delete"
                className="h-5 w-5"
              />
            </div>
            <div className="flex h-full items-center w-72 justify-around border-neutral-700 border-r-[1.5px]">
              <div className="flex items-center justify-center h-full text-xs gap-1 opacity-45">
                <img
                  draggable="false"
                  src={sortIcon}
                  alt="sort"
                  className="w-5 h-5"
                />
                Sort
                <div className="material-symbols-outlined text-sm">
                  <MdExpandMore />
                </div>
              </div>
              <div className="flex items-center justify-center h-full text-xs gap-1 opacity-80">
                <img
                  draggable="false"
                  src={viewIcon}
                  alt="view"
                  className="w-5 h-5"
                />
                View
                <div className="material-symbols-outlined text-sm">
                  <MdExpandMore />
                </div>
              </div>
              <div className="flex items-center justify-center h-full text-xs gap-1 opacity-80">
                <img
                  draggable="false"
                  src={filterIcon}
                  alt="filter"
                  className="w-5 h-5"
                />
                Filter
                <div className="material-symbols-outlined text-sm">
                  <MdExpandMore />
                </div>
              </div>
            </div>
            <img
              draggable="false"
              src={dotsIcon}
              alt="dots"
              className="w-3.5 h-3.5 ml-4"
            />
          </div>
          <div className="flex items-center mr-8 text-xs">
            <img
              draggable="false"
              src={detailsIcon}
              alt="details"
              className="w-5 h-5 mr-1"
            />
            Details
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderExplorer;
