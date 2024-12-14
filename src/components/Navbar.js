export default function Navbar({ toggleMenu, toggleCart, cartProduct }) {
    return (
        <div className="flex justify-between items-center mx-[24px] md:mx-[165px]    md:border-customLightGrayishBlue border-b-[3px] 2xl:mx-[220px]  ">
            <div className="flex space-x-[56px]">
                <div className="flex items-center space-x-[16px]  ">
                    <img className="md:hidden h-[15px] w-auto cursor-pointer " src='./images/icon-menu.svg' alt="hmaburger menu" onClick={toggleMenu}></img>

                    <img className="h-[20px]  cursor-pointer mt-[19px] mb-[25px]" src="./images\logo.svg" alt="logo"></img>
                </div>
                <ul className=" hidden md:flex font-kumbh font-normal text-[15px] leading-[26px] space-x-[32px] text-customDarkGrayishBlue ">
                    <li className="hover:text-customVeryDarkBlue hover:cursor-pointer border-b-[4px] border-white active:border-b-customOrange pb-[21px] md:py-[41px] ">Collections</li>
                    <li className="hover:text-customVeryDarkBlue hover:cursor-pointer border-b-[4px] border-white active:border-b-customOrange pb-[21px] md:py-[41px]">Men</li>
                    <li className="hover:text-customVeryDarkBlue hover:cursor-pointer border-b-[4px] border-white active:border-b-customOrange pb-[21px] md:py-[41px]">Women</li>
                    <li className="hover:text-customVeryDarkBlue hover:cursor-pointer border-b-[4px] border-white active:border-b-customOrange pb-[21px] md:py-[41px]">About</li>
                    <li className="hover:text-customVeryDarkBlue hover:cursor-pointer border-b-[4px] border-white active:border-b-customOrange pb-[21px] md:py-[41px]">Contact</li>
                </ul>
            </div>

            <div className="flex space-x-[22px] md:space-x-[46px] items-center   relative ">
                <div className="relative ">
                    <svg onClick={toggleCart} className="fill-current relative text-customDarkGrayishBlue hover:text-customVeryDarkBlue hover:cursor-pointer "
                        width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero" /></svg>
                    <p className="absolute -right-1 -top-2 bg-customOrange font-kumbh font-bold text-white text-[10px] px-[6px] rounded-[6.5px]">{cartProduct.length > 0 ? cartProduct[0].number : ''}</p>

                </div>
                <img className="w-[24px] rounded-full md:w-[50px] h-auto hover:border-[2px]  cursor-pointer hover:border-customOrange" src="./images\image-avatar.png" alt='avatar'></img>
            </div>
        </div>
    )
}