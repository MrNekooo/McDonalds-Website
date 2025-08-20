
const StoreInput = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black my-[50px] py-[70px] gap-10 px-4 rounded-2xl">
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-white text-[48px] font-medium max-sm:text-[32px]"> 
                FIND A FOODELI STORE NEAR YOU
            </h2>
            <p className="text-sm text-white">
                see the convenience store address with you most 
            </p>
        </div>

        <div className="flex items-center gap-3 px-6 py-4 bg-yellow rounded-[100px] max-w-[600px] justify-between max-sm:px-3 max-sm:gap-1 max-sm:rounded-[50px]">
            <input  type="text"
                    placeholder="Typing Location ..."
                    className="text-black outline-none bg-yellow" />
            <button className="px-6 py-4 bg-white rounded-[100px] max-sm:px-3 max-sm:text-[14px] max-sm:rounded-[50px]"> See on map </button>
        </div>
    </div>
  )
}

export default StoreInput