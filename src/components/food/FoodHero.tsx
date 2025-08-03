
import Hero from '../../common/ui/Hero';
import '../../common/ui/Hero.css';

const FoodHero = () => {
  return (
    <Hero
      heading={
        <>
          Goodbye Food Allergies!
        </>
      }
      subtitle="Curex is the easiest way to treat food allergies at home without allergy shots."
      imageSrc="/food-allergy-bottle.avif"
      imageAlt="Hand holding Curex food allergy treatment bottle"
      ctaText='Am I eligible?'
    >
      
    </Hero>
  );
};

export default FoodHero;
