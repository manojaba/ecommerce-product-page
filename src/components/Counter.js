
export default function Counter({ reduceProduct, addProduct, cartProduct }) {




    return (
        <div className="bg-customLightGrayishBlue flex items-center justify-between font-kumbh font-bold text-[16px] px-[16px] py-[18px] rounded-xl xl:w-2/5">
            <svg
                onClick={reduceProduct}
                className="fill-current text-[#FF7E1B] cursor-pointer"
                width="12" height="4"  ><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" /><use fill-rule="nonzero" /></svg>
            <p className="text-customVeryDarkBlue">{cartProduct.length > 0 ? cartProduct[0].number : 0}</p>
            <svg
                onClick={addProduct}
                className="fill-current text-[#FF7E1B] hover:text-[#FFAB6A] cursor-pointer "
                width="12" height="12" ><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" /><use fill-rule="nonzero" /></svg>

        </div >
    )
}