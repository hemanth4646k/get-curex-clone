import DescCard from "../../common/ui/DescCard";
import Hero from "../../common/ui/Hero";

function HeroAllergyMedicine() {
  return (
    <div>

        <Hero
        heading="Allergy Medicine: Find Relief from Allergies"
        subtitle="Curex is the easiest way to treat allergies at-home without allergy shots."
        ctaText="Take the free quiz"
        onCtaClick={() => console.log("CTA Clicked")}
        imageSrc=""
        imageAlt="Allergy Medicine"
        ></Hero>
        <DescCard
            heading="Alleviate Your Allergies with the Power of Allergy Medicine"
            desc="Allergies can be a real drag, putting a damper on your daily life and overall well-being. But fear not, there's a whole arsenal of allergy medications out there, ready to help you tackle those pesky symptoms. Whether you're an adult, a child, or have asthma, there's a solution tailored just for you. Let's dive into the different types of allergy medications and help you find the ones that work best for your specific situation."
            imgSrc=""
            imagePosition="right"
        ></DescCard>
    </div>
  );
}

export default HeroAllergyMedicine;