import { useState } from "react";
import Button from "../components/Button";
import Cart from "../components/Cart";
import Counter from "../components/Counter";
import Lightbox from "../components/Lightbox";
import Menubar from "../components/Menubar";
import Navbar from "../components/Navbar";
import ProductImage from "../components/ProductImage";

export default function Product() {



    const [cartProduct, setCartProduct] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openLightbox, setOpenLightbox] = useState(false);

    function toggleLightbox() {
        setOpenLightbox(!openLightbox);
    }
    function toggleCart() {
        setOpenCart(!openCart);
    }

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    function addProduct() {

        setCartProduct((prevCart) => {
            if (prevCart.length === 0) {
                return ([...prevCart, { name: 'Fall Limited Edition Sneakers', image: './images/image-product-1-thumbnail.jpg', price: 125.00, number: 1 }])

            }
            return (prevCart.map((item) => item.name === 'Fall Limited Edition Sneakers' ? { ...item, number: item.number + 1 } : item))
        })



    }

    function deleteProduct() {

        setCartProduct([])
    }

    function reduceProduct() {

        setCartProduct((prevCart) => {
            if (cartProduct[0].number > 0) {
                return (prevCart.map((each) => each.name === 'Fall Limited Edition Sneakers' ? { ...each, number: each.number - 1 } : each))

            }
            return ([]);

        })

    }

    return (
        <div className="relative  h-fit" >
            <Navbar toggleMenu={toggleMenu} toggleCart={toggleCart} cartProduct={cartProduct} />
            {openMenu && <Menubar toggleMenu={toggleMenu} />}

            <div className="md:flex md:mx-[213px] 2xl:mx-[270px] md:pt-[90px] md:pb-[132px] md:gap-[80px] md:items-center xl:gap-[125px] 2xl:gap-[200px] ">
                <ProductImage toggleLightbox={toggleLightbox} />
                <div className="px-[24px] md:px-0 pt-[24px] md:w-1/2">
                    <h3 className="font-kumbh font-bold text-[12px] md:text-[13px] md:tracking-[2px] tracking-[1.85px] text-customDarkGrayishBlue mb-[16px]">  SNEAKER COMPANY</h3>
                    <h1 className="font-kumbh font-bold text-[28px] xl:text-[44px] xl:leading-[48px] leading-[32px] mb-[16px] text-customVeryDarkBlue "> Fall Limited Edition Sneakers</h1>
                    <p className="text-customDarkGrayishBlue font-kumbh text-[15px] md:text-[16px] md:leading-[26px] font-normal leading-[25px] mb-[24px]">  These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                    <div className="flex gap-[16px] items-center mb-[10px]">
                        <h2 className="font-kumbh font-bold text-[28px]  ">$125.00 </h2>
                        <p className="bg-black  text-white font-kumbh font-bold text-[16px] pt-[3px] pb-[4px] px-[10px] rounded-[6px]"> 50%</p>
                    </div>
                    <div className="relative w-fit mb-[32px] ">
                        <p className=" relative z-10font-kumbh font-bold text-customDarkGrayishBlue text-[16px] leading-[26px]">$250.00</p>
                        <span className="absolute top-1/2 bg-transparent w-full h-full border-t-[1px] border-customDarkGrayishBlue transform "></span>
                    </div>
                    <div className="xl:flex gap-[16px] space-y-[16px] xl:space-y-0 pb-[88px] md:pb-0 ">
                        <Counter reduceProduct={reduceProduct} addProduct={addProduct} cartProduct={cartProduct} ></Counter>
                        <Button addProduct={addProduct}><div className="flex  justify-center gap-[16px]  h-full  ">
                            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero" /></svg>
                            <p>Add to Cart</p>
                        </div></Button>



                    </div>
                    {openCart && <Cart cartProduct={cartProduct} deleteProduct={deleteProduct}></Cart>}

                </div>
            </div>

            {openLightbox && <Lightbox toggleLightbox={toggleLightbox} />}



        </div>
    )
}