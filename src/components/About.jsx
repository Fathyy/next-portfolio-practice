import Image from "next/image";
import { blob, profilePhoto } from "../../public/assets";

export default function About() {
  const skills = [
    { name: "UX Design", level: "75" },
    { name: "App Design", level: "85" },
    { name: "Graphic Design", level: "90" },
    { name: "Web Design", level: "80" },
  ];

  return (
    <div className="my-18">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        <div className="relative w-full md:w-1/2">
          <Image src={blob} alt="blob" className="w-full h-full object-cover" />
          <Image src={profilePhoto} alt="profile" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-1/2 rounded-full" />
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 space-y-">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[50px]">
            About me
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.
          </p>

          {/* Skills Section */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black">
                      {skill.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-500">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-red-600"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
