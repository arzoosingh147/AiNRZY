import Link from "next/link";

const Relationship = () => {

    const steps = [
        {
            stepno: "$AiNrzy is the central token across the AiNrzy Network and AiNrzy ecosystems",
        },
        {
            stepno: "Each AiNrzy ecosystem is connected to the AiNrzy Network through $AiNrzy",
        },
        {
            stepno: "$AiNrzy powers the AiNrzy ecosystems with computing resources and storage.",
        },
    ]

    return(
        <section className="w-full flex justify-center items-center px-7 py-20 sextion">
            <div className="flex flex-col justify-center items-center gap-5 w-[80vw]">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">Relationship With AiNrzy</h1>
            <div className="grid grid-cols-1 justify-center items-center gap-5 mt-3">
                {steps.map((step , index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-3 text-center w-full">
                        <h1 className="text-xl font-medium text-slate-200 mt-0 px-5 py-2 rounded-lg bg-sky-700">{step.stepno}</h1>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default Relationship;
