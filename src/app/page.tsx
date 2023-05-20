import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import Image from 'next/image'
import camila from './public/camila.jpeg'

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Stefany Noguera</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
          </ul>
        </nav>

        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Stefany Noguera</h2>
          <h3 className="text-2xl py-2">Fullstack Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="#"><AiFillTwitterCircle/></a>
          <a href="#"><AiFillGithub/></a>
          <a href="#"><AiFillLinkedin/></a>
        </div>
        <div>
          {/* <Image src={camila} alt="Picture of the author" /> */}
          <Image
            src="/camila.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </section>
    </main>
  )
}
