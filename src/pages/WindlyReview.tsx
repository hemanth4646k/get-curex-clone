import EndPromo from "../common/EndPromo";
import { Hero2 } from "../components/WindlyReview/Comp1";
import FaqWR from "../components/WindlyReview/FaqWR";
import WRHero from "../components/WindlyReview/WRHero";

function WyndlyReview() {
  return (
    <div style={{ padding: "4rem" }}>
        <WRHero/>
        <Hero2/>
        <EndPromo/>
        <FaqWR/>
    </div>
  );
}
export default WyndlyReview;
