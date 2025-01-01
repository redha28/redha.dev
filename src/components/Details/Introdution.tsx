import anime from "../../images/anime.jpg";

function Introdution() {
  return (
    <div className="flex-[10] flex-row flex py-4 px-4 w-full">
      <div className="flex-1 flex justify-center items-center">
        <img
          src={anime}
          alt=""
          width={200}
          height={"auto"}
          className="rounded-lg hover:border hover:scale-95"
        />
      </div>
      <div className="text-gray-300 flex-[2] flex justify-center flex-col gap-3">
        <h1 className="text-2xl font-bold border-b-2">About Me</h1>
        <p>
          In early 2023, I started my journey by joining a bootcamp program at
          <span className="text-white font-bold border-b-2"> Fazztrack.</span> I
          started with JavaScript and frameworks like ReactJS, NextJS, then in
          2024 I started Golang, Docker, and TypeScript.
        </p>
      </div>
    </div>
  );
}

export default Introdution;
