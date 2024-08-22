import React from "react"

const Component1 = (
    {
        src,
        alt,
        heading,
        description
    }:
        {
            src: string,
            alt: string,
            heading: string,
            description: string
        }
) => {
    return (
        <div className="flex flex-col items-center border rounded-[9px] border-[#F5B30D] p-12 bg-opacity-30 bg-[#F5B30D] mx-6">
            <img src={src} alt={alt} className="w-[96px]"></img>
            <div className="font-spicy text-[36px] mt-6 text-[#F5B30D] text-center">
                {heading}
            </div>
            <div className="font-caveat text-white mt-6 text-[28px] text-center px-4">
                {description}
            </div>
        </div>
    )
}

export default Component1