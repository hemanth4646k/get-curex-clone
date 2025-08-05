import { useEffect, useState } from 'react';
import BlogItem from "./BlogItem";

interface BlogPost {
  image: string;
  category: string;
  title: string;
  date: string;
  link: string;
}

interface BlogsContainerProps {
  activeFilters?: string;
}

function BlogsContainer({ activeFilters = 'All' }: BlogsContainerProps) {
  const [blogPosts] = useState<BlogPost[]>([
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/67f67792bdd5602e284ebb91_avoid-caffeine-before-allergy-testing.jpg",
      category: "Allergy Testing",
      title: "Why Avoiding Caffeine is Necessary for Accurate Allergy Testing Results",
      date: "09.04.2025",
      link: "/blog-posts/why-avoiding-caffeine-is-necessary-for-accurate-allergy-testing-results"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/67f3dc49cbd24c0dd5192847_chia-seeds.jpg",
      category: "Allergy Care",
      title: "Chia Seed Allergy: Causes, Symptoms, & Treatment",
      date: "07.04.2025",
      link: "/blog-posts/chia-seed-allergy-causes-symptoms-treatment"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/67ea7dd7d1b7c83e3eb6cd37_what-is-pollen.jpg",
      category: "Seasonal Allergies",
      title: "What is Pollen and What Does It Look Like?",
      date: "30.03.2025",
      link: "/blog-posts/what-is-pollen-and-what-does-it-look-like"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/67000c61ff80c145ac9f1902_food-allergy.avif",
      category: "Immunotherapy",
      title: "Oral Immunotherapy (OIT) vs Sublingual Immunotherapy (SLIT): Pros and Cons of Treating Food Allergies",
      date: "03.10.2024",
      link: "/blog-posts/oral-immunotherapy-oit-vs-sublingual-immunotherapy-slit-pros-and-cons-of-treating-food-allergies"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66a9e73d69366b0b05a9bbdf_Neffy-Nasal-Spray.avif",
      category: "Allergy Care",
      title: "Neffy Nasal Spray",
      date: "01.08.2024",
      link: "/blog-posts/neffy-nasal-spray"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66a9e6579acdc2d63bb7e6e3_Epinephrine-Side-Effects.jpeg",
      category: "Allergy Care",
      title: "Epinephrine Side Effects",
      date: "30.07.2024",
      link: "/blog-posts/epinephrine-side-effects"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66a9e5fde9e8df202fd419b2_How-to-Use-an-Epipen.jpg",
      category: "Allergy Care",
      title: "How to Use an Epipen",
      date: "26.07.2024",
      link: "/blog-posts/how-to-use-an-epipen"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66a9e566398e4f220ea9640b_Epinephrine-Dose.jpg",
      category: "Allergy Care",
      title: "Epinephrine Dose",
      date: "17.07.2024",
      link: "/blog-posts/epinephrine-dose"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66a9e59656d3b112ae7573e8_What-is-Epinephrine-Used-For.avif",
      category: "Allergy Care",
      title: "What is Epinephrine Used For?",
      date: "10.07.2024",
      link: "/blog-posts/what-is-epinephrine-used-for"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66b367f678918f2d88bb1378_what-is-Epinephrine.jpg",
      category: "Allergy Care",
      title: "What is Epinephrine?",
      date: "01.07.2024",
      link: "/blog-posts/what-is-epinephrine"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/6622102559e8722abb134361_Do%20allergy%20drops%20have%20side%20effects.avif",
      category: "Allergy Care",
      title: "Do allergy drops have side effects?",
      date: "02.04.2024",
      link: "/blog-posts/do-allergy-drops-have-side-effects"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66220ff04bdbbcf832fc3ab7_Why%20does%20insurance%20not%20cover%20allergy%20drops.avif",
      category: "Allergy Care",
      title: "Why does insurance not cover allergy drops?",
      date: "19.03.2024",
      link: "/blog-posts/why-does-insurance-not-cover-allergy-drops"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66220fbe69e5bf570633dbbe_What%20is%20the%20difference%20between%20allergy%20shots%20and%20allergy%20drops.avif",
      category: "Allergy Care",
      title: "What is the difference between allergy shots and allergy drops?",
      date: "16.02.2024",
      link: "/blog-posts/what-is-the-difference-between-allergy-shots-and-allergy-drops"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/621e59f403f9ebcc6d0227ae_allergy%20immunotherapy%20costs.avif",
      category: "Immunotherapy",
      title: "The Cost of Allergy Shots: Is Immunotherapy Worth It?",
      date: "14.02.2024",
      link: "/blog-posts/allergy-immunotherapy-costs"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66220f8d100e90bc75c89b07_Why%20are%20allergy%20drops%20not%20FDA-approved.avif",
      category: "Allergy Care",
      title: "Why are allergy drops not FDA-approved?",
      date: "03.01.2024",
      link: "/blog-posts/why-are-allergy-drops-not-fda-approved"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/66220efd9d35a537302543ca_Do%20allergy%20drops%20really%20work.avif",
      category: "Allergy Care",
      title: "Do allergy drops really work?",
      date: "26.12.2023",
      link: "/blog-posts/do-allergy-drops-really-work"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/656d571910a373d69399debc_swollen-lips.avif",
      category: "Doctor Advice",
      title: "Swollen Lips: Causes, Treatment and Finding Relief",
      date: "17.11.2023",
      link: "/blog-posts/swollen-lips-causes-treatment-and-finding-relief"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/656d54aa3a1fc8aff4e77e66_allergy-kids.avif",
      category: "Curex for Kids",
      title: "Finding the Best Allergy Medicine for Kids: What Parents Should Know",
      date: "16.11.2023",
      link: "/blog-posts/finding-the-best-allergy-medicine-for-kids-what-parents-should-know"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/656d53d1fdbce489e1ea8fd1_sinus-infection.avif",
      category: "Doctor Advice",
      title: "How Long Will a Sinus Infection Last: Symptoms & Treatment",
      date: "10.11.2023",
      link: "/blog-posts/how-long-will-a-sinus-infection-last-symptoms-treatment"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/656d530df95e2fb8c19a0e3f_mold-exposure.avif",
      category: "Indoor Allergies",
      title: "Symptoms of Mold Exposure: What Should You Do?",
      date: "09.11.2023",
      link: "/blog-posts/symptoms-of-mold-exposure-what-should-you-do"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/656d5222efb66ec40e3b19e3_best-remedies-allergies.avif",
      category: "Allergy Care",
      title: "The Best Remedies for Natural Allergy Relief",
      date: "03.11.2023",
      link: "/blog-posts/the-best-remedies-for-natural-allergy-relief"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/656d4fa310a373d69393d312_runny-nose.avif",
      category: "Seasonal Allergies",
      title: "Symptoms, Causes & Treatment for Chronic Rhinorrhea",
      date: "02.11.2023",
      link: "/blog-posts/symptoms-causes-treatment-for-chronic-rhinorrhea"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/656d4e7f3b119133c2232f99_itchy-throat.avif",
      category: "Doctor Advice",
      title: "How to Alleviate an Itchy Throat: Causes & Treatment",
      date: "28.10.2023",
      link: "/blog-posts/how-to-alleviate-an-itchy-throat-causes-treatment"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/656d4da0b48197e8dff243d8_young-woman-with-allergy-sneezing.avif",
      category: "Allergy Care",
      title: "How to Find Relief From Post-Nasal Drip",
      date: "26.10.2023",
      link: "/blog-posts/how-to-find-relief-from-post-nasal-drip"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/656d484f04eacf045ae4bf28_woman-has-problems-with-breathing-holds-nose-suffers-from-allergy-camomile.avif",
      category: "Immunotherapy",
      title: "Allergy Drops: A Complete Guide to Sublingual Immunotherapy",
      date: "19.10.2023",
      link: "/blog-posts/allergy-drops-a-complete-guide-to-sublingual-immunotherapy"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/651d02b32f2fffcf3ad02176_Shutterstock_1606121233.avif",
      category: "Seasonal Allergies",
      title: "How Can Allergies Cause Allergic Sinusitis",
      date: "26.09.2023",
      link: "/blog-posts/how-can-allergies-cause-allergic-sinusitis"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/651d0204099dae4b9fd3056f_Shutterstock_1421544041.avif",
      category: "Doctor Advice",
      title: "What Are Different Ways to Treat an Allergy Rash",
      date: "24.09.2023",
      link: "/blog-posts/what-are-different-ways-to-treat-an-allergy-rash"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/651d012a3d423485776ec451_image_fBo%201.avif",
      category: "Allergy Care",
      title: "Curex At-Home Allergy Care",
      date: "21.09.2023",
      link: "/blog-posts/curex-at-home-allergy-care"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/650c57ba2d64a4d7950754b4_Shutterstock_1493802071.avif",
      category: "Doctor Advice",
      title: "Can Body Aches Be an Effect of Allergies?",
      date: "20.09.2023",
      link: "/blog-posts/can-body-aches-be-an-effect-of-allergies"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/651cffc21b29c74a4041e636_64ca0662fba5cc5ff55cb5b0_DSCF4075.webp",
      category: "Allergy Testing",
      title: "Curex Allergy Testing",
      date: "18.09.2023",
      link: "/blog-posts/curex-allergy-testing"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/650c572e1eb462e257f8589b_Shutterstock_1824204893%20(1).avif",
      category: "Allergy Care",
      title: "Understanding and Managing Allergy Cough",
      date: "18.09.2023",
      link: "/blog-posts/understanding-and-managing-allergy-cough-tips-for-a-breath-of-fresh-air"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/651cff158ce412729bbcda54_shutterstock_424077448.avif",
      category: "Doctor Advice",
      title: "What You Should Know About Treating Ear Infections",
      date: "16.09.2023",
      link: "/blog-posts/what-you-should-know-about-treating-ear-infections"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/651cfdfe8ce412729bbbaf89_Shutterstock_1296078748.avif",
      category: "Indoor Allergies",
      title: "How to Get Rid of Dust Mites: Tips for a allergen-free Home",
      date: "13.09.2023",
      link: "/blog-posts/how-to-get-rid-of-dust-mites-tips-for-a-allergen-free-home"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/65000a63e0fcd22fbf41f0f2_Shutterstock_1353147554.avif",
      category: "Doctor Advice",
      title: "How To Prevent a Stuffy, Runny Nose and Sneezing?",
      date: "12.09.2023",
      link: "/blog-posts/how-to-prevent-a-stuffy-runny-nose-and-sneezing"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/650009f1cb19102a6a8c6e84_Shutterstock_1837214029.avif",
      category: "Doctor Advice",
      title: "Can a Sinus Infection Be Contagious to Other People?",
      date: "10.09.2023",
      link: "/blog-posts/can-a-sinus-infection-be-contagious-to-other-people"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/646e282d017d8cc7d3bc6181_61f2ef3e0620cb37d40bfc20_Curex%20cat%20allergies-2.avif",
      category: "Pets",
      title: "7 Things You Should Know About Cat Allergy Shots",
      date: "24.05.2023",
      link: "/blog-posts/7-things-you-should-understand-about-cat-allergy-shots"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/646e28171596565f48a6f615_61e1d909ba93c30c3b487678_Curex-1967.avif",
      category: "Pets",
      title: "Allergy Shots for Dog Allergies: 8 Things You Should Know",
      date: "22.05.2023",
      link: "/blog-posts/8-important-things-to-know-about-allergy-shots-for-dog-allergies"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/6476d75901597f0016bea177_Shutterstock_273553727.avif",
      category: "Immunotherapy",
      title: "Integrated and Functional Medicine's Take on Immunotherapy",
      date: "20.05.2023",
      link: "/blog-posts/integrated-and-functional-medicines-take-on-immunotherapy-a-natural-powerhouse-backed-by-research"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/648180df5e3f2aa7627181b9_louis-reed-pwcKF7L4-no-unsplash.avif",
      category: "Allergy Care",
      title: "The Science behind Antihistamine Injections: How They Work",
      date: "16.05.2023",
      link: "/blog-posts/the-science-behind-antihistamine-injections-and-how-they-work"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/648180cff9ae7ae6e211d9b1_national-cancer-institute-fi3zHLxWrYw-unsplash.avif",
      category: "Immunotherapy",
      title: "Subcutaneous Immunotherapy: The Best Way to Manage Allergies",
      date: "14.05.2023",
      link: "/blog-posts/subcutaneous-immunotherapy-the-best-way-to-manage-allergies"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/648180a5bc7996f2d7733eb1_Shutterstock_284815778.avif",
      category: "Seasonal Allergies",
      title: "Finding Relief From Allergies With Allergy Shots",
      date: "12.05.2023",
      link: "/blog-posts/finding-relief-from-seasonal-allergies-with-seasonal-allergy-shots"
    },
    {
      image: "https://cdn.prod.website-files.com/61bcf7a199a6ef4fbfb9ee04/6481809aceb2782715f96d73_diana-polekhina-UAsyRieP47A-unsplash.avif",
      category: "Allergy Care",
      title: "5 Benefits of Using Allergy Shots for Adults",
      date: "10.05.2023",
      link: "/blog-posts/5-benefits-of-using-allergy-shots-for-adults"
    }
  ]);

  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(activeFilters.includes('All')
    ? blogPosts
    : blogPosts.filter(post => activeFilters.includes(post.category)));
  useEffect(() => {
    setFilteredPosts(activeFilters === "All"
      ? blogPosts
      : blogPosts.filter(post => activeFilters.includes(post.category)));
  }, [activeFilters, blogPosts]);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32,
      justifyItems: "center",
      padding: "32px 10%"
    }}>
      {filteredPosts.map((post, index) => (
        <BlogItem
          key={index}
          image={post.image}
          category={post.category}
          title={post.title}
          date={post.date}
          link={post.link}
        />
      ))}
    </div>
  );
}

export default BlogsContainer;