import Link from "next/link";

const Purchase = () => {

    const heading1 = "Purchase $AiNrzy Token"
    const heading2 = "Currently Not Available Will Be Available In Future"

    return(
        <section className="w-full flex justify-center items-center px-7 py-20 sextion">
            <div className="flex flex-col justify-center items-center gap-5 w-[80vw]">
            <h1 className="text-4xl font-semibold text-slate-100 text-center">{heading1}</h1>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-300 text-center mt-5 w-[80vw] md:w-[50vw]">{heading2}</h1>
            </div>
        </section>
    )
}

export default Purchase;