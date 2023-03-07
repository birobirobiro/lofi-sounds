import { Headphones } from "@phosphor-icons/react";
import { SiTailwindcss, SiVercel, SiReact } from "react-icons/si"
import Card from "./components/Card";

function Home() {
  return (
    <div className="flex flex-col">
      <nav className="flex fixed w-full items-center p-5 justify-between border-slate-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">

        <div className="flex items-center gap-4">
          <a className="flex items-center gap-4" href="#">
            <Headphones size={32} />

            <h1 className="font-bold">lofi-sounds</h1>
          </a>
        </div>

        <ul className="flex">
          <a href="https://birobirobiro.dev"><li>
            <img src="/assets/logo.svg" alt="logo biro" width={30} height={30} /></li></a>
        </ul>
      </nav>

      <div className="flex w-full flex-col mx-auto">
        <header className="flex font-bold mt-20 lg:mb-10 justify-center text-4xl md:text-5xl lg:text-6xl">
          <div className="flex gap-4">
            <span className="animate-text1 bg-gradient-to-r from-title-1-start-color-100 via-title-1-middle-color-100 to-title-1-end-color-100 bg-clip-text font-black text-transparent">relax.</span>

            <span className="animate-text2 bg-gradient-to-r from-title-2-start-color-200 to-title-2-end-color-200 bg-clip-text font-black text-transparent">chill.</span>

            <span className="animate-text3 bg-gradient-to-r from-title-3-start-color-300 to-title-3-end-color-300 bg-clip-text font-black text-transparent">code.</span>

          </div>
        </header>

        <section className="mx-auto grid gap-6 md:grid-cols-3 lg:grid-cols-3
        p-10
        " >
          <Card imageSrc="/assets/images/lofi.jpeg" imageAlt="lofi" />

          <Card imageSrc="/assets/images/forest.jpeg" imageAlt="forest" />

          <Card imageSrc="/assets/images/fireplace.jpeg" imageAlt="fireplace" />

          <Card imageSrc="/assets/images/office.avif" imageAlt="office" />

          <Card imageSrc="/assets/images/metro.jpeg" imageAlt="metro" />

          <Card imageSrc="/assets/images/beach.jpeg" imageAlt="beach" />

          <Card imageSrc="/assets/images/rain.jpeg" imageAlt="rain" />

          <Card imageSrc="/assets/images/coffee.avif" imageAlt="coffee" />

          <Card imageSrc="/assets/images/city.jpeg" imageAlt="city" />

        </section>

        <footer className="h-full pt-20 pb-5 flex justify-center items-center">
          <p className="flex gap-2 items-center">

            Build with

            <a href="https://tailwindcss.com/" target="_blank">
              <SiTailwindcss
                size={20}
              />
            </a>

            <a href="https://vercel.com/" target="_blank">
              <SiVercel
                size={18}
              />
            </a>

            <a href="https://reactjs.org/" target="_blank">
              <SiReact
                size={20}
              />
            </a>

            &  🤍
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
