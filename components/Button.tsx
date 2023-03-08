interface props {
    text: string
    onClick: ()=>void
    disabled?: boolean
}

export default function Button({text, onClick, disabled}: props) {
    return (
        <button onClick={onClick} disabled={disabled}
                className={"bg-red-300 p-0.5 px-4 rounded hover:bg-red-400 duration-200"}>{text}</button>
    )
}