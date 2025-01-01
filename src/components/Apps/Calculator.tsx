import calculator from "../../images/icon/calculator.png";
function Calculator() {
  return (
    <div
      className="h-[100%] w-[100%] flex flex-col justify-center items-center p-1 
            hover:bg-white hover:opacity-75
            rounded-lg shadow-lg text-white hover:text-primary">
      <img
        src={calculator}
        alt="Recycle Bin"
        draggable={false}
        width={50}
        height={50}
      />
      <p className="font-bold">Calculator</p>
    </div>
  );
}

export default Calculator;
