import Button from "./Button"

export default function Cart({ cartProduct, deleteProduct }) {
    return (
        <div className=" absolute left-1/2 transform -translate-x-1/2 md:-translate-x-0 md:left-auto   md:right-[80px] top-[110px]  border font-kumbh bg-white drop-shadow-xl w-[360px]  ">


            <p className="font-bold text-[16px] text-customVeryDarkBlue pt-[24px] pb-[27px] px-[24px] border-b-[1px] border-[#E4E9F2]">Cart</p>
            <div className="flex items-center justify-center">
                {
                    cartProduct.length === 0 ? <p className="font-bold text-[16px] text-customDarkGrayishBlue pt-[77px] pb-[85px]">Your cart is empty.</p> : cartProduct.map((each, index) => {
                        return (
                            <div className="flex flex-col items-center pb-[32px] px-[24px]">
                                <div key={index} className="flex items-center justify-center gap-[16px]  py-[24px] text-customDarkGrayishBlue font-normal text-[16px] leading-[26px]">
                                    <img className='w-[50px] h-[50px]' src={each.image} alt={each.name + 'icon'}></img>
                                    <div>
                                        <p className="text-nowrap">{each.name}</p>
                                        <p>{'$' + each.price + '.00'} x {each.number} <span className="text-customVeryDarkBlue font-bold">{'$' + each.price * each.number + '.00'}</span></p>
                                    </div>
                                    <svg
                                        className="fill-current text-[#C3CAD9] hover:text-black"
                                        onClick={deleteProduct}
                                        width="14"
                                        height="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" />
                                    </svg>
                                </div>
                                <Button>Checkout</Button>
                            </div>
                        )
                    })
                }
            </div>



        </div>
    )
}