import { projects } from "@/constants";
import { firstOne, firstSecond, secondOne, secondSecond, thirdOne, thirdSecond } from "../../public/assets";
import Image from "next/image";


export default function Projects() {
  return (
    <div className="my-24">
      <div className="text-center mb-6 space-y-3">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[50px]">
          Projects
        </h2>
        <p className="max-w-screen-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          delectus, in incidunt quas dolores quo dolorum deleniti aspernatur
          doloremque quos?
        </p>
      </div>

      {/* tags section */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-lightRed p-2">
            <p>{project.title}</p>
          </div>
        ))}
      </div>

      {/* projects images section */}
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-12 mt-12">
        <div className="bg-lightRed relative">
          <Image src={firstOne} alt="projects" className="object-cover object-right top-0 left-0 z-10" />
          <Image src={firstSecond} alt="projects" className="absolute object-cover object-right top-0 left-0 z-20 mt-32" />
        </div>

        <div className="bg-lightRed relative">
          <Image src={secondOne} alt="projects" className="object-cover object-right top-0 left-0 z-10" />
          <Image src={secondSecond} alt="projects" className="absolute object-cover object-right top-0 left-0 z-20 mt-32" />
        </div>

        <div className="bg-lightRed relative">
          <Image src={thirdOne} alt="projects" className="object-cover object-right top-0 left-0 z-10" />
          <Image src={thirdSecond} alt="projects" className="absolute object-cover object-right top-0 left-0 z-20 mt-32" />
        </div>
      </div>
    </div>
  );
}
