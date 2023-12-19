import Image from 'next/image'
import { BsMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (

    <main className="font-poppins bg-yellow-50 min-h-screen px-10">

      <section>
        <nav className='py-10 flex justify-between'>
          <h1 className=' text-sm'>Developed by Dimuthu Lakshan</h1>
          <ul className=' flex items-center'>
            <li>
              <BsMoonStarsFill className=" cursor-pointer text-xl mx-5" />
            </li>

            <li>
              <a href="" className=' bg-yellow-400 text-black px-4 py-2 border-none rounded-md'>Resume</a>
            </li>
          </ul>
        </nav>



      </section>

    </main>
  )
}
