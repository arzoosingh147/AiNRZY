import Contributors from "@/components/ContributeToOpenSource/Contributors";
import ContributeProjects from "@/components/ContributeToOpenSource/Projects";
import OpenSourceHero from "@/components/ContributeToOpenSource/osHero";

const OpenSourceHome = () => {
    return(
        <section>
            <OpenSourceHero />
            <ContributeProjects />
            <Contributors />
        </section>
    )
}

export default OpenSourceHome;