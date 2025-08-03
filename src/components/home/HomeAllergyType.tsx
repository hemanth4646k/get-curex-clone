import SmallIconCards from '../../common/ui/SmallIconCards';
import type { SmallIconCardItem } from '../../common/ui/SmallIconCards';

const allergyTypes: SmallIconCardItem[] = [
  {
    id: 1,
    title: 'Food Allergies',
    icon: <div className="icon-placeholder food-icon" />,
    bgColor: 'yellow',
  },
  {
    id: 2,
    title: 'Weed Pollens',
    icon: <div className="icon-placeholder weed-icon" />,
    bgColor: 'light-blue',
  },
  {
    id: 3,
    title: 'Cat Allergies',
    icon: <div className="icon-placeholder cat-icon" />,
    bgColor: 'blue',
  },
  {
    id: 4,
    title: 'Dog Allergies',
    icon: <div className="icon-placeholder dog-icon" />,
    bgColor: 'green',
  },
  {
    id: 5,
    title: 'Dust Mites',
    icon: <div className="icon-placeholder dust-icon" />,
    bgColor: 'pink',
  },
  {
    id: 6,
    title: 'Molds',
    icon: <div className="icon-placeholder mold-icon" />,
    bgColor: 'light-yellow',
  },
  {
    id: 7,
    title: 'Tree Pollens',
    icon: <div className="icon-placeholder tree-icon" />,
    bgColor: 'light-gray',
  },
];

const HomeAllergyType = () => (
  <SmallIconCards
    title="We Treat Allergies"
    items={allergyTypes}
    className="home-allergy-type"
  />
);

export default HomeAllergyType;
