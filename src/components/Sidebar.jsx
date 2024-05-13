import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../context/Context';
import '../components/sidebar.css'

const Sidebar = () => {

  const [extended,setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

  const loadPrompt = async (prompt) => {
     setRecentPrompt(prompt)
      await onSent(prompt)
  }

  return (
    <div className=' sidebar min-h-screen inline-flex flex-col justify-between bg-gray-100 px-[15px] py-[25px]'>
     
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt='' className='w-[20px] block ml-10px cursor-pointer' />
        <div onClick={()=>newChat()} className="new-chat mt-[50px] inline-flex items-center gap-[10px] px-[15px] py-[10px] bg-customGray rounded-[50px] text-gray-500 text-sm cursor-pointer">
          <img src={assets.plus_icon} alt='' className='w-[20px]'/>
          {extended?<p>New Chat</p>:null}
        </div>

        { /*second button of the top sidebar*/ }
        {extended?
        <div className="recent flex flex-col ">
        <p className="recent-title mt-[30px] mb-[20px]">Recent</p>
        {prevPrompts.map((item,index) => {
            return(
                          <div  onClick={()=>loadPrompt(item)} className="recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-customBlue cursor-pointer hover:bg-customGray1">
                          <img src={assets.message_icon} alt='' className='w-[20px]' />
                          <p>{item.slice(0,18)} ...</p>
                          </div>
            )
        })}
        
      </div>
      :null
      }
        
      </div>

      <div className="bottom flex flex-col">
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-customBlue cursor-pointer hover:bg-customGray1">
          <img src={assets.question_icon} alt='' className='w-[20px]' />
          {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-customBlue cursor-pointer hover:bg-customGray1">
          <img src={assets.history_icon} alt='' className='w-[20px]' />
          {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-customBlue cursor-pointer hover:bg-customGray1">
          <img src={assets.setting_icon} alt='' className='w-[20px]' />
          {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
