import SmallIconCards from '../../common/ui/SmallIconCards';
import type { SmallIconCardItem } from '../../common/ui/SmallIconCards';

const foodAllergyTypes: SmallIconCardItem[] = [
  {
    id: 'peanuts',
    title: 'Peanuts',
    icon: <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccad22a848c4f1eb26ff_Frame%202141.svg" alt="Peanuts" className="home-allergy-type_icon" />, 
    bgColor: '',
  },
  {
    id: 'tree-nuts',
    title: 'Tree Nuts',
    icon: <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccad28d78c5a25a4e2ce_treenuts-icon.svg" alt="Tree Nuts" className="home-allergy-type_icon" />, 
    bgColor: 'is-blue2',
  },
  {
    id: 'eggs',
    title: 'Eggs',
    icon: <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccaed1e36ddd74867983_eggs-icon.svg" alt="Eggs" className="home-allergy-type_icon" />, 
    bgColor: 'is-pink',
  },
  {
    id: 'milk',
    title: 'Milk',
    icon: <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccad0d837588b366970d_milk-icon.svg" alt="Milk" className="home-allergy-type_icon" />, 
    bgColor: 'is-green',
  },
  {
    id: 'wheat',
    title: 'Wheat',
    icon: <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccad33abfe264f264bdd_wheat-icon.svg" alt="Wheat" className="home-allergy-type_icon" />, 
    bgColor: 'is-yellow',
  },
  {
    id: 'fish',
    title: 'Fish',
    icon: <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccadd425738b24099f25_fish-icon.svg" alt="Fish" className="home-allergy-type_icon" />, 
    bgColor: 'is-green2',
  },
  {
    id: 'soy',
    title: 'Soy',
    icon: <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccadd6ae51f7242f6a89_soy-icon.svg" alt="Soy" className="home-allergy-type_icon" />, 
    bgColor: 'is-yellow2',
  },
  {
    id: 'shellfish',
    title: 'Shellfish',
    icon: <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccad57e982deb36f7bf9_shellfish-icon.svg" alt="Shellfish" className="home-allergy-type_icon" />, 
    bgColor: 'is-green3',
  },
  {
    id: 'sesame',
    title: 'Sesame',
    icon: <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccadd305f60e75745e42_sesame-icon.svg" alt="Sesame" className="home-allergy-type_icon" />, 
    bgColor: 'is-pink2',
  },
];

const TypeOfFoodAllergies = () => (
  <section className="section_home3-types">
    <div className="container-medium">
      <div className="padding-section-medium">
        <div className="home-allergy-type_component">
          <div className="text-align-center">
            <div className="margin-bottom margin-large">
              <h2 className="allergy-types_heading heading-style-h2">We Treat Over 90 Food Allergies</h2>
            </div>
            <div className="home-allergy-type_content">
              <SmallIconCards
                items={foodAllergyTypes}
                className="food_allergy-type_list"
              />
              <div className="pollen-type_description-wrapper">
                <p className="pollen-type_description cross-react">We also treat environmental allergies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TypeOfFoodAllergies;
