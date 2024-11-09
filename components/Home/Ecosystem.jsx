import Link from "next/link";

const Ecosystem = () => {

    const hellox = [
        {
            image: "/developer.png",
            title: "Bring Developers Together",
            text: "Become a developer and get rewards",
            link: "/ecosystem",
            button: "Become a Developer",
        },
        {
            image: "/opensource.png",
            title: "Bring AI Devs To Open Source",
            text: "Gain access to open source AI projects & contribute",
            link: "/community",
            button: "Build on AiNrzy",
        },
        {
            image: "/api.png",
            title: "Ai Api's For Everyone",
            text: "Making Ai Api's Available For Everyone",
            link: "/community",
            button: "Contribute on AiNrzy",
        },
    ]

    const heading = "AiNrzy Network Ecosystem"
    const description = "Ainrzy Network is a decentralized AI development ecosystem open to all by gathering developers, GPUs, resources for development, and creator-based data in one place. It represents the future of collaborative AI to realize AI for everyone."

    return(
        <section className="w-full flex flex-col justify-center items-center">
            <div className="w-full lg:w-[80vw] flex flex-col justify-center items-center gap-3 px-7 py-20">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">{heading}</h1>
            <h2 className="font-medium text-xl text-slate-300 text-center w-[80vw] md:w-[60vw] ">{description}</h2>
            <div className="flex flex-wrap justify-center items-center gap-5">
                <Link href="/ecosystem" className="bg-sky-700 hover:bg-sky-800 transition ease-in-out px-5 py-3 font-medium text-xl text-slate-200 rounded-full">Discover More</Link>
                <Link href="https://discord.com/invite/wQUKzFKd" className="bg-sky-700 hover:bg-sky-800 transition ease-in-out px-5 py-3 font-medium text-xl text-slate-200 rounded-full">Join Discord</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 mt-7">
            {hellox.map((hello,index)=>(
                <div key={index} className="flex flex-col justify-center items-center gap-3 text-center">
                    <img src={hello.image} alt="" className="max-h-[300px]"/>
                    <h1 className="text-2xl font-semibold text-slate-200">{hello.title}</h1>
                    <h2 className="text-sm font-medium text-slate-300">{hello.text}</h2>
                    <Link href={hello.link} className="text-slate-200 underline font-medium">{hello.button}</Link>
                </div>
            ))}
            </div>
            </div>
        </section>
    )
}

export default Ecosystem;