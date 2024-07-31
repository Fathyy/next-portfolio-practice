import { testimonials } from "@/constants";
import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";

export default function Testimonials() {
  return (
    <div className="py-20">
      <div className="text-center mb-24 space-y-3 text-white">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[50px]">
          Testimonials
        </h2>
        <p className="max-w-screen-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          delectus, in incidunt quas dolores quo dolorum deleniti aspernatur
          doloremque quos?
        </p>
      </div>

      {/* testimonials */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-20 grid-cols-1 lg:gap-4">
        {testimonials.map((testimony) => (
          <div
            key={testimony.id}
            className="relative flex flex-col items-center p-4 space-y-8 border border-black rounded-2xl"
          >
            <Image
              src={testimony.img}
              alt="testimony"
              className="absolute top-[-30%] w-[100px] h-[100px] rounded-full border border-b-2"
            />
            <p className="text-center text-white">{testimony.content}</p>
            <div className="flex">
              <IoIosStarOutline style={{ color: "white" }} />
              <IoIosStarOutline style={{ color: "white" }} />
              <IoIosStarOutline style={{ color: "white" }} />
              <IoIosStarOutline style={{ color: "white" }} />
              <IoIosStarOutline style={{ color: "white" }} />
            </div>
          </div>
        ))}
      </div>

      {/* contact form section */}
      <div className="mt-16">
        <div className="text-center mb-14 space-y-3 text-white">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[50px]">
            Contact Me
          </h2>
          <p className="max-w-screen-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            delectus, in incidunt quas dolores quo dolorum deleniti aspernatur
            doloremque quos?
          </p>
        </div>

        <div className="max-w-screen-md mx-auto">
          <form action="">
            <div className="flex gap-4 items-center">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email"
                className="bg-white px-2 py-4 lg:px-4 lg:py-6 rounded-lg flex-1 outline-none border-none"
              />
              <button className="bg-[#493C3B] px-2 py-4 lg:px-4 lg:py-6 rounded-lg text-white text-lg font-semibold outline-none border-none">
                Contact Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
