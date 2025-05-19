import { useContext, useEffect, useRef } from "react"
import { AiContext } from "../stores/AiContext"
import ReactMarkdown from 'react-markdown'

const MessageSection = () => {
    const { loading, chatHistory, resultIsShowing } = useContext(AiContext)

    return (
        <div className="overflow-y-auto  mb-16 md:w-full " >
            {!resultIsShowing && loading ? <p>Loading</p> :
                chatHistory.messages.map((item, idx) => (
                    <div className={`flex items-center ${item.role === 'user' ? 'justify-end' : 'justify-start'}`} key={idx}>
                        <div className={`${item.role === 'user' ? " bg-[#f0f4f9] inline-flex text-right  py-2 px-6 rounded-md my-4" : ''}`}>
                            <ReactMarkdown>
                                {item.parts[0].text}
                            </ReactMarkdown>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default MessageSection