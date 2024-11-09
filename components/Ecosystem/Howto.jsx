import Link from "next/link";

const HowToParticipate = () => {

    const steps = [
        {
            stepno: "1",
            name: "Join All Social Communities",
            desc: "Connect with relevant social groups and platforms to engage with others",
            url: "/community",
            link: "Join =>",
        },
        {
            stepno: "2",
            name: "Share Your Work",
            desc: "Distribute your creations, ideas, or projects across your social networks.",
            url: "",
            link: "Share =>",
        },
        {
            stepno: "3",
            name: "Wait Until Selected",
            desc: "Be patient as you await responses from the community.",
            url: "",
            link: "Wait =>",
        },
        {
            stepno: "4",
            name: "Welcome Give Contribution For Community",
            desc: "Offer your input, assistance, or contributions to foster community growth and interaction",
            url: "",
            link: "Welcome =>",
        },
    ]

    return(
        <section className="w-full flex justify-center items-center px-7 py-20 sextion">
            <div className="flex flex-col justify-center items-center gap-5 w-[80vw]">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">How To Participate</h1>
            <div className="grid grid-cols-1 justify-center items-stretch gap-5 mt-3">
                {steps.map((step , index) => (
                    <div key={index} className="flex flex-col justify-center items-stretch gap-2 rounded-lg border-2 md:px-5 px-3 py-3 border-sky-700 overflow-hidden text-center">
                        <h1 className="text-2xl font-semibold text-slate-200 mt-0 md:self-start">{step.name}</h1>
                        <h2  className="text-xl font-medium text-slate-300 my-auto md:self-start">{step.desc}</h2>
                        <Link href={step.url} className="underline font-medium text-sm mb-0 text-slate-200 md:self-start">{step.link}</Link>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default HowToParticipate;