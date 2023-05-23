'use client';

import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import Image from 'next/image';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">

          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-gray-300">Stefany Noguera</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-100"/></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>

          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Stefany Noguera</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-100">Fullstack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 pt-3 text-gray-600 dark:text-gray-100">
            <a href="#"><AiFillTwitterCircle/></a>
            <a href="#"><AiFillGithub/></a>
            <a href="#"><AiFillLinkedin/></a>
          </div>

          <div className="relative mx-auto rounded-full m-20 flex justify-center h-80 w-80 md:h-96 md:w-96">
            <Image
              src="/camila.jpeg"
              fill="responsive"
              object-fit= "cover"
              className="rounded-full"
              alt="Picture of the author"
            />
          </div>
        </section>

        <section>

          <div>
            <h3 className="text-3xl py-8  text-teal-600 font-medium ">Services I offer</h3>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 mb-5 rounded-xl dark:bg-white">
              <div className="flex justify-center">
                <Image
                  src="/camila.jpeg"
                  width={150}
                  height={150}
                  object-fit= "cover"
                  className="rounded-full"
                  alt="Picture of the author"
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 my-10">Beautiful Design</h3>
              <p className="py-2">Creating beautiful designs tailored for your needs.</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800  py-1">Photoshop</p>
              <p className="text-gray-800  py-1">Figma</p>
              <p className="text-gray-800  py-1">Illustrator</p>
            </div>

            <div className="text-center shadow-lg p-10 mb-5 rounded-xl dark:bg-white">
              <div className="flex justify-center">
                <Image
                  src="/camila.jpeg"
                  width={150}
                  height={150}
                  object-fit= "cover"
                  className="rounded-full"
                  alt="Picture of the author"
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 my-10">Beautiful Design</h3>
              <p className="py-2">Creating beautiful designs tailored for your needs.</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800  py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>

            <div className="text-center shadow-lg p-10 mb-5 rounded-xl dark:bg-white">
              <div className="flex justify-center">
                <Image
                  src="/camila.jpeg"
                  width={150}
                  height={150}
                  object-fit= "cover"
                  className="rounded-full"
                  alt="Picture of the author"
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 my-10">Beautiful Design</h3>
              <p className="py-2">Creating beautiful designs tailored for your needs.</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>

          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-8 text-teal-600 font-medium">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>
          </div>

          <div className= "flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src="/web1.png"
                width= {500}
                height={400}
                alt="Picture of the author"
                className="rounded-lg object-cover"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src="/web1.png"
                width={500}
                height={400}
                alt="Picture of the author"
                className="rounded-lg object-cover"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src="/web1.png"
                width={500}
                height={400}
                alt="Picture of the author"
                className="rounded-lg object-cover"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src="/web1.png"
                width={500}
                height={400}
                alt="Picture of the author"
                className="rounded-lg object-cover"
              />
            </div>
          </div>

        </section>
      </main>
    </div>
  )
}
