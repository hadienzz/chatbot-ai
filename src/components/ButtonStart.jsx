import { useContext } from "react"
import { AiContext } from "../stores/AiContext"


const ButtonStart = () => {
    const { startNewChat, chatHistory } = useContext(AiContext)

    return (
        <button
            className="bg-gray-300 text-gray-800 px-3 py-2 rounded-3xl outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-200"
            onClick={chatHistory.messages.length > 0 ? startNewChat : null}
        >
            + New Chat
        </button >

    )
}

export default ButtonStart