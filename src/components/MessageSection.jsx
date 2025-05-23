import { useContext, useEffect, useRef } from "react"
import { AiContext } from "../stores/AiContext"
import ReactMarkdown from 'react-markdown'
import Hamburger from "./Hamburger"
import MenuBar from "./MenuBar"

const MessageSection = () => {
    const { isOpen, loading, chatHistory, resultIsShowing } = useContext(AiContext)
    const classLoader = 'rounded-sm border-none h-[20px] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] animate-loader'

    return (
        <>
            {isOpen && <MenuBar />}
            <div className="overflow-y-auto mb-16 md:w-full px-2 " >
                <Hamburger />

                {!resultIsShowing && loading ?
                    <div className="w-full flex flex-col gap-[10px] pt-4">
                        <hr className={classLoader} style={{ backgroundSize: '800px 50px' }} />
                        <hr className={classLoader} style={{ backgroundSize: '800px 50px' }} />
                        <hr className={classLoader} style={{ backgroundSize: '800px 50px' }} />
                    </div>

                    : chatHistory.messages.map((item, idx) => (
                        <div className={`flex items-center ${item.role === 'user' ? 'justify-end' : 'justify-start'}`} key={idx}>
                            <div className={`${item.role === 'user' ? " bg-[#f0f4f9] inline-flex text-right py-2 px-6 rounded-md my-4" : ''}`}>
                                <ReactMarkdown>
                                    {item.parts[0].text}
                                </ReactMarkdown>
                            </div>
                        </div>
                    ))
                }
            </div >
        </>
    )
}

export default MessageSection