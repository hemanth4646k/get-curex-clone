import ClinicalTeam from "../components/Reviews/ClinicalTeam"
import FaqSection from "../components/Reviews/FaqSection"
import HeroReviews from "../components/Reviews/HeroReviews"
import Review2 from "../components/Reviews/Review2"
import ReviewContainer from "../components/Reviews/ReviewContainer"

function Reviews() {
  return (
    <div >
      <HeroReviews />
      <ReviewContainer/>
      <Review2/>
      <ClinicalTeam/>
      <FaqSection/>
    </div>
  )
}
export default Reviews