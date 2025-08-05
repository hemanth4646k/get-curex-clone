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
    title: "How to calculate TDEE and use it for fat loss?",
    description: "Learn how to calculate your TDEE and use it effectively for fat loss with simple, actionable steps.",
    link: "/faq/how-to-calculate-tdee-and-use-it-for-fat-loss"
  },
  {
    title: "How to maintain fat loss without tracking forever?",
    description: "Learn effective strategies to maintain fat loss long-term without the need for constant tracking or dieting.",
    link: "/faq/how-to-maintain-fat-loss-without-tracking-forever"
  },
  {
    title: "How to break through a fat loss plateau?",
    description: "Discover effective tips to break through a fat loss plateau and jumpstart your weight loss journey today.",
    link: "/faq/how-to-break-through-a-fat-loss-plateau"
  },
  {
    title: "How to lose weight without losing muscle mass?",
    description: "Learn effective tips to lose weight while preserving muscle mass for a lean, strong, and healthy body.",
    link: "/faq/how-to-lose-weight-without-losing-muscle-mass"
  },
  {
    title: "How to balance hormones naturally to support weight loss?",
    description: "Discover natural ways to balance hormones and boost weight loss with effective lifestyle and diet tips.",
    link: "/faq/how-to-balance-hormones-naturally-to-support-weight-loss"
  },
  {
    title: "How to use carb cycling for fat loss?",
    description: "Learn how to use carb cycling for effective fat loss with our simple, science-backed guide to boost metabolism and burn fat.",
    link: "/faq/how-to-use-carb-cycling-for-fat-loss"
  },
  {
    title: "How to do strength training without bulking up?",
    description: "Learn effective strength training tips to build muscle tone without bulking up. Stay fit, lean, and strong with our expert guide!",
    link: "/faq/how-to-do-strength-training-without-bulking-up"
  },
  {
    title: "How to make fat loss sustainable for life?",
    description: "Discover effective tips to make fat loss sustainable for life with healthy habits and lasting lifestyle changes.",
    link: "/faq/how-to-make-fat-loss-sustainable-for-life"
  },
  {
    title: "How to know which diet is best for my body type?",
    description: "Discover how to choose the best diet for your body type with expert tips tailored to your unique needs and goals.",
    link: "/faq/how-to-know-which-diet-is-best-for-my-body-type"
  },
  {
    title: "How to know if I’m eating too little to lose weight?",
    description: "Learn how to tell if you're eating too little for weight loss with key signs and tips for a healthy, effective diet.",
    link: "/faq/how-to-know-if-i-m-eating-too-little-to-lose-weight"
  },
  {
    title: "How to avoid muscle loss during weight cuts?",
    description: "Learn effective tips to prevent muscle loss during weight cuts and maintain strength while shedding fat safely.",
    link: "/faq/how-to-avoid-muscle-loss-during-weight-cuts"
  },
  {
    title: "How to know if my metabolism is slowing down?",
    description: "Learn key signs your metabolism is slowing down and how to boost it for better energy and weight management.",
    link: "/faq/how-to-know-if-my-metabolism-is-slowing-down"
  },
  {
    title: "How to reverse diet without gaining fat?",
    description: "Learn how to reverse diet effectively without gaining fat with expert tips for steady metabolism and clean eating habits.",
    link: "/faq/how-to-reverse-diet-without-gaining-fat"
  },
  {
    title: "How to set realistic weight loss goals?",
    description: "Learn how to set realistic weight loss goals with practical tips for sustainable and healthy progress.",
    link: "/faq/how-to-set-realistic-weight-loss-goals"
  },
  {
    title: "How to know if I’m actually in a calorie deficit?",
    description: "Learn how to tell if you're truly in a calorie deficit with simple tips to track intake and monitor progress effectively.",
    link: "/faq/how-to-know-if-i-m-actually-in-a-calorie-deficit"
  },
  {
    title: "How to reduce belly fat without doing crunches?",
    description: "Discover effective ways to reduce belly fat without crunches using simple exercises, diet tips, and lifestyle changes.",
    link: "/faq/how-to-reduce-belly-fat-without-doing-crunches"
  },
  {
    title: "How to stay motivated to lose weight when progress is slow?",
    description: "Discover effective tips to stay motivated and keep losing weight even when progress feels slow and challenging.",
    link: "/faq/how-to-stay-motivated-to-lose-weight-when-progress-is-slow"
  },
  {
    title: "How to stay consistent with weight loss long term?",
    description: "Discover effective tips to stay consistent with long-term weight loss and achieve lasting results.",
    link: "/faq/how-to-stay-consistent-with-weight-loss-long-term"
  },
  {
    title: "How to know if water retention is hiding fat loss?",
    description: "Learn how to spot if water retention is masking your fat loss progress with these clear, expert tips.",
    link: "/faq/how-to-know-if-water-retention-is-hiding-fat-loss"
  },
  {
    title: "How to calculate protein needs for fat loss?",
    description: "Learn how to calculate your protein needs for effective fat loss with simple, science-backed tips for optimal results.",
    link: "/faq/how-to-calculate-protein-needs-for-fat-loss"
  },
  {
    title: "How to track macros for weight loss effectively?",
    description: "Learn how to track macros effectively for weight loss with simple tips to stay on target and achieve your goals faster.",
    link: "/faq/how-to-track-macros-for-weight-loss-effectively"
  },
  {
    title: "How to Get Anthem HealthKeepers",
    description: "Discover what Anthem HealthKeepers is and learn how to secure it online with our clear, step-by-step guide for hassle-free access",
    link: "/faq/how-to-get-anthem-healthkeepers"
  },
  {
    title: "How to Get Molina Healthcare Molina Medicaid",
    description: "Explore Molina Healthcare Molina Medicaid benefits and learn how to apply online quickly for accessible healthcare coverage.",
    link: "/faq/how-to-get-molina-healthcare-molina-medicaid"
  },
  {
    title: "How to Get Kaiser Permanente Platinum Plan",
    description: "Discover Kaiser Permanente Platinum Plan details and learn online enrollment tips for premium health coverage",
    link: "/faq/how-to-get-kaiser-permanente-platinum-plan"
  },
  {
    title: "How to Get Anthem Medicare Advantage HMO",
    description: "Discover Anthem Medicare Advantage HMO benefits and follow our online steps for easy enrollment and comprehensive coverage.",
    link: "/faq/how-to-get-anthem-medicare-advantage-hmo"
  },
  {
    title: "How to Get Anthem Medicare Advantage PPO",
    description: "Discover what Anthem Medicare Advantage PPO is and learn how to get it online quickly with our in-depth guide",
    link: "/faq/how-to-get-anthem-medicare-advantage-ppo"
  },
  {
    title: "How to Get Centene Corporation Ambetter Balanced Care",
    description: "Learn how to access Centene Corporation Ambetter Balanced Care online and discover key benefits for quality health coverage.",
    link: "/faq/how-to-get-centene-corporation-ambetter-balanced-care"
  },
  {
    title: "How to Get Kaiser Permanente Gold Plan",
    description: "Discover Kaiser Permanente Gold Plan features and learn easy online sign-up steps to secure your coverage quickly.",
    link: "/faq/how-to-get-kaiser-permanente-gold-plan"
  },
  {
    title: "How to Get Kaiser Permanente Signature HMO",
    description: "Discover Kaiser Permanente Signature HMO details and learn easy steps to enroll online for coverage and benefits",
    link: "/faq/how-to-get-kaiser-permanente-signature-hmo"
  },
  {
    title: "How to Get Molina Healthcare Molina Marketplace Bronze",
    description: "Learn what Molina Healthcare Marketplace Bronze offers and get step-by-step instructions to apply online quickly.",
    link: "/faq/how-to-get-molina-healthcare-molina-marketplace-bronze"
  }
];

function FaqDir() {
  return (
    <CommonBlogPage
      cardData={cardData}
      HeroComponent={
        <Hero
          heading="Allergy Immunotherapy across the US"
          subtitle="Curex is the easiest way to treat allergies at-home without allergy shots."
          imageSrc=""
          ctaText="Take free Quiz"
        />
      }
      FaqComponent={<FaqCommon />}
    />
  );
}

export default FaqDir;