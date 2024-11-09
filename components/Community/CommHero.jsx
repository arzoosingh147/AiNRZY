const CommunityHero = () => {

    const heading = "AiNrzy Community"
    const description = "Welcome to our AI Open Source Dev Community! Join us in shaping the future of technology as we collaborate, innovate, and contribute to open-source projects. Whether you're a seasoned developer or just starting out, there's a place for you here. Let's harness the power of AI to build a better tomorrow, together."

    return(
        <section className="w-full flex justify-center items-center px-5 py-36">
            <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
            <h1 className="text-5xl font-semibold text-slate-200 text-center">{heading}</h1>
            <h2 className="text-xl font-medium text-slate-300 text-center">{description}</h2>
            </div>
        </section>
    )
}

export default CommunityHero;