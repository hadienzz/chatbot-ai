import { createContext, useEffect, useRef, useState } from "react";
import runChat from "../config/gemini";

export const AiContext = createContext({
    input: '',
    setInput: () => { },
    resultIsShowing: false,
    loading: false,
    onSent: () => { },
    chatHistory: [],
    startNewChat: () => { },
    allChat: [],
    onSelectChat: () => { }
})

const AiContextProvider = ({ children }) => {
    const [input, setInput] = useState('')
    const [resultIsShowing, setResultIsShowing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [allChat, setAllChat] = useState([])
    const [chatHistory, setChatHistory] = useState({
        chatId: crypto.randomUUID(),
        messages: []
    })

    function startNewChat() {
        if (chatHistory.messages.length > 0) {
            setAllChat((prevState) => [
                ...prevState,
                {
                    chatId: chatHistory.chatId,
                    messages: [...chatHistory.messages.map(m => ({ ...m }))]
                }
            ]);
        }

        setChatHistory({
            chatId: crypto.randomUUID(),
            messages: []
        });

        setInput('');
        setResultIsShowing(false);
    }

    const onSelectChat = (id) => {
        const chat = allChat.find((item) => item.chatId === id)

        if (!chat) return

        setChatHistory((prevState) => ({
            chatId: chat.chatId,
            messages: [...chat.messages]
        }))
        setResultIsShowing(true)
    }

    const onSent = async (prompt) => {
        setLoading(true)

        const updatedHistory = [...chatHistory.messages, { role: 'user', parts: [{ text: prompt }] }]
        const result = await runChat(updatedHistory)
        const aiReply = result.candidates[0].content.parts[0].text

        setChatHistory((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, { role: 'user', parts: [{ text: prompt }] }, { role: 'model', parts: [{ text: aiReply }] }]
        }))

        setLoading(false)
        setResultIsShowing(true)
        setInput('')
    }

    console.log(chatHistory)

    useEffect(() => {
        console.log(allChat)
    }, [allChat])

    const contextValue = {
        input,
        setInput,
        resultIsShowing,
        loading,
        onSent,
        chatHistory,
        startNewChat,
        allChat,
        onSelectChat
    }



    return (
        <AiContext.Provider value={contextValue}>
            {children}
        </AiContext.Provider>
    )
}

export default AiContextProvider