const Sidebar = () => {
    return (
        <aside className="w-1/6 bg-[#f0f4f9] px-4 pt-6 sticky top-0 h-screen">
            <button className="bg-gray-300 text-gray-800 px-3 py-2 rounded-3xl outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-200">+ New Chat</button>
            <h1 className="py-4 p-1">Recent</h1>
            <ul className="w-full truncate ">
                <li className="hover:bg-stone-200 cursor-pointer p-1 rounded-xl">How to work with React.Js?</li>
                <li className="hover:bg-stone-200 cursor-pointer p-1 rounded-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dicta??</li>
            </ul>
        </aside>
    )
}

export default Sidebar