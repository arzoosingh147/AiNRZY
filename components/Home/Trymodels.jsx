import Link from "next/link";

const Trymodels = () => {

    const models = [
        {
            name: "Open Source",
            tag: "#Open-Source",
            url: "/opensource",
        },
        {
            name: "Community",
            tag: "#Community",
            url: "/community",
        },
    ]

    return (
        <section className="w-full flex flex-col justify-center items-center gap-5 px-7 py-20 sextion">
            <h1 className="text-4xl font-semibold text-slate-200 text-center">Decentralized Ecosystem</h1>
            <div className="flex flex-wrap justify-center items-center gap-5">
                {models.map((model, index) => (
                    <Link key={index} href={model.url} className="rounded-lg flex flex-col justify-center items-center gap-3 px-5 py-3 border-2 border-sky-700 hover:bg-sky-700 transition ease-in-out w-[250px]">
                        <p className="text-xl font-medium text-slate-300">{model.name}</p>
                        <p className="text-xl font-medium text-slate-300">{model.tag}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Trymodels;