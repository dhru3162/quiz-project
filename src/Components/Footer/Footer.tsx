import Logo from "../Logo/Logo"
import Style from './Footer.module.scss'

function Footer() {
  return (
    <footer className={`bg-black ${Style.textColor} space-y-7 py-12`}>
      <div className="flex justify-center">
        <Logo className={`${Style.textColor}`} white/>
      </div>
      <div className="text-center text-lg">
        Email: info@QuizWiz.com
      </div>
      <div className="text-center text-xs">
        © 2024 QuizWiz. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer