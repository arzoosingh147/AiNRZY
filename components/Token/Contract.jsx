import Link from "next/link";

const Contract = () => {

    const models = [
        {
            name: "View Smart Contract",
            url: "https://cardona-zkevm.polygonscan.com/token/0x5bf8db72bba16403c4e34377f9c42057637830f8",
        },
        {
            name: "Github Repo",
            url: "https://github.com/E5F6/smart-contract.git",
        },
    ]

    const aiNrzy = [
        {
            name: "$AIN price",
            desc: "$0.00",
        },
        {
            name: "Market cap",
            desc: "$0.00",
        },
        {
            name: "Circulating Supply",
            desc: "0 $AIN",
        },
        {
            name: "Total Supply",
            desc: "1000 $AIN",
        },
    ]

    return (
        <section className="w-full flex flex-col justify-center items-center gap-5 px-7 py-20 sextion">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">AiNrzy Smart Contract</h1>
            <h1 className="text-xl font-medium text-slate-300 text-center">AiNrzy is a custom ERC-20 token deployed on Polygon zkEVM Testnet Cardona for secure and efficient blockchain transactions.</h1>
            <div className="flex flex-wrap justify-center items-stretch gap-5 mt-7">
            {aiNrzy.map((ain , index) => (
                <div className="flex flex-col justify-center items-center gap-3 text-center w-[300px] px-3 py-5 border-2 border-sky-700 rounded-lg" key={index}>
                    <h1 className="text-3xl text-slate-200">{ain.name}</h1>
                    <h1 className="text-3xl text-slate-200">{ain.desc}</h1>
                </div>
            ))}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5">
                {models.map((model, index) => (
                    <Link key={index} href={model.url} target="blank" className="rounded-lg flex flex-col justify-center items-center gap-3 px-5 py-3 bg-sky-700 hover:bg-sky-800 transition ease-in-out">
                        <p className="text-xl font-medium text-slate-300">{model.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Contract;