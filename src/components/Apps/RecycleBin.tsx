import recycleBin from "../../images/icon/recyclebin.png";

const RecycleBin = () => {
  return (
    <div
      className="h-[100%] w-[100%] flex flex-col justify-center items-center p-1 
            hover:bg-white hover:opacity-75
            rounded-lg shadow-lg text-white hover:text-primary">
      <img
        src={recycleBin}
        alt="Recycle Bin"
        draggable={false}
        width={50}
        height={50}
      />
      <p className="font-bold">RecycleBin</p>
    </div>
  );
};

export default RecycleBin;
