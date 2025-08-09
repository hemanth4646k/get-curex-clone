import Comp1 from "../../components/Header/Pets/Comp1"
import Comp2 from "../../components/Header/Pets/Comp2"
import GetStarted from "../../components/Header/Pets/GetStarted"
import HeroPets from "../../components/Header/Pets/HeroPets"
import Testimonials from "../../components/Header/Pets/Testimonials"
import Understand from "../../components/Header/Pets/Understand"

function Pets() {
  return (
    <div>
        <HeroPets/>
        <br />
        <Understand/>
        <br />
        <Testimonials/>
        <Comp1/>
        <GetStarted/>
        <Comp2/>
    </div>
  )
}
export default Pets