import CommonBlogPage from "./CommonBlogPage";
import Hero from "../../common/ui/Hero";
import FaqCommon from "./FaqCommon";
interface SmallCardProps {
  title: string;
  description: string;
  link: string;
}

const cardData: SmallCardProps[] = [
  {
    title: "Ryegrass pollen Allergy: Pills vs Shots vs Drops",
    description: "Compare ryegrass pollen allergy treatments: pills, shots, and drops to find the best relief option for you.",
    link: "/allergens-and-symptoms/ryegrass-pollen-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Sulfonamide Allergy: Pills vs Shots vs Drops",
    description: "Explore sulfonamide allergy treatments: pills, shots, and drops. Learn differences, benefits, and what suits you best.",
    link: "/allergens-and-symptoms/sulfonamide-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "ACE inhibitor Allergy: Pills vs Shots vs Drops",
    description: "Explore ACE inhibitor allergy treatments: pills, shots, and drops. Learn benefits, risks, and what suits you best.",
    link: "/allergens-and-symptoms/ace-inhibitor-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Formaldehyde Allergy: Pills vs Shots vs Drops",
    description: "Explore formaldehyde allergy treatments: pills, shots, and drops. Find the best option for relief and safety.",
    link: "/allergens-and-symptoms/formaldehyde-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Mustard Allergy: Pills vs Shots vs Drops",
    description: "Discover the best treatment for mustard allergy: pills, shots, or drops. Compare options for effective relief and safety.",
    link: "/allergens-and-symptoms/mustard-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Birch pollen Allergy: Pills vs Shots vs Drops",
    description: "Compare birch pollen allergy treatments: pills, shots, and drops to find the best relief for your symptoms this allergy season.",
    link: "/allergens-and-symptoms/birch-pollen-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Legume Allergy: Pills vs Shots vs Drops",
    description: "Explore legume allergy treatments: pills, shots, and drops. Compare benefits and find the best option for you.",
    link: "/allergens-and-symptoms/legume-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Tree nut Allergy: Pills vs Shots vs Drops",
    description: "Explore tree nut allergy treatments: pills, shots, and drops. Learn benefits, risks, and which option suits you best.",
    link: "/allergens-and-symptoms/tree-nut-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Peanut Allergy: Pills vs Shots vs Drops",
    description: "Explore peanut allergy treatments: pills, shots, and drops. Learn benefits, risks, and which option suits you best.",
    link: "/allergens-and-symptoms/peanut-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Opioid Allergy: Pills vs Shots vs Drops",
    description: "Explore opioid allergy symptoms and treatment options: pills, shots, and drops. Learn which is safest and most effective for you.",
    link: "/allergens-and-symptoms/opioid-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Penicillin Allergy: Pills vs Shots vs Drops",
    description: "Explore penicillin allergy treatments: pills, shots, and drops—compare benefits, risks, and effectiveness for safe allergy management.",
    link: "/allergens-and-symptoms/penicillin-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Milk Allergy: Pills vs Shots vs Drops",
    description: "Explore milk allergy treatments: pills, shots, and drops. Learn benefits, risks, and which option suits you best.",
    link: "/allergens-and-symptoms/milk-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Contrast dye Allergy: Pills vs Shots vs Drops",
    description: "Explore contrast dye allergy treatments: pills, shots, and drops—compare effectiveness, side effects, and safety for informed choices.",
    link: "/allergens-and-symptoms/contrast-dye-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Timothy grass pollen Allergy: Pills vs Shots vs Drops",
    description: "Compare Timothy grass pollen allergy treatments: pills, shots, and drops to find the best relief option for you.",
    link: "/allergens-and-symptoms/timothy-grass-pollen-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Wheat Allergy: Pills vs Shots vs Drops",
    description: "Explore wheat allergy treatments: pills, shots, and drops. Learn benefits, risks, and which option suits you best.",
    link: "/allergens-and-symptoms/wheat-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Corn Allergy: Pills vs Shots vs Drops",
    description: "Explore corn allergy treatments: pills, shots, and drops. Learn benefits, risks, and which option suits you best.",
    link: "/allergens-and-symptoms/corn-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Insulin Allergy: Pills vs Shots vs Drops",
    description: "Explore insulin allergy options: pills, shots, and drops. Learn benefits, risks, and which suits you best.",
    link: "/allergens-and-symptoms/insulin-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Sesame seed Allergy: Pills vs Shots vs Drops",
    description: "Explore sesame seed allergy treatments: pills, shots, and drops. Find the best option for relief and safety.",
    link: "/allergens-and-symptoms/sesame-seed-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Dog dander Allergy: Pills vs Shots vs Drops",
    description: "Explore dog dander allergy treatments: pills, shots, and drops to find the best relief for your symptoms.",
    link: "/allergens-and-symptoms/dog-dander-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Mosquito Allergy: Pills vs Shots vs Drops",
    description: "Discover the best treatment for mosquito allergy: pills, shots, or drops. Compare benefits and choose what suits you best.",
    link: "/allergens-and-symptoms/mosquito-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Oak pollen Allergy: Pills vs Shots vs Drops",
    description: "Compare oak pollen allergy treatments: pills, shots, and drops to find the best relief for your symptoms.",
    link: "/allergens-and-symptoms/oak-pollen-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Alternaria mold Allergy: Pills vs Shots vs Drops",
    description: "Explore Alternaria mold allergy treatments: pills, shots, and drops to find the best relief option for you.",
    link: "/allergens-and-symptoms/alternaria-mold-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Sulfite Allergy: Pills vs Shots vs Drops",
    description: "Explore sulfite allergy treatments: pills, shots, and drops. Learn benefits, risks, and which option suits you best.",
    link: "/allergens-and-symptoms/sulfite-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Fire ant venom Allergy: Pills vs Shots vs Drops",
    description: "Explore fire ant venom allergy treatments: pills, shots, and drops. Find the best option for relief and prevention.",
    link: "/allergens-and-symptoms/fire-ant-venom-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Soy Allergy: Pills vs Shots vs Drops",
    description: "Explore soy allergy treatments: pills, shots, and drops. Learn benefits, risks, and which option suits you best.",
    link: "/allergens-and-symptoms/soy-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Mugwort pollen Allergy: Pills vs Shots vs Drops",
    description: "Compare mugwort pollen allergy treatments: pills, shots, and drops to find the best relief option for you.",
    link: "/allergens-and-symptoms/mugwort-pollen-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "NSAID Allergy: Pills vs Shots vs Drops",
    description: "Explore NSAID allergy symptoms and treatment options: pills, shots, and drops to find the safest choice for you.",
    link: "/allergens-and-symptoms/nsaid-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Fish Allergy: Pills vs Shots vs Drops",
    description: "Explore fish allergy treatments: pills, shots, and drops. Learn benefits, risks, and which option suits you best.",
    link: "/allergens-and-symptoms/fish-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Horse fly Allergy: Pills vs Shots vs Drops",
    description: "Explore horse fly allergy treatments: pills, shots, and drops. Find the best option for relief and comfort.",
    link: "/allergens-and-symptoms/horse-fly-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Monosodium glutamate Allergy: Pills vs Shots vs Drops",
    description: "Explore MSG allergy treatments: pills, shots, and drops. Learn benefits, risks, and which option suits you best.",
    link: "/allergens-and-symptoms/monosodium-glutamate-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Ragweed pollen Allergy: Pills vs Shots vs Drops",
    description: "Compare ragweed allergy treatments: pills, shots, and drops to find the best relief for your symptoms this season.",
    link: "/allergens-and-symptoms/ragweed-pollen-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Shellfish Allergy: Pills vs Shots vs Drops",
    description: "Explore shellfish allergy treatments: pills, shots, and drops. Find the best option for relief and safety.",
    link: "/allergens-and-symptoms/shellfish-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Local anesthetic Allergy: Pills vs Shots vs Drops",
    description: "Explore local anesthetic allergy risks and differences between pills, shots, and drops for safe pain relief options.",
    link: "/allergens-and-symptoms/local-anesthetic-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Latex Allergy: Pills vs Shots vs Drops",
    description: "Explore latex allergy treatments: pills, shots, and drops. Compare benefits and find the best option for relief and safety.",
    link: "/allergens-and-symptoms/latex-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Buckwheat Allergy: Pills vs Shots vs Drops",
    description: "Discover the best treatment for buckwheat allergy: pills, shots, or drops. Compare benefits and choose what suits you best.",
    link: "/allergens-and-symptoms/buckwheat-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Cedar pollen Allergy: Pills vs Shots vs Drops",
    description: "Compare cedar pollen allergy treatments: pills, shots, and drops to find the best relief for your symptoms this season.",
    link: "/allergens-and-symptoms/cedar-pollen-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Aspergillus mold Allergy: Pills vs Shots vs Drops",
    description: "Explore Aspergillus mold allergy treatments: pills, shots, and drops to find the best relief option for you.",
    link: "/allergens-and-symptoms/aspergillus-mold-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Tomato Allergy: Pills vs Shots vs Drops",
    description: "Explore tomato allergy treatments: pills, shots, and drops. Find the best option for relief and safety.",
    link: "/allergens-and-symptoms/tomato-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Egg Allergy: Pills vs Shots vs Drops",
    description: "Explore egg allergy treatments: pills, shots, and drops. Learn benefits, risks, and which option suits you best.",
    link: "/allergens-and-symptoms/egg-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Nickel Allergy: Pills vs Shots vs Drops",
    description: "Explore nickel allergy treatments: pills, shots, and drops. Find the best option to manage your symptoms effectively.",
    link: "/allergens-and-symptoms/nickel-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Bee venom Allergy: Pills vs Shots vs Drops",
    description: "Explore bee venom allergy treatments: pills, shots, and drops. Compare benefits, risks, and effectiveness to find the best option for you.",
    link: "/allergens-and-symptoms/bee-venom-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Cephalosporin Allergy: Pills vs Shots vs Drops",
    description: "Explore Cephalosporin allergy symptoms and treatment options: pills, shots, and drops compared for safe use.",
    link: "/allergens-and-symptoms/cephalosporin-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Fragrance Allergy: Pills vs Shots vs Drops",
    description: "Explore fragrance allergy treatments: pills, shots, and drops. Find the best option to ease your symptoms effectively.",
    link: "/allergens-and-symptoms/fragrance-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Wasp venom Allergy: Pills vs Shots vs Drops",
    description: "Compare wasp venom allergy treatments: pills, shots, and drops to find the best option for effective relief and prevention.",
    link: "/allergens-and-symptoms/wasp-venom-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Bermuda grass pollen Allergy: Pills vs Shots vs Drops",
    description: "Compare Bermuda grass pollen allergy treatments: pills, shots, and drops to find the best relief for your symptoms.",
    link: "/allergens-and-symptoms/bermuda-grass-pollen-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Deer fly Allergy: Pills vs Shots vs Drops",
    description: "Explore effective treatments for deer fly allergy: compare pills, shots, and drops to find the best relief option for you.",
    link: "/allergens-and-symptoms/deer-fly-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Cockroach Allergy: Pills vs Shots vs Drops",
    description: "Explore cockroach allergy treatments: pills, shots, and drops. Find the best option to ease your symptoms effectively.",
    link: "/allergens-and-symptoms/cockroach-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "House fly Allergy: Pills vs Shots vs Drops",
    description: "Explore house fly allergy treatments: pills, shots, and drops. Find the best option to ease your symptoms effectively.",
    link: "/allergens-and-symptoms/house-fly-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Cat dander Allergy: Pills vs Shots vs Drops",
    description: "Explore cat dander allergy treatments: pills, shots, and drops to find the best relief for your symptoms.",
    link: "/allergens-and-symptoms/cat-dander-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Dust mite Allergy: Pills vs Shots vs Drops",
    description: "Compare dust mite allergy treatments: pills, shots, and drops to find the best relief option for your symptoms.",
    link: "/allergens-and-symptoms/dust-mite-allergy-pills-vs-shots-vs-drops-review"
  },
  {
    title: "Is Cetaphil Gentle Skin Cleanser hypoallergenic?",
    description: "Discover Cetaphil Gentle Skin Cleanser benefits, ingredients, allergens, and nutritional info for healthy, gentle skin care.",
    link: "/allergens-and-symptoms/is-cetaphil-gentle-skin-cleanser-hypoallergenic"
  },
  {
    title: "Is Herbal Essences Shampoo hypoallergenic?",
    description: "Discover Herbal Essences Shampoo benefits, ingredients, allergens, and nutritional info including fats, proteins, and sugars.",
    link: "/allergens-and-symptoms/is-herbal-essences-shampoo-hypoallergenic"
  },
  {
    title: "Are Crayola Crayons hypoallergenic?",
    description: "Discover Crayola Crayons' ingredients, allergens, calories, fats, proteins, and nutrition facts in this detailed guide.",
    link: "/allergens-and-symptoms/are-crayola-crayons-hypoallergenic"
  },
  {
    title: "Is Cetaphil Moisturizer hypoallergenic?",
    description: "Discover Cetaphil Moisturizer's key facts: allergens, ingredients, nutrition, fats, proteins, and benefits for healthy skin care.",
    link: "/allergens-and-symptoms/is-cetaphil-moisturizer-hypoallergenic"
  },
  {
    title: "Is Scotch Tape hypoallergenic?",
    description: "Discover Scotch Tape's ingredients, allergens, calories, fats, proteins, and nutrition facts in this detailed, SEO-friendly guide.",
    link: "/allergens-and-symptoms/is-scotch-tape-hypoallergenic"
  },
  {
    title: "Are Sharpie Markers hypoallergenic?",
    description: "Discover Sharpie Markers' ingredients, allergens, calories, fats, proteins, and nutrition facts in this detailed guide.",
    link: "/allergens-and-symptoms/are-sharpie-markers-hypoallergenic"
  },
  {
    title: "Is Clean & Clear Morning Burst hypoallergenic?",
    description: "Discover Clean & Clear Morning Burst: key nutrition facts, calories, allergens, fats, proteins, and sugar for a healthy start.",
    link: "/allergens-and-symptoms/is-clean-clear-morning-burst-hypoallergenic"
  },
  {
    title: "Is Glad Trash Bags hypoallergenic?",
    description: "Explore Glad Trash Bags: key facts on allergens, nutrition, fats, proteins, and sugar for a healthier, informed choice.",
    link: "/allergens-and-symptoms/is-glad-trash-bags-hypoallergenic"
  },
  {
    title: "Are Bounty Paper Towels hypoallergenic?",
    description: "Discover key facts about Bounty Paper Towels, including allergens, calories, nutrition, fats, proteins, and sugar content.",
    link: "/allergens-and-symptoms/are-bounty-paper-towels-hypoallergenic"
  },
  {
    title: "Is Friskies Cat Food hypoallergenic?",
    description: "Discover Friskies Cat Food's nutrition, calories, allergens, fats, proteins, and sugar for a healthy, balanced diet your cat will love.",
    link: "/allergens-and-symptoms/is-friskies-cat-food-hypoallergenic"
  },
  {
    title: "Are Luvs Diapers hypoallergenic?",
    description: "Discover key facts about Luvs Diapers, including allergens, nutrition, fats, proteins, and sugar for informed parenting choices.",
    link: "/allergens-and-symptoms/are-luvs-diapers-hypoallergenic"
  },
  {
    title: "Is Cascade Dishwasher Detergent hypoallergenic?",
    description: "Discover Cascade Dishwasher Detergent's allergens, calories, nutrition, fats, proteins, and sugar info from Procter & Gamble.",
    link: "/allergens-and-symptoms/is-cascade-dishwasher-detergent-hypoallergenic"
  },
  {
    title: "Is Elmer’s Glue hypoallergenic?",
    description: "Discover Elmer’s Glue ingredients, allergens, calories, fats, proteins, and nutrition facts in this detailed guide.",
    link: "/allergens-and-symptoms/is-elmer-s-glue-hypoallergenic"
  },
  {
    title: "Is Head & Shoulders Shampoo hypoallergenic?",
    description: "Discover Head & Shoulders Shampoo: ingredients, allergens, nutrition facts, and key details for safe, effective hair care.",
    link: "/allergens-and-symptoms/is-head-shoulders-shampoo-hypoallergenic"
  },
  {
    title: "Is Suave Shampoo hypoallergenic?",
    description: "Discover Suave Shampoo's ingredients, allergens, and nutritional info including fats, proteins, and sugars for informed hair care choices.",
    link: "/allergens-and-symptoms/is-suave-shampoo-hypoallergenic"
  },
  {
    title: "Is CoverGirl LashBlast Mascara hypoallergenic?",
    description: "Discover CoverGirl LashBlast Mascara's ingredients, allergens, calories, fats, proteins, and nutrition facts for safe, informed beauty choices.",
    link: "/allergens-and-symptoms/is-covergirl-lashblast-mascara-hypoallergenic"
  },
  {
    title: "Is Mr. Clean Magic Eraser hypoallergenic?",
    description: "Discover key facts about Mr. Clean Magic Eraser: uses, ingredients, allergens, and safety tips for your home cleaning needs.",
    link: "/allergens-and-symptoms/is-mr-clean-magic-eraser-hypoallergenic"
  },
  {
    title: "Is Purina ONE Dog Food hypoallergenic?",
    description: "Discover Purina ONE Dog Food's nutrition, calories, allergens, fats, proteins, and benefits for your dog's health and diet.",
    link: "/allergens-and-symptoms/is-purina-one-dog-food-hypoallergenic"
  },
  {
    title: "Is Vital Proteins Collagen Peptides hypoallergenic?",
    description: "Discover Vital Proteins Collagen Peptides: nutrition, calories, allergens, protein, fats, and sugar for a healthy lifestyle boost.",
    link: "/allergens-and-symptoms/is-vital-proteins-collagen-peptides-hypoallergenic"
  },
  {
    title: "Is Neutrogena Face Wash hypoallergenic?",
    description: "Discover Neutrogena Face Wash benefits, ingredients, allergens, and nutritional info including fats, proteins, and sugars.",
    link: "/allergens-and-symptoms/is-neutrogena-face-wash-hypoallergenic"
  },
  {
    title: "Is Gain Laundry Detergent hypoallergenic?",
    description: "Discover Gain Laundry Detergent’s ingredients, allergens, and safety info to keep your laundry fresh and allergen-free.",
    link: "/allergens-and-symptoms/is-gain-laundry-detergent-hypoallergenic"
  },
  {
    title: "Are Bic Razors hypoallergenic?",
    description: "Discover key facts about Bic Razors, including allergens, nutrition, calories, fats, proteins, and sugar for informed choices.",
    link: "/allergens-and-symptoms/are-bic-razors-hypoallergenic"
  },
  {
    title: "Is Tylenol Pain Reliever hypoallergenic?",
    description: "Discover Tylenol Pain Reliever's nutrition, allergens, calories, fats, proteins, and sugar for safe, informed use.",
    link: "/allergens-and-symptoms/is-tylenol-pain-reliever-hypoallergenic"
  },
  {
    title: "Is Scott Paper Towels hypoallergenic?",
    description: "Discover Scott Paper Towels' nutrition, allergens, calories, fats, proteins, and sugar info for a complete product overview.",
    link: "/allergens-and-symptoms/is-scott-paper-towels-hypoallergenic"
  },
  {
    title: "Are Gillette Razors hypoallergenic?",
    description: "Explore Gillette Razors: key facts, allergens, nutrition, calories, fats, proteins, and sugar for informed grooming choices.",
    link: "/allergens-and-symptoms/are-gillette-razors-hypoallergenic"
  },
  {
    title: "Is Secret Antiperspirant hypoallergenic?",
    description: "Discover Secret Antiperspirant's ingredients, allergens, calories, fats, proteins, and sugar for a complete nutrition and safety guide.",
    link: "/allergens-and-symptoms/is-secret-antiperspirant-hypoallergenic"
  },
  {
    title: "Is Tresemmé Shampoo hypoallergenic?",
    description: "Discover Tresemmé Shampoo's key ingredients, allergens, and nutritional info including fats, proteins, and sugars for informed hair care.",
    link: "/allergens-and-symptoms/is-tresemme-shampoo-hypoallergenic"
  },
  {
    title: "Is Advil Pain Reliever hypoallergenic?",
    description: "Discover Advil Pain Reliever’s key facts: allergens, calories, nutrition, fats, proteins, and sugar for informed use and safety.",
    link: "/allergens-and-symptoms/is-advil-pain-reliever-hypoallergenic"
  },
  {
    title: "Are Schick Razors hypoallergenic?",
    description: "Discover key facts about Schick Razors, including allergens, nutrition, calories, fats, proteins, and sugar for informed choices.",
    link: "/allergens-and-symptoms/are-schick-razors-hypoallergenic"
  },
  {
    title: "Are Expo Dry Erase Markers hypoallergenic?",
    description: "Discover key facts about Expo Dry Erase Markers: allergens, calories, nutrition, fats, proteins, and sugar content in detail.",
    link: "/allergens-and-symptoms/are-expo-dry-erase-markers-hypoallergenic"
  },
  {
    title: "Is Febreze Air Freshener hypoallergenic?",
    description: "Discover Febreze Air Freshener's ingredients, allergens, and nutritional facts including calories, fats, proteins, and sugars.",
    link: "/allergens-and-symptoms/is-febreze-air-freshener-hypoallergenic"
  },
  {
    title: "Is Kleenex Tissues hypoallergenic?",
    description: "Discover key facts about Kleenex Tissues, including allergens, calories, nutrition, fats, proteins, and sugar content in this detailed guide.",
    link: "/allergens-and-symptoms/is-kleenex-tissues-hypoallergenic"
  },
  {
    title: "Is Purell Hand Sanitizer hypoallergenic?",
    description: "Discover Purell Hand Sanitizer's ingredients, allergens, calories, and nutritional facts including fats, proteins, and sugars.",
    link: "/allergens-and-symptoms/is-purell-hand-sanitizer-hypoallergenic"
  },
  {
    title: "Are Pampers Diapers hypoallergenic?",
    description: "Discover key facts about Pampers Diapers, including allergens, nutrition, calories, fats, proteins, and sugar for informed baby care.",
    link: "/allergens-and-symptoms/are-pampers-diapers-hypoallergenic"
  },
  {
    title: "Is Zyrtec Allergy Medicine hypoallergenic?",
    description: "Discover Zyrtec Allergy Medicine: key info on allergens, calories, nutrition, fats, proteins, and sugar for effective allergy relief.",
    link: "/allergens-and-symptoms/is-zyrtec-allergy-medicine-hypoallergenic"
  },
  {
    title: "Is Pantene Shampoo hypoallergenic?",
    description: "Discover Pantene Shampoo's key ingredients, allergens, and nutritional info including fats, proteins, and sugars for informed hair care choices.",
    link: "/allergens-and-symptoms/is-pantene-shampoo-hypoallergenic"
  },
  {
    title: "Is Listerine Mouthwash hypoallergenic?",
    description: "Discover Listerine Mouthwash's ingredients, allergens, calories, nutrition, fats, proteins, and sugar for informed oral care choices.",
    link: "/allergens-and-symptoms/is-listerine-mouthwash-hypoallergenic"
  },
  {
    title: "Is Johnson's Baby Shampoo hypoallergenic?",
    description: "Discover key facts about Johnson's Baby Shampoo: allergens, ingredients, and safety insights for your baby's gentle care.",
    link: "/allergens-and-symptoms/is-johnson-s-baby-shampoo-hypoallergenic"
  },
  {
    title: "Is Charmin Toilet Paper hypoallergenic?",
    description: "Discover Charmin Toilet Paper's key facts: allergens, calories, nutrition, fats, proteins, and sugar for informed choices.",
    link: "/allergens-and-symptoms/is-charmin-toilet-paper-hypoallergenic"
  },
  {
    title: "Is Olay Complete Moisturizer hypoallergenic?",
    description: "Discover Olay Complete Moisturizer's key ingredients, allergens, nutrition, calories, fats, proteins, and sugar for informed skincare choices.",
    link: "/allergens-and-symptoms/is-olay-complete-moisturizer-hypoallergenic"
  },
  {
    title: "Is Softsoap Hand Soap hypoallergenic?",
    description: "Discover Softsoap Hand Soap's ingredients, allergens, calories, and nutritional facts including fats, proteins, and sugars.",
    link: "/allergens-and-symptoms/is-softsoap-hand-soap-hypoallergenic"
  },
  {
    title: "Are Ticonderoga Pencils hypoallergenic?",
    description: "Discover Ticonderoga Pencils' nutrition, allergens, calories, fats, proteins, and sugar info in this detailed guide.",
    link: "/allergens-and-symptoms/are-ticonderoga-pencils-hypoallergenic"
  },
  {
    title: "Is Nivea Body Lotion hypoallergenic?",
    description: "Discover Nivea Body Lotion’s ingredients, allergens, nutrition facts, and benefits for healthy, nourished skin.",
    link: "/allergens-and-symptoms/is-nivea-body-lotion-hypoallergenic"
  },
  {
    title: "Is Noxzema Classic Clean hypoallergenic?",
    description: "Discover Noxzema Classic Clean: ingredients, allergens, calories, fats, proteins, and nutrition facts for a healthy skincare choice.",
    link: "/allergens-and-symptoms/is-noxzema-classic-clean-hypoallergenic"
  },
  {
    title: "Are Energizer Batteries hypoallergenic?",
    description: "Discover Energizer Batteries' key facts: nutrition, allergens, calories, fats, proteins, and sugar in this detailed overview.",
    link: "/allergens-and-symptoms/are-energizer-batteries-hypoallergenic"
  },
  {
    title: "Is Hefty Trash Bags hypoallergenic?",
    description: "Explore Hefty Trash Bags' impact on allergens, nutrition, calories, fats, proteins, and sugar in this detailed guide.",
    link: "/allergens-and-symptoms/is-hefty-trash-bags-hypoallergenic"
  },
  {
    title: "Are Band-Aid Bandages hypoallergenic?",
    description: "Discover key facts about Band-Aid Bandages, including allergens, nutrition, calories, fats, proteins, and sugar content.",
    link: "/allergens-and-symptoms/are-band-aid-bandages-hypoallergenic"
  },
  {
    title: "Is Aquaphor Healing Ointment hypoallergenic?",
    description: "Discover Aquaphor Healing Ointment benefits, ingredients, allergens, and nutritional info including fats, proteins, and calories.",
    link: "/allergens-and-symptoms/is-aquaphor-healing-ointment-hypoallergenic"
  },
  {
    title: "Is Rolaids Antacid hypoallergenic?",
    description: "Discover Rolaids Antacid's nutrition, calories, allergens, fats, proteins, and sugar for informed health choices.",
    link: "/allergens-and-symptoms/is-rolaids-antacid-hypoallergenic"
  },
  {
    title: "Is Tidy Cats Litter hypoallergenic?",
    description: "Discover Tidy Cats Litter: key facts on allergens, nutrition, fats, proteins, and what makes it a top choice for cat owners.",
    link: "/allergens-and-symptoms/is-tidy-cats-litter-hypoallergenic"
  }
];
function Allergens() {
  return (
    <CommonBlogPage
      cardData={cardData}
      HeroComponent={
        <Hero
          heading="Mapping allergies in the USA: A State-by-State Allergen Resource Guide"
          subtitle="Curex is the easiest way to treat allergies at-home without allergy shots."
          imageSrc=""
          ctaText="Take free Quiz"
        />
      }
      FaqComponent={<FaqCommon />}
    />
  );
}
export default Allergens;
