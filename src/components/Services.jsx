import { services } from "@/constants";
import Image from "next/image";

export default function Services() {
  return (
    <div className="my-24">
      <div className="text-center mb-6 space-y-3">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[50px]">
          Services
        </h2>
        <p className="max-w-screen-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          delectus, in incidunt quas dolores quo dolorum deleniti aspernatur
          doloremque quos?
        </p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 md:gap-8 lg:gap-6">
        {services.map((service) => (
          <div
            className="bg-lightRed flex flex-col items-center justify-center px-4 py-12 gap-5"
            key={service.id}
          >
            <Image src={service.img} alt="service image" />
            <h3 className="font-semibold text-base sm:text-xl md:text-2xl text-center">{service.title}</h3>
            <p className="text-sm sm:text-base md:text-lg text-center">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
