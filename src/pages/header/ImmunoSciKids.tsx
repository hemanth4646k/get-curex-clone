import Hero from "../../common/ui/Hero";
import React, { useState } from 'react';
import '../../components/immunoScience/Comparisions1.css';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  citation?: string;
  url?: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
}

const ImmunoscienceFAQ: React.FC = () => {
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());

  const toggleAccordion = (sectionIndex: number, id: string) => {
    const accordionKey = `${sectionIndex}-${id}`;
    const newOpenAccordions = new Set(openAccordions);
    if (newOpenAccordions.has(accordionKey)) {
      newOpenAccordions.delete(accordionKey);
    } else {
      newOpenAccordions.add(accordionKey);
    }
    setOpenAccordions(newOpenAccordions);
  };

  const sections: FAQSectionProps[] = [
    {
  title: "SLIT in Children",
  faqs: [
    {
      id: "1",
      question: "Specific sublingual immunotherapy (SLIT) in children with perennial rhinitis: a systematic review and meta-analysis.",
      answer: "Chen L, Lei L, Cai Y, et al. International Forum of Allergy and Rhinology. 2020 September; 10(9). doi: 10.1002/ alr.22589",
      citation: "House Dust Mite (HDM) SLIT can effectively alleviate total nasal symptom scores (TNSS) and total medication scores (TMS) in children with Perennial Allergic Rhinitis (PAR).",
      url: "https://pubmed.ncbi.nlm.nih.gov/32329187"
    },
    {
      id: "2",
      question: "Mite-Induced Perennial Allergic Rhinitis in Pediatric Patients and Sublingual Immunotherapy.",
      answer: "Anderson HM, Wood RA, Busse WW. J Allergy Clin Immunol Pract. 2017 Jan-Feb;5(1):46-51. doi: 10.1016/j.jaip.2016.07.013. Epub 2016 Sep 21. PMID: 27665384.",
      citation: "This review article cites several studies involving House Dust Mite (HDM) SLIT efficacy in children as young as 3 yo with allergic rhinitis as well as asthma. The article also addresses optimism by citing studies showing that HDM SLIT has the potential to prevent asthma and new allergic sensitization. \"SLIT for house dust mite is an active area of ongoing research and investigation, and there is emerging and convincing data to be optimistic about this treatment option in the immediate future. Because of the noted safety and patient convenience of SLIT, this approach will offer an additional approach for an effective form of therapy (for children).\"",
      url: "https://pubmed.ncbi.nlm.nih.gov/27665384/"
    }
  ]
}
    ,
    {
      title: "SLIT vs. SCIT:",
      faqs: [
        {
          id: "1",
          question: "Sublingual or subcutaneous immunotherapy for allergic rhinitis?",
          answer: "Durham et al J Allergy Clin Immunol 2016 Feb;137(2):339-349.e10. doi: 10.1016/j.jaci.2015.12.1298.",
          citation: "Allergen immunotherapy is effective in patients with allergic rhinitis (AR) and, unlike antiallergic drugs, has been shown to modify the underlying cause of the disease, with proven long-term benefits. Subcutaneous immunotherapy (SCIT) has been the gold standard, whereas sublingual immunotherapy (SLIT) has emerged as an effective and safe alternative",
          url: "https://www.jacionline.org/action/showPdf?pii=S0091-6749%2815%2903112-7"
        },
        {
          id: "2",
          question: "Sublingual Versus Subcutaneous Immunotherapy for Allergic Rhinitis: What Are the Important Therapeutic and Real-World Considerations?",
          answer: "Field K, Blaiss M. Current Allergy and Asthma Reports. 2020 June 16; 20(45).",
          citation: "In recent meta-analyses, there is no significant difference in the efficacy between the two treatments",
          url: "https://pubmed.ncbi.nlm.nih.gov/32548677/"
        },
        {
          id: "3",
          question: "Subcutaneous and sublingual allergen-specific immunotherapy: a tale of two routes.",
          answer: "Incorvaia C, Ciprandi G, Makri E, et al. European Annals of Allergy and Clinical Immunology. 2020 May 6. doi: 10.23822/ EurAnnACI.1764-1489.150",
          citation: "The efficacy of SCIT and SLIT is similar in respiratory allergy, providing, based on the induction of typical changes in the immunologic response, an early control of symptoms that steadily increases during the treatment and its efficacy lasts after the recommended duration of three years. Such results are the reason why SCIT and SLIT have economic advantage over symptomatic drugs.",
          url: "https://pubmed.ncbi.nlm.nih.gov/32372588/"
        },
        {
          id: "4",
          question: "New approaches to allergen immunotherapy.",
          answer: "Gunawardana, et al Ann Allergy Asthma Immunol 2018 Sep;121(3):293-305. doi: 10.1016/j.anai.2018.07.014.... Epub 2018 Jul 17.",
          citation: "This 2018 Review article in the Annals of Allergy, Asthma and Immunology highlights SLIT as a \"well-validated alternative to SCIT.\" Evidence of SLIT's efficacy over placebo for seasonal as well as year-round allergies in several large trials are cited.",
          url: "https://www.annallergy.org/article/S1081-1206(18)30576-3/fulltext"
        },
        {
          id: "5",
          question: "Allergen immunotherapy for allergic rhinoconjunctivitis: A systematic review and meta-analysis.",
          answer: "Dhami S, Nurmatov U, Arasi S, et al. Allergy 2017;72(11):1597-631.",
          citation: "This review and metaanalysis of 160 immunotherapy studies specifically focuses on allergic rhinitis symptoms and medication scores. SLIT and SCIT significantly reduced both scores yet no significant difference in reduction was noted when comparing SLIT and SCIT head to head.",
          url: "https://onlinelibrary.wiley.com/doi/full/10.1111/all.13201"
        },
        {
          id: "6",
          question: "Real world effectiveness of Sublingual Allergen Immunotherapy on the onset and worsening of allergic asthma.",
          answer: "P. Devillier, P. Demoly, M. Molimard, JF. Bergman, B. Delaisi; EMJ Allergy & Immunology 7.1 2022",
          citation: "The real-world study included over 100,000 patients on sublingual liquid immunotherapy (\"allergy drops\") with allergic rhinitis and asthma. The study found that allergy drops provided \"a reduction of the risk of asthma worsening of 28% and reaching 37% for severe forms.",
          url: "https://emj.emg-health.com/wp-content/uploads/sites/2/2022/08/Infographic-The-EfficAPSI-study.pdf"
        },
        {
          id: "7",
          question: "Subcutaneous and Sublingual Immunotherapy To Treat Allergic Rhinitis/Rhinoconjunctivitis and Asthma.",
          answer: "Agency for Healthcare Research & Quality. August 2013. AHRQ Pub. No. 13-EHC061-3",
          citation: "There is sufficient evidence to support the overall effectiveness and safety of both SCIT and SLIT for treating allergic rhinoconjunctivitis and asthma…However, there is not enough evidence to determine if either SCIT or SLIT is superior…SCIT and SLIT are usually safe, although local reactions are commonly reported…",
          url: "https://www.ncbi.nlm.nih.gov/books/NBK158932/pdf/Bookshelf_NBK158932.pdf"
        }
      ]
    },
    {
      title: "SLIT History",
      faqs: [
        {
          id: "1",
          question: "30 years of sublingual immunotherapy.",
          answer: "Passalacqua et al Allergy 2020 May;75(5):1107-1120. doi: 10.1111/all.14113. Epub 2019 Dec 20.",
          citation: "Allergen immunotherapy is effective in patients with allergic rhinitis (AR) and, unlike antiallergic drugs, has been shown to modify the underlying cause of the disease, with proven long-term benefits. Subcutaneous immunotherapy (SCIT) has been the gold standard, whereas sublingual immunotherapy (SLIT) has emerged as an effective and safe alternative",
          url: "https://www.jacionline.org/action/showPdf?pii=S0091-6749%2815%2903112-7"
        },
        {
          id: "2",
          question: "Sublingual immunotherapy in the United States: history and current relevance in the time of COVID-19.",
          answer: "Lin, SY. International Forum of Allergy & Rhinology. 2020 Oct;10(10):1125-1126. DOI: 10.1002/alr.22670.",
          citation: "The changing outlook of physicians toward SLIT in the United States is illuminated by a 2019 survey of practicing allergists, where 73.5% reported using SLIT for patients, in comparison to 5.9% a decade earlier.",
          url: "https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/alr.22670"
        }
      ]
    },
    {
      title: "SLIT in Children",
      faqs: [
        {
          id: "1",
          question: "Specific sublingual immunotherapy (SLIT) in children with perennial rhinitis: a systematic review and meta-analysis.",
          answer: "Chen L, Lei L, Cai Y, et al. International Forum of Allergy and Rhinology. 2020 September; 10(9). doi: 10.1002/ alr.22589",
          citation: "House Dust Mite (HDM) SLIT can effectively alleviate total nasal symptom scores (TNSS) and total medication scores (TMS) in children with Perennial Allergic Rhinitis (PAR).",
          url: "https://pubmed.ncbi.nlm.nih.gov/32329187"
        },
        {
          id: "2",
          question: "Mite-Induced Perennial Allergic Rhinitis in Pediatric Patients and Sublingual Immunotherapy.",
          answer: "Anderson HM, Wood RA, Busse WW. J Allergy Clin Immunol Pract. 2017 Jan-Feb;5(1):46-51. doi: 10.1016/j.jaip.2016.07.013. Epub 2016 Sep 21. PMID: 27665384.",
          citation: "This review article cites several studies involving House Dust Mite (HDM) SLIT efficacy in children as young as 3 yo with allergic rhinitis as well as asthma. The article also addresses optimism by citing studies showing that HDM SLIT has the potential to prevent asthma and new allergic sensitization. \"SLIT for house dust mite is an active area of ongoing research and investigation, and there is emerging and convincing data to be optimistic about this treatment option in the immediate future.... Because of the noted safety and patient convenience of SLIT, this approach will offer an additional approach for an effective form of therapy (for children).\"",
          url: "https://pubmed.ncbi.nlm.nih.gov/27665384/"
        }
      ]
    },
    {
      title: "SLIT Efficacy",
      faqs: [
        {
          id: "1",
          question: "Sublingual immunotherapy: current concepts for the U.S. practitioner.",
          answer: "Lin SY. Int Forum Allergy Rhinol. 2014 Sep;4 Suppl 2:S55-9. doi: 10.1002/alr.21388. PMID: 25182357.",
          citation: "SLIT is safe and effective, and offers a convenient alternative to injection immunotherapy for appropriate patients with allergic rhinitis.",
          url: "https://pubmed.ncbi.nlm.nih.gov/25182357/#"
        },
        {
          id: "2",
          question: "Randomized, double-blind, placebo-controlled trial of standardized ragweed sublingual-liquid immunotherapy for allergic rhinoconjunctivitis.",
          answer: "Creticos PS, Esch RE, Couroux P, Gentile D, D'Angelo P, Whitlow B, Alexander M, Coyne TC. J Allergy Clin Immunol. 2014 Mar;133(3):751-8. doi: 10.1016/j.jaci.2013.10.041.",
          citation: "This is the first successful North American confirmatory phase 3 clinical trial to demonstrate the safety and efficacy of a sublingual standardized ragweed allergen immunotherapy liquid extract for the treatment of [allergic rhinitis]. During the entire ragweed season, there was a 43% decrease in [allergy symptoms]. Subjects n=218 treated with Ragweed sublingual immunotherapy ages between 18-55 years old.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24332263/"
        },
        {
          id: "3",
          question: "Allergen immunotherapy for allergic rhinoconjunctivitis: A systematic review and meta-analysis.",
          answer: "Dhami S, Nurmatov U, Arasi S, Khan T, Asaria M, Zaman H, Agarwal A, Netuveli G, Roberts G, Pfaar O, Muraro A, Ansotegui IJ, Calderon M, Cingi C, Durham S, van Wijk RG, Halken S, Hamelmann E, Hellings P, Jacobsen L, Knol E, Larenas-Linnemann D, Lin S, Maggina P, Mösges R, Oude Elberink H, Pajno G, Panwankar R, Pastorello E, Penagos M, Pitsios C, Rotiroti G, Timmermans F, Tsilochristou O, Varga EM, Schmidt-Weber C, Wilkinson J, Williams A, Worm M, Zhang L, Sheikh A. Allergy. 2017 Nov;72(11):1597-1631. doi: 10.1111/all.13201. Epub 2017 Jul 14. PMID: 28493631.",
          citation: "The studies (160) found that AIT and where defined both SLIT and SCIT, were more effective than standard care including pharmacotherapy. The studies that compared SLIT and SCIT gave very mixed results not allowing a clear conclusion to be drawn that either treatment was necessarily more effective or more costly than the other from a health system perspective.",
          url: "https://onlinelibrary.wiley.com/doi/full/10.1111/all.13201"
        },
        {
          id: "4",
          question: "Sublingual immunotherapy: World Allergy Organization position paper 2013 update.",
          answer: "Canonica GW, Cox L, Pawankar R, Baena-Cagnani CE, Blaiss M et al.... World Allergy Organization Journal 2014; 7:6 (28 March). doi:10.1186/1939-4551-7-6",
          citation: "The literature suggests that, overall, SLIT is clinically effective in rhinoconjunctivitis and asthma, although differences exist among allergens. Some open, controlled trials suggested that the clinical efficacy of SLIT is similar to that of injection immunotherapy.",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3983904/"
        }
      ]
    },
    {
      title: "SLIT Time to Efficacy",
      faqs: [
        {
          id: "1",
          question: "Sublingual allergen immunotherapy with a liquid birch pollen product in patients with seasonal allergic rhinoconjunctivitis with or without asthma.",
          answer: "Pfaar O, Bachert C, Kuna P, et al. J Allergy Clin Immunol. 2019;143(3):970-977. doi:10.1016/j.jaci.2018.11.018",
          citation: "Primary efficacy results demonstrated a significant (P < .0001) and clinically relevant (32%) reduction in the combined symptom and medication score compared with placebo after 3 to 6 months of SLIT. Significantly better rhinoconjunctivitis quality-of-life scores (P < .0001) and the patient's own overall assessment of his or her health status, including the visual analog scale score (Euro Quality of Life Visual Analogue Scale; P = .0025), were also demonstrated.",
          url: "https://www.jacionline.org/article/S0091-6749(18)31720-2/fulltext"
        },
        {
          id: "2",
          question: "Randomized controlled trial of a ragweed allergy immunotherapy tablet in North American and European adults.",
          answer: "Creticos PS, Maloney J, Bernstein DI, et al. J Allergy Clin Immunol. 2013;131(5):1342-9.e6. doi:10.1016/j.jaci.2013.03.019",
          citation: "In this (52 week) trial, ragweed AIT of 12 Amb a 1-U effectively reduced symptoms and rescue medication use in subjects with ragweed-induced AR/C and was well tolerated. This study's efficacy and safety findings support the use of self-administered ragweed AIT in the treatment of AR/C induced by this prevalent aeroallergen.",
          url: "https://www.jacionline.org/article/S0091-6749(13)00507-1/fulltext"
        }
      ]
    },
    {
      title: "SLIT Safety",
      faqs: [
        {
          id: "1",
          question: "Allergen Immunotherapy in children with respiratory allergic diseases.",
          answer: "Arasi S, Pajno GB, Panasiti I, Sandoval M, Alvaro-Lozano M. Minerva Pediatr. 2020 Oct;72(5):343-357. doi: 10.23736/S0026-4946.20.05959-9. Epub 2020 Jul 29. PMID: 32731732.",
          citation: "Currently there are no safety concerns about SLIT.... The more recent systematic reviews considered systemic reactions extremely rare and anecdotal among SLIT patients.",
          url: "https://pubmed.ncbi.nlm.nih.gov/32731732/"
        },
        {
          id: "2",
          question: "Safety of sublingual-swallow immunotherapy in children and adults.",
          answer: "André C, Vatrinet C, Galvain S, Carat F, Sicard H. Int Arch Allergy Immunol. 2000 Mar;121(3):229-34. doi: 10.1159/000024322. PMID: 10729782.",
          citation: "No serious adverse event was reported in the studies monitored, confirming the good safety profile of the sublingual-swallow method both in children and adults with rhinitis or moderate asthma.",
          url: "https://www.jacionline.org/article/S0091-6749(13)00507-1/fulltext"
        },
        {
          id: "3",
          question: "Safety of sublingual immunotherapy with monomeric allergoid in adults: multicenter post-marketing surveillance study.",
          answer: "Lombardi C, Gargioni S, Melchiorre A, Tiri A, Falagiani P, Canonica GW, Passalacqua G. Allergy. 2001 Oct;56(10):989-92. doi: 10.1034/j.1398-9995.2001.00181.x. PMID: 11576079.",
          citation: "The results of this study, performed in a real situation of clinical practice, confirm the satisfactory safety profile of SLIT.",
          url: "https://pubmed.ncbi.nlm.nih.gov/11576079/"
        },
        {
          id: "4",
          question: "Current Evidence on Safety and Practical Considerations for Administration of Sublingual Allergen Immunotherapy (SLIT) in the United States",
          answer: "Tolly G. Epstein, Christopher Calabria, Linda S. Cox, Sten Dreborg. The Journal of Allergy and Clinical Immunology: In Practice,",
          citation: "Liquid sublingual allergen immunotherapy (SLIT) has been used off-label for decades, and Food and Drug Administration (FDA)-approved grass and ragweed SLIT tablets have been available in the United States since 2014. Potentially life-threatening events from SLIT do occur, although they appear to be very rare...... Surveillance data for off-label liquid SLIT (nonstandardized and generally multiallergen) in the United States identified 45 SARs in 3343 patients (1.4% of patients) between 2012 and 2013, including 9 grade 2 SARs (0.3% of patients) and 1 grade 3 SAR (0.03% of patients)...off-label SLIT drops do allow for a slow build-up in highly sensitive patients, whereas SLIT tablets, with the exception of Oralair in children, do not.",
          url: "https://www.sciencedirect.com/science/article/pii/S2213219816304147"
        },
        {
          id: "5",
          question: "Sublingual allergen immunotherapy: mode of action and its relationship with the safety profile.",
          answer: "Calderon MA, Simons FE, Malling HJ, Lockey RF, Moingeon P, Demoly P. Allergy. 2012;67:302–311.",
          citation: "A 2012 review by Calderon et al. estimated the anaphylaxis rate of SLIT to be 1 per 100 million doses, or 1 per 526,000 treatment years.",
          url: "https://pubmed.ncbi.nlm.nih.gov/11576079/"
        }
      ]
    },
    {
      title: "SLIT Duration",
      faqs: [
        {
          id: "1",
          question: "Long-lasting effects of sublingual immunotherapy according to its duration: a 15-year prospective study.",
          answer: "Marogna M, Spadolini I, Massolo A, Canonica GW, Passalacqua G. J Allergy Clin Immunol. 2010 Nov;126(5):969-75. doi: 10.1016/j.jaci.2010.08.030. Epub 2010 Oct 12. PMID: 20934206.",
          citation: "Seventy-eight patients were enrolled, and 59 completed the study. In the 12 control subjects no relevant change in clinical scores was seen throughout the study. In the patients receiving SLIT for 3 years, the clinical benefit persisted for 7 years. In those receiving immunotherapy for 4 or 5 years, the clinical benefit persisted for 8 years. New sensitizations occurred in all the control subjects over 15 years and in less than a quarter of the patients receiving SLIT (21%, 12%, and 11%, respectively). The second course of vaccination induced a benefit more rapidly than the first course.",
          url: "https://pubmed.ncbi.nlm.nih.gov/20934206/"
        },
        {
          id: "2",
          question: "SQ-standardized sublingual grass immunotherapy: confirmation of disease modification 2 years after 3 years of treatment in a randomized trial.",
          answer: "Durham SR, Emminger W, Kapp A, de Monchy JG, Rak S, Scadding GK, Wurtzen PA, Andersen JS, Tholstrup B, Riis B, Dahl R. J Allergy Clin Immunol. 2012 Mar;129(3):717-725.e5. doi: 10.1016/j.jaci.2011.12.973. Epub 2012 Jan 29. PMID: 22285278.",
          citation: "Study to investigate sustained efficacy and disease modification in a 5-year double-blind, placebo-controlled trial, including 2 years of blinded follow-up after completion of a 3-year period of treatment with the SQ-standardized grass allergy immunotherapy tablet.... Subjects n=238 \"The results confirm disease modification by SQ-standardized grass allergy immunotherapy tablet in addition to effective symptomatic treatment of allergic rhinoconjunctivitis.",
          url: "https://pubmed.ncbi.nlm.nih.gov/22285278/"
        }
      ]
    },
    {
      title: "Compounding and Off-label Prescribing in the U.S.",
      faqs: [
        {
          id: "1",
          question: "Understanding differences in allergen immunotherapy products and practices in North America and Europe.",
          answer: "Mahler V, Esch RE, Kleine-Tebbe J, Lavery WJ, Plunkett G, Vieths S, Bernstein DI. J Allergy Clin Immunol. 2019 Mar;143(3):813-828. doi: 10.1016/j.jaci.2019.01.024. PMID: 30850069.",
          citation: "Off-label use of sublingual drops prepared from commercial allergen extracts is widely practiced in the United States. Commercial aqueous extract products are not FDA approved for sublingual administration, and these have not been rigorously studied in double-blind placebo-controlled studies. Thus effective and safe dose ranges have not been characterized for commercial aqueous allergen extracts (marketed for SCIT) used in the preparation of nonapproved SLIT drops.",
          url: "https://www.jacionline.org/article/S0091-6749(19)30121-6/fulltext"
        },
        {
          id: "2",
          question: "Off-label prescribing. Legal implications.",
          answer: "Henry, V . J Leg Med. 1999;20:365-383.",
          citation: "Off-label medication use accounts for an estimated 50% of medication prescribing. The purpose of off-label use is to benefit an individual patient.",
          url: "https://pubmed.ncbi.nlm.nih.gov/10530051/"
        },
        {
          id: "3",
          question: "Off-label Justified or Not?",
          answer: "Ruan X, Kaye AD. Am J Med Qual. 2016 Mar-Apr;31(2):101-2. doi: 10.1177/1062860615599838. Epub 2015 Aug 6.PMID: 26250929",
          citation: "",
          url: "https://journals.sagepub.com/doi/10.1177/1062860615599838"
        }
      ]
    }
  ];

  return (
    <div className="padding-section-medium">
      <div className="max-width-large align-center">
        <div className="immunoscience-faq_component">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="immunoscience-faq_subsection">
              <div className="margin-bottom margin-small">
                <div className="text-align-center">
                  <h2 className="heading-style-h3">{section.title}</h2>
                </div>
              </div>
              
              <div className="faqs-insurance_list">
                {section.faqs.map((faq) => {
                  const accordionKey = `${sectionIndex}-${faq.id}`;
                  const isOpen = openAccordions.has(accordionKey);
                  
                  return (
                    <div 
                      key={faq.id}
                      className={`immunoscience-faq_accordion w-dropdown ${isOpen ? 'w--open' : ''}`}
                    >
                      <div 
                        className="immunoscience-faq_accordion-header w-dropdown-toggle"
                        onClick={() => toggleAccordion(sectionIndex, faq.id)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isOpen}
                      >
                        <div className="immunoscience-faq_text-wrapper">
                          <div className="faqs_accordion-header-index">{faq.id}.</div>
                          <div className="immunoscience-faq_accordion-header-text">
                            {faq.question}
                          </div>
                        </div>
                        <div className="immunoscience-faq_accordion-icon w-icon-dropdown-toggle">
                          {/* Icon will be added later */}
                        </div>
                      </div>
                      
                      {isOpen && (
                        <nav className="immunoscience-faq_accordion-body w-dropdown-list w--open">
                          <div className="text-rich-text w-richtext">
                            <p>{faq.answer}</p>
                            {faq.url && (
                              <p>
                                <a 
                                  href={faq.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="link-16"
                                >
                                  {faq.url}
                                </a>
                              </p>
                            )}
                            {faq.citation && (
                              <p>
                                <em>"{faq.citation}"</em>
                              </p>
                            )}
                          </div>
                        </nav>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


function ImmunoSciKids(){
    return (
        <div>
            <Hero
            heading="Pediatric Immunotherapy Science"
            subtitle="Clinical studies referenced below are intended to provide information to medical professionals about allergy immunotherapy. These studies have not been reviewed by the FDA."
            imageAlt=""
            imageSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6351557bb5ff4fa8a9dbf624_image5-p-800.jpg"
            />
            <ImmunoscienceFAQ/>
        </div>
    );
}
export default ImmunoSciKids;