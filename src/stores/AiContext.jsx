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
            setAllChat((prevState) => {
                const existingIndex = prevState.findIndex((chat) => chat.chatId === chatHistory.chatId)

                if (existingIndex !== -1) {
                    const updated = [...prevState]
                    updated[existingIndex] = chatHistory
                    return updated
                }
                return [...prevState, chatHistory]
            })
        }

        setChatHistory({
            chatId: crypto.randomUUID(),
            messages: []
        })

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
        const userPrompt = { role: 'user', parts: [{ text: prompt }] }

        const updatedMessages = [
            ...chatHistory.messages,
            userPrompt
        ]

        const result = await runChat(updatedMessages)
        const aiReply = { role: 'model', parts: [{ text: result.candidates[0].content.parts[0].text }] }

        const newMessage = [...updatedMessages, aiReply]

        setChatHistory((prevState) => ({
            ...prevState,
            messages: newMessage
        }))

        setAllChat((prevState) => {
            const existingIndex = prevState.findIndex((chat => chat.chatId === chatHistory.chatId))

            const updatedChat = {
                chatId: chatHistory.chatId,
                messages: newMessage
            }

            if (existingIndex !== -1) {
                const updated = [...prevState]
                updated[existingIndex] = updatedChat
                return updated
            }

            return [...prevState, updatedChat]
        })

        setLoading(false)
        setResultIsShowing(true)
        setInput('')
    }

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