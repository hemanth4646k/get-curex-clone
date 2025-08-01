import FaqHeading from './FaqHeading';
import Faq from './Faq';
import './faqContainer.css';

const FaqContainer = () => {
  return (
    <section className="section_faqs-cms">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="margin-bottom margin-small">
              <FaqHeading />
            </div>
            <Faq />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContainer;
