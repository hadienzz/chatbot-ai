import { useContext, useEffect, useRef } from "react"
import { AiContext } from "../stores/AiContext"
import ReactMarkdown from 'react-markdown'

const MessageSection = () => {
    const { loading, chatHistory, resultIsShowing } = useContext(AiContext)

    const chatContainerRef = useRef(null)

    useEffect(() => {
        const container = chatContainerRef.current
        container.scrollTop = container.scrollHeight
    }, [chatHistory])

    return (
        <div className="overflow-y-auto flex-1 w-full mb-16 prose max-w-none " ref={chatContainerRef}>
            {!resultIsShowing && loading ? <p>Loading</p> :
                chatHistory.map((item, idx) => (
                    <p key={idx} className={`${item.role === 'user' ? " bg-[#f0f4f9] inline-flex text-right  py-2 px-6 rounded-md my-4" : ''}`}>
                        <ReactMarkdown key={idx}>
                            {item.parts[0].text}
                        </ReactMarkdown>
                    </p>
                ))}
        </div>
    )
}

export default MessageSection