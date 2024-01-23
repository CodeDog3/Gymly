import { twMerge } from "tailwind-merge"
import { IoMdArrowRoundForward } from "react-icons/io";


type Props = {
    dispatch : (iscollapsed: boolean) => void
}

const NavExpand = ({dispatch} : Props) => {
  return (
    <div onClick={()=> dispatch(false)} className={twMerge(' group/arrow absolute transition-all top-[50%] translate-y-[-50%] h-20 w-2 bg-[#02b096] z-10 rounded-tr-lg rounded-br-lg grid place-content-center','hover:w-4')}>
        <IoMdArrowRoundForward size={"1.5em"}
        className='opacity-0 fill-white transition-[300] group-hover/arrow:opacity-100'/>

    </div>
  )
}

export default NavExpand