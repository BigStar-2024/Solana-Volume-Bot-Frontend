import React from "react"

const Component2 = (
    {
        heading,
        description
    }:
        {
            heading: string,
            description: string
        }
) => {
    return (
        <div className="flex flex-col w-[344px] items-center border rounded-[9px] border-[#F5B30D] px-6 py-8 bg-opacity-10 bg-[#F5B30D]">
            <div className="font-spicy text-[28px] text-[#F5B30D] text-center">
                {heading}
            </div>
            <div className="font-caveat text-white mt-6 text-[20px] text-center px-4">
                {description}
            </div>
        </div>
    )
}

export default Component2