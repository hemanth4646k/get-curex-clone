import { useNavigate } from "react-router-dom";
import Hero from "../../../common/ui/Hero";
import TableOfContents from "../../../common/ui/TableOfContents";

function HeroFA(){
    const navigate = useNavigate();
    return (
        <div>
            <Hero
                heading="Food Allergy & Anaphylaxis: Treatment Options"
                subtitle="Food allergies can be life-altering and may even trigger anaphylaxis—a severe, potentially fatal reaction. Early detection and proper management are vital, with treatment options ranging from epinephrine to immunotherapy and Xolair. While no single approach fits everyone, understanding these options is the first step. Below, you’ll find an overview of each course of action and how to manage food allergies safely."
                ctaText="Am I eligible"
                onCtaClick={() => navigate("/quiz")}
                imageSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f449d9474291552b2dbde_630389.avif"
            />
            <div className="padding-section-small">
                <div className="home_header_logo-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '2rem', alignItems: 'center', justifyContent: 'center', overflowX: 'auto' }}>
                    <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66aba17ed623087564f23b54_usa-today-logo-black.avif"
                        alt="USA Today logo"
                        className="home_header_logo"
                        style={{ height: 30, width: 'auto', objectFit: 'contain' }}
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c747931085a5af19acdd7_MensHealth_Logo_Black.svg"
                        alt="Men's Health logo"
                        className="home_header_logo"
                        style={{ height: 30, width: 'auto', objectFit: 'contain' }}
                    />
                    <img
                        sizes="(max-width: 2560px) 100vw, 2560px"
                        srcSet="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c7478ebeb9e147525a23e_CBS_logo.svg-p-500.png 500w, https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c7478ebeb9e147525a23e_CBS_logo.svg.avif 2560w"
                        alt="CBS logo"
                        src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c7478ebeb9e147525a23e_CBS_logo.svg.avif"
                        loading="lazy"
                        className="home_header_logo"
                        style={{ height: 30, width: 'auto', objectFit: 'contain' }}
                    />
                    <img
                        sizes="(max-width: 3664px) 100vw, 3664px"
                        srcSet="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c7478dc46ea2ca941347a_Fox_Logo_black-p-500.avif 500w, https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c7478dc46ea2ca941347a_Fox_Logo_black.avif 3664w"
                        alt="Fox logo"
                        src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c7478dc46ea2ca941347a_Fox_Logo_black.avif"
                        loading="lazy"
                        className="home_header_logo"
                        style={{ height: 30, width: 'auto', objectFit: 'contain' }}
                    />
                    <img
                        sizes="(max-width: 2560px) 100vw, 2560px"
                        srcSet="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c7477dc46eaf20b413479_2560px-Axios_logo_(2020).svg-p-500.avif 500w, https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c7477dc46eaf20b413479_2560px-Axios_logo_(2020).svg.avif 2560w"
                        alt="AXIOS logo"
                        src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c7477dc46eaf20b413479_2560px-Axios_logo_(2020).svg.avif"
                        loading="lazy"
                        className="home_header_logo"
                        style={{ height: 30, width: 'auto', objectFit: 'contain' }}
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627c7476438a954f2c1f6324_1200px-Healthline_logo.svg.avif"
                        alt="Healthline logo"
                        className="home_header_logo"
                        style={{ height: 30, width: 'auto', objectFit: 'contain' }}
                    />
                </div>
            </div>
            <TableOfContents
                toc={[
                    [
                        { text: "1. Common Food Allergens", href: "#common-food-allergens" },
                        { text: "2. Causes and Symptoms", href: "#causes-and-symptoms" },
                        { text: "3. Why Are Food Allergies Becoming More Prevalent?", href: "#why-food-allergens-more-prevalent" },
                        { text: "4. Food Allergy Testing Options", href: "#food-allergy-testing-options" },
                    ],
                    [
                        { text: "5. Difference Between Food Allergies and Sensitivities", href: "#differences-food-allergies-sensitivities" },
                        { text: "6. Treatment Options for Food Allergies", href: "#treatment-options-food-allergies" },
                        { text: "7. Next Steps", href: "#next-steps" },
                        { text: "8. FAQ", href: "#faq" },
                    ]
                ]}
            />
            {/* here */}
        </div>
    );
    
}
export default HeroFA;