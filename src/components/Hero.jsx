import hero from "../assets/hero2-min.jpg";

function Hero() {
  return (
    <div>
      <main className="flex sm:flex-row flex-col justify-between items-center xl:mx-14 md:mx-7 sm:mx-4">
        <h1 className="xl:text-7xl lg:text-5xl md:text-3xl sm:text-xl text-3xl pb-20 sm:pb-0 px-4 sm:pr-5 font-black text-center">
          Eat the food that make you feel delecious
        </h1>
        <img
          src={hero}
          alt="hero-1.png"
          className="xl:h-[35rem] xl:w-[35rem] lg:h-[30rem] lg:w-[30rem] md:h-[25rem] md:w-[25rem] h-[20rem] w-[20rem]"
        />
      </main>
    </div>
  );
}

export default Hero;
