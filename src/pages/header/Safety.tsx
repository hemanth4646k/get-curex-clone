import Hero from "../../common/ui/Hero";
import Comp1 from "../../components/Header/Safety/Comp1";

function Safety(){
    return (
        <div style={{padding: "2rem 4rem"}}>
            <Hero
                heading="See how Curex is the safest choice for allergy treatment!"
                subtitle="Curex is the #1 Safe Online Allergy Clinic in the U.S."
                ctaText="Take the free Quiz"
                imageSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/653b62cc299ab4a113513b49_DSCF4043%201.webp"
            />
            <Comp1/>
        </div>
    )
}
export default Safety;