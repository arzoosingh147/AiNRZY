import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

const JoinComm = () => {
    const heading = "Join AiNrzy Communities"
    const description = "Join AiNrzy Communities: Unite with AI enthusiasts, collaborate on projects, and drive innovation together."

    const communities = [
        {
            name: "Discord",
            icon: <FaDiscord />,
            desc: "Real-time collaboration and discussion hub for AI enthusiasts.",
            link: "https://discord.gg/wQUKzFKd",
        },
        {
            name: "Twitter",
            icon: <FaXTwitter />,
            desc: "Stay updated with the latest AI trends and community news",
            link: "https://x.com/AiNrzy",
        },
        {
            name: "Github",
            icon: <FaGithub />,
            desc: "Contribute to cutting-edge AI projects and repositories.",
            link: "https://github.com/ainrzy-org",
        },
        {
            name: "Telegram",
            icon: <FaTelegram />,
            desc: "Instant messaging for AI enthusiasts to connect and share insights.",
            link: "https://t.me/ainrzy",
        },
    ]

    return(
        <section className="w-full flex justify-center items-center px-7 py-20 sextion">
            <div className="flex flex-col justify-center items-center gap-5 w-[80vw]">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">{heading}</h1>
            <h2 className="text-xl font-medium text-slate-300 text-center">{description}</h2>
            <div className="flex flex-wrap justify-center items-stretch gap-5 mt-7">
            {communities.map((communitie , index) => (
                <div className="flex flex-col justify-center items-center gap-3 text-center max-w-[300px] px-3 py-5 border-2 border-sky-700 rounded-lg" key={index}>
                    <h1 className="text-3xl text-slate-200">{communitie.icon}</h1>
                    <h2 className="text-2xl font-semibold text-slate-100">{communitie.name}</h2>
                    <h3 className="font-medium text-slate-300">{communitie.desc}</h3>
                    <Link target="blank" href = {communitie.link}><h4 className="text-slate-200 font-medium underline hover:text-sky-700">Click To Join</h4></Link>
                </div>
            ))}
            </div>
            </div>
        </section>
    )
}

export default JoinComm;