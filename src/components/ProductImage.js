import { useState } from "react";

export default function ProductImage({ toggleLightbox }) {

    const [clickedImage, setClickedImage] = useState('picture1');

    const toggleImage = (imagename) => {
        setClickedImage(imagename);
    }
    return (
        <div className=" md:w-1/2 ">
            <div className=""  >
                {clickedImage === 'picture1' && <div className="relative   " >
                    <img className="w-full   md:rounded-[15px]" src=".\images\image-product-1.jpg" alt='product-1 large' onClick={toggleLightbox}></img>
                    <div className="bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 md:hidden" onClick={() => toggleImage('picture4')}>
                        <img className="h-[11.5px]" src='.\images\icon-previous.svg' alt='prev arrow'></img>

                    </div>
                    <div className="bg-white w-[40px] h-[40px] rounded-full  flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden " onClick={() => toggleImage('picture2')}>
                        <img className="h-[11.5px]" src='.\images\icon-next.svg' alt='next arrow'></img>

                    </div>


                </div>}
                {clickedImage === 'picture2' && <div className="relative"><img className=" md:rounded-[15px]" src='.\images\image-product-2.jpg' alt='product-2 large' onClick={toggleLightbox}></img>
                    <div className="bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 md:hidden" onClick={() => toggleImage('picture1')}>
                        <img className="h-[11.5px]" src='.\images\icon-previous.svg' alt='prev arrow'></img>

                    </div>
                    <div className="bg-white w-[40px] h-[40px] rounded-full  flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden " onClick={() => toggleImage('picture3')}>
                        <img className="h-[11.5px]" src='.\images\icon-next.svg' alt='next arrow'></img>

                    </div>
                </div>}
                {clickedImage === 'picture3' && <div className="relative"><img className=" md:rounded-[15px]" src='.\images\image-product-3.jpg' alt='product-3 large' onClick={toggleLightbox}></img>
                    <div className="bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 md:hidden" onClick={() => toggleImage('picture2')}>
                        <img className="h-[11.5px]" src='.\images\icon-previous.svg' alt='prev arrow'></img>

                    </div>
                    <div className="bg-white w-[40px] h-[40px] rounded-full  flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden " onClick={() => toggleImage('picture4')}>
                        <img className="h-[11.5px]" src='.\images\icon-next.svg' alt='next arrow'></img>

                    </div>
                </div>}
                {clickedImage === 'picture4' && <div className="relative"><img className=" md:rounded-[15px]" src='.\images\image-product-4.jpg' alt="product-4 large" onClick={toggleLightbox}></img>
                    <div className="bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 md:hidden" onClick={() => toggleImage('picture3')}>
                        <img className="h-[11.5px]" src='.\images\icon-previous.svg' alt='prev arrow'></img>

                    </div>
                    <div className="bg-white w-[40px] h-[40px] rounded-full  flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden " onClick={() => toggleImage('picture1')}>
                        <img className="h-[11.5px]" src='.\images\icon-next.svg' alt='next arrow'></img>

                    </div>
                </div>}
            </div>
            <div className="hidden md:flex  justify-between mt-[32px] gap-4 w-full">
                <div className="w-[20%] relative cursor-pointer " onClick={() => toggleImage('picture1')}>
                    <img className="object-cover  rounded-[15px]  transition outline outline-[2px] outline-white" style={clickedImage === 'picture1' ? { outlineColor: '#FF7E1B' } : {}} src=".\images\image-product-1-thumbnail.jpg" alt='product-1 small'  ></img>
                    <div className="bg-white opacity-0 hover:opacity-50 inset-0 rounded-[15px] absolute" style={clickedImage === 'picture1' ? { opacity: '50%' } : {}}></div>

                </div>
                <div className="w-[20%] relative cursor-pointer " onClick={() => toggleImage('picture2')}>
                    <img className=' rounded-[15px] object-cover  transition outline outline-[2px] outline-white' style={clickedImage === 'picture2' ? { outlineColor: '#FF7E1B' } : {}} src='.\images\image-product-2-thumbnail.jpg' alt='product-2 small' ></img>
                    <div className="bg-white opacity-0 hover:opacity-50 inset-0 rounded-[15px] absolute transition duration-300" style={clickedImage === 'picture2' ? { opacity: '50%' } : {}}></div>


                </div>
                <div className="w-[20%] relative cursor-pointer " onClick={() => toggleImage('picture3')}>
                    <img className=' rounded-[15px] object-cover transition outline outline-[2px] outline-white' style={clickedImage === 'picture3' ? { outlineColor: '#FF7E1B' } : {}} src='.\images\image-product-3-thumbnail.jpg' alt='product-3 small' onClick={() => toggleImage('picture3')}></img>
                    <div className="bg-white opacity-0 hover:opacity-50 inset-0 rounded-[15px] absolute" style={clickedImage === 'picture3' ? { opacity: '50%' } : {}}></div>


                </div>
                <div className="w-[20%] relative cursor-pointer " onClick={() => toggleImage('picture4')}>
                    <img className=' rounded-[15px] object-cover transition outline outline-[2px] outline-white' style={clickedImage === 'picture4' ? { outlineColor: '#FF7E1B' } : {}} src='.\images\image-product-4-thumbnail.jpg' alt='product-4 small' onClick={() => toggleImage('picture4')}></img>
                    <div className="bg-white opacity-0 hover:opacity-50 inset-0 rounded-[15px] absolute" style={clickedImage === 'picture4' ? { opacity: '50%' } : {}}></div>


                </div>

            </div>
        </div >
    )
}