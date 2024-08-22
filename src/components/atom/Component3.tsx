import React from "react"

const Component3 = (
    {
        heading2,
        description2
    }:
        {
            heading2: string,
            description2: string
        }
) => {
    return (
        <div className="flex flex-col w-[400px] items-center border rounded-[9px] border-[#F5B30D] px-6 py-8 bg-opacity-10 bg-[#F5B30D]">
            <div className="font-spicy text-[28px] text-[#F5B30D] text-center">
                {heading2}
            </div>
            <div className="font-caveat text-white mt-6 text-[20px] text-center px-4">
                {description2}
            </div>
        </div>
    )
}

export default Component3