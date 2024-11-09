import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const Contributors = () => {
    const heading = "Meet Our Valued Contributors"
    const description = "Meet our dedicated contributors who shape our projects. Explore names of talented individuals powering our endeavors. Join the celebration!"

    const peoples = [
        {
            name: "Priyanshu",
            handle: "@Priyannxhuu",
            link: "https://github.com/Priyannxhuu",
        },
        {
            name: "Keshav",
            handle: "@IeKeshav",
            link: "https://github.com/IeKeshav",
        },
        {
            name: "Rudra",
            handle: "@Rudrash170",
            link: "https://github.com/Rudrash170",
        },
        {
            name: "User4",
            handle: "@User4",
            link: "",
        },
        {
            name: "User5",
            handle: "@User5",
            link: "",
        },
    ]

    return(
        <section className="w-full flex justify-center items-center px-7 py-20 sextion">
            <div className="flex flex-col justify-center items-center gap-5 w-[80vw]">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">{heading}</h1>
            <h2 className="text-xl font-medium text-slate-300 text-center w-[80vw] md:w-[60vw]">{description}</h2>
            <div className="flex flex-wrap justify-center items-stretch gap-5 mt-7 px-3 py-2 rounded-lg border-2 border-sky-700">
            {peoples.map((people , index) => (
                <Link target="blank" href={people.link} className="flex justify-center items-center gap-3 text-center px-5 py-3 rounded-lg card" key={index}>
                    <h1 className="text-4xl text-slate-200"><FaGithub /></h1>
                    <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="font-semibold text-slate-100">{people.name}</h1>
                    <h2 className="font-medium text-slate-200">{people.handle}</h2>
                    </div>
                </Link>
            ))}
            </div>
            </div>
        </section>
    )
}

export default Contributors;