import Hero from "../../common/ui/Hero";
import CommonBlogPage from "./CommonBlogPage";

const cardData: { title: string; description: string; link: string }[] = [
  {
    "title": "Allergy to Burmilla cat 101: Factors & Overview",
    "description": "Discover if Burmilla cats are hypoallergenic. Learn about allergy symptoms, care tips, and alternative breeds to manage pet allergies effectively.",
    "link": "/pet-101/is-burmilla-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Ojos Azules cat 101: Factors & Overview",
    "description": "Discover if Ojos Azules cats are hypoallergenic. Learn about symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-ojos-azules-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Dwelf cat 101: Factors & Overview",
    "description": "Discover if Dwelf cats are hypoallergenic. Learn about symptoms, care tips, bathing, and alternative hypoallergenic breeds.",
    "link": "/pet-101/is-dwelf-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Chausie cat 101: Factors & Overview",
    "description": "Discover if Chausie cats are hypoallergenic. Learn about allergy symptoms, care tips, and explore alternative cat breeds for those with allergies.",
    "link": "/pet-101/is-chausie-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Toyger cat 101: Factors & Overview",
    "description": "Discover if Toyger cats are hypoallergenic, explore allergy symptoms, care tips, and alternative breeds to find your perfect feline companion.",
    "link": "/pet-101/is-toyger-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Asian Shorthair cat 101: Factors & Overview",
    "description": "Discover if Asian Shorthair cats are hypoallergenic. Learn about allergy symptoms, care tips, and explore other hypoallergenic cat breeds.",
    "link": "/pet-101/is-asian-shorthair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Oriental Longhair cat 101: Factors & Overview",
    "description": "Discover if Oriental Longhair cats are hypoallergenic. Learn about allergy factors, symptoms, care tips, and alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-oriental-longhair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Serengeti cat 101: Factors & Overview",
    "description": "Discover if Serengeti cats are hypoallergenic. Learn about symptoms, management tips, and alternative breeds for allergy sufferers.",
    "link": "/pet-101/is-serengeti-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Mekong Bobtail cat 101: Factors & Overview",
    "description": "Discover if Mekong Bobtail cats are hypoallergenic. Learn symptoms, bath tips, and explore alternative hypoallergenic cat breeds to consider.",
    "link": "/pet-101/is-mekong-bobtail-cat-hypoallergenic"
  },
  {
    "title": "Allergy to American Keuda cat 101: Factors & Overview",
    "description": "Discover if American Keuda cats are hypoallergenic. Learn about symptoms, allergy-reducing tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-american-keuda-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Li Hua cat 101: Factors & Overview",
    "description": "Discover if Li Hua cats are hypoallergenic. Learn about symptoms, bathing tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-li-hua-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Caracat 101: Factors & Overview",
    "description": "Discover if Caracat is hypoallergenic. Learn about factors, symptoms, care tips, and alternative cat breeds for allergy sufferers.",
    "link": "/pet-101/is-caracat-hypoallergenic"
  },
  {
    "title": "Allergy to Highlander cat 101: Factors & Overview",
    "description": "Discover if Highlander cats are hypoallergenic, learn about allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-highlander-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Leopard cat 101: Factors & Overview",
    "description": "Are Leopard cats hypoallergenic? Explore allergy factors, symptoms, care tips, and alternative hypoallergenic breeds in our comprehensive guide.",
    "link": "/pet-101/is-leopard-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Foldex cat 101: Factors & Overview",
    "description": "Discover if Foldex cats are hypoallergenic. Learn about symptoms, care tips, and alternative breeds for allergy sufferers.",
    "link": "/pet-101/is-foldex-cat-hypoallergenic"
  },
  {
    "title": "Allergy to York Chocolate cat 101: Factors & Overview",
    "description": "Discover if York Chocolate cats are hypoallergenic. Learn about symptoms, care tips, and alternative breeds better suited for those with allergies.",
    "link": "/pet-101/is-york-chocolate-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Kinkalow cat 101: Factors & Overview",
    "description": "Discover if Kinkalow cats are hypoallergenic. Learn about allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-kinkalow-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Australian Mist cat 101: Factors & Overview",
    "description": "Discover if the Australian Mist cat is hypoallergenic, learn symptoms, management tips, and hypoallergenic alternatives in our detailed guide.",
    "link": "/pet-101/is-australian-mist-cat-hypoallergenic"
  },
  {
    "title": "Allergy to German Rex cat 101: Factors & Overview",
    "description": "Discover if German Rex cats are hypoallergenic. Learn about allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-german-rex-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Sokoke Forest cat 101: Factors & Overview",
    "description": "Discover if Sokoke Forest cats are hypoallergenic. Learn about symptoms, bathing tips to reduce allergies, and explore alternative cat breeds.",
    "link": "/pet-101/is-sokoke-forest-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Khao Manee cat 101: Factors & Overview",
    "description": "Discover if Khao Manee cats are hypoallergenic, allergy symptoms, care tips, and alternative breeds that might be a better fit for allergy sufferers.",
    "link": "/pet-101/is-khao-manee-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Jungle Curl cat 101: Factors & Overview",
    "description": "Discover if Jungle Curl cats are hypoallergenic. Learn about symptoms, care tips, and alternative breeds to manage allergies effectively.",
    "link": "/pet-101/is-jungle-curl-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Arabian Mau cat 101: Factors & Overview",
    "description": "Discover if the Arabian Mau cat is hypoallergenic. Explore symptoms, care tips, and alternative breeds to manage allergies effectively.",
    "link": "/pet-101/is-arabian-mau-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Karelian Bobtail cat 101: Factors & Overview",
    "description": "Discover if Karelian Bobtail cats are hypoallergenic. Learn about factors, symptoms, bathing tips, and alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-karelian-bobtail-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Minskin cat 101: Factors & Overview",
    "description": "Discover if Minskin cats are hypoallergenic, explore allergy symptoms, care tips, and learn about alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-minskin-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Selkirk Rex Longhair cat 101: Factors & Overview",
    "description": "Discover if the Selkirk Rex Longhair is hypoallergenic. Explore allergy factors, symptoms, care tips, and alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-selkirk-rex-longhair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Dragon Li cat 101: Factors & Overview",
    "description": "Explore if Dragon Li cats are hypoallergenic, learn about allergy symptoms, care tips, and discover alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-dragon-li-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Thai cat 101: Factors & Overview",
    "description": "Discover if Thai cats are hypoallergenic, learn about symptoms, care tips, and explore alternative breeds for allergen-sensitive pet lovers.",
    "link": "/pet-101/is-thai-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Siberian cat 101: Factors & Overview",
    "description": "Discover if Siberian cats are hypoallergenic. Learn about allergy symptoms, care tips, and alternative cat breeds for allergy sufferers.",
    "link": "/pet-101/is-siberian-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Kohana cat 101: Factors & Overview",
    "description": "Discover if Kohona cats are hypoallergenic, allergy symptoms, care tips to reduce allergens, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-kohana-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Toybob cat 101: Factors & Overview",
    "description": "Discover if Toybob cats are hypoallergenic, explore allergy symptoms, care tips, and alternative hypoallergenic cat breeds. Find relief for allergy sufferers.",
    "link": "/pet-101/is-toybob-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Donskoy cat 101: Factors & Overview",
    "description": "Discover if the Donskoy cat is hypoallergenic. Learn about symptoms, bathing tips, and alternative breeds for allergy sufferers.",
    "link": "/pet-101/is-donskoy-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Javanese cat 101: Factors & Overview",
    "description": "Discover if Javanese cats are hypoallergenic, learn allergy symptoms, care tips, and explore alternatives in our in-depth guide. Stay informed and breathe easy!",
    "link": "/pet-101/is-javanese-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Austrian Shorthair cat 101: Factors & Overview",
    "description": "Discover if the Austrian Shorthair cat is hypoallergenic. Learn about allergy symptoms, care tips, and alternative breeds in our detailed guide.",
    "link": "/pet-101/is-austrian-shorthair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Owyhee Bob cat 101: Factors & Overview",
    "description": "Discover if Owyhee Bob cats are hypoallergenic, learn symptoms, care tips, and explore alternative hypoallergenic cat breeds for allergy sufferers.",
    "link": "/pet-101/is-owyhee-bob-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Ceylon cat 101: Factors & Overview",
    "description": "Discover if Ceylon cats are hypoallergenic, explore allergy factors, symptoms, bathing tips, and alternative hypoallergenic breeds in our detailed guide.",
    "link": "/pet-101/is-ceylon-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Cymric cat 101: Factors & Overview",
    "description": "Discover if Cymric cats are hypoallergenic. Learn allergy factors, symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-cymric-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Havana Silk cat 101: Factors & Overview",
    "description": "Discover if Havana Silk cats are hypoallergenic. Learn about allergy factors, symptoms, bathing tips, and alternative hypoallergenic breeds.",
    "link": "/pet-101/is-havana-silk-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Snow Bengal cat 101: Factors & Overview",
    "description": "Discover if Snow Bengal cats are hypoallergenic, learn about symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-snow-bengal-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Nebelung cat (Russian Longhair cat) 101: Factors & Overview",
    "description": "Discover if Nebelung cats are hypoallergenic. Learn about allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-nebelung-cat-russian-longhair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Brazilian Shorthair cat 101: Factors & Overview",
    "description": "Discover if Brazilian Shorthair cats are hypoallergenic. Learn about allergy factors, symptoms, care tips, and alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-brazilian-shorthair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Minuet cat 101: Factors & Overview",
    "description": "Discover if Minuet cats are hypoallergenic, learn about allergy symptoms, and explore care tips and alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-minuet-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Mandalay cat 101: Factors & Overview",
    "description": "Discover if Mandalay cats are hypoallergenic, learn about allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-mandalay-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Tasman Manx cat 101: Factors & Overview",
    "description": "Discover if Tasman Manx cats are hypoallergenic. Learn about allergy factors, symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-tasman-manx-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Asian Semi-Longhair cat 101: Factors & Overview",
    "description": "Discover if the Asian Semi-Longhair cat is hypoallergenic, allergy symptoms, bathing tips, and explore alternative hypoallergenic cat breeds now!",
    "link": "/pet-101/is-asian-semi-longhair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Sokoke cat 101: Factors & Overview",
    "description": "Discover if Sokoke cats are hypoallergenic. Learn about symptoms, prevention tips, bathing, and alternative cat breeds for allergy sufferers.",
    "link": "/pet-101/is-sokoke-cat-hypoallergenic"
  },
  {
    "title": "Allergy to California Spangled cat 101: Factors & Overview",
    "description": "Explore if the California Spangled cat is hypoallergenic. Learn about symptoms, care tips, and alternative breeds to manage allergies effectively.",
    "link": "/pet-101/is-california-spangled-cat-hypoallergenic"
  },
  {
    "title": "Allergy to European Burmese cat 101: Factors & Overview",
    "description": "Discover if European Burmese cats are hypoallergenic. Learn about symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-european-burmese-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Ukrainian Levkoy cat 101: Factors & Overview",
    "description": "Are Ukrainian Levkoy cats hypoallergenic Discover factors, symptoms, bathing tips, and alternative breeds in our comprehensive guide.",
    "link": "/pet-101/is-ukrainian-levkoy-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Skookum cat 101: Factors & Overview",
    "description": "Discover if Skookum cats are hypoallergenic, learn about symptoms, care tips like bathing them, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-skookum-cat-hypoallergenic"
  },
  {
    "title": "Allergy to American Wirehair cat 101: Factors & Overview",
    "description": "Discover if the American Wirehair cat is hypoallergenic. Learn about factors, symptoms, bathing tips, and alternative hypoallergenic breeds.",
    "link": "/pet-101/is-american-wirehair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Havana Brown cat 101: Factors & Overview",
    "description": "Discover if Havana Brown cats are hypoallergenic. Learn about allergy factors, symptoms, care tips, and alternative cat breeds to consider.",
    "link": "/pet-101/is-havana-brown-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Suphalak cat 101: Factors & Overview",
    "description": "Discover if Suphalak cats are hypoallergenic. Learn about symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-suphalak-cat-hypoallergenic-ae5db"
  },
  {
    "title": "Allergy to American Ringtail cat 101: Factors & Overview",
    "description": "Explore if the American Ringtail cat is hypoallergenic. Learn about symptoms, care tips, and alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-american-ringtail-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Kurilian Bobtail cat 101: Factors & Overview",
    "description": "Discover if Kurilian Bobtail cats are hypoallergenic, learn about symptoms, care tips, and explore alternatives for allergy sufferers.",
    "link": "/pet-101/is-kurilian-bobtail-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Chantilly-Tiffany cat 101: Factors & Overview",
    "description": "Discover if Chantilly-Tiffany cats are hypoallergenic, learn allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-chantilly-tiffany-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Cheetoh cat 101: Factors & Overview",
    "description": "Discover if Cheetoh cats are hypoallergenic. Learn about allergy symptoms, when to bathe them, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-cheetoh-cat-hypoallergenic"
  },
  {
    "title": "Allergy to American Polydactyl cat 101: Factors & Overview",
    "description": "Discover if American Polydactyl cats are hypoallergenic. Learn about allergy symptoms, care tips, and alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-american-polydactyl-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Golden Shaded British cat 101: Factors & Overview",
    "description": "Discover if Golden Shaded British cats are hypoallergenic. Learn about allergy symptoms, care tips, and explore other hypoallergenic cat breeds.",
    "link": "/pet-101/is-golden-shaded-british-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Suphalak cat 101: Factors & Overview",
    "description": "Discover if Suphalak cats are hypoallergenic. Learn about allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-suphalak-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Anatoli cat 101: Factors & Overview",
    "description": "Discover if Anatoli cats are hypoallergenic. Learn about symptoms, bathing tips, and explore alternative hypoallergenic breeds for allergy sufferers.",
    "link": "/pet-101/is-anatoli-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Ural Rex cat 101: Factors & Overview",
    "description": "Discover if the Ural Rex cat is hypoallergenic, learn about symptoms, care tips, and explore other hypoallergenic cat breeds in our comprehensive guide.",
    "link": "/pet-101/is-ural-rex-cat-hypoallergenic"
  },
  {
    "title": "Allergy to German Angora cat 101: Factors & Overview",
    "description": "Discover if German Angora cats are hypoallergenic, learn about allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-german-angora-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Colorpoint Shorthair cat 101: Factors & Overview",
    "description": "Discover if Colorpoint Shorthair cats are hypoallergenic. Learn symptoms, care tips, and explore hypoallergenic alternatives for allergy sufferers.",
    "link": "/pet-101/is-colorpoint-shorthair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to British Longhair cat 101: Factors & Overview",
    "description": "Discover if British Longhair cats are hypoallergenic. Learn about symptoms, care tips, and explore alternative hypoallergenic breeds.",
    "link": "/pet-101/is-british-longhair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Devon Rex cat 101: Factors & Overview",
    "description": "Discover if Devon Rex cats are hypoallergenic, learn about allergy symptoms, care tips, and other hypoallergenic cat breeds in our detailed guide.",
    "link": "/pet-101/is-devon-rex-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Selkirk Rex cat 101: Factors & Overview",
    "description": "Discover if the Selkirk Rex cat is hypoallergenic. Learn about symptoms, bathing tips, and alternative breeds to help reduce allergies.",
    "link": "/pet-101/is-selkirk-rex-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Chartreux cat 101: Factors & Overview",
    "description": "Explore whether Chartreux cats are hypoallergenic, learn symptoms and management, when to bathe them, and discover alternative hypoallergenic breeds.",
    "link": "/pet-101/is-chartreux-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Lykoi cat 101: Factors & Overview",
    "description": "Discover if Lykoi cats are hypoallergenic. Explore allergy symptoms, care tips, and find alternative hypoallergenic cat breeds in our detailed guide.",
    "link": "/pet-101/is-lykoi-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Ocicat 101: Factors & Overview",
    "description": "Discover if Ocicats are hypoallergenic. Learn about allergy factors, symptoms, bathing tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-ocicat-hypoallergenic"
  },
  {
    "title": "Allergy to Bombay cat 101: Factors & Overview",
    "description": "Discover if Bombay cats are hypoallergenic, explore symptoms, care tips, and alternative breeds to manage allergies effectively.",
    "link": "/pet-101/is-bombay-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Turkish Van cat 101: Factors & Overview",
    "description": "Discover if Turkish Van cats are hypoallergenic. Learn allergy factors, symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-turkish-van-cat-hypoallergenic"
  },
  {
    "title": "Allergy to LaPerm cat 101: Factors & Overview",
    "description": "Discover if LaPerm cats are hypoallergenic. Learn about factors, symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-laperm-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Japanese Bobtail cat 101: Factors & Overview",
    "description": "Discover if Japanese Bobtail cats are hypoallergenic. Learn about symptoms, care tips, and alternative hypoallergenic breeds in this informative guide.",
    "link": "/pet-101/is-japanese-bobtail-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Snowshoe cat 101: Factors & Overview",
    "description": "Discover if Snowshoe cats are hypoallergenic. Explore allergy symptoms, care tips, and alternative breeds for allergy sufferers.",
    "link": "/pet-101/is-snowshoe-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Somali cat 101: Factors & Overview",
    "description": "Discover if Somali cats are hypoallergenic. Learn about symptoms, care tips, and explore alternative hypoallergenic cat breeds in our detailed guide.",
    "link": "/pet-101/is-somali-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Exotic Shorthair cat 101: Factors & Overview",
    "description": "Discover if Exotic Shorthair cats are hypoallergenic, understand symptoms, bathing tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-exotic-shorthair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to American Curl cat 101: Factors & Overview",
    "description": "Discover if American Curl cats are hypoallergenic, learn about allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-american-curl-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Cornish Rex cat 101: Factors & Overview",
    "description": "Discover if Cornish Rex cats are hypoallergenic, reduce allergy symptoms, when to bathe them, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-cornish-rex-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Singapura cat 101: Factors & Overview",
    "description": "Discover if Singapura cats are hypoallergenic. Learn about allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-singapura-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Turkish Angora cat 101: Factors & Overview",
    "description": "Discover if Turkish Angora cats are hypoallergenic. Learn about allergy factors, symptoms, care tips, and alternative breeds for allergy sufferers.",
    "link": "/pet-101/is-turkish-angora-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Munchkin cat 101: Factors & Overview",
    "description": "Discover if Munchkin cats are hypoallergenic, signs of allergies, bathing tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-munchkin-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Egyptian Mau cat 101: Factors & Overview",
    "description": "Discover if Egyptian Mau cats are hypoallergenic, learn about symptoms, care tips, and explore alternative hypoallergenic breeds in our detailed guide.",
    "link": "/pet-101/is-egyptian-mau-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Balinese cat 101: Factors & Overview",
    "description": "Discover if Balinese cats are hypoallergenic. Learn about allergy symptoms, care tips, and alternative hypoallergenic breeds in our detailed guide.",
    "link": "/pet-101/is-balinese-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Tonkinese cat 101: Factors & Overview",
    "description": "Discover if Tonkinese cats are hypoallergenic. Learn about allergy symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-tonkinese-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Savannah cat 101: Factors & Overview",
    "description": "Discover if Savannah cats are hypoallergenic, explore symptoms, allergy management tips, and alternative breeds. Learn when to bathe them to reduce allergens.",
    "link": "/pet-101/is-savannah-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Manx cat 101: Factors & Overview",
    "description": "Discover if Manx cats are hypoallergenic. Learn about allergy factors, symptoms, emergency care, bathing tips, and alternative hypoallergenic breeds.",
    "link": "/pet-101/is-manx-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Pixie Bob cat 101: Factors & Overview",
    "description": "Discover if Pixie Bob cats are hypoallergenic. Learn about symptoms, bathing tips, & alternative breeds to help manage cat allergies effectively.",
    "link": "/pet-101/is-pixie-bob-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Ragamuffin cat 101: Factors & Overview",
    "description": "Discover if Ragamuffin cats are hypoallergenic, learn about symptoms, care tips, and explore other hypoallergenic breeds for allergy sufferers.",
    "link": "/pet-101/is-ragamuffin-cat-hypoallergenic"
  },
  {
    "title": "Allergy to American Bobtail cat 101: Factors & Overview",
    "description": "Discover if American Bobtail cats are hypoallergenic, explore symptoms, care tips, and alternative breeds. Reduce allergy risks with expert advice.",
    "link": "/pet-101/is-american-bobtail-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Korat cat 101: Factors & Overview",
    "description": "Discover if Korat cats are hypoallergenic, allergy symptoms, care tips, and hypoallergenic alternatives in our detailed guide on managing cat allergies.",
    "link": "/pet-101/is-korat-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Himalayan cat 101: Factors & Overview",
    "description": "Discover if Himalayan cats are hypoallergenic. Learn about allergy symptoms, care tips, and explore other hypoallergenic cat breeds.",
    "link": "/pet-101/is-himalayan-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Peterbald cat 101: Factors & Overview",
    "description": "Discover if the Peterbald cat is hypoallergenic. Learn about factors, symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-peterbald-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Norwegian Forest cat 101: Factors & Overview",
    "description": "Discover if Norwegian Forest cats are hypoallergenic. Learn about symptoms, care tips, and alternative breeds to minimize allergy risks.",
    "link": "/pet-101/is-norwegian-forest-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Oriental Shorthair cat 101: Factors & Overview",
    "description": "Discover if the Oriental Shorthair cat is hypoallergenic. Learn about symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-oriental-shorthair-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Russian Blue cat 101: Factors & Overview",
    "description": "Discover if Russian Blue cats are hypoallergenic, learn about symptoms, when to bathe them, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-russian-blue-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Birman cat 101: Factors & Overview",
    "description": "Discover if Birman cats are hypoallergenic, understand allergy symptoms, care tips, and explore alternative cat breeds for allergy sufferers.",
    "link": "/pet-101/is-birman-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Burmese cat 101: Factors & Overview",
    "description": "Discover if Burmese cats are hypoallergenic. Learn about symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-burmese-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Ragdoll cat 101: Factors & Overview",
    "description": "Discover if Ragdoll cats are hypoallergenic. Learn about allergy symptoms, management, bathing tips, and explore alternative hypoallergenic breeds.",
    "link": "/pet-101/is-ragdoll-cat-hypoallergenic"
  },
  {
    "title": "Allergy to Scottish Fold cat 101: Factors & Overview",
    "description": "Discover if Scottish Fold cats are hypoallergenic, learn about symptoms, care tips, and explore alternative hypoallergenic cat breeds.",
    "link": "/pet-101/is-scottish-fold-cat-hypoallergenic"
  }
];

function AllergyDrugs101() {
  return (
    <CommonBlogPage
      cardData={cardData}
      HeroComponent={
        <Hero
          heading="Ultimate Pet Care Directory: Hypoallergenic Pets, Bathing Guides, and Alternative Breeds"
          subtitle="Curex is the easiest way to treat allergies at-home without allergy shots."
          ctaText="Take the free Quiz"
          imageSrc=""
        />
      }
      FaqComponent={null}
    />
  );
}

export default AllergyDrugs101;
