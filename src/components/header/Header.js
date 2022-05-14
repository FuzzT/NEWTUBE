import React, { useState } from 'react'
import './_header.scss'
import logo from "./logo.png"
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useHistory,Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = ({ handleToggleSidebar }) => {
   const [input, setInput] = useState('')

   const history = useHistory()

   const handleSubmit = e => {
      e.preventDefault()

      history.push(`/search/${input}`)
   }
   const user = useSelector(state => state.auth?.user)

   return (
      <div className='header '>
         <FaBars
            className='header__menu'
            size={26}
            onClick={() => handleToggleSidebar()}
         />
         <Link to="/">     <span className="d-flex justify-content-row align-items-center">   <img
            src={logo}
            alt=''
            className='header__logo'
         /><span className="mx-2 text-light logoText" style={{color:"white",textDecoration:"none",left: "-8px"}}>NEWTUBE</span>
         </span>
         </Link>

         <form onSubmit={handleSubmit}>
            <input
               type='text'
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <button type='submit'>
               <AiOutlineSearch size={22} />
            </button>
         </form>

         <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img src={user?.photoURL} alt='avatar' />
         </div>
      </div>
   )
}

export default Header
