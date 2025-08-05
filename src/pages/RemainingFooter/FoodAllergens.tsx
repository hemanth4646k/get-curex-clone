import Hero from "../../common/ui/Hero";
import CommonBlogPage from "./CommonBlogPage";

const cardData: { title: string; description: string; link: string }[] = [
  {
    "title": "Vegan Gluten Free Sugar Cookies Recipe (Dairy Free, Nut Free)",
    "description": "Delicious allergy-free sugar cookies everyone can enjoy! Easy recipe with no gluten, dairy, nuts, or eggs. Perfect for holidays or any occasion.",
    "link": "/food-allergy/vegan-gluten-free-sugar-cookies-recipe-dairy-free-nut-free-ccb92"
  },
  {
    "title": "Gluten Free Dinner Rolls Recipe (Dairy Free, Soy Free)",
    "description": "Enjoy delicious allergy-free dinner rolls, perfect for everyone at the table. Easy to make, soft, and fluffy rolls for any occasion.",
    "link": "/food-allergy/gluten-free-dinner-rolls-recipe-dairy-free-soy-free"
  },
  {
    "title": "Gluten Free Rum Balls Recipe (Dairy Free, Nut Free, Egg Free)",
    "description": "Enjoy delicious allergy-free rum balls made without nuts, gluten, or dairy. Perfect treat for everyone at your next gathering!",
    "link": "/food-allergy/gluten-free-rum-balls-recipe-dairy-free-nut-free-egg-free"
  },
  {
    "title": "Nut-Free Irish Coffee Recipe (Dairy Free, Gluten Free)",
    "description": "Enjoy a delicious allergy-free Irish coffee with this simple recipe. Perfect for everyone, this twist on a classic ensures a delightful experience.",
    "link": "/food-allergy/nut-free-irish-coffee-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Gluten Free Pot Roast Recipe (Dairy Free, Nut Free)",
    "description": "Discover the ultimate allergy-free pot roast recipe, perfect for everyone to enjoy. Flavorful, easy, and safe for those with common food allergies.",
    "link": "/food-allergy/gluten-free-pot-roast-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Bread Pudding Recipe (Dairy Free, Nut Free)",
    "description": "Discover a delicious allergy-free bread pudding recipe, perfect for everyone to enjoy. Easy to make, gluten-free, and packed with flavor.",
    "link": "/food-allergy/gluten-free-bread-pudding-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten-Free Chocolate-Covered Pretzels Recipe (Dairy & Nut Free)",
    "description": "Discover a delicious allergy-free chocolate-covered pretzels recipe that's perfect for everyone to enjoy. Easy to make and irresistibly tasty!",
    "link": "/food-allergy/gluten-free-chocolate-covered-pretzels-recipe-dairy-nut-free"
  },
  {
    "title": "Gluten Free Butternut Squash Soup Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy a creamy, allergy-free butternut squash soup. Perfect for cozy nights, soothing flavors, and no allergens. Ideal for everyone!",
    "link": "/food-allergy/gluten-free-butternut-squash-soup-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Gingerbread Loaf Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy a delicious allergy-free gingerbread loaf with this easy recipe. Perfect for everyone, it's a festive treat without common allergens.",
    "link": "/food-allergy/gluten-free-gingerbread-loaf-recipe-dairy-free-nut-free"
  },
  {
    "title": "Soy Free Chocolate Fudge Recipe (Dairy Free, Nut Free)",
    "description": "Indulge in delicious allergy-free chocolate fudge with our simple recipe, perfect for everyone to enjoy without worry.",
    "link": "/food-allergy/soy-free-chocolate-fudge-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Lasagna Recipe (Dairy Free, Nut Free, Egg Free)",
    "description": "Discover our delicious allergy-free lasagna recipe, perfect for those with dietary restrictions. Enjoy a comforting meal without worry.",
    "link": "/food-allergy/gluten-free-lasagna-recipe-dairy-free-nut-free-egg-free"
  },
  {
    "title": "Nut-Free Peanut Butter Blossoms Recipe (Dairy-Free, Gluten-Free)",
    "description": "Enjoy delicious allergy-free Peanut Butter Blossoms made with safe ingredients. Perfect for everyone to enjoy these classic cookies worry-free.",
    "link": "/food-allergy/nut-free-peanut-butter-blossoms-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Gluten Free Chili Recipe (Dairy Free, Nut Free, Soy Free)",
    "description": "Delight in a delicious allergy-free chili recipe that's perfect for sensitive diets. Flavorful, nutritious, and easy to prepare for the whole family.",
    "link": "/food-allergy/gluten-free-chili-recipe-dairy-free-nut-free-soy-free"
  },
  {
    "title": "Vegan Gluten Free Sugar Cookies Recipe (Dairy Free, Nut Free)",
    "description": "Delicious allergy-free sugar cookies everyone can enjoy! Easy recipe with no gluten, dairy, nuts, or eggs. Perfect for holidays or any occasion.",
    "link": "/food-allergy/vegan-gluten-free-sugar-cookies-recipe-dairy-free-nut-free"
  },
  {
    "title": "Nut-Free Hot Toddy Recipe (Gluten Free, Dairy Free)",
    "description": "Discover a soothing allergy-free hot toddy recipe that's warming and delicious, perfect for cold nights without common allergens.",
    "link": "/food-allergy/nut-free-hot-toddy-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Gluten Free Yule Log Recipe (Dairy Free, Nut Free Bûche de Noël)",
    "description": "Indulge in our allergy-free Yule log recipe, perfect for a festive, delicious, and worry-free holiday treat everyone can enjoy.",
    "link": "/food-allergy/gluten-free-yule-log-recipe-dairy-free-nut-free-buche-de-noel"
  },
  {
    "title": "Gluten-Free Cheesecake Recipe (Dairy-Free, Nut-Free)",
    "description": "Enjoy a delicious allergy-free cheesecake with our easy recipe. Perfect for everyone, it's creamy, flavorful, and free from common allergens.",
    "link": "/food-allergy/gluten-free-cheesecake-recipe-dairy-free-nut-free"
  },
  {
    "title": "Egg-Free Corn Pudding Recipe (Dairy Free, Gluten Free)",
    "description": "Enjoy a delicious allergy-free corn pudding with our easy recipe, perfect for everyone. Nut-free, dairy-free, and gluten-free delight!",
    "link": "/food-allergy/egg-free-corn-pudding-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Nut-Free Baked Ziti Recipe (Gluten Free, Dairy Free)",
    "description": "Discover a delicious allergy-free baked ziti recipe that's perfect for everyone. Enjoy a flavorful, comforting dish without any worries.",
    "link": "/food-allergy/nut-free-baked-ziti-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Nut-Free Caramel Flan Recipe (Dairy Free, Gluten Free)",
    "description": "Indulge in a creamy, allergy-free caramel flan recipe. Nut-free, gluten-free, and dairy-free delight perfect for everyone to enjoy!",
    "link": "/food-allergy/nut-free-caramel-flan-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Nut Free Gingerbread House Recipe (Gluten Free, Dairy Free)",
    "description": "Create a delightful allergy-free gingerbread house with our easy recipe. Perfect for everyone to enjoy this holiday season without worry.",
    "link": "/food-allergy/nut-free-gingerbread-house-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Gluten Free Gingerbread Cookies Recipe (Dairy Free, Egg Free)",
    "description": "Enjoy delicious allergy-free gingerbread cookies with this easy recipe, perfect for special diets, packed with flavor, and ideal for the holiday season.",
    "link": "/food-allergy/gluten-free-gingerbread-cookies-recipe-dairy-free-egg-free"
  },
  {
    "title": "Gluten Free Chocolate Peppermint Bark Cheesecake (Dairy Free, Nut Free)",
    "description": "Enjoy a delicious allergy-free chocolate peppermint bark cheesecake. Perfect for holiday treats, free from common allergens and full of festive flavor.",
    "link": "/food-allergy/gluten-free-chocolate-peppermint-bark-cheesecake-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Molasses Cookies (Dairy Free, Nut Free) Recipe",
    "description": "Enjoy delicious allergy-free molasses cookies with this easy recipe, perfect for everyone. Soft, chewy, and free from common allergens!",
    "link": "/food-allergy/gluten-free-molasses-cookies-dairy-free-nut-free-recipe"
  },
  {
    "title": "Nut Free Pumpkin Pie Recipe (Gluten Free, Dairy Free)",
    "description": "Discover our delicious allergy-free pumpkin pie recipe: gluten-free, dairy-free, and nut-free for everyone to enjoy this holiday season!",
    "link": "/food-allergy/nut-free-pumpkin-pie-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Dairy Free Clam Chowder Recipe (Gluten Free, Nut Free)",
    "description": "Discover a delicious and allergy-friendly clam chowder recipe, perfect for everyone to enjoy worry-free. Simple, creamy, and flavorful with safe ingredients.",
    "link": "/food-allergy/dairy-free-clam-chowder-recipe-gluten-free-nut-free"
  },
  {
    "title": "Nut-Free Cherry Pie Recipe (Dairy-Free, Gluten-Free)",
    "description": "Delight in our allergy-friendly cherry pie, free from common allergens. Perfect for everyone to enjoy a sweet, worry-free treat.",
    "link": "/food-allergy/nut-free-cherry-pie-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Gluten Free Panettone Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy a delicious allergy-free Panettone with this easy recipe, perfect for those with dietary restrictions. Tasty, safe, and festive for all!",
    "link": "/food-allergy/gluten-free-panettone-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten-Free Mac and Cheese Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy a delicious allergy-free Mac and cheese recipe, perfect for everyone. Dairy-free, nut-free, and gluten-free comfort food at its best!",
    "link": "/food-allergy/gluten-free-mac-and-cheese-recipe-dairy-free-nut-free"
  },
  {
    "title": "Nut-Free Spiced Nuts Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy a delicious allergy-free spiced nuts recipe with bold flavors. Perfect for snacking and safe for everyone to indulge in!",
    "link": "/food-allergy/nut-free-spiced-nuts-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Nut-Free, Dairy-Free Champagne Cocktails Recipe (Vegan-Friendly)",
    "description": "Delight in allergy-free Champagne cocktails with our simple recipe. Perfect for any celebration, crafted for everyone to enjoy safely and deliciously.",
    "link": "/food-allergy/nut-free-dairy-free-champagne-cocktails-recipe-vegan-friendly"
  },
  {
    "title": "Gluten Free Chicken Noodle Soup Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy a comforting allergy-free chicken noodle soup packed with flavor. Perfect for sensitive diets and sure to warm you up with every spoonful.",
    "link": "/food-allergy/gluten-free-chicken-noodle-soup-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free German Stollen Recipe (Dairy Free, Nut Free)",
    "description": "Delight in a festive, allergy-free German Stollen recipe. Perfect for those with dietary restrictions; delicious, nut-free, and gluten-free. Enjoy worry-free!",
    "link": "/food-allergy/gluten-free-german-stollen-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten-Free Rice Pudding Recipe (Dairy-Free, Nut-Free)",
    "description": "Enjoy a creamy, allergy-friendly rice pudding that's free from common allergens. Perfectly delicious and safe for everyone to enjoy!",
    "link": "/food-allergy/gluten-free-rice-pudding-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Yorkshire Pudding Recipe (Dairy Free, Egg Free)",
    "description": "Enjoy fluffy and delicious Yorkshire puddings without common allergens. Perfect for everyone at your dinner table. Easy and satisfying recipe!",
    "link": "/food-allergy/gluten-free-yorkshire-pudding-recipe-dairy-free-egg-free"
  },
  {
    "title": "Gluten Free Chocolate Truffles Recipe (Dairy Free, Nut Free)",
    "description": "Delight in allergy-free chocolate truffles with this easy recipe. Indulge safely without nuts, dairy, or gluten. Perfect treat for everyone!",
    "link": "/food-allergy/gluten-free-chocolate-truffles-recipe-dairy-free-nut-free"
  },
  {
    "title": "Nut-Free Fruitcake Recipe (Gluten Free, Dairy Free)",
    "description": "Discover our delicious allergy-free fruitcake recipe, perfect for everyone. Nut-free, gluten-free, and dairy-free goodness in every bite!",
    "link": "/food-allergy/nut-free-fruitcake-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Nut-Free Peppermint Bark Recipe (Dairy Free, Gluten Free)",
    "description": "Discover an allergy-friendly peppermint bark recipe. Enjoy a delicious holiday treat that's perfect for everyone, free from common allergens.",
    "link": "/food-allergy/nut-free-peppermint-bark-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Gluten Free Mulled Cider Recipe (Nut Free, Dairy Free)",
    "description": "Enjoy a delicious allergy-free mulled cider recipe perfect for everyone. Warm, spiced, and comforting, it's ideal for festive gatherings.",
    "link": "/food-allergy/gluten-free-mulled-cider-recipe-nut-free-dairy-free"
  },
  {
    "title": "Nut-Free Roasted Chestnuts Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy a delicious allergy-free roasted chestnuts recipe that's perfect for a cozy snack. Simple, flavorful, and safe for everyone to savor!",
    "link": "/food-allergy/nut-free-roasted-chestnuts-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Nut-Free Mulled Wine Recipe (Dairy Free, Gluten Free)",
    "description": "Enjoy a delicious allergy-free mulled wine recipe perfect for everyone. Warm spices and rich flavors create a cozy holiday treat.",
    "link": "/food-allergy/nut-free-mulled-wine-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Gluten-Free Snowball Cookies Recipe (Dairy-Free, Nut-Free)",
    "description": "Discover the perfect allergy-free Snowball cookies recipe, featuring nut-free and gluten-free ingredients for a delicious and safe treat for everyone.",
    "link": "/food-allergy/gluten-free-snowball-cookies-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Chicken Pot Pie Recipe (Dairy Free, Nut Free)",
    "description": "Savor a delicious allergy-free Chicken Pot Pie made with safe ingredients. Enjoy a wholesome, comforting dish perfect for sensitive diets and tastes.",
    "link": "/food-allergy/gluten-free-chicken-pot-pie-recipe-dairy-free-nut-free"
  },
  {
    "title": "Nut-Free Hot Cocoa Recipe (Dairy Free, Gluten Free)",
    "description": "Savor the rich taste of allergy-friendly hot cocoa. Perfect for cozy days, this delicious recipe is free from common allergens.",
    "link": "/food-allergy/nut-free-hot-cocoa-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Gluten-Free Tomato Bisque Recipe (Dairy Free, Nut Free, Soy Free)",
    "description": "Enjoy a creamy, allergy-free tomato bisque that's delicious and safe for all to savor. Perfect for a comforting meal without any worries.",
    "link": "/food-allergy/gluten-free-tomato-bisque-recipe-dairy-free-nut-free-soy-free"
  },
  {
    "title": "Gluten Free Chocolate Chip Cookies Recipe (Dairy Free, Nut Free)",
    "description": "Discover a delicious allergy-free chocolate chip cookies recipe that's safe for everyone to enjoy. Perfect for gluten-free, nut-free, and dairy-free diets.",
    "link": "/food-allergy/gluten-free-chocolate-chip-cookies-recipe-dairy-free-nut-free"
  },
  {
    "title": "Nut-Free Apple Pie Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy a delicious allergy-free apple pie with this easy recipe. Perfect for those with dietary restrictions, without compromising on taste.",
    "link": "/food-allergy/nut-free-apple-pie-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Dairy Free Eggnog Recipe (Nut Free, Egg Free)",
    "description": "Enjoy a delicious and creamy allergy-free eggnog recipe, perfect for everyone. Easy to make and ideal for holiday celebrations.",
    "link": "/food-allergy/dairy-free-eggnog-recipe-nut-free-egg-free"
  },
  {
    "title": "Nut-Free Pecan Pie Recipe (Gluten Free, Dairy Free)",
    "description": "Indulge in our allergy-free pecan pie, crafted for delicious taste without common allergens. Perfect for holiday gatherings and sensitive diets!",
    "link": "/food-allergy/nut-free-pecan-pie-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Gluten Free Fruit Tarts Recipe (Dairy Free, Nut Free, Egg Free)",
    "description": "Discover a delicious allergy-free fruit tarts recipe that's perfect for everyone. Enjoy a sweet treat without worry, featuring fresh, vibrant ingredients.",
    "link": "/food-allergy/gluten-free-fruit-tarts-recipe-dairy-free-nut-free-egg-free"
  },
  {
    "title": "Nut-Free Sparkling Cider Recipe (Dairy Free, Gluten Free)",
    "description": "Enjoy this allergy-free sparkling cider recipe, perfect for any celebration. Easy to make, refreshing, and free from common allergens.",
    "link": "/food-allergy/nut-free-sparkling-cider-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Nut-Free Toffee Recipe (Dairy-Free, Gluten-Free)",
    "description": "Enjoy a delicious allergy-free toffee recipe that's safe for everyone. Perfect for those with dietary restrictions, no nuts, dairy, or gluten.",
    "link": "/food-allergy/nut-free-toffee-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Gluten Free Shortbread Cookies Recipe (Dairy Free, Nut Free)",
    "description": "Discover our delicious allergy-free shortbread cookies recipe, perfect for everyone to enjoy. Nut-free, gluten-free, and tasty beyond compare!",
    "link": "/food-allergy/gluten-free-shortbread-cookies-recipe-dairy-free-nut-free"
  },
  {
    "title": "Nut-Free Hot Buttered Rum Recipe (Dairy Free, Gluten Free)",
    "description": "Enjoy a cozy night in with our allergy-free hot buttered rum recipe. Indulge in a delicious, nut-free and dairy-free twist on this classic drink.",
    "link": "/food-allergy/nut-free-hot-buttered-rum-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Nut Free Marzipan Recipe (Gluten Free, Dairy Free)",
    "description": "Delight in an allergy-free marzipan recipe perfect for everyone. Enjoy this nut-free, gluten-free treat that's delicious and safe for all!",
    "link": "/food-allergy/nut-free-marzipan-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Nut Free Wild Rice Pilaf Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy a delicious allergy-free Wild Rice Pilaf recipe, packed with flavor and nutrients. Perfect for those with dietary restrictions or preferences.",
    "link": "/food-allergy/nut-free-wild-rice-pilaf-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Dairy Free Beef Stew Recipe (Gluten Free, Nut Free)",
    "description": "Delight in a hearty allergy-free beef stew recipe, packed with flavor and safe for all to enjoy. Perfect for a comforting, worry-free meal.",
    "link": "/food-allergy/dairy-free-beef-stew-recipe-gluten-free-nut-free"
  },
  {
    "title": "Dairy-Free Broccoli Casserole Recipe (Gluten Free, Nut Free)",
    "description": "Enjoy a delicious allergy-free broccoli casserole, made with safe ingredients for everyone. Simple, healthy, and perfect for family dinners.",
    "link": "/food-allergy/dairy-free-broccoli-casserole-recipe-gluten-free-nut-free"
  },
  {
    "title": "Nut-Free Brittle Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy a delicious allergy-free brittle recipe that's nut-free, gluten-free, and perfect for everyone. Easy to make and perfect for sharing!",
    "link": "/food-allergy/nut-free-brittle-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Nut Free Candy Cane Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy delicious allergy-free candy canes perfect for the holidays. Safe and tasty for everyone, including those with dietary restrictions.",
    "link": "/food-allergy/nut-free-candy-cane-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Vegan & Gluten-Free Red Velvet Cake Recipe (Nut Free, Egg Free)",
    "description": "Enjoy a delicious allergy-free red velvet cake with our easy recipe. Perfect for those with dietary restrictions. Indulge guilt-free today!",
    "link": "/food-allergy/egg-free-red-velvet-cake-recipe-dairy-free-nut-free"
  },
  {
    "title": "Dairy-Free Crème Brûlée Recipe (Gluten Free, Nut Free)",
    "description": "Indulge in our allergy-free Crème brûlée recipe. Creamy, delicious, and safe for everyone—no nuts, dairy, or gluten! Perfect dessert for any gathering.",
    "link": "/food-allergy/dairy-free-creme-brulee-recipe-gluten-free-nut-free"
  },
  {
    "title": "Nut-Free Coconut Macaroons Recipe (Dairy Free, Gluten Free)",
    "description": "Discover the perfect allergy-friendly coconut macaroons recipe. Simple, delicious, and free from common allergens. Enjoy these tasty treats today.",
    "link": "/food-allergy/nut-free-coconut-macaroons-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Gluten Free Mince Pies Recipe (Dairy Free, Nut Free)",
    "description": "Delicious allergy-free mince pies recipe perfect for the holidays. Enjoy these festive treats without worry, safe for everyone to savor!",
    "link": "/food-allergy/gluten-free-mince-pies-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Peppermint Brownies Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy delicious allergy-free peppermint brownies made with safe ingredients. Perfect for everyone's holiday treat cravings!",
    "link": "/food-allergy/gluten-free-peppermint-brownies-recipe-dairy-free-nut-free"
  },
  {
    "title": "Nut-Free Thumbprint Cookies Recipe (Gluten Free, Dairy Free)",
    "description": "Discover a delicious allergy-free thumbprint cookies recipe that's perfect for everyone. Tasty, safe, and easy to make. Ideal for any occasion!",
    "link": "/food-allergy/nut-free-thumbprint-cookies-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Dairy Free Mashed Potatoes Recipe (Nut Free, Gluten Free)",
    "description": "Enjoy creamy allergy-free mashed potatoes with this easy recipe. Perfect for everyone at your table. Dairy-free, gluten-free, and absolutely delicious!",
    "link": "/food-allergy/dairy-free-mashed-potatoes-recipe-nut-free-gluten-free"
  },
  {
    "title": "Gluten-Free Cornbread Recipe (Dairy-Free, Egg-Free)",
    "description": "Enjoy a delicious allergy-free cornbread recipe perfect for everyone. Gluten-free and dairy-free, this moist cornbread is ideal for any occasion.",
    "link": "/food-allergy/gluten-free-cornbread-recipe-dairy-free-egg-free"
  },
  {
    "title": "Gluten-Free Green Bean Casserole Recipe (Dairy Free, Nut Free)",
    "description": "Discover a delicious allergy-free green bean casserole recipe that's perfect for everyone. Enjoy comfort food without the common allergens!",
    "link": "/food-allergy/gluten-free-green-bean-casserole-recipe-dairy-free-nut-free"
  },
  {
    "title": "Shellfish-Free Oyster Stew Recipe (Dairy Free, Gluten Free)",
    "description": "Discover a delicious and allergy-free oyster stew recipe, perfect for everyone to enjoy a savory and comforting meal without worry.",
    "link": "/food-allergy/shellfish-free-oyster-stew-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Nut-Free Sweet Potato Casserole Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy a delicious allergy-free sweet potato casserole that's perfect for everyone. Easy, healthy, and full of flavor for your next meal!",
    "link": "/food-allergy/nut-free-sweet-potato-casserole-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Gluten Free Potato Latkes Recipe (Dairy Free, Egg Free)",
    "description": "Discover our allergy-friendly potato latkes recipe, perfect for everyone. Enjoy crispy, delicious latkes free from common allergens.",
    "link": "/food-allergy/gluten-free-potato-latkes-recipe-dairy-free-egg-free"
  },
  {
    "title": "Gluten Free Pork Roast Recipe (Dairy Free, Nut Free)",
    "description": "Discover a delicious allergy-free pork roast recipe that's perfect for everyone. Enjoy a flavorful dish without common allergens. Try it today!",
    "link": "/food-allergy/gluten-free-pork-roast-recipe-dairy-free-nut-free"
  },
  {
    "title": "Nut-Free Glazed Carrots Recipe (Dairy Free, Gluten Free)",
    "description": "Delight in allergy-free glazed carrots, a delicious and safe side dish perfect for everyone. Enjoy this easy and healthy recipe today!",
    "link": "/food-allergy/nut-free-glazed-carrots-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Gluten-Free Rack of Lamb Recipe (Dairy-Free, Nut-Free)",
    "description": "Delight in a succulent allergy-free rack of lamb with our easy recipe. Perfect for a flavorful, worry-free meal everyone will savor.",
    "link": "/food-allergy/gluten-free-rack-of-lamb-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Sufganiyot Recipe (Dairy Free, Nut Free, Egg Free)",
    "description": "Enjoy delicious allergy-free Sufganiyot with our easy recipe, perfect for Hanukkah. Nut, dairy, and gluten-free to delight everyone safely.",
    "link": "/food-allergy/gluten-free-sufganiyot-recipe-dairy-free-nut-free-egg-free"
  },
  {
    "title": "Nut Free Beef Tenderloin Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy a delicious allergy-free beef tenderloin with this easy recipe. Perfectly tender and flavorful, ideal for everyone at your table.",
    "link": "/food-allergy/nut-free-beef-tenderloin-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Gluten Free Cheese Ball Recipe (Dairy Free, Nut Free)",
    "description": "Discover a delicious allergy-free cheese ball recipe, perfect for all occasions. Safe, tasty, and easy to make for everyone to enjoy.",
    "link": "/food-allergy/gluten-free-cheese-ball-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Smoked Salmon Recipe (Dairy Free, Nut Free, Soy Free)",
    "description": "Delight in our allergy-free smoked salmon recipe—simple, delicious, and safe for everyone. Perfect for a healthy, worry-free meal!",
    "link": "/food-allergy/gluten-free-smoked-salmon-recipe-dairy-free-nut-free-soy-free"
  },
  {
    "title": "Gluten-Free Pigs in a Blanket Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy tasty allergy-free Pigs in a Blanket with this easy recipe. Perfect for everyone, no matter their dietary restrictions. Try it today!",
    "link": "/food-allergy/gluten-free-pigs-in-a-blanket-recipe-dairy-free-nut-free"
  },
  {
    "title": "Nut-Free Cranberry Sauce Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy a delicious allergy-free cranberry sauce. Perfect for everyone at the table, this recipe is free from common allergens and full of flavor!",
    "link": "/food-allergy/nut-free-cranberry-sauce-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Nut Free Roasted Root Vegetables Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy a delicious allergy-free roasted root vegetables recipe that's perfect for everyone. Nutritious, flavorful, and easy to prepare!",
    "link": "/food-allergy/nut-free-roasted-root-vegetables-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Corn Free Prime Rib Roast Recipe (Dairy Free, Gluten Free)",
    "description": "Enjoy a delicious allergy-free Prime rib roast recipe that's perfect for everyone. Tender, juicy, and free from common allergens!",
    "link": "/food-allergy/corn-free-prime-rib-roast-recipe-dairy-free-gluten-free"
  },
  {
    "title": "Gluten-Free Brussels Sprouts Recipe (Dairy Free, Nut Free)",
    "description": "Discover a delicious allergy-free Brussels sprouts recipe that's perfect for everyone. Simple, healthy, and full of flavor. Enjoy the perfect side dish!",
    "link": "/food-allergy/gluten-free-brussels-sprouts-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Charcuterie Board Recipe (Dairy Free, Nut Free)",
    "description": "Discover a delicious allergy-free charcuterie board recipe, perfect for everyone. Enjoy safe, flavorful bites free from common allergens.",
    "link": "/food-allergy/gluten-free-charcuterie-board-recipe-dairy-free-nut-free"
  },
  {
    "title": "Dairy-Free Scalloped Potatoes Recipe (Gluten-Free, Nut-Free)",
    "description": "Enjoy creamy, delicious scalloped potatoes without the allergens. Perfect comfort food for everyone, made easy and safe for all dietary needs.",
    "link": "/food-allergy/dairy-free-scalloped-potatoes-recipe-gluten-free-nut-free"
  },
  {
    "title": "Gluten-Free Collard Greens Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy delicious allergy-free collard greens with this easy recipe, perfect for everyone to savor a nutritious, worry-free meal.",
    "link": "/food-allergy/gluten-free-collard-greens-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Gravy Recipe (Dairy Free, Nut Free)",
    "description": "Discover a delicious allergy-free gravy recipe that's perfect for everyone at your table. Easy to make and full of flavor!",
    "link": "/food-allergy/gluten-free-gravy-recipe-dairy-free-nut-free"
  },
  {
    "title": "Shellfish-Free Crab Legs Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy delicious allergy-free crab legs with our easy recipe. Perfect for seafood lovers with dietary restrictions! Quick, tasty, and allergen-friendly.",
    "link": "/food-allergy/shellfish-free-crab-legs-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten Free Roast Goose Recipe (Dairy Free, Nut Free)",
    "description": "Discover a delicious allergy-friendly roast goose recipe, perfect for festive gatherings. Free from common allergens, everyone can safely indulge.",
    "link": "/food-allergy/gluten-free-roast-goose-recipe-dairy-free-nut-free"
  },
  {
    "title": "Gluten-Free Brisket Recipe (Dairy Free, Soy Free)",
    "description": "Enjoy a delicious allergy-free brisket recipe that's safe and flavorful. Perfect for family meals, this dish is crafted to meet dietary needs.",
    "link": "/food-allergy/gluten-free-brisket-recipe-dairy-free-soy-free"
  },
  {
    "title": "Egg-Free Deviled Eggs Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy a delicious allergy-free twist on deviled eggs with our easy recipe, perfect for gluten-free, dairy-free, and nut-free diets.",
    "link": "/food-allergy/egg-free-deviled-eggs-recipe-dairy-free-nut-free"
  },
  {
    "title": "Shellfish-Free Shrimp Cocktail Recipe (Dairy-Free, Nut-Free)",
    "description": "Enjoy a delicious allergy-free shrimp cocktail with this easy recipe. Perfect for anyone with food sensitivities. Tasty, safe, and simple to make!",
    "link": "/food-allergy/shellfish-free-shrimp-cocktail-recipe-dairy-free-nut-free"
  },
  {
    "title": "Shellfish-Free Lobster Tails Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy mouthwatering allergy-free lobster tails with our simple recipe, perfect for a delicious and safe seafood dish for everyone.",
    "link": "/food-allergy/shellfish-free-lobster-tails-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Gluten Free Roast Duck Recipe (Dairy Free, Nut Free)",
    "description": "Enjoy a delicious allergy-free roast duck recipe perfect for all diets, featuring simple ingredients for a flavorful, worry-free meal.",
    "link": "/food-allergy/gluten-free-roast-duck-recipe-dairy-free-nut-free"
  },
  {
    "title": "Shellfish-Free Bacon-Wrapped Scallops Recipe (Dairy Free, Nut Free)",
    "description": "Discover a delicious allergy-friendly bacon-wrapped scallops recipe that's gluten-free and perfect for any occasion. Easy to make and irresistibly tasty!",
    "link": "/food-allergy/shellfish-free-bacon-wrapped-scallops-recipe-dairy-free-nut-free"
  },
  {
    "title": "Dairy Free Spinach Artichoke Dip Recipe (Nut Free, Gluten Free)",
    "description": "Enjoy a delicious allergy-free spinach artichoke dip, perfect for everyone. Easy to make, creamy, and perfect for parties or snacks.",
    "link": "/food-allergy/dairy-free-spinach-artichoke-dip-recipe-nut-free-gluten-free"
  },
  {
    "title": "Nut-Free Stuffed Mushrooms Recipe (Gluten Free, Dairy Free)",
    "description": "Enjoy delicious allergy-free stuffed mushrooms, perfect for everyone. Easy, healthy, and flavorful—a crowd-pleaser for any occasion.",
    "link": "/food-allergy/nut-free-stuffed-mushrooms-recipe-gluten-free-dairy-free"
  },
  {
    "title": "Gluten Free Stuffing Recipe (Dairy Free, Nut Free, Egg Free)",
    "description": "Enjoy a delicious allergy-free stuffing recipe perfect for everyone at the table, made without gluten, nuts, or dairy. Ideal for the holiday season!",
    "link": "/food-allergy/gluten-free-stuffing-recipe-dairy-free-nut-free-egg-free"
  }
];

function FoodAllergens() {
  return (
    <CommonBlogPage
      cardData={cardData}
      HeroComponent={
        <Hero
          heading="Navigating Food Allergies: A Comprehensive Guide to Common Culprits Across the USA"
          subtitle="Curex is the easiest way to treat allergies at-home without allergy shots."
          ctaText=""
          imageSrc=""
        />
      }
      FaqComponent={null}
    />
  );
}

export default FoodAllergens;
