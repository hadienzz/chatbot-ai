import { useContext } from "react"
import { AiContext } from "../stores/AiContext"

const Card = ({ text }) => {
    const { onSent } = useContext(AiContext)

    return (
        <div className="bg-[#f0f4f9] text-[#5a5a5a] p-4 cursor-pointer" onClick={() => onSent(text.text)}>
            <h1 className="rounded-lg">{text.text}</h1>
        </div>
    )
}

export default Card