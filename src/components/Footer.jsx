import { Facebook, Instagram, LinkedIn, Twitter } from "../../public/assets";

export default function Footer() {
  return (
    <div className="py-16">
      <div className="flex flex-col gap-9 justify-center items-center">
      <div className="">
          {/* <img src={logo} alt="" className="w-[100px]" /> */}
          <a href="/">
            <p className="font-bold text-2xl md:text-3xl text-[#493C3B]">
              <span className="text-accentRed">F</span>
              athi
            </p>
          </a>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
          <li className="text-xl font-medium">Home</li>
          <li className="text-xl font-medium">About Us</li>
          <li className="text-xl font-medium">Services</li>
          <li className="text-xl font-medium">Projects</li>
          <li className="text-xl font-medium">Testimonials</li>
          <li className="text-xl font-medium">Contact</li>
        </ul>

        <div className="flex gap-8">
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
        </div>
      </div>
    </div>
  );
}
