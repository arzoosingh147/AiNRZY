import Link from "next/link";

const OurEcosystem = () => {

    const heading = "Our Ecosystem"
    const description = "Ainerzy Network operates as a cohesive ecosystem where developers, creators, and resources converge to advance AI innovation. Within this environment, AI development is streamlined, fostering accessibility and cost-effectiveness. Developers worldwide have access to an expansive open-source AI library, empowering them to manifest their creations into tangible advancements."

    return(
        <section className="w-full flex flex-col justify-center items-center gap-5 px-7 py-20 sextion">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">{heading}</h1>
            <h1 className="font-medium text-xl text-slate-300 text-center w-[80vw] md:w-[60vw]">{description}</h1>
        </section>
    )
}

export default OurEcosystem;