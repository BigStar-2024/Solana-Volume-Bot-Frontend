const Radio = (
    {
        content,
        option,
        setOption
    } : 
    {
        content: string,
        option: string,
        setOption: React.Dispatch<React.SetStateAction<string>>
    }
) => {
    return (
        <div className="flex items-center gap-4 text-white font-caveat text-[32px] cursor-pointer" onClick={() => setOption(content)}>
            <div className="w-10 h-10 border border-white rounded-full relative">
                {
                    content === option &&
                    <div className="w-6 h-6 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                }
            </div>
            <div className="whitespace-nowrap capitalize">{content} Volume</div>
        </div>
    )
}

export default Radio