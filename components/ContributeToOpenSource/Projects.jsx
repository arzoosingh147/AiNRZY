import Link from "next/link";

const ContributeProjects = () => {
    const heading = "Projects You Can Contribute To"
    const description = "Explore meaningful projects awaiting your contributions. Dive into collaborative development, enhancing your skills while making a positive impact on various endeavors."

    const projects = [
        {
            name: "AiNrzy Learning",
            desc: "E-learning Platform with AI-based Adaptive Learning",
            link: "https://github.com/AiNrzy-Org/AiNrzy-Learning",
        },
        {
            name: "AiNrzy Meet",
            desc: "Next-Gen Video Calling with AI Enhancements",
            link: "https://github.com/AiNrzy-Org/AiNrzy-Meet",
        },
        {
            name: "AiNrzy Dash",
            desc: "Social Media Dashboard with AI-powered Sentiment Analysis",
            link: "https://github.com/AiNrzy-Org/AiNrzy-Dash",
        },
    ]

    return(
        <section className="w-full flex justify-center items-center px-7 py-20 sextion">
            <div className="flex flex-col justify-center items-center gap-5 w-[80vw]">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">{heading}</h1>
            <h2 className="font-medium text-xl text-slate-300 text-center w-[80vw] md:w-[60vw]">{description}</h2>
            <div className="flex flex-wrap justify-center items-stretch gap-5 mt-7">
            {projects.map((project , index) => (
                <div className="flex flex-col justify-center items-center gap-3 text-center max-w-[300px] px-3 py-5 border-2 border-sky-700 rounded-lg" key={index}>
                    <h1 className="text-2xl text-slate-200 font-semibold">{project.name}</h1>
                    <h2 className="text-xl font-medium text-slate-100">{project.desc}</h2>
                    <Link target="blank" href = {project.link}><h4 className="text-slate-200 underline hover:text-sky-700 font-medium">Click To Contribute</h4></Link>
                </div>
            ))}
            </div>
            </div>
        </section>
    )
}

export default ContributeProjects;