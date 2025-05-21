import { useContext } from "react";
import { AiContext } from "../stores/AiContext";
import ButtonStart from "./ButtonStart";


const MenuBar = () => {
    const { allChat, onToggle, onSelectChat } = useContext(AiContext)

    return (
        <div className="w-full h-screen absolute md:hidden z-100 bg-[rgba(0,0,0,0.5)]" onClick={onToggle}>

            <div className="h-screen bg-[#f0f4f9] w-2/5 md:hidden px-4 pt-6 z-101" onClick={(e) => e.stopPropagation()}>

                <div className="flex justify-between items-center ">
                    <ButtonStart />
                    <p className="p-1 px-3 bg-white rounded-full cursor-pointer 
                    hover:bg-stone-400" onClick={onToggle}>X</p>
                </div>

                <h1 className="font-lg font-medium my-4">Recent Chats</h1>
                <ul>
                    {allChat.map((chat) => {
                        const lastUserMessage = chat.messages.find((m) => m.role === "user");
                        return (
                            <li
                                key={chat.chatId}
                                className="cursor-pointer p-2 bg-white rounded-md shadow-sm hover:bg-gray-200 transition truncate"
                                onClick={() => onSelectChat(chat.chatId)}
                            >
                                {lastUserMessage
                                    ? lastUserMessage.parts[0].text.slice(0, 30) + "..."
                                    : "Percakapan Baru"}
                            </li>
                        );
                    })}

                </ul>
            </div>
        </div>
    )
}

export default MenuBar