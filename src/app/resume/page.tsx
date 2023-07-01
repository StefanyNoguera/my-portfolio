'use client';

import {BsFillMoonStarsFill} from "react-icons/bs";
import { useState } from "react";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-lg dark:text-gray-300 ">Stefany Noguera</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-gray-100"/></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/">Portfolio</a></li>
            </ul>
          </nav>

          <div className="m-3">
            <h1 className="text-center text-2xl md:text-3xl py-8  text-teal-600 font-medium">STEFANY NOGUERA</h1>

            <div className="">
              <h3 className="dark:text-gray-100">Medellín, Colombia.</h3>
              <h3 className="dark:text-gray-100">stefanynoguerar@gmail.com</h3>
            </div>

            <h1 className="text-center text-xl py-8  text-teal-600 font-medium">ABOUT ME</h1>
            <p className="dark:text-gray-300">
              I am a motivated full-stack developer with a strong academic background in web development and practical experience gained
              from completing a full-stack web development course at Le Wagon in Bali, Indonesia.
              Originally from Venezuela and currently residing in Colombia, I am eager to kickstart my career as a full-stack developer
              and apply my passion for problem-solving and eagerness to learn new technologies to any software development team.
            </p>

            <h1 className="text-center text-xl py-8  text-teal-600 font-medium">EDUCATION</h1>
            <p className="dark:text-gray-100 text-center">
              LE WAGON, BALI, INDONESIA — WEB DEVELOPMENT BOOTCAMP, 2023
            </p>

            <h1 className="text-center text-xl py-8  text-teal-600 font-medium">PROJECTS</h1>
            <div className="text-center mb-3">
              <a className="dark:text-gray-100" href="HTTPS://THE-LUXURY-COLLECTION.HEROKUAPP.COM/">HTTPS://THE-LUXURY-COLLECTION.HEROKUAPP.COM/</a>
            </div>
            <p className="dark:text-gray-300">
            The Luxury Collection is an e-commerce website in progress built on the Ruby on Rails
            framework that specialises in selling luxury clothing items.
            </p>

            <h1 className="text-center text-xl py-8  text-teal-600 font-medium">SKILLS</h1>
            <ul className="flex justify-between  dark:text-gray-300">
              <li>・Ruby on Rails</li>
              <li>・CSS/HTML</li>
              <li>・SQL</li>
              <li>・Javascript</li>
              <li>・Github</li>
              <li>・UX/UI Design</li>
              <li>・APIs</li>
            </ul>

            <h1 className="text-center text-xl py-8  text-teal-600 font-medium">VOLUNTEER WORK</h1>

            <div className="text-center">
              <h3 className="dark:text-gray-100">RECEPTIONIST, LA REDONDA HOSTEL; SAYULITA, MÉXICO — FEB 2022-MAR 2022</h3>
              <ul className="dark:text-gray-300 mb-3">
                <li>・Greeted and directed visitors.</li>
                <li>・Answered phone calls and managed appointments and schedules.</li>
                <li>・Demonstrated excellent communication and organisational skills.</li>
                <li>・Maintained a calm and professional demeanour in a fast-paced environment.</li>
              </ul>

              <h3 className="dark:text-gray-100">FUN HOST, MAYAN MONKEY HOSTEL; CANCÚN, MÉXICO — AUG 2021-OCT 2021</h3>
              <ul className="dark:text-gray-300">
                <li>・Created a fun and engaging environment for guests.</li>
                <li>・Managed activities and events for guests.</li>
                <li>・Demonstrated excellent communication and interpersonal skills.</li>
                <li>・Adapted to changing circumstances and thought creatively to improve guest experience.</li>
              </ul>
            </div>

            <h1 className="text-center text-xl py-8  text-teal-600 font-medium">LANGUAGES SPOKEN</h1>

            <ul className="flex justify-between dark:text-gray-300">
              <li>・Spanish (native)</li>
              <li>・English (proficient)</li>
              <li>・French (intermediate)</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
