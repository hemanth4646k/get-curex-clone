
import DescCard from '../../common/ui/DescCard';

const qaData = [
  {
    heading: 'What is Xyzal (Levocetirizine)?',
    desc: (
      <>
        Xyzal is an antihistamine medicine that is used to treat allergy symptoms. It blocks a special histamine receptor, which may reduce the itching, sneezing, and runny nose that come from allergies. Xyzal is available in both prescription and over-the-counter forms. It is taken once daily, often in the evening, and can be continued throughout the day with just a single daily dose.
      </>
    ),
    imgSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6626c2905b3aad446036f617_xyzal2-p-500.jpeg',
    imagePosition: 'right' as const,
  },
  {
    heading: 'Is Zarbees effective?',
    desc: (
      <>
        Zarbee's is a popular brand known for its natural and drug-free approach to allergy symptom relief. Its seasonal relief line, which includes honey and plant-based ingredients, can be appealing for those who want to avoid synthetic products and medications. However, depending on the individual and the specific product, results may vary.
        <br /><br />
        It is important to note that while Zarbee's products might help with mild allergy support, it is important to validate their effectiveness with scientific evidence in children. Allergy care for kids is best managed in consultation with a healthcare professional, and when in doubt, review current and well-established products, and consult with your provider to determine the best solution for your specific needs.
      </>
    ),
    imgSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/656a51b90f60b73d71e52d76_image_2-p-500.jpg',
    imagePosition: 'left' as const,
  },
  {
    heading: `How Effective is Children's Zyrtec?`,
    desc: (
      <>
        Children's Zyrtec, containing the active ingredient cetirizine, is widely used to treat children's allergy symptoms. Clinical studies have shown that Children's Zyrtec is highly effective in reducing sneezing, itching, and runny nose caused by seasonal allergies. It is available in both syrup and chewable tablet forms, making it easy for kids to take. Always consult your pediatrician before starting any allergy medication for your child.
      </>
    ),
    imgSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/656a520c76f8ba5219488e6a_image_3.jpg',
    imagePosition: 'right' as const,
    buttonEle: (
      <a href="#Allergy-Medicine-for-Kids" className="DescCard-btn" style={{background:'#22c55e',color:'#fff',padding:'10px 24px',borderRadius:8,textDecoration:'none',fontWeight:600}}>Learn more about Children's Allergy Relief</a>
    ),
  },
  {
    heading: 'Is Generic Claritin Effective?',
    desc: (
      <>
        Generic versions of Claritin, which include loratadine as the principal ingredient, are widely available and have been shown to be just as effective as the brand-name product. They are used to relieve symptoms of hay fever and other allergies, such as sneezing, runny nose, and itchy or watery eyes.<br /><br />
        Generic Claritin is affordable and offers long-term relief for allergy sufferers. Always consult your healthcare provider before starting any new medication, and review the packaging to ensure you are choosing the right dosage and ingredients for your allergies.
      </>
    ),
    imgSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/656a526f52e15971b59d08b5_image_4-p-500.jpg',
    imagePosition: 'left' as const,
    buttonEle: (
      <a href="#Is-Generic-Claritin-Effective" className="DescCard-btn" style={{background:'#22c55e',color:'#fff',padding:'10px 24px',borderRadius:8,textDecoration:'none',fontWeight:600}}>Discover Long Term Relief</a>
    ),
  },
];

export default function QA1() {
  return (
    <>
      {qaData.map((qa, i) => {
        // kebab-case id from heading, remove special chars
        const id = qa.heading.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');
        return <DescCard key={i} {...qa} id={id} />;
      })}
    </>
  );
}
