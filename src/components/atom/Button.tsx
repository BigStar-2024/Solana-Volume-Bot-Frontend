import React from "react"

const Button = (
    {
        children,
        className,
        action
    } :
    {
        children: React.ReactNode,
        className: string,
        action?: () => void
    }
) => {
    return (
        <button className={className} onClick={action}>
            {
                children
            }
        </button>
    )
}

export default Button