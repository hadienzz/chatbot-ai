import { useContext } from "react";
import { AiContext } from "../stores/AiContext";

const Sidebar = () => {
    const { startNewChat, allChat, onSelectChat } = useContext(AiContext);

    return (
        <aside className="max-w-1/6 bg-[#f0f4f9] px-4 pt-6 sticky top-0 h-screen hidden lg:block">
            <button
                className="bg-gray-300 text-gray-800 px-3 py-2 rounded-3xl outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-200"
                onClick={startNewChat}
            >
                + New Chat
            </button>
            <h1 className="py-4 p-1 font-semibold">Recent Chat</h1>
            <ul className="w-full space-y-2 overflow-y-auto max-h-[85vh]">
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
        </aside>
    );
};

export default Sidebar;