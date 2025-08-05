
import Hero from "../../common/ui/Hero";
import CommonBlogPage from "./CommonBlogPage";

const cardData = [
  {
    "title": "Top Cardio with No Lower Back Pain",
    "description": "Discover top cardio exercises that won't strain your lower back. Get workout tips and a weekly plan for effective, pain-free fitness results.",
    "link": "/top-exercises/top-cardio-with-no-lower-back-pain"
  },
  {
    "title": "Top Cardio with No Foot Pain",
    "description": "Discover top cardio workouts that prevent foot pain. Explore the best exercises and get a weekly plan for effective, pain-free fitness.",
    "link": "/top-exercises/top-cardio-with-no-foot-pain"
  },
  {
    "title": "Top Cardio with No Shin Pain",
    "description": "Discover top cardio exercises that prevent shin pain. Learn how to combine them effectively and follow a week-long workout plan for optimal results.",
    "link": "/top-exercises/top-cardio-with-no-shin-pain"
  },
  {
    "title": "Top Cardio with No Shoulder Pain",
    "description": "Discover the best cardio exercises that won't stress your shoulders. Get tips on combining workouts and follow a weekly plan for optimal results.",
    "link": "/top-exercises/top-cardio-with-no-shoulder-pain"
  },
  {
    "title": "Top Cardio with No Hip Pain",
    "description": "Discover the best cardio exercises for hip pain relief. Get a complete week workout plan combining effective moves for a pain-free fitness journey.",
    "link": "/top-exercises/top-cardio-with-no-hip-pain"
  },
  {
    "title": "Top Cardio with No Leg Pain",
    "description": "Discover top cardio exercises that minimize leg pain. Learn how to combine them for effective workouts and access a tailored week-long plan.",
    "link": "/top-exercises/top-cardio-with-no-leg-pain"
  },
  {
    "title": "Top Cardio with No Neck Pain",
    "description": "Discover top cardio exercises that are gentle on the neck. Learn how to combine them effectively with our week-long workout plan for optimal results.",
    "link": "/top-exercises/top-cardio-with-no-neck-pain"
  },
  {
    "title": "Top Cardio with No Calf Pain",
    "description": "Discover the best cardio exercises that prevent calf pain. Get a week-long workout plan to combine these exercises for optimal results.",
    "link": "/top-exercises/top-cardio-with-no-calf-pain"
  },
  {
    "title": "Top Cardio with No Upper Back Pain",
    "description": "Discover the best cardio exercises to avoid upper back pain. Learn how to combine them effectively, plus a complete weekly workout plan.",
    "link": "/top-exercises/top-cardio-with-no-upper-back-pain"
  },
  {
    "title": "Top Cardio with No Ankle Pain",
    "description": "Discover the best cardio exercises that spare your ankles from pain. Get a combined workout plan & boost your fitness without sacrificing comfort.",
    "link": "/top-exercises/top-cardio-with-no-ankle-pain"
  },
  {
    "title": "Top Cardio with No Wrist Pain",
    "description": "Discover the best cardio exercises that avoid wrist pain, learn how to combine them, and follow our week-long workout plan for optimal results.",
    "link": "/top-exercises/top-cardio-with-no-wrist-pain"
  },
  {
    "title": "Top Cardio with No Knee Pain",
    "description": "Discover the best knee-friendly cardio exercises. Learn how to combine them and follow our week-long workout plan for effective, pain-free fitness.",
    "link": "/top-exercises/top-cardio-with-no-knee-pain"
  },
  {
    "title": "Top Exercises for Losing Lower Face (Jowls) Fat",
    "description": "Discover top exercises to lose jowls, how to combine them effectively, and follow a week-long workout plan for a slimmer lower face.",
    "link": "/top-exercises/top-exercises-for-losing-lower-face-jowls-fat"
  },
  {
    "title": "Top Exercises for Losing Upper Ankles Fat",
    "description": "Discover top exercises to lose upper ankle fat, learn how to combine them, and follow our effective week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-upper-ankles-fat"
  },
  {
    "title": "Top Exercises for Losing Hip Dips Fat",
    "description": "Discover the top exercises to lose hip dips fat, learn how to combine them, and follow our effective week-long workout plan for amazing results.",
    "link": "/top-exercises/top-exercises-for-losing-hip-dips-fat"
  },
  {
    "title": "Top Exercises for Losing Neck Rolls Fat",
    "description": "Discover the top exercises to lose neck rolls fat. Get a complete week workout plan and tips to combine these effective exercises for the best results.",
    "link": "/top-exercises/top-exercises-for-losing-neck-rolls-fat"
  },
  {
    "title": "Top Exercises for Losing Upper Inner Arm Fat",
    "description": "Discover the top exercises to lose upper inner arm fat, learn how to combine them effectively, and get a detailed weekly workout plan for fast results.",
    "link": "/top-exercises/top-exercises-for-losing-upper-inner-arm-fat"
  },
  {
    "title": "Top Exercises for Losing Upper Chest (Under Collarbone) Fat",
    "description": "Discover the best exercises to lose upper chest fat, learn how to combine them effectively, and follow a tailored week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-upper-chest-under-collarbone-fat"
  },
  {
    "title": "Top Exercises for Losing Cheeks Fat",
    "description": "Discover the top exercises to reduce cheek fat, learn how to combine them effectively, and follow our week-long workout plan for visible results.",
    "link": "/top-exercises/top-exercises-for-losing-cheeks-fat"
  },
  {
    "title": "Top Exercises for Losing Midsection (General) Fat",
    "description": "Discover the top exercises to lose midsection fat, learn how to combine them effectively, and follow a weekly workout plan for the best results.",
    "link": "/top-exercises/top-exercises-for-losing-midsection-general-fat"
  },
  {
    "title": "Top Exercises for Losing Rib Cage Area Fat",
    "description": "Discover effective exercises to lose rib cage area fat, learn how to combine them, and follow a week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-rib-cage-area-fat"
  },
  {
    "title": "Top Exercises for Losing Upper Hips Fat",
    "description": "Discover the best exercises to shed upper hips fat, learn how to combine them effectively, and follow our week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-upper-hips-fat"
  },
  {
    "title": "Top Exercises for Losing Glutes (Under Buttocks) Fat",
    "description": "Discover top exercises to lose glutes fat, combine them effectively, and follow a week-long workout plan for toned under buttocks.",
    "link": "/top-exercises/top-exercises-for-losing-glutes-under-buttocks-fat"
  },
  {
    "title": "Top Exercises for Losing Lower Outer Arm Fat",
    "description": "Discover the best exercises to target lower outer arm fat, learn effective combinations, and follow a detailed weekly workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-lower-outer-arm-fat"
  },
  {
    "title": "Top Exercises for Losing Lower Calves Fat",
    "description": "Discover top exercises to lose lower calves fat. Learn how to combine them effectively with our week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-lower-calves-fat"
  },
  {
    "title": "Top Exercises for Losing Eyelids (Puffiness) Fat",
    "description": "Discover effective exercises to reduce eyelid puffiness. Combine techniques into a weekly workout plan to achieve youthful, refreshed eyes.",
    "link": "/top-exercises/top-exercises-for-losing-eyelids-puffiness-fat"
  },
  {
    "title": "Top Exercises for Losing Saddle Bags (Outer Hip Area) Fat",
    "description": "Discover the top exercises to lose saddle bags and outer hip fat. Get a weekly workout plan to efficiently combine these moves for best results.",
    "link": "/top-exercises/top-exercises-for-losing-saddle-bags-outer-hip-area-fat"
  },
  {
    "title": "Top Exercises for Losing Obliques Fat",
    "description": "Discover top exercises to lose oblique fat with our guide. Learn how to combine them effectively and start your week-long workout plan today.",
    "link": "/top-exercises/top-exercises-for-losing-obliques-fat"
  },
  {
    "title": "Top Exercises for Losing Buttocks Fat",
    "description": "Discover the top exercises to lose buttocks fat and learn how to combine them effectively with our easy-to-follow weekly workout plan.",
    "link": "/top-exercises/top-exercises-for-losing-buttocks-fat"
  },
  {
    "title": "Top Exercises for Losing Groin Area Fat",
    "description": "Discover the best exercises to lose groin area fat, how to combine them effectively, and follow a tailored week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-groin-area-fat"
  },
  {
    "title": "Top Exercises for Losing Hips Fat",
    "description": "Discover the top exercises to lose hip fat, learn how to combine them effectively, and follow our detailed week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-hips-fat"
  },
  {
    "title": "Top Exercises for Losing Sides (Love Handles) Fat",
    "description": "Discover the best exercises to lose side fat and get a trim waistline. Follow our week-long workout plan for effective love handle reduction.",
    "link": "/top-exercises/top-exercises-for-losing-sides-love-handles-fat"
  },
  {
    "title": "Top Exercises for Losing Inner Thighs Fat",
    "description": "Discover the top exercises to lose inner thigh fat and how to combine them effectively in a week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-inner-thighs-fat"
  },
  {
    "title": "Top Exercises for Losing Hands Fat",
    "description": "Discover the best exercises to shed hand fat. Get a week-long workout plan and tips to combine moves effectively for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-hands-fat"
  },
  {
    "title": "Top Exercises for Losing Wrists Fat",
    "description": "Discover top exercises to lose wrist fat and how to combine them effectively. Get a detailed weekly workout plan for slimmer wrists.",
    "link": "/top-exercises/top-exercises-for-losing-wrists-fat"
  },
  {
    "title": "Top Exercises for Losing Upper Arms Fat",
    "description": "Discover the best exercises to lose upper arm fat. Get expert tips and a week-long workout plan to tone your arms effectively and boost confidence.",
    "link": "/top-exercises/top-exercises-for-losing-upper-arms-fat"
  },
  {
    "title": "Top Exercises for Losing Underarms/Armpits Fat",
    "description": "Discover effective exercises to lose underarm fat. Get a complete workout plan and tips on combining exercises for best results.",
    "link": "/top-exercises/top-exercises-for-losing-underarms-armpits-fat"
  },
  {
    "title": "Top Exercises for Losing Arms Fat",
    "description": "Discover effective exercises to lose arm fat, learn how to combine them, and follow our week-long workout plan for toned, sculpted arms.",
    "link": "/top-exercises/top-exercises-for-losing-arms-fat"
  },
  {
    "title": "Top Exercises for Losing Knees Fat",
    "description": "Discover the top exercises to lose knee fat effectively. Learn how to combine them and follow a week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-knees-fat"
  },
  {
    "title": "Top Exercises for Losing Forearms Fat",
    "description": "Discover the best exercises to lose forearm fat effectively. Learn combination techniques and follow a tailored week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-forearms-fat"
  },
  {
    "title": "Top Exercises for Losing Flanks Fat",
    "description": "Discover the best exercises to lose flanks fat, how to combine them effectively, and follow our week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-flanks-fat"
  },
  {
    "title": "Top Exercises for Losing Collarbone Area Fat",
    "description": "Discover the top exercises to lose collarbone area fat. Get a week-long workout plan and learn how to combine these exercises for effective results.",
    "link": "/top-exercises/top-exercises-for-losing-collarbone-area-fat"
  },
  {
    "title": "Top Exercises for Losing Lower Back Fat",
    "description": "Discover top exercises to lose lower back fat. Learn to combine them effectively and follow a week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-lower-back-fat"
  },
  {
    "title": "Top Exercises for Losing Breasts Fat",
    "description": "Discover effective exercises to reduce breast fat, combine them perfectly, and follow a week-long workout plan for visible results.",
    "link": "/top-exercises/top-exercises-for-losing-breasts-fat"
  },
  {
    "title": "Top Exercises for Losing Front Thighs Fat",
    "description": "Discover the best exercises to lose front thigh fat. Learn how to combine them effectively with our weekly workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-front-thighs-fat"
  },
  {
    "title": "Top Exercises for Losing Chest Fat",
    "description": "Discover the top exercises to lose chest fat. Get tips on combining them and follow a week-long workout plan for effective results.",
    "link": "/top-exercises/top-exercises-for-losing-chest-fat"
  },
  {
    "title": "Top Exercises for Losing Ankles Fat",
    "description": "Discover the top exercises to eliminate ankle fat! Learn how to combine them effectively and get a detailed one-week workout plan. Get started today!",
    "link": "/top-exercises/top-exercises-for-losing-ankles-fat"
  },
  {
    "title": "Top Exercises for Losing Waist Fat",
    "description": "Discover top exercises to lose waist fat, combine them effectively, and follow a weekly workout plan for optimal results. Get leaner and healthier today!",
    "link": "/top-exercises/top-exercises-for-losing-waist-fat"
  },
  {
    "title": "Top Exercises for Losing Back Thighs Fat",
    "description": "Discover top exercises to shed back thigh fat, learn to combine them effectively, and access a comprehensive weekly workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-back-thighs-fat"
  },
  {
    "title": "Top Exercises for Losing Shoulder Blades Fat",
    "description": "Discover effective exercises to lose shoulder blades fat. Learn how to combine them and follow our weekly workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-shoulder-blades-fat"
  },
  {
    "title": "Top Exercises for Losing Calves Fat",
    "description": "Discover the top exercises to shed calf fat, tips on combining them, and a detailed week workout plan to tone your legs effectively.",
    "link": "/top-exercises/top-exercises-for-losing-calves-fat"
  },
  {
    "title": "Top Exercises for Losing Thighs Fat",
    "description": "Discover the top exercises to lose thigh fat effectively. Learn how to combine them and follow a tailored week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-thighs-fat"
  },
  {
    "title": "Top Exercises for Losing Upper Abdomen Fat",
    "description": "Discover the best exercises to lose upper abdomen fat. Learn how to combine them effectively and follow our week workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-upper-abdomen-fat"
  },
  {
    "title": "Top Exercises for Losing Fingers Fat",
    "description": "Discover top exercises to lose finger fat effectively. Get tips on combining workouts and a weekly plan for leaner fingers and improved hand strength.",
    "link": "/top-exercises/top-exercises-for-losing-fingers-fat"
  },
  {
    "title": "Top Exercises for Losing Upper Back Fat",
    "description": "Discover the best exercises to lose upper back fat, learn how to combine them effectively, and follow our expert week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-upper-back-fat"
  },
  {
    "title": "Top Exercises for Losing Outer Thighs Fat",
    "description": "Discover the best exercises to lose outer thigh fat, combine them effectively, and follow a weekly workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-outer-thighs-fat"
  },
  {
    "title": "Top Exercises for Losing Back Fat",
    "description": "Discover effective exercises to lose back fat, combine them for optimal results, and follow our detailed week workout plan to achieve your fitness goals.",
    "link": "/top-exercises/top-exercises-for-losing-back-fat"
  },
  {
    "title": "Top Exercises for Losing Lower Abdomen (Pouch) Fat",
    "description": "Discover the best exercises to shed lower abdomen fat. Learn how to combine them effectively and try our 7-day workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-lower-abdomen-pouch-fat"
  },
  {
    "title": "Top Exercises for Losing Chin Fat",
    "description": "Discover the top exercises to lose chin fat fast. Get tips on combining them effectively and access a week-long workout plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-chin-fat"
  },
  {
    "title": "Top Exercises for Losing Neck Fat",
    "description": "Discover the top exercises for losing neck fat, learn how to combine them effectively, and get a detailed week workout plan for best results.",
    "link": "/top-exercises/top-exercises-for-losing-neck-fat"
  },
  {
    "title": "Top Exercises for Losing Belly Fat",
    "description": "Discover the best exercises to shed belly fat with our guide. Learn how to combine workouts and follow our week-long fitness plan for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-belly-fat"
  },
  {
    "title": "Top Exercises for Losing Face Fat",
    "description": "Discover the top exercises to lose face fat effectively. Get a weekly workout plan and learn how to combine exercises for optimal results.",
    "link": "/top-exercises/top-exercises-for-losing-face-fat"
  }
];

function ExercisesForWeightLoss() {
  return (
    <CommonBlogPage
      cardData={cardData}
      HeroComponent={
        <Hero
            heading="TargetFit: Your Ultimate Weight-Loss Exercise Directory"
            subtitle="Discover effective weight-loss exercises for every body area. Tailored workouts to tone, burn fat, and achieve your fitness goals. Start your journey today!"
            ctaText="Take the free quiz"
            imageSrc=""
        />
      }
      FaqComponent={null}
    />
  );
}

export default ExercisesForWeightLoss;
