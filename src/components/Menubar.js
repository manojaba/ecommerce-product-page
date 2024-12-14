export default function Menubar({ toggleMenu }) {
    return (
        <div className="absolute inset-0 z-10 bg-black bg-opacity-70  w-full ">
            <div className=" bg-white w-2/3  border px-[25px] py-[25px] space-y-[53px] h-full ">
                <img className='w-[13.5px] h-auto cursor-pointer' src='.\images\icon-close.svg' alt='close icon' onClick={toggleMenu}></img>
                <div className="font-kumbh font-bold text-[18px] leading-[26px] space-y-[20px] ">
                    <p className="cursor-pointer hover:text-customOrange">Collections</p>
                    <p className="cursor-pointer hover:text-customOrange">Men</p>
                    <p className="cursor-pointer hover:text-customOrange">Women</p>
                    <p className="cursor-pointer hover:text-customOrange">About</p>
                    <p className="cursor-pointer hover:text-customOrange">Contact</p>
                </div>
            </div>
        </div>
    )
}