import Link from "next/link";

const EcoRoles = () => {

    const roles = [
        {
            name: "Developer",
            desc: "Unlock the power of code and technology to build innovative solutions, shape the digital world, and drive meaningful change.",
            button: "Become a Developer",
            url: "/community",
            image: "/developer.jpeg",
        },
        {
            name: "Creator",
            desc: "Express your imagination, craft compelling stories, design captivating visuals, and bring your ideas to life. Embrace your creativity.",
            button: "Become a Creater",
            url: "/community",
            image: "/developer.jpeg",
        },
        {
            name: "Captain",
            desc: "Lead with vision, inspire teams, navigate challenges, and chart new horizons. Harness your leadership skills.",
            button: "Become a Captain",
            url: "/community",
            image: "/developer.jpeg",
        },
    ]

    return(
        <section className="w-full flex flex-col justify-center items-center gap-5 px-7 py-20">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">AiNrzy Ecosystem Roles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5 mt-3">
                {roles.map((role , index) => (
                    <div key={index} className="flex flex-col justify-center items-stretch gap-2 rounded-lg border-2 border-sky-700 max-w-[350px] overflow-hidden text-center">
                        <img src={role.image} alt="" className="h-[40%] w-full object-cover"/>
                        <div className="px-5 pt-3 pb-4 flex flex-col justify-center items-center h-[70%]">
                        <h1 className="text-3xl font-semibold text-slate-200 mt-0">{role.name}</h1>
                        <h2  className="text-xl font-medium text-slate-300 my-auto">{role.desc}</h2>
                        <Link href={role.url} className="bg-sky-700 hover:bg-sky-800 transition ease-in-out px-3 py-2 font-medium text-sm mb-0 text-slate-200 rounded-full">{role.button}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EcoRoles;