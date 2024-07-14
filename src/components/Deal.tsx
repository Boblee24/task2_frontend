import whitecart from "../assets/whitcart.svg"
const Deal = () => {
    return (
        <div className="deal flex items-center my-[4rem] justify-center">
            <div>
                <h1 className="text-[#FF0000B0] text-[1.5rem] pb-3 text-center">Order Now to get this exclusive offers at 5% discount</h1>
                <button className="flex bg-[#FF0000B0] p-2 justify-center items-center m-auto rounded-2xl">
                    <h1 className="text-white text-1.3rem">Order Now</h1>
                    <img src={whitecart} alt="cart" />
                </button>
            </div>

        </div>
    )
}

export default Deal