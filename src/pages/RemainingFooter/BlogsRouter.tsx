import { Routes, Route } from 'react-router-dom';

import AllergyImmunotherapyInsightsResearch from './AllergyImmunotherapyInsightsResearch';
import InsuranceDirectory from './InsuranceDirectory';
import DrugReviews from './DrugReviews';
import FoodAllergens from './FoodAllergens';
import AllergySymptoms from './AllergySymptoms';
import WeightLossDrugs from './WeightLossDrugs';
import DiabetesBlog from './DiabetesBlog';
import BeautyProductsAllergens from './BeautyProductsAllergens';
import AllergyDrugs101 from './AllergyDrugs101';
import ExercisesForWeightLoss from './ExercisesForWeightLoss';
import FaqDir from './FaqDir';
import Allergens from './allergens';
import Cities from './cities';


const BlogsRouter = () => (
  <Routes>
    <Route path="cities" element={<Cities />} />
    <Route path="allergens" element={<Allergens />} />
    <Route path="faqs" element={<FaqDir />} />
    <Route path="allergy-immunotherapy-insights-research" element={<AllergyImmunotherapyInsightsResearch />} />
    <Route path="insurance-directory" element={<InsuranceDirectory />} />
    <Route path="drug-reviews" element={<DrugReviews />} />
    <Route path="food-allergens" element={<FoodAllergens />} />
    <Route path="allergy-symptoms" element={<AllergySymptoms />} />
    <Route path="weight-loss-drugs" element={<WeightLossDrugs />} />
    <Route path="diabetes-blog" element={<DiabetesBlog />} />
    <Route path="beauty-products-allergens" element={<BeautyProductsAllergens />} />
    <Route path="pet-allergy-drugs-101" element={<AllergyDrugs101 />} />
    <Route path="exercises-for-weight-loss" element={<ExercisesForWeightLoss />} />
  </Routes>
);

export default BlogsRouter;
