import EcoHero from "@/components/Ecosystem/EcoHero";
import EcoRoles from "@/components/Ecosystem/EcoRoles";
import HowToParticipate from "@/components/Ecosystem/Howto";
import OurEcosystem from "@/components/Ecosystem/OurEcosystem";

const EcoHome = () => {
    return(
        <section>
            <EcoHero />
            <OurEcosystem />
            <EcoRoles />
            <HowToParticipate />
        </section>
    )
}

export default EcoHome;