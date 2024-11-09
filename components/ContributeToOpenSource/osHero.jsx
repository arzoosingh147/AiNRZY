const OpenSourceHero = () => {

    const heading = "Contribute To AiNrzy Open Source"
    const description = "Join the AiNrzy open-source community! Contribute your skills and ideas to open-source projects, fostering innovation and collaboration in the world of AI development."

    return(
        <section className="w-full flex justify-center items-center px-5 py-36">
            <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
            <h1 className="text-5xl font-semibold text-slate-200 text-center">{heading}</h1>
            <h2 className="text-xl font-medium text-slate-300 text-center">{description}</h2>
            </div>
        </section>
    )
}

export default OpenSourceHero;