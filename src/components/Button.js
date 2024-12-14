export default function Button({ children, addProduct }) {
    return (
        <div className=" bg-customOrange hover:bg-[#FFAB6A] hover:cursor-pointer text-center font-kumbh text-customVeryDarkBlue font-bold text-[16px] py-[18px] w-full rounded-[10px]" onClick={addProduct}>{children}</div>
    )
}