const TokenHero = () => {

    const heading = "AiNrzy Network Token";
    const toxen = "$AiNrzy Token By AiNrzy";
    const description = "Unlock the potential of AiNrzy Network Token, powering collaborative AI innovation with $AiNrzy Token By AiNrzy."

    return(
        <section className="w-full flex justify-center items-center gap-3 px-5 py-36">
           <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-2 justify-center items-center gap-10 w-[80vw]">
            <div className="flex flex-col justify-center items-center gap-3 col-span-1">
            <h1 className="text-5xl font-semibold text-slate-200 text-center">{heading}</h1>
            <h1 className="text-3xl font-semibold text-slate-200 text-center">{toxen}</h1>
            <h2 className="font-medium text-xl text-slate-300 text-center">{description}</h2>
            </div>
            <div className="flex justify-center items-center col-span-1">
                <img src="/coin.png" alt="" className="max-h-[450px]"/>
            </div>
           </div>
        </section>
    )
}

export default TokenHero;