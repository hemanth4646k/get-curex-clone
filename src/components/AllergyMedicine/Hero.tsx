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
        imageSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/656a2f90edc3ff2c5f5ab36e_allegry_medicine_pillar-p-500.jpg"
        imageAlt="Allergy Medicine"
        ></Hero>
        <DescCard
            heading="Alleviate Your Allergies with the Power of Allergy Medicine"
            desc="Allergies can be a real drag, putting a damper on your daily life and overall well-being. But fear not, there's a whole arsenal of allergy medications out there, ready to help you tackle those pesky symptoms. Whether you're an adult, a child, or have asthma, there's a solution tailored just for you. Let's dive into the different types of allergy medications and help you find the ones that work best for your specific situation."
            imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/656a4483c34edfa2ee0e3f02_Rectangle%201903-p-500.jpg"
            imagePosition="right"
        ></DescCard>
    </div>
  );
}

export default HeroAllergyMedicine;