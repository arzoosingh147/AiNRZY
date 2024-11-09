const Hero = () => {

    const heading1 = "Welcome to Ainrzy Network"
    const heading2 = "Empowering AI Innovation for Open Source"
    const description = "AiNrzy Network is revolutionizing the open-source landscape by seamlessly integrating advanced AI technologies with decentralized blockchain frameworks. Our platform empowers developers and innovators to collaborate, share, and deploy AI-driven solutions, fostering a new era of transparency, efficiency, and inclusivity in the AI and blockchain ecosystems."

    return(
        <section className="w-full flex justify-center items-center px-5 py-36">
            <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
            <h1 className="text-5xl font-semibold text-slate-200 text-center">{heading1}</h1>
            <h1 className="text-3xl font-semibold text-slate-200 text-center">{heading2}</h1>
            <h2 className="font-medium text-xl text-slate-300 text-center">{description}</h2>
            </div>
        </section>
    )
}

export default Hero;