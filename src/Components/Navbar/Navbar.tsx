import Link from 'next/link'
import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation';
import Logo from '../Logo/Logo';
import ButtonTheme from '../Theme/Button/ButtonTheme';
import { Avatar } from 'evergreen-ui';
import { useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineHistory } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import DropdownTheme from '../Theme/Dropdown/DropdownTheme';
import Style from './Navbar.module.scss'
import { FaUsers } from 'react-icons/fa';
import { Context } from '../Context/ContextProvider';
import { PiChats } from 'react-icons/pi';

const Navbar = () => {
  const router = useRouter()
  const { loggedInData, role }: any = useSelector((state: any) => state.auth)
  const { LogOut } = useContext(Context)

  const userDropdown = [
    {
      label: 'Profile',
      value: 'profile',
      startContent: <CgProfile />,
      className: `${Style.textColor} hover:!text-[#0C356A]`,
    },
    {
      label: 'History',
      value: 'history',
      startContent: <MdOutlineHistory />,
      className: `${Style.textColor} hover:!text-[#0C356A]`,
    },
    {
      label: 'Contact Admin',
      value: 'contact_us',
      startContent: <PiChats />,
      className: `${Style.textColor} hover:!text-[#0C356A]`,
    },
    {
      label: 'Logout',
      value: 'logout',
      startContent: <AiOutlineLogout />,
      className: 'text-red-500 hover:!text-red-500'
    },
  ]

  const adminDropdown = [
    {
      label: 'Profile',
      value: 'profile',
      startContent: <CgProfile />,
      className: `${Style.textColor} hover:!text-[#0C356A]`,
    },
    {
      label: 'Users',
      value: 'users',
      startContent: <FaUsers />,
      className: `${Style.textColor} hover:!text-[#0C356A]`,
    },
    {
      label: 'Logout',
      value: 'logout',
      startContent: <AiOutlineLogout />,
      className: 'text-red-500 hover:!text-red-500'
    },
  ]

  const handlerAction = (key: any) => {
    if (key === 'logout') {
      LogOut()
    } else {
      router.push(`/${key}`)
    }
  }

  return (
    <>
      {role === '' &&
        <nav className="bg-[#EEEEEE] rounded-b-lg backdrop-blur-md md:pl-8 md:pr-8 sticky select-none z-20 top-0 ">
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 outline-none rtl:space-x-reverse">
              <Logo className='h-10' />
            </Link>

            <div className='h-full flex items-center'>
              <ButtonTheme
                type="submit"
                onClick={() => {
                  router.push(`/login`)
                }}
              >
                Login
              </ButtonTheme>
            </div>

          </div>
        </nav>
      }

      {role === 'user' &&
        <nav className="bg-[#EEEEEE] rounded-b-lg backdrop-blur-md md:pl-8 md:pr-8 sticky select-none z-20 top-0 ">
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 outline-none">
              <Logo className='h-10' />
            </Link>

            <div className='h-full flex items-center mr-2.5'>
              <DropdownTheme
                options={userDropdown}
                className='!rounded-full !p-0 !bg-transparent'
                handlerAction={handlerAction}
              >
                <Avatar name={loggedInData?.user?.fullName} size={45} />
              </DropdownTheme>
            </div>

          </div>
        </nav>
      }

      {role === 'admin' &&
        <nav className="bg-[#EEEEEE] rounded-b-lg backdrop-blur-md md:pl-8 md:pr-8 sticky select-none z-20 top-0 ">
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">

            <Link href="/" className="flex items-center space-x-3 outline-none">
              <Logo className='h-10' />
            </Link>

            <div className='h-full flex items-center mr-2.5'>
              <DropdownTheme
                options={adminDropdown}
                className='!rounded-full !p-0 !bg-transparent'
                handlerAction={handlerAction}
              >
                <Avatar name={loggedInData?.user?.fullName} size={45} />
              </DropdownTheme>
            </div>

          </div>
        </nav>
      }
    </>
  )
}

export default Navbar;