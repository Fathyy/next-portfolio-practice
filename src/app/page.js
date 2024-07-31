import { About, Copyright, Footer, Hero, Navbar, Projects, Services, Testimonials } from "@/components";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/assets/bg.jpg')] bg-cover bg-center w-full">
        <div className="mx-auto w-full container sm:px-16 px-6">
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className="mx-auto w-full container sm:px-16 px-6">
        <About />
        <Services />
        <Projects />
      </div>

      <div className="bg-accentRed">
        <div className="mx-auto w-full container sm:px-16 px-6">
          <Testimonials />
        </div>
      </div>

      <div className="bg-lightRed">
        <div className="mx-auto w-full container sm:px-16 px-6">
          <Footer />
        </div>
      </div>
      <Copyright />
    </>
  );
}
