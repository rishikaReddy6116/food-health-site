import React from "react";
import RecipeCard from "../components/RecipeCard";

// Import all 25 images from your assets folder
import QuinoaSalad from "../assets/quinoa-salad.png";
import AvocadoToast from "../assets/avocado-toast.png";
import SmoothieBowl from "../assets/smoothie-bowl.png";
import GrilledChickenSalad from "../assets/grilled-chicken-salad.png";
import ZucchiniNoodles from "../assets/zucchini-noodles.png";
import BakedSalmon from "../assets/baked-salmon.png";
import ChickpeaSpinachCurry from "../assets/chickpea-spinach-curry.png";
import YogurtParfait from "../assets/yogurt-parfait.png";
import LentilSoup from "../assets/lentil-soup.png";
import CauliflowerStirFry from "../assets/cauliflower-stir-fry.png";
import SweetPotatoTacos from "../assets/sweet-potato-tacos.png";
import CucumberWrap from "../assets/cucumber-wrap.png";
import StuffedPeppers from "../assets/stuffed-peppers.png";
import BroccoliTofu from "../assets/broccoli-tofu.png";
import TurkeySkewers from "../assets/turkey-skewers.png";
import MushroomFrittata from "../assets/mushroom-frittata.png";
import CabbageTofu from "../assets/cabbage-tofu.png";
import BakedEggplant from "../assets/baked-eggplant.png";

function Recipes() {
  const recipes = [
    { name: "Quinoa & Veggie Salad", calories: 180, protein: 6, carbs: 28, fat: 5, image: QuinoaSalad }, 
    { name: "Avocado Toast", calories: 220, protein: 5, carbs: 30, fat: 10, image: AvocadoToast }, 
    { name: "Berry Smoothie Bowl", calories: 150, protein: 3, carbs: 35, fat: 2, image: SmoothieBowl },
    { name: "Grilled Chicken Salad", calories: 250, protein: 28, carbs: 10, fat: 8, image: GrilledChickenSalad },
    { name: "Zucchini Noodles with Pesto", calories: 200, protein: 5, carbs: 20, fat: 12, image: ZucchiniNoodles },
    { name: "Baked Salmon with Asparagus", calories: 220, protein: 25, carbs: 5, fat: 10, image: BakedSalmon },
    { name: "Chickpea & Spinach Curry", calories: 190, protein: 8, carbs: 25, fat: 6, image: ChickpeaSpinachCurry },
    { name: "Greek Yogurt Parfait", calories: 150, protein: 10, carbs: 20, fat: 2, image: YogurtParfait },
    { name: "Lentil & Vegetable Soup", calories: 160, protein: 9, carbs: 28, fat: 3, image: LentilSoup },
    { name: "Cauliflower Rice Stir-Fry", calories: 180, protein: 7, carbs: 22, fat: 5, image: CauliflowerStirFry },
    { name: "Sweet Potato & Black Bean Tacos", calories: 200, protein: 6, carbs: 30, fat: 4, image: SweetPotatoTacos },
    { name: "Cucumber & Hummus Wrap", calories: 180, protein: 6, carbs: 25, fat: 6, image: CucumberWrap },
    { name: "Spinach & Feta Stuffed Peppers", calories: 190, protein: 10, carbs: 20, fat: 7, image: StuffedPeppers },
    { name: "Broccoli & Tofu Stir-Fry", calories: 180, protein: 12, carbs: 18, fat: 6, image: BroccoliTofu },
    { name: "Grilled Turkey & Veggie Skewers", calories: 220, protein: 28, carbs: 10, fat: 7, image: TurkeySkewers },
    { name: "Mushroom & Spinach Frittata", calories: 200, protein: 14, carbs: 6, fat: 12, image: MushroomFrittata },
    { name: "Cabbage & Tofu Stir-Fry", calories: 180, protein: 12, carbs: 18, fat: 5, image: CabbageTofu },
    { name: "Baked Eggplant with Tomato Sauce", calories: 190, protein: 6, carbs: 22, fat: 8, image: BakedEggplant },
  ];

  return (
    <div className="container">
      <h2>Healthy & Unique Recipes</h2>
      <div className="recipes-grid">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
