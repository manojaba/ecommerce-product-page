import { useState } from "react";

export default function Lightbox({ toggleLightbox }) {

    const [clickedImage, setClickedImage] = useState('picture1');

    const toggleImage = (imagename) => {
        setClickedImage(imagename);
    }
    return (
        <div className="  bg-black bg-opacity-50   flex items-center  justify-center absolute inset-0  ">
            <div className="w-1/2 xl:w-[550px] ">
                <div className="relative cursor-pointer">
                    {clickedImage === 'picture1' && <div className="relative   ">
                        <img className="w-full md:rounded-[15px]" src=".\images\image-product-1.jpg" alt='product-1 large'></img>
                        <div className="bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center absolute -left-5 top-1/2 transform -translate-y-1/2 " onClick={() => toggleImage('picture4')}>
                            <img className="h-[11.5px]" src='.\images\icon-previous.svg' alt='prev arrow'></img>

                        </div>
                        <div className="bg-white w-[40px] h-[40px] rounded-full  flex items-center justify-center absolute -right-5 top-1/2 transform -translate-y-1/2  " onClick={() => toggleImage('picture2')}>
                            <img className="h-[11.5px]" src='.\images\icon-next.svg' alt='next arrow'></img>

                        </div>


                    </div>}
                    {clickedImage === 'picture2' && <div className="relative"><img className="w-full md:rounded-[15px]" src='.\images\image-product-2.jpg' alt='product-2 large'></img>
                        <div className="bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center absolute -left-5 top-1/2 transform -translate-y-1/2 " onClick={() => toggleImage('picture1')}>
                            <img className="h-[11.5px]" src='.\images\icon-previous.svg' alt='prev arrow'></img>

                        </div>
                        <div className="bg-white w-[40px] h-[40px] rounded-full  flex items-center justify-center absolute -right-5 top-1/2 transform -translate-y-1/2  " onClick={() => toggleImage('picture3')}>
                            <img className="h-[11.5px]" src='.\images\icon-next.svg' alt='next arrow'></img>

                        </div>
                    </div>}
                    {clickedImage === 'picture3' && <div className="relative"><img className="w-full md:rounded-[15px]" src='.\images\image-product-3.jpg' alt='product-3 large'></img>
                        <div className="bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center absolute -left-5 top-1/2 transform -translate-y-1/2 " onClick={() => toggleImage('picture2')}>
                            <img className="h-[11.5px]" src='.\images\icon-previous.svg' alt='prev arrow'></img>

                        </div>
                        <div className="bg-white w-[40px] h-[40px] rounded-full  flex items-center justify-center absolute -right-5 top-1/2 transform -translate-y-1/2  " onClick={() => toggleImage('picture4')}>
                            <img className="h-[11.5px]" src='.\images\icon-next.svg' alt='next arrow'></img>

                        </div>
                    </div>}
                    {clickedImage === 'picture4' && <div className="relative"><img className="w-full md:rounded-[15px]" src='.\images\image-product-4.jpg' alt="product-4 large"></img>
                        <div className="bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center absolute -left-5 top-1/2 transform -translate-y-1/2 " onClick={() => toggleImage('picture3')}>
                            <img className="h-[11.5px]" src='.\images\icon-previous.svg' alt='prev arrow'></img>

                        </div>
                        <div className="bg-white w-[40px] h-[40px] rounded-full  flex items-center justify-center absolute -right-5 top-1/2 transform -translate-y-1/2  " onClick={() => toggleImage('picture1')}>
                            <img className="h-[11.5px]" src='.\images\icon-next.svg' alt='next arrow'></img>

                        </div>
                    </div>}
                    <svg
                        onClick={toggleLightbox}
                        className="absolute -top-8 right-0 fill-current text-white hover:text-customOrange cursor-pointer"
                        width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd" /></svg>
                </div>
                <div className="hidden md:flex  justify-between mt-[32px] gap-4 w-full">
                    <div className="w-[20%] relative cursor-pointer " onClick={() => toggleImage('picture1')}>
                        <img className="object-cover  rounded-[15px]  transition " style={clickedImage === 'picture1' ? { outline: 'solid', outlineColor: '#FF7E1B' } : {}} src=".\images\image-product-1-thumbnail.jpg" alt='product-1 small'  ></img>
                        <div className="bg-white opacity-0 hover:opacity-50 inset-0 rounded-[15px] absolute" style={clickedImage === 'picture1' ? { opacity: '50%' } : {}}></div>

                    </div>
                    <div className="w-[20%] relative cursor-pointer " onClick={() => toggleImage('picture2')}>
                        <img className=' rounded-[15px] object-cover  transition ' style={clickedImage === 'picture2' ? { outline: 'solid', outlineColor: '#FF7E1B' } : {}} src='.\images\image-product-2-thumbnail.jpg' alt='product-2 small' ></img>
                        <div className="bg-white opacity-0 hover:opacity-50 inset-0 rounded-[15px] absolute transition duration-300" style={clickedImage === 'picture2' ? { opacity: '50%' } : {}}></div>


                    </div>
                    <div className="w-[20%] relative cursor-pointer " onClick={() => toggleImage('picture3')}>
                        <img className=' rounded-[15px] object-cover transition ' style={clickedImage === 'picture3' ? { outline: 'solid', outlineColor: '#FF7E1B' } : {}} src='.\images\image-product-3-thumbnail.jpg' alt='product-3 small' onClick={() => toggleImage('picture3')}></img>
                        <div className="bg-white opacity-0 hover:opacity-50 inset-0 rounded-[15px] absolute" style={clickedImage === 'picture3' ? { opacity: '50%' } : {}}></div>


                    </div>
                    <div className="w-[20%] relative cursor-pointer " onClick={() => toggleImage('picture4')}>
                        <img className=' rounded-[15px] object-cover transition ' style={clickedImage === 'picture4' ? { outline: 'solid', outlineColor: '#FF7E1B' } : {}} src='.\images\image-product-4-thumbnail.jpg' alt='product-4 small' onClick={() => toggleImage('picture4')}></img>
                        <div className="bg-white opacity-0 hover:opacity-50 inset-0 rounded-[15px] absolute" style={clickedImage === 'picture4' ? { opacity: '50%' } : {}}></div>


                    </div>

                </div>
            </div>

        </div >
    )
}