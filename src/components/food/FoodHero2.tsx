import DescCard from '../../common/ui/DescCard';

const EatWithoutFear = () => (
  <DescCard
    heading="Eat Without Fear"
    desc={
      <>
        <p>Allergy drops safely build up your tolerance to food allergens, designed to minimize the risk of life-threatening allergic reactions.</p>
        <ul style={{margin: '24px 0 0 0', padding: 0, listStyle: 'none'}}>
          <li style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
            <span style={{color: '#22c55e', fontSize: 20, marginRight: 8}}>✔</span> 100% at-home treatment customized for you
          </li>
          <li style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
            <span style={{color: '#22c55e', fontSize: 20, marginRight: 8}}>✔</span> Prescribed and supervised by expert clinicians
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{color: '#22c55e', fontSize: 20, marginRight: 8}}>✔</span> Used successfully by over 50,000 patients
          </li>
        </ul>
      </>
    }
    imgSrc="/curex-food-box.png"
    imagePosition="left"
  />
);

const EasierThanBrushingTeeth = () => (
  <DescCard
    heading="Easier than Brushing Teeth"
    desc={
      <>
        <p>Allergy drops contain pharmaceutical extracts of food allergens to desensitize your immune system over time.</p>
        <p>Simply place them under your tongue for 2 minutes a day to start building immunity.</p>
        <p>Unlike Oral Immunotherapy (OIT), sublingual administration allows for gentler dosage and better absorption, resulting in safer treatment with limited side effects.</p>
      </>
    }
    imgSrc="/food-dropper-girl.avif"
    imagePosition="right"
  />
);
const FoodHero2 = () => {
  return (
    <>
      <EatWithoutFear />
      <EasierThanBrushingTeeth />
    </>
  );
};

export default FoodHero2;
