import Link from "next/link"

const BwaHero = () => {

    const heading = "Projects Build Using Api's"
    const description = "Explore our creations powered by APIs. Dive into innovative projects leveraging Api technology to enhance functionality and user experience."

    const projects = [
        {
            name: "Latest News In Technology",
            desc: "Discover the most recent tech innovations and trends with our latest technology news, powered by real-time API updates.",
            link: "/buildwithapi/chain-gpt-news",
            image: "", 
        },
        {
            name: "Live Crypto Price",
            desc: "Stay updated with real-time cryptocurrency prices. This application is built using API integration, providing accurate and up-to-date information on various digital assets.",
            link: "/buildwithapi/cryptoprice",
            image: "",
        },
        {
            name: "Text To Speech Converter",
            desc: "The Text To Speech Converter transforms written text into natural-sounding speech, enhancing accessibility for visually impaired individuals and providing a seamless user experience for converting text to audio.",
            link: "/buildwithapi/texttospeech",
            image: "",
        },
        // {
        //     name: "Qr Code Generator",
        //     desc: "The QR Code Generator empowers users to create QR codes quickly and effortlessly, facilitating seamless sharing of information across various platforms and enhancing user engagement with your content.",
        //     link: "/buildwithapi/qrcode",
        //     image: "",
        // },
    ]

    return (
        <section className="w-full flex justify-center items-center px-5 py-36">
            <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
                <h1 className="text-5xl font-semibold text-slate-200 text-center">{heading}</h1>
                <h2 className="text-xl font-medium text-slate-300 text-center">{description}</h2>
                <div className="flex flex-wrap justify-center items-stretch gap-5 mt-7">
                    {projects.map((project, index) => (
                        <div className="flex flex-col justify-center items-center text-center max-w-[300px] border-2 border-sky-700 rounded-lg" key={index}>
                            <div className="flex flex-col justify-center items-center gap-3 p-5 h-full">
                                <h1 className="text-2xl font-semibold text-slate-200 mt-0">{project.name}</h1>
                                <h2 className="font-medium text-slate-100 my-auto">{project.desc}</h2>
                                <Link href={project.link}><h4 className="text-slate-200 font-xl font-medium underline hover:text-sky-700 mb-0">See Project</h4></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BwaHero;