import { Headphones } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { SiTailwindcss, SiVercel, SiReact } from "react-icons/si"
// import Lofi from "./components/Card";
import Card from "./components/Card";

function Home() {
  const soundFiles = [
    'lofi1.mp3',
    'lofi2.mp3',
    'lofi3.mp3',
    'lofi4.mp3',
    'lofi5.mp3',
    'lofi6.mp3',
    'lofi7.mp3',
    'lofi8.mp3',
  ];

  const randomIndex = Math.floor(Math.random() * soundFiles.length);

  const audioSrc = `assets/lofi-sounds/${soundFiles[randomIndex]}`;

  return (
    <div className="flex flex-col">
      <nav className="flex fixed w-full items-center p-5 justify-between border-slate-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10">

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
        <header className="flex font-bold mt-20 justify-center text-4xl md:text-5xl lg:text-6xl">
          <div className="flex gap-2">
            <span className="animate-text1 bg-gradient-to-r from-title-1-start-color-100 via-title-1-middle-color-100 to-title-1-end-color-100 bg-clip-text font-black text-transparent">relax.</span>

            <span className="animate-text2 bg-gradient-to-r from-title-2-start-color-200 to-title-2-end-color-200 bg-clip-text font-black text-transparent">chill.</span>

            <span className="animate-text3 bg-gradient-to-r from-title-3-start-color-300 to-title-3-end-color-300 bg-clip-text font-black text-transparent">code.</span>

          </div>
        </header>

        <section className="mx-auto grid grid-cols-2 gap-5 lg:grid-cols-3
        px-10 py-8
        " >
          <Card imageSrc="/assets/images/lofi.png" imageAlt="lofi" audioSrc={audioSrc} />

          {/* <Lofi imageSrc="/assets/images/forest.png" imageAlt="forest" audioSrc="/assets/ambient-sounds/forest.mp3" /> */}

          <Card imageSrc="/assets/images/forest.png" imageAlt="forest" audioSrc="/assets/ambient-sounds/forest.mp3" />

          <Card imageSrc="/assets/images/fireplace.png" imageAlt="fireplace" audioSrc="/assets/ambient-sounds/campfire.mp3" />

          <Card imageSrc="/assets/images/rain.png" imageAlt="rain" audioSrc="/assets/ambient-sounds/rain.mp3" />

          <Card imageSrc="/assets/images/beach.png" imageAlt="beach" audioSrc="/assets/ambient-sounds/waves.mp3" />

          <Card imageSrc="/assets/images/office.png" imageAlt="office" audioSrc="/assets/ambient-sounds/office.mp3" />

          <Card imageSrc="/assets/images/coffee.png" imageAlt="coffee" audioSrc="/assets/ambient-sounds/coffee-shop.mp3" />

          <Card imageSrc="/assets/images/metro.png" imageAlt="metro" audioSrc="/assets/ambient-sounds/train-station.mp3" />

          <Card imageSrc="/assets/images/city.png" imageAlt="city" audioSrc="/assets/ambient-sounds/city.mp3" />

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
