import Image from "next/image";
import { profilePhoto } from "../../public/assets";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
      <div className="space-y-6 self-center text-center lg:text-start mt-12 lg:mt-0">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-lightWhite lg:leading-[80px]">
          Hi, I am Fathi
        </h1>
        <h3 className="text-xl sm:text-2xl text-lightWhite font-bold md:text-3xl lg:text-4xl lg:leading-[40px]">
          Freelance Frontend Developer
        </h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-lightWhite lg:leading-[29px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          blanditiis eveniet delectus earum atque dolore porro veritatis
          obcaecati numquam non?
        </p>
        <div className="flex justify-center lg:justify-start gap-6">
          <button className="bg-accentRed px-4 py-2 sm:px-12 sm:py-3 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold border-none outline-none hover:bg-lightBlue transform hover:scale-110 transition-all duration-200">
            Hire Me
          </button>
          <button className="bg-lightWhite px-4 py-2 sm:px-12 sm:py-3 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold border-none outline-none hover:bg-lightBlue transform hover:scale-110 transition-all duration-200">
            Contact Me
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start">
        <Image src={profilePhoto} alt="hero image"/>
      </div>

      {/* <div className="">
      </div> */}
    </div>
  );
}
