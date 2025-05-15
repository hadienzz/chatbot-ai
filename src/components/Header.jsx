import Card from "./Card"

const Header = () => {
    return (
        <>
            <div className="">
                <h1 className="text-stone-400 text-lg">Hadin Chatbot</h1>
            </div>

            <main className=" w-[900px]">

                <div className="pt-15 text-5xl">
                    <h1 className=" font-medium bg-gradient-to-r from-[#5e21d8] via-[#009cff] to-[#92fe9d] inline-block h-[60px] bg-clip-text text-transparent">Hello, People!</h1>
                    <h1 className=" text-stone-400 font-medium">How Can i assist you today?</h1>
                </div>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 mt-16 ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main >

        </>
    )
}

export default Header