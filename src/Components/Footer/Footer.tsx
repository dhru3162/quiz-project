import Link from 'next/link'
import Logo from '../Logo/Logo'
import Style from "./Footer.module.scss"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className={`bg-black ${Style.textColor} space-y-7 py-12`}>
            <div className="flex justify-center">
                <Logo className={`${Style.textColor}`} white />
            </div>
            <div className="flex justify-center">
                <Link href={`mailto:quizwiz.app.contact@gmail.com`} className="text-lg">
                    Email: quizwiz.app.contact@gmail.com
                </Link>
            </div>
            <div className="flex justify-center">
                <Link href={`/contact-us`} >
                    Contact Us
                </Link>
            </div>
            <div className="flex justify-center items-center gap-2">
                <p>
                    Follow Admin :
                </p>
                <Link href={`https://bit.ly/Github-dhruviramgama`} target='_block'>
                    <FaGithub className="w-[22px] h-[22px]" />
                </Link>
                <Link href={`https://bit.ly/Linkedin-dhruviramgama`} target='_block'>
                    <FaLinkedin className="w-[22px] h-[22px]" />
                </Link>
            </div>
            <div className="text-center text-xs">
                © {new Date().getFullYear()} QuizWiz. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
