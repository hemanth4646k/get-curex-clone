import Faq from "../components/immunotherapy101/Faq";
import AllergyNutshell from "../components/immunotherapy101/AllergyNutshell";
import CommonMisconceptions from "../components/immunotherapy101/CommonMisconceptions";
import FormsOfImmunotherapy from "../components/immunotherapy101/FormsOfImmunotherapy";
import Hero from "../components/immunotherapy101/Hero";
import Immuno101Testimonials from "../components/immunotherapy101/Immuno101Testimonials";
import ImmunoForMe from "../components/immunotherapy101/ImmunoForMe";
import ImmunoTreat from "../components/immunotherapy101/ImmunoTreat";
import IsItSafe from "../components/immunotherapy101/IsItSafe";
import Timeline from "../components/immunotherapy101/Timeline";
import WhatIsImmunotherapy from "../components/immunotherapy101/WhatisImmunotherapy";


export default function Immunotherapy101() {
    return (
        <div>
            <Hero />
            <AllergyNutshell/>
            <WhatIsImmunotherapy/>
            <CommonMisconceptions/>
            <IsItSafe/>
            <Immuno101Testimonials/>
            <FormsOfImmunotherapy/>
            <ImmunoTreat/>
            <ImmunoForMe/>
            <Timeline/>
            <Faq />
        </div>
    )
}