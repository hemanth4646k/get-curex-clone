import TableOfContents from '../../common/ui/TableOfContents';

const toc = [
  [
    { text: "What is Xyzal (Levocetirizine)?", href: "#What-is-Xyzal-Levocetirizine" },
    { text: "Is Zarbees effective?", href: "#Is-Zarbees-effective" },
    { text: "How Effective is Children's Zyrtec?", href: "#How-Effective-is-Childrens-Zyrtec" },
    { text: "Is Generic Claritin Effective?", href: "#Is-Generic-Claritin-Effective" },
    { text: "How to Get Rid of Allergies?", href: "#How-to-Get-Rid-of-Allergies" },
    { text: "How to Get Rid of Cat Allergies Naturally?", href: "#How-to-Get-Rid-of-Cat-Allergies-Naturally" },
    { text: "Pet Allergy Medicine", href: "#Pet-Allergy-Medicine" }
  ],
  [
    { text: "Natural Remedies for Allergies", href: "#Natural-Remedies-for-Allergies" },
    { text: "Natural Allergy Medicine", href: "#Natural-Allergy-Relief" },
    { text: "Best Pet Allergy Medicine for Humans", href: "#Best-Pet-Allergy-for-Humans" },
    { text: "Allergy Medicine for Kids", href: "#Allergy-Medicine-for-Kids" },
    { text: "Which Allergy Medicine Works Best?", href: "#Which-Allergy-Medicine-Works-Best" },
    { text: "What is Epinephrine and How Does it Help with Severe Allergic Reactions?", href: "#What-is-Epinephrine-and-How-Does-it-Help-with-Severe-Allergic-Reactions" }
  ],
  [
    { text: "How Can an EpiPen Save Your Life During an Allergic Emergency?", href: "#How-Can-an-EpiPen-Save-Your-Life-During-an-Allergic-Emergency" },
    { text: "What is AUVI-Q?", href: "#What-is-AUVI-Q" },
    { text: "What is Neffy (ARS-1)", href: "#What-is-Neffy-ARS-1" },
    { text: "Why is Adrenaline Crucial for Treating Severe Allergic Reactions?", href: "#Why-is-Adrenaline-Crucial-for-Treating-Severe-Allergic-Reactions" },
    { text: "What is Sublingual Epinephrine (AQST-109) and How Does it Work?", href: "#What-is-Sublingual-Epinephrine-AQST-109-and-How-Does-it-Work" }
  ]
];

function TableOfContentsAM() {
  return <TableOfContents toc={toc} title="Table of Contents" />;
}

export default TableOfContentsAM;
