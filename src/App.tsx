import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import background from "./images/background/background.png";
import Calculator from "./components/Apps/Calculator";
import Explorer from "./components/Apps/Explorer";
import AboutMe from "./components/Apps/AboutMe";
import Footer from "./components/Footer";
import RecycleBin from "./components/Apps/RecycleBin";
import { IoMdRefresh } from "react-icons/io";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaFileCirclePlus } from "react-icons/fa6";
import { AiOutlineFullscreen } from "react-icons/ai";

function App() {
  const gridRef = useRef(null);
  const [dragable, setDragable] = useState(true);
  const [windows] = useState(() => {
    const apps = [RecycleBin, Explorer, Calculator, AboutMe]; // Store the component reference directly
    return apps.map((App, index) => {
      const col = Math.floor(index / 8); // Kolom dalam grid
      const row = Math.floor(index % 8); // Baris dalam grid

      return {
        id: index + 1,
        title: `Window ${index + 1}`,
        row: row + 1,
        col: col + 1,
        app: App,
      };
    });
  });

  // Right-click menu handler
  const windowsMenu = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default right-click menu

    const menu = document.getElementById("custom-context-menu");
    if (menu) {
      // Get the current screen width and height
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Menu dimensions
      const menuWidth = menu.offsetWidth;
      const menuHeight = menu.offsetHeight;

      // Calculate the position of the menu, ensuring it stays within bounds
      let menuX = event.pageX;
      let menuY = event.pageY;

      // If the menu is too far right, move it left
      if (event.pageX + menuWidth > screenWidth) {
        menuX = screenWidth - menuWidth - 10; // 10px padding from the right edge
      }

      // If the menu is too far down, move it up
      if (event.pageY + menuHeight > screenHeight) {
        menuY = screenHeight - menuHeight - 10; // 10px padding from the bottom edge
      }

      // Set the menu position and display it
      menu.style.left = `${menuX}px`;
      menu.style.top = `${menuY}px`;
      menu.style.display = "block";
    }
  };

  // Hide the context menu when clicking anywhere else
  const closeMenu = () => {
    const menu = document.getElementById("custom-context-menu");
    if (menu) {
      menu.style.display = "none";
    }
  };

  return (
    <main
      className="min-h-screen w-full relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
      onContextMenu={windowsMenu}
      onClick={closeMenu}>
      {/* Custom Context Menu */}
      <div
        id="custom-context-menu"
        className="absolute hidden bg-black rounded-lg px-2 py-2 shadow-lg">
        <div className="text-white flex gap-4 items-center w-full px-4 py-2 hover:bg-white hover:text-black rounded-sm hover:cursor-pointer">
          <FaSortAlphaDown />
          <p>Sort By</p>
        </div>
        <div className="text-white flex gap-4 items-center w-full px-4 py-2 hover:bg-white hover:text-black rounded-sm hover:cursor-pointer">
          <IoMdRefresh />
          <p>Refresh</p>
        </div>
        <div className="text-white flex gap-4 items-center w-full px-4 py-2 hover:bg-white hover:text-black rounded-sm hover:cursor-pointer">
          <FaFileCirclePlus />
          <p>New Note</p>
        </div>
        <div className="text-white flex gap-4 items-center w-full px-4 py-2 hover:bg-white hover:text-black rounded-sm hover:cursor-pointer">
          <AiOutlineFullscreen />
          <p>FullScreen</p>
        </div>
      </div>

      <div
        className="h-[94vh] w-full overflow-hidden grid grid-cols-16 grid-rows-8 gap-4 pl-2 pt-2"
        ref={gridRef}>
        {windows.map((window) => (
          <motion.div
            key={window.id}
            drag={dragable}
            dragMomentum={false}
            dragConstraints={gridRef}
            style={{
              gridRow: window.row,
              gridColumn: window.col,
            }}
            transformTemplate={(_, generatedTransform) => {
              if (dragable) {
                return generatedTransform;
              } else {
                return "";
              }
            }}>
            <div className="h-full w-full">
              <window.app setDragable={setDragable} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
