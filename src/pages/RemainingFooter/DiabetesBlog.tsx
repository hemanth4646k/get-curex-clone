import Hero from "../../common/ui/Hero";
import CommonBlogPage from "./CommonBlogPage";

const cardData: { title: string; description: string; link: string }[] = [
  {
    "title": "Celery Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index of celery, nutrition facts, weight loss benefits, safety for diabetics, and vitamins in celery stalks.",
    "link": "/diabetes-blog/celery-glycemic-index-nutrition-facts"
  },
  {
    "title": "Bean sprout Glycemic Index, Nutrition Facts",
    "description": "Explore the glycemic index, nutrition facts, and benefits of bean sprouts. Discover their impact on weight loss and diabetes management.",
    "link": "/diabetes-blog/bean-sprout-glycemic-index-nutrition-facts"
  },
  {
    "title": "Zucchini Glycemic Index, Nutrition Facts",
    "description": "Discover zucchini nutrition facts, glycemic index, and benefits for weight loss and diabetics, plus vitamin content and daily intake guidelines.",
    "link": "/diabetes-blog/zucchini-glycemic-index-nutrition-facts"
  },
  {
    "title": "Guava Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutrition facts, and benefits of guavas for weight loss and diabetes, plus vitamin content and frequently asked questions.",
    "link": "/diabetes-blog/guava-glycemic-index-nutrition-facts"
  },
  {
    "title": "Yam Glycemic Index, Nutrition Facts",
    "description": "Discover yam glycemic index, nutrition facts, weight loss benefits, diabetic safety, serving tips, and vitamin content in this comprehensive guide.",
    "link": "/diabetes-blog/yam-glycemic-index-nutrition-facts"
  },
  {
    "title": "Horseradish Glycemic Index, Nutrition Facts",
    "description": "Discover horseradish glycemic index, nutrition facts, weight loss benefits, diabetes safety, daily limits, and vitamins in our comprehensive guide.",
    "link": "/diabetes-blog/horseradish-glycemic-index-nutrition-facts"
  },
  {
    "title": "Snow pea Glycemic Index, Nutrition Facts",
    "description": "Discover snow pea nutrition facts, glycemic index, benefits for weight loss, diabetic safety, and vitamin content in our insightful guide.",
    "link": "/diabetes-blog/snow-pea-glycemic-index-nutrition-facts"
  },
  {
    "title": "Arugula Glycemic Index, Nutrition Facts",
    "description": "Discover arugula's glycemic index, nutrition facts, benefits for weight loss, safety for diabetics, and essential vitamins it contains.",
    "link": "/diabetes-blog/arugula-glycemic-index-nutrition-facts"
  },
  {
    "title": "Yellow squash Glycemic Index, Nutrition Facts",
    "description": "Discover yellow squash's glycemic index, nutrition benefits, vitamin content, and its safety for diabetics and weight loss. Perfect for healthy living.",
    "link": "/diabetes-blog/yellow-squash-glycemic-index-nutrition-facts"
  },
  {
    "title": "Apricot Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index and nutrition facts of apricots. Learn about their benefits for weight loss and safety for diabetics.",
    "link": "/diabetes-blog/apricot-glycemic-index-nutrition-facts"
  },
  {
    "title": "Watercress Glycemic Index, Nutrition Facts",
    "description": "Explore watercress nutrition, discover its glycemic index benefits for diabetics, and find out how it aids weight loss. Learn about essential vitamins and daily intake.",
    "link": "/diabetes-blog/watercress-glycemic-index-nutrition-facts"
  },
  {
    "title": "Onion Glycemic Index, Nutrition Facts",
    "description": "Discover onion glycemic index, nutrition facts, and benefits for diabetics and weight loss. Learn how many onions diabetics can eat daily.",
    "link": "/diabetes-blog/onion-glycemic-index-nutrition-facts"
  },
  {
    "title": "Ginger Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutrition facts, and health benefits of ginger. Learn about its impact on weight loss and diabetes management.",
    "link": "/diabetes-blog/ginger-glycemic-index-nutrition-facts"
  },
  {
    "title": "Button mushroom Glycemic Index, Nutrition Facts",
    "description": "Discover Button mushroom Glycemic Index, nutritional benefits, and tips for diabetics and weight loss. Learn about vitamins and safe daily intake.",
    "link": "/diabetes-blog/button-mushroom-glycemic-index-nutrition-facts"
  },
  {
    "title": "Kale Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutrition facts, and benefits of kale for weight loss and diabetes, plus daily intake tips and vitamin content.",
    "link": "/diabetes-blog/kale-glycemic-index-nutrition-facts"
  },
  {
    "title": "Sugar snap pea Glycemic Index, Nutrition Facts",
    "description": "Discover sugar snap pea glycemic index, nutrition facts, benefits for weight loss, diabetes safety, daily intake for diabetics, and vitamin content.",
    "link": "/diabetes-blog/sugar-snap-pea-glycemic-index-nutrition-facts"
  },
  {
    "title": "Spinach Glycemic Index, Nutrition Facts",
    "description": "Discover Spinach Glycemic Index, Nutrition Facts, and benefits for weight loss and diabetics. Learn about vitamins and safe consumption for diabetics.",
    "link": "/diabetes-blog/spinach-glycemic-index-nutrition-facts"
  },
  {
    "title": "Swiss chard Glycemic Index, Nutrition Facts",
    "description": "Discover Swiss chard's glycemic index, nutrition facts, benefits for weight loss and diabetics, and its vitamin content in our detailed guide.",
    "link": "/diabetes-blog/swiss-chard-glycemic-index-nutrition-facts"
  },
  {
    "title": "Eggplant Glycemic Index, Nutrition Facts",
    "description": "Discover eggplant's glycemic index, nutrition facts, benefits for weight loss, safety for diabetics, and vitamin content in this comprehensive guide.",
    "link": "/diabetes-blog/eggplant-glycemic-index-nutrition-facts"
  },
  {
    "title": "Avocado Glycemic Index, Nutrition Facts",
    "description": "Discover avocado nutrition facts, glycemic index, benefits for weight loss, and tips for diabetics. Learn about vitamins in avocados and FAQs.",
    "link": "/diabetes-blog/avocado-glycemic-index-nutrition-facts"
  },
  {
    "title": "Mulberry Glycemic Index, Nutrition Facts",
    "description": "Discover Mulberry Glycemic Index, nutritional benefits, weight loss and diabetic safety. Learn daily intake and vitamin content for healthier choices.",
    "link": "/diabetes-blog/mulberry-glycemic-index-nutrition-facts"
  },
  {
    "title": "Acorn squash Glycemic Index, Nutrition Facts",
    "description": "Discover acorn squash glycemic index, nutrition facts, weight loss benefits, diabetic safety, and key vitamins in our comprehensive guide.",
    "link": "/diabetes-blog/acorn-squash-glycemic-index-nutrition-facts"
  },
  {
    "title": "Shallot Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index and nutrition facts of shallots. Learn about their benefits for weight loss and diabetes management, plus essential vitamins.",
    "link": "/diabetes-blog/shallot-glycemic-index-nutrition-facts"
  },
  {
    "title": "Green bean Glycemic Index, Nutrition Facts",
    "description": "Discover green bean nutrition: glycemic index, benefits for weight loss, vitamin content, and diabetic-safe servings. Learn all about green beans today!",
    "link": "/diabetes-blog/green-bean-glycemic-index-nutrition-facts"
  },
  {
    "title": "Habanero pepper Glycemic Index, Nutrition Facts",
    "description": "Discover Habanero pepper nutrition, glycemic index, benefits for weight loss, safety for diabetics, daily intake tips, vitamins, and FAQs for healthy eating.",
    "link": "/diabetes-blog/habanero-pepper-glycemic-index-nutrition-facts"
  },
  {
    "title": "Sweet potato Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index and health benefits of sweet potatoes. Learn about their nutrition, weight loss benefits, and suitability for diabetics.",
    "link": "/diabetes-blog/sweet-potato-glycemic-index-nutrition-facts"
  },
  {
    "title": "Brussels sprout Glycemic Index, Nutrition Facts",
    "description": "Discover Brussels sprout glycemic index, nutrition facts, benefits for weight loss and diabetes, and essential vitamins for a healthy diet.",
    "link": "/diabetes-blog/brussels-sprout-glycemic-index-nutrition-facts"
  },
  {
    "title": "Lima bean Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutrition facts, and health benefits of lima beans. Learn if they're good for weight loss and safe for diabetics.",
    "link": "/diabetes-blog/lima-bean-glycemic-index-nutrition-facts"
  },
  {
    "title": "Fig Glycemic Index, Nutrition Facts",
    "description": "Discover fig glycemic index, nutrition facts, benefits for weight loss, safety for diabetics, daily limits, and vitamin content for a healthier choice.",
    "link": "/diabetes-blog/fig-glycemic-index-nutrition-facts"
  },
  {
    "title": "Lychee Glycemic Index, Nutrition Facts",
    "description": "Discover lychee glycemic index, nutrition facts, and health benefits. Learn about lychees for weight loss, diabetics, and key vitamins.",
    "link": "/diabetes-blog/lychee-glycemic-index-nutrition-facts"
  },
  {
    "title": "Fennel Glycemic Index, Nutrition Facts",
    "description": "Discover fennel's glycemic index, nutrition facts, benefits for weight loss, and diabetic safety. Learn about its vitamin content and daily intake guidance.",
    "link": "/diabetes-blog/fennel-glycemic-index-nutrition-facts"
  },
  {
    "title": "Cranberry Glycemic Index, Nutrition Facts",
    "description": "Discover cranberry glycemic index, nutrition facts, benefits for weight loss, diabetic safety, and vitamin content. Learn how many cranberries diabetics can eat daily.",
    "link": "/diabetes-blog/cranberry-glycemic-index-nutrition-facts"
  },
  {
    "title": "Shiitake mushroom Glycemic Index, Nutrition Facts",
    "description": "Discover Shiitake mushroom's glycemic index, nutrition facts, benefits for weight loss and diabetes, and essential vitamins in this comprehensive guide.",
    "link": "/diabetes-blog/shiitake-mushroom-glycemic-index-nutrition-facts"
  },
  {
    "title": "Garlic Glycemic Index, Nutrition Facts",
    "description": "Discover garlic's glycemic index, nutritional benefits, safety for diabetics, weight loss effects, and essential vitamins it contains.",
    "link": "/diabetes-blog/garlic-glycemic-index-nutrition-facts"
  },
  {
    "title": "Potato Glycemic Index, Nutrition Facts",
    "description": "Discover potato glycemic index, nutrition facts, benefits for weight loss, and safety for diabetics. Learn about potato vitamins and safe consumption.",
    "link": "/diabetes-blog/potato-glycemic-index-nutrition-facts"
  },
  {
    "title": "Edamame Glycemic Index, Nutrition Facts",
    "description": "Discover Edamame's glycemic index, nutrition facts, weight loss benefits, safety for diabetics, and vitamin content in this comprehensive guide.",
    "link": "/diabetes-blog/edamame-glycemic-index-nutrition-facts"
  },
  {
    "title": "Turnip Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutritional benefits, and diabetic-friendly insights of turnips. Optimize your diet with this versatile root vegetable.",
    "link": "/diabetes-blog/turnip-glycemic-index-nutrition-facts"
  },
  {
    "title": "Pomegranate Glycemic Index, Nutrition Facts",
    "description": "Discover pomegranate glycemic index, nutrition facts, weight loss benefits, diabetes safety, daily consumption tips, and essential vitamins.",
    "link": "/diabetes-blog/pomegranate-glycemic-index-nutrition-facts"
  },
  {
    "title": "Leek Glycemic Index, Nutrition Facts",
    "description": "Discover leeks' nutrition facts, glycemic index, benefits for weight loss and diabetes, and the vitamins they contain.",
    "link": "/diabetes-blog/leek-glycemic-index-nutrition-facts"
  },
  {
    "title": "Serrano pepper Glycemic Index, Nutrition Facts",
    "description": "Discover Serrano pepper nutrition facts, glycemic index, weight loss benefits, diabetic safety, daily intake, and vitamin content.",
    "link": "/diabetes-blog/serrano-pepper-glycemic-index-nutrition-facts"
  },
  {
    "title": "Rutabaga Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutritional benefits, and safety of rutabagas for diabetics and weight loss. Explore vitamins in rutabagas and more.",
    "link": "/diabetes-blog/rutabaga-glycemic-index-nutrition-facts"
  },
  {
    "title": "Cucumber Glycemic Index, Nutrition Facts",
    "description": "Discover cucumber nutrition facts, benefits for weight loss, safety for diabetics, daily intake tips, and vitamins they contain.",
    "link": "/diabetes-blog/cucumber-glycemic-index-nutrition-facts"
  },
  {
    "title": "Kumquat Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutrition facts, and health benefits of kumquats for weight loss and diabetes. Learn how many to eat and their vitamin content.",
    "link": "/diabetes-blog/kumquat-glycemic-index-nutrition-facts"
  },
  {
    "title": "Okra Glycemic Index, Nutrition Facts",
    "description": "Discover okra's glycemic index, its nutrition facts, weight loss benefits, safety for diabetics, and vitamin content in this comprehensive guide.",
    "link": "/diabetes-blog/okra-glycemic-index-nutrition-facts"
  },
  {
    "title": "Scallion Glycemic Index, Nutrition Facts",
    "description": "Discover scallion glycemic index and nutrition facts. Learn about their benefits for weight loss, diabetes safety, and essential vitamins they contain.",
    "link": "/diabetes-blog/scallion-glycemic-index-nutrition-facts"
  },
  {
    "title": "Dragon fruit Glycemic Index, Nutrition Facts",
    "description": "Discover dragon fruit's glycemic index, nutrition facts, vitamins and its benefits for weight loss and diabetics in our comprehensive guide.",
    "link": "/diabetes-blog/dragon-fruit-glycemic-index-nutrition-facts"
  },
  {
    "title": "Pumpkin Glycemic Index, Nutrition Facts",
    "description": "Discover pumpkin's glycemic index, nutrition facts, benefits for weight loss and diabetes, and essential vitamins for a healthier diet.",
    "link": "/diabetes-blog/pumpkin-glycemic-index-nutrition-facts"
  },
  {
    "title": "Portobello mushroom Glycemic Index, Nutrition Facts",
    "description": "Discover Portobello mushroom nutrition, glycemic index, benefits for weight loss and diabetes, serving tips, and vitamins. Perfect for a healthy diet!",
    "link": "/diabetes-blog/portobello-mushroom-glycemic-index-nutrition-facts"
  },
  {
    "title": "Endive Glycemic Index, Nutrition Facts",
    "description": "Discover endive's glycemic index, nutrition facts, benefits for weight loss and diabetes, and its essential vitamins for a healthy diet.",
    "link": "/diabetes-blog/endive-glycemic-index-nutrition-facts"
  },
  {
    "title": "Corn Glycemic Index, Nutrition Facts",
    "description": "Discover corn's glycemic index, nutrition facts, and its impact on weight loss and diabetes management, plus essential vitamins contained in corn.",
    "link": "/diabetes-blog/corn-glycemic-index-nutrition-facts"
  },
  {
    "title": "Green cabbage Glycemic Index, Nutrition Facts",
    "description": "Discover green cabbage nutrition facts, glycemic index, weight loss benefits, diabetes safety, daily intake recommendations, and vitamin content.",
    "link": "/diabetes-blog/green-cabbage-glycemic-index-nutrition-facts"
  },
  {
    "title": "Cremini mushroom Glycemic Index, Nutrition Facts",
    "description": "Discover Cremini mushroom nutrition, glycemic index, and health benefits for weight loss and diabetes. Learn safe daily intake and essential vitamins.",
    "link": "/diabetes-blog/cremini-mushroom-glycemic-index-nutrition-facts"
  },
  {
    "title": "Radish Glycemic Index, Nutrition Facts",
    "description": "Discover radish glycemic index, nutrition facts, weight loss benefits, diabetic safety, and vitamin content in our comprehensive guide.",
    "link": "/diabetes-blog/radish-glycemic-index-nutrition-facts"
  },
  {
    "title": "Jalapeño pepper Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutritional facts, benefits for weight loss, and diabetic safety of Jalapeño peppers.",
    "link": "/diabetes-blog/jalapeno-pepper-glycemic-index-nutrition-facts"
  },
  {
    "title": "Tomatillo Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index and nutrition facts of tomatillos. Learn if they're safe for diabetics and beneficial for weight loss.",
    "link": "/diabetes-blog/tomatillo-glycemic-index-nutrition-facts"
  },
  {
    "title": "Cauliflower Glycemic Index, Nutrition Facts",
    "description": "Discover cauliflower's glycemic index, nutrition facts, weight loss benefits, diabetic safety, daily servings, and essential vitamins.",
    "link": "/diabetes-blog/cauliflower-glycemic-index-nutrition-facts"
  },
  {
    "title": "Oyster mushroom Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index and nutrition facts of oyster mushrooms. Learn about their benefits for weight loss and diabetics, plus their vitamin content.",
    "link": "/diabetes-blog/oyster-mushroom-glycemic-index-nutrition-facts"
  },
  {
    "title": "Bok choy Glycemic Index, Nutrition Facts",
    "description": "Discover Bok choy Glycemic Index, nutrition facts, weight loss & diabetic tips. Learn daily intake, safety, and vitamin content for optimal health.",
    "link": "/diabetes-blog/bok-choy-glycemic-index-nutrition-facts"
  },
  {
    "title": "Carrot Glycemic Index, Nutrition Facts",
    "description": "Explore carrot glycemic index, nutrition facts, benefits for weight loss, safety for diabetics, daily intake guidelines, and essential vitamins.",
    "link": "/diabetes-blog/carrot-glycemic-index-nutrition-facts"
  },
  {
    "title": "Jackfruit Glycemic Index, Nutrition Facts",
    "description": "Discover jackfruit's glycemic index, nutrition facts, and benefits for weight loss and diabetics. Learn how many jackfruits are safe for diabetics.",
    "link": "/diabetes-blog/jackfruit-glycemic-index-nutrition-facts"
  },
  {
    "title": "Broccoli Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index and nutrition facts of broccoli. Learn if it's good for weight loss and how it benefits diabetics.",
    "link": "/diabetes-blog/broccoli-glycemic-index-nutrition-facts"
  },
  {
    "title": "Lettuce Glycemic Index, Nutrition Facts",
    "description": "Explore lettuce's glycemic index, nutrition facts, weight loss benefits, diabetic safety, and essential vitamins in our comprehensive guide.",
    "link": "/diabetes-blog/lettuce-glycemic-index-nutrition-facts"
  },
  {
    "title": "Spaghetti squash Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutrition facts, and benefits of spaghetti squash for weight loss and diabetes. Learn about vitamins and safe consumption today.",
    "link": "/diabetes-blog/spaghetti-squash-glycemic-index-nutrition-facts"
  },
  {
    "title": "Coconut Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index and nutrition facts of coconuts. Learn about their benefits for weight loss and safety for diabetics.",
    "link": "/diabetes-blog/coconut-glycemic-index-nutrition-facts"
  },
  {
    "title": "Artichoke Glycemic Index, Nutrition Facts",
    "description": "Explore artichoke glycemic index, nutrition facts, benefits for weight loss, diabetic safety, and vitamin content for healthier eating.",
    "link": "/diabetes-blog/artichoke-glycemic-index-nutrition-facts"
  },
  {
    "title": "Bell pepper Glycemic Index, Nutrition Facts",
    "description": "Discover bell pepper nutrition facts, glycemic index, benefits for weight loss, diabetic safety, and vitamin content in this comprehensive guide.",
    "link": "/diabetes-blog/bell-pepper-glycemic-index-nutrition-facts"
  },
  {
    "title": "Parsnip Glycemic Index, Nutrition Facts",
    "description": "Discover parsnip nutrition facts, glycemic index, benefits for weight loss and diabetes, and vitamin content in our comprehensive guide.",
    "link": "/diabetes-blog/parsnip-glycemic-index-nutrition-facts"
  },
  {
    "title": "Passion fruit Glycemic Index, Nutrition Facts",
    "description": "Discover Passion Fruit Glycemic Index, nutrition facts, diabetic safety, weight loss benefits, daily limits, and vitamin content for a healthier lifestyle.",
    "link": "/diabetes-blog/passion-fruit-glycemic-index-nutrition-facts"
  },
  {
    "title": "Gooseberry Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index and nutrition facts of gooseberries. Learn about their benefits for weight loss, diabetes management, and essential vitamins.",
    "link": "/diabetes-blog/gooseberry-glycemic-index-nutrition-facts"
  },
  {
    "title": "Collard green Glycemic Index, Nutrition Facts",
    "description": "Discover Collard greens' glycemic index, nutrition facts, health benefits and diabetic-friendly aspects. Ideal for weight loss and rich in essential vitamins.",
    "link": "/diabetes-blog/collard-green-glycemic-index-nutrition-facts"
  },
  {
    "title": "Asparagus Glycemic Index, Nutrition Facts",
    "description": "Discover asparagus nutrition facts, glycemic index, benefits for weight loss and diabetes, and its rich vitamin content. Find out how much asparagus diabetics can eat.",
    "link": "/diabetes-blog/asparagus-glycemic-index-nutrition-facts"
  },
  {
    "title": "Jicama Glycemic Index, Nutrition Facts",
    "description": "Discover jicama's glycemic index, nutrition facts, benefits for weight loss, and safety for diabetics. Learn how many jicamas diabetics can eat daily.",
    "link": "/diabetes-blog/jicama-glycemic-index-nutrition-facts"
  },
  {
    "title": "Beet Glycemic Index, Nutrition Facts",
    "description": "Discover beet glycemic index, nutrition facts, benefits for weight loss, safety for diabetics, and vitamin content in this comprehensive guide.",
    "link": "/diabetes-blog/beet-glycemic-index-nutrition-facts"
  },
  {
    "title": "Green pea Glycemic Index, Nutrition Facts",
    "description": "Discover Green peas: glycemic index, nutrition facts, benefits for weight loss and diabetics, and their essential vitamins.",
    "link": "/diabetes-blog/green-pea-glycemic-index-nutrition-facts"
  },
  {
    "title": "Date Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutrition facts, and health benefits of dates. Learn about their impact on weight loss and diabetes management.",
    "link": "/diabetes-blog/date-glycemic-index-nutrition-facts"
  },
  {
    "title": "Persimmon Glycemic Index, Nutrition Facts",
    "description": "Discover persimmon's glycemic index, nutrition facts, weight loss benefits, and safety for diabetics in this comprehensive guide.",
    "link": "/diabetes-blog/persimmon-glycemic-index-nutrition-facts"
  },
  {
    "title": "Enoki mushroom Glycemic Index, Nutrition Facts",
    "description": "Discover Enoki mushroom glycemic index, nutrition facts, weight loss benefits, safety for diabetics, daily intake, and vitamin content.",
    "link": "/diabetes-blog/enoki-mushroom-glycemic-index-nutrition-facts"
  },
  {
    "title": "Starfruit Glycemic Index, Nutrition Facts",
    "description": "Explore the glycemic index, nutrition facts, and health benefits of starfruit, including its impact on weight loss and safety for diabetics.",
    "link": "/diabetes-blog/starfruit-glycemic-index-nutrition-facts"
  },
  {
    "title": "Mustard green Glycemic Index, Nutrition Facts",
    "description": "Discover Mustard greens nutrition, benefits for diabetics, weight loss aid, & vitamins in this comprehensive guide on their glycemic index.",
    "link": "/diabetes-blog/mustard-green-glycemic-index-nutrition-facts"
  },
  {
    "title": "Cherimoya Glycemic Index, Nutrition Facts",
    "description": "Explore cherimoya's glycemic index and nutrition facts. Discover its benefits for weight loss, diabetes, vitamins, and daily intake recommendations.",
    "link": "/diabetes-blog/cherimoya-glycemic-index-nutrition-facts"
  },
  {
    "title": "Butternut squash Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutrition facts, and health benefits of Butternut squash, including its impact on weight loss and diabetes management.",
    "link": "/diabetes-blog/butternut-squash-glycemic-index-nutrition-facts"
  },
  {
    "title": "Tomato Glycemic Index, Nutrition Facts",
    "description": "Discover tomato glycemic index, nutrition facts, benefits for weight loss, and diabetic safety. Find out how many tomatoes diabetics can eat daily.",
    "link": "/diabetes-blog/tomato-glycemic-index-nutrition-facts"
  },
  {
    "title": "Strawberry Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index of strawberries, their nutrition facts, benefits for weight loss, and safety for diabetics. Learn about their vitamin content.",
    "link": "/diabetes-blog/strawberry-glycemic-index-nutrition-facts"
  },
  {
    "title": "Nectarine Glycemic Index, Nutrition Facts",
    "description": "Discover nectarines' glycemic index, nutrition facts, benefits for weight loss, and safety for diabetics, plus essential vitamin content.",
    "link": "/diabetes-blog/nectarine-glycemic-index-nutrition-facts"
  },
  {
    "title": "Clementine Glycemic Index, Nutrition Facts",
    "description": "Discover Clementine's glycemic index, nutrition facts, weight loss benefits, safety for diabetics, and vitamin content in our comprehensive guide.",
    "link": "/diabetes-blog/clementine-glycemic-index-nutrition-facts"
  },
  {
    "title": "Peach Glycemic Index, Nutrition Facts",
    "description": "Discover peach glycemic index, nutrition facts, benefits for weight loss, diabetic safety, and essential vitamins in this concise peach nutrition guide.",
    "link": "/diabetes-blog/peach-glycemic-index-nutrition-facts"
  },
  {
    "title": "Watermelon Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index and nutrition facts of watermelon. Learn its benefits for weight loss, diabetes management, and vitamin content.",
    "link": "/diabetes-blog/watermelon-glycemic-index-nutrition-facts"
  },
  {
    "title": "Papaya Glycemic Index, Nutrition Facts",
    "description": "Discover Papaya's glycemic index, nutrition facts, weight loss benefits, and safety for diabetics. Learn how many papayas are safe for diabetics.",
    "link": "/diabetes-blog/papaya-glycemic-index-nutrition-facts"
  },
  {
    "title": "Plum Glycemic Index, Nutrition Facts",
    "description": "Discover plum nutrition facts, glycemic index, benefits for weight loss, diabetes safety, and vitamins in our comprehensive guide.",
    "link": "/diabetes-blog/plum-glycemic-index-nutrition-facts"
  },
  {
    "title": "Cherry Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index, nutrition facts, and benefits of cherries. Learn about their role in weight loss and diabetes management.",
    "link": "/diabetes-blog/cherry-glycemic-index-nutrition-facts"
  },
  {
    "title": "Blackberry Glycemic Index, Nutrition Facts",
    "description": "Discover blackberry glycemic index, nutrition facts, benefits for weight loss and diabetes, and essential vitamins in this comprehensive guide.",
    "link": "/diabetes-blog/blackberry-glycemic-index-nutrition-facts"
  },
  {
    "title": "Mango Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index and nutrition facts of mangoes. Learn about mangoes for weight loss, diabetes safety, and their essential vitamins.",
    "link": "/diabetes-blog/mango-glycemic-index-nutrition-facts"
  },
  {
    "title": "Grape Glycemic Index, Nutrition Facts",
    "description": "Discover grape nutrition facts, benefits for weight loss, diabetic safety, and vitamin content. Learn how many grapes diabetics can enjoy daily.",
    "link": "/diabetes-blog/grape-glycemic-index-nutrition-facts"
  },
  {
    "title": "Pear Glycemic Index, Nutrition Facts",
    "description": "Discover pear nutrition facts, glycemic index, weight loss benefits, diabetic safety, daily intake, and vitamin content all in one place.",
    "link": "/diabetes-blog/pear-glycemic-index-nutrition-facts"
  },
  {
    "title": "Tangerine Glycemic Index, Nutrition Facts",
    "description": "Discover tangerine glycemic index, nutrition facts, benefits for weight loss, safety for diabetics, daily intake, vitamins, and FAQs.",
    "link": "/diabetes-blog/tangerine-glycemic-index-nutrition-facts"
  },
  {
    "title": "Cantaloupe Glycemic Index, Nutrition Facts",
    "description": "Discover the glycemic index & nutrition facts of cantaloupe. Learn about its benefits for weight loss and diabetes management, plus vitamin content.",
    "link": "/diabetes-blog/cantaloupe-glycemic-index-nutrition-facts"
  },
  {
    "title": "Blueberry Glycemic Index, Nutrition Facts",
    "description": "Discover blueberry glycemic index, nutrition facts, benefits for weight loss, diabetic safety, serving tips, and vitamin content.",
    "link": "/diabetes-blog/blueberry-glycemic-index-nutrition-facts"
  },
  {
    "title": "Grapefruit Glycemic Index, Nutrition Facts",
    "description": "Discover grapefruit glycemic index, nutrition facts, weight loss benefits, diabetics' safety, daily intake, and vitamin content in this comprehensive guide.",
    "link": "/diabetes-blog/grapefruit-glycemic-index-nutrition-facts"
  },
  {
    "title": "Orange Glycemic Index, Nutrition Facts",
    "description": "Explore the glycemic index, nutrition facts, and benefits of oranges for weight loss and diabetes, plus FAQs and vitamin content.",
    "link": "/diabetes-blog/orange-glycemic-index-nutrition-facts"
  }
];

function DiabetesBlog() {
  return (
    <CommonBlogPage
      cardData={cardData}
      HeroComponent={
        <Hero
          heading="Ultimate Diabetes Blogs Directory: Food Nutrition Facts, Glycemic Index"
          subtitle="Curex is the easiest way to treat allergies at-home without allergy shots."
          ctaText="Take the free Quiz"
          imageSrc=""
        />
      }
    />
  );
}

export default DiabetesBlog;
