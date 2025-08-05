import DescCard from "../../common/ui/DescCard";
import ClinicalTeam from "../Reviews/ClinicalTeam";
import FaqSectionFull from "../Reviews/FaqSectionFull";

function HeroAbout() {
  return (
    <div>
      <DescCard
        heading="An allergy company made by allergy sufferers for allergy sufferers."
        desc=""
        imgSrc=""
        imagePosition="right"
      />
      <br />
      <img src="/YellowSyringes.avif" alt="" />
      <br />
      <br />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: " 20px 20%"}}>
        <p>
          We were started by allergy sufferers as a convenient and easy
          alternative to allergy shots. We believe that all allergy sufferers
          should have access to at-home prescription allergy relief. Our process
          is simple, with all virtual visits and payments that is simple and
          easy.
        </p>
        <p>
          Our founders have gone through years and years of weekly allergy shot
          appointments. They have been sitting in the doctor’s office just like
          you. Now they still take daily under-the-tongue treatments. With
          multiple clinicians and years of medical experience, our team is
          excited to show you the treatment that has helped so many people.
        </p>
        <DescCard heading="" desc={
            <>
                <p>
                    
Our prescription sublingual immunotherapy treatments are all prescribed based on an allergy test.
</p>
<p>
    
They are specifically formulated to desensitize your body to your specific allergens. In doing this, the treatment is personalized and our allergists can easily meet any and all needs involved with your treatment.
                </p>
            </>
        } imgSrc=""/>
        <ClinicalTeam/>
        <FaqSectionFull/>
      </div>
    </div>
  );
}
export default HeroAbout;
