
import EndPromo from "../common/EndPromo";
import { DropsVsTablets, FDAApproved, HowLongToWork, NearMe, OverTheCounter, ReallyWork, SideEffects } from "../components/SubLingual/Component2";
import { PetAllergies } from "../components/SubLingual/Component3";
import { OverviewSection, QnA, TableOfContentsSL } from "../components/SubLingual/Components";
import FaqSL from "../components/SubLingual/FaqSL";
import SLHero from "../components/SubLingual/SLHero";

function SubLingualImmunoTherapy() {
  return (
    <div>
      <SLHero />
      <OverviewSection />
      <TableOfContentsSL />
      <QnA />
      <FDAApproved/>
      <SideEffects />
      <DropsVsTablets />
      <ReallyWork />
      <HowLongToWork />
      <OverTheCounter />
      <NearMe />
      <PetAllergies />
      <FaqSL/>
      <EndPromo/>
    </div>
  );
}
export default SubLingualImmunoTherapy;