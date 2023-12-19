import Image from 'next/image'
import ProfileImg from '../../public/p2.png'
import { BsMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

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
              <a href="https://drive.google.com/file/d/160V2moJmuB0Lacmc4P_4eiUn_cBUFphC/view?usp=sharing"
                download={"resume"}
                className=' bg-yellow-400 text-black px-4 py-2 border-none rounded-md'>Resume</a>
            </li>
          </ul>
        </nav>

        <div className=' text-center p-10' >
          <h1 className='text-5xl font-bold text-yellow-400'>Dimuthu Lakshan</h1>
          <h3 className='text-2xl py-4'>Mobile Apps and Website developer</h3>
          <p className='text-sm py-4 text-gray-400 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Consequatur nobis, temporibus, magni ea accusamus eos aut, consectetur velit exercitationem qui non in assumenda saepe deserunt
            officia doloremque ipsam hic. Quisquam.</p>
        </div>

        <div className=' text-5xl flex justify-center gap-16 text-gray-600'>
          <a href=""> <FaFacebook /></a>
          <a href="https://github.com/idlakshan"> <FaGithub /></a>
          <a href=""><FaLinkedin /></a>
        </div>

        <div className=' m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 mt-20 rounded-full'>
          <Image src={ProfileImg} alt='profile image' layout='fill' objectFit='cover'/>
        </div>



      </section>

    </main>
  )
}
