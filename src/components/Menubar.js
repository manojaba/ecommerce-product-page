export default function Menubar({ toggleMenu }) {
    return (
        <div className="absolute top-0 bg-black bg-opacity-70  w-full">
            <div className=" bg-white w-2/3  border px-[25px] py-[25px] space-y-[53px] ">
                <img className='w-[13.5px] h-auto' src='.\images\icon-close.svg' alt='close icon' onClick={toggleMenu}></img>
                <div className="font-kumbh font-bold text-[18px] leading-[26px] space-y-[20px]">
                    <p>Collections</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    )
}