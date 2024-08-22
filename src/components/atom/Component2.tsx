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
        <div className="flex flex-col items-center border rounded-[9px] border-[#F5B30D] p-12 bg-opacity-30 bg-[#F5B30D] mx-6">
            <div className="font-spicy text-[28px] mt-6 text-[#F5B30D] text-center">
                {heading}
            </div>
            <div className="font-caveat text-white mt-6 text-[20px] text-center px-4">
                {description}
            </div>
        </div>
    )
}

export default Component2