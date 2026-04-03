import { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";

const menuData = [
  {
    id: "indian-breads",
    label: "Indian Breads",
    emoji: "🫓",
    items: [
      { name: "Roti", price: "₹55", image: "https://img.freepik.com/free-photo/delicious-arrangement-nutritious-roti_23-2149033964.jpg?semt=ais_incoming&w=740&q=80" },
      { name: "Naan", price: "₹65", image: "https://img.freepik.com/free-photo/close-up-hands-holding-brush_23-2148734734.jpg?semt=ais_incoming&w=740&q=80" },
      { name: "Lachha Paratha", price: "₹95", image: "https://img.freepik.com/free-photo/delicious-assortment-traditional-roti_23-2149033987.jpg" },
      { name: "Kulcha", price: "₹85", image: "https://img.freepik.com/premium-photo/rich-indian-amritsari-kulcha-photo_960396-987161.jpg?semt=ais_incoming&w=740&q=80" },
      { name: "Garlic Naan", price: "₹99", image: "https://img.freepik.com/free-photo/top-view-pakistani-meal-arrangement_23-2148825100.jpg?semt=ais_incoming&w=740&q=80" },
      { name: "Garlic/Zataar Cheese Naan", price: "₹149", image: "https://www.shutterstock.com/image-photo/delicious-looking-flat-naan-on-600nw-2492776021.jpg" },
      { name: "Aloo Kulcha", desc: "Serves along with mint chutney, curd & pickle", price: "₹199", image: "https://www.shutterstock.com/image-photo/amritsari-kulcha-stuffed-indian-flatbread-600nw-2622927513.jpg" },
      { name: "Paneer Kulcha (J)", desc: "Serves along with mint chutney, curd & pickle", price: "₹239", image: "https://sachfoods.com/cdn/shop/articles/MultipleKulchaShot.jpg?v=1667151236" },
    ],
  },
  {
    id: "biryani-rice",
    label: "Biryani & Rice",
    emoji: "🍚",
    items: [
      { name: "Steamed / Jeera Rice", price: "₹209 / ₹259", image: "https://media.istockphoto.com/id/1352656280/photo/jeera-rice-or-zeera-rice-is-an-indian-dish-consisting-of-rice-and-cumin-seeds-close-up-in-the.jpg?s=612x612&w=0&k=20&c=wg7XpgyntiJLDSYpG_6v5-mv98c0GRRj-XdIY26dkmk=" },
      { name: "Dal / Palak Khichdi (J)", price: "₹279 / ₹319", image: "https://www.foodie-trail.com/wp-content/uploads/2021/10/PHOTO-2021-10-01-07-55-20_7-rotated.jpg" },
      { name: "Subz Biryani (J)", desc: "A romatic basmati layered with spiced veggies, slow-cooked for a rich, flavourful biryani", price: "₹399", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0z0Ou1H47VdnEzCcVP6gL-8AWf18eZ_Wqpg&s" },
      { name: "Lucknow Biryani (J)", desc: "Fragrant Lucknowi-style biryani slow-cooked with delicate spices for an irresistibly aromatic", price: "₹399", image: "https://img.freepik.com/premium-photo/authentic-fish-biryani-served-white-plate-handi_466689-72560.jpg?semt=ais_incoming&w=740&q=80" },
      { name: "Paneer Tikka Biryani (J)", desc: "Smoky paneer tikka layered with aromatic basmati and slow-cooked in fragrant biryani spices", price: "₹419", image: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?semt=ais_incoming&w=740&q=80" },
      { name: "Ciel's Shahi Pulao (J)", desc: "A fragrant royal pulao loaded with nuts and mildly spiced veggies for a rich, regal flavour", price: "₹399", image: "https://thumbs.dreamstime.com/b/vegetable-biryani-biriyani-hyderabadi-shahi-pulao-raita-pilaf-basmati-rice-dish-indian-spices-kerala-india-sri-lanka-pakistan-227544702.jpg" },
    ],
  },
  {
    id: "asian-appetizers",
    label: "Asian Appetizers",
    emoji: "🥟",
    items: [
      { name: "Shanghai Paneer (J)", desc: "Crispy paneer tossed in a bold Shanghai-style sauce with peppers, garlic, and chilli", price: "₹369", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Korean Braised Cottage Cheese (J)", desc: "Oven-baked cottage cheese coated in a smoky Korean chilli glaze, offering a juicy & spicy flavour", price: "₹399", image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Vegetable Manchurian (J)", desc: "Crispy vegetable dumplings tossed in a rich, spicy Indo-Chinese gravy", price: "₹259", image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Crispy Lotus Sambal Oelek (J)", desc: "Crispy lotus stem tossed in a fiery sambal oelek glaze, delivering a bold, crunchy, and irresistibly spicy", price: "₹339", image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Vietnamese Summer Roll (J)", desc: "Light, refreshing rice-paper rolls packed with crisp veggies, herbs, and noodles", price: "₹309", image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Stir Fry Asian Greens With Walnut (J)", desc: "A vibrant stir-fry of Asian greens tossed in a light, savoury sauce and topped with toasted walnuts", price: "₹329", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Bangkok Style Crispy Paneer (J)", desc: "Crispy paneer tossed in a vibrant Bangkok-style sweet-spicy sauce with herbs and peppers", price: "₹369", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Edamame Burnt Chilli (J)", desc: "Stir-fried edamame tossed in a smoky burnt-chilli seasoning, delivering a bold, spicy, and addictive kick", price: "₹419", image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
  {
    id: "continental-appetizers",
    label: "Continental Appetizers",
    emoji: "🥗",
    items: [
      { name: "Loaded Nachos (J)", desc: "Layered nachos drenched in cheese, salsa and toppings your ultimate comfort snack", price: "₹419", image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Tadka Hummus With Pita (J)", desc: "Creamy hummus topped with desi tadka, served with warm, soft pita", price: "₹369", image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Mezze Platter (J)", desc: "A vibrant spread of Mediterranean hummus, falafel, pita and lavash perfect for sharing", price: "₹419", image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Korean Cheese Pull Bun", desc: "A soft Korean bun loaded with melted cheese and bold spices", price: "₹369", image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Kurkuri Cheese Cigar (J)", desc: "Crispy golden cigars stuffed with creamy, spiced cheese for the perfect crunchy bite", price: "₹369", image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Cheese Garlic Bread", desc: "Toasty garlic bread topped with melted cheese & herbs", price: "₹329", image: "https://images.pexels.com/photos/1117861/pexels-photo-1117861.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Fries Your Way", desc: "Salted / Peri Peri / Cheesey", price: "₹239 / ₹289 / ₹309", image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    emoji: "🥙",
    items: [
      { name: "Classic Caesar Salad", desc: "A fresh, crunchy salad tossed in creamy Caesar dressing with parmesan and croutons", price: "₹289", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Water Melon & Feta Salad (J)", desc: "A refreshing mix of juicy watermelon, creamy feta, and fresh mint for the perfect summer bite", price: "₹289", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Som Tom Salad (J)", desc: "A fresh and zesty Thai papaya salad tossed with chilli, lime, peanuts, and crunchy veggies", price: "₹289", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
  {
    id: "sushi",
    label: "Sushi",
    emoji: "🍣",
    items: [
      { name: "Tempura Asparagus & Guacamole (J)", desc: "Crispy tempura asparagus rolled with creamy, zesty guacamole, creating a vibrant and crunchy vegetarian sushi", price: "4pcs ₹399 / 8pcs ₹709", image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Edamame Cream Cheese (J)", desc: "A smooth blend of creamy cheese and fresh edamame rolled into delicate sushi for a light, silky, and flavourful bite", price: "4pcs ₹369 / 8pcs ₹679", image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Veg California Roll (J)", desc: "A refreshing vegetarian roll filled with creamy avocado, crisp veggies, and seasoned rice", price: "4pcs ₹369 / 8pcs ₹679", image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Cottage Cheese Tempura & Avocado (J)", desc: "Crispy tempura cottage cheese paired with creamy avocado, rolled into a smooth, flavour-packed sushi", price: "4pcs ₹359 / 8pcs ₹669", image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Spicy Tofu & Roasted Bell Pepper (J)", desc: "A bold vegetarian roll with spicy marinated tofu and smoky roasted bell peppers", price: "4pcs ₹359 / 8pcs ₹669", image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
  {
    id: "cheung-fun",
    label: "Cheung Fun",
    emoji: "🫕",
    items: [
      { name: "Crispy Paneer Cheung Fun (J)", desc: "Soft rice rolls wrapped around crispy paneer and topped with a light soy glaze", price: "₹459", image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Tempura Vegetable Cheung Fun (J)", desc: "Silky rice rolls filled with a vegetable mix, topped with a light soy glaze for a richness & smoothness", price: "₹399", image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Crunchy Asparagus Cheung Fun (J)", desc: "Delicate rice rolls wrapped around crispy tempura asparagus and finished with a light soy glaze", price: "₹529", image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
  {
    id: "asian-rice",
    label: "Asian Rice",
    emoji: "🍱",
    items: [
      { name: "Asian Greens Fried Rice (J)", price: "₹279", image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Burnt Chilli Exotic Fried Rice (J)", price: "₹289", image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Thai Pad Krapow Rice", desc: "Fragrant jasmine rice tossed with spicy Thai basil, garlic and chillies", price: "₹309", image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Korean Kimchi Bokkeumbap (J)", desc: "A spicy, tangy Korean fried rice tossed with kimchi, veggies and aromatics", price: "₹329", image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Pot Rice (J)", desc: "A slow-cooked, aromatic pot of rice loaded with fresh veggies, savoury seasonings, and deep layered flavours", price: "₹369", image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Nasi Goreng", desc: "A bold Indonesian-style fried rice tossed with chillies, garlic, veggies, and signature spices", price: "₹419", image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
  {
    id: "noodles",
    label: "Noodles",
    emoji: "🍜",
    items: [
      { name: "Wok Toss Hakka Noodles (J)", price: "₹269", image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Exotic Burnt Chilli Noodle (J)", price: "₹289", image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Korean Kimchi Noodle (J)", desc: "Chewy noodles tossed in a spicy, tangy kimchi sauce with veggies and aromatics", price: "₹339", image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Asian Chilli Basil Noodle (J)", price: "₹269", image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Phad Thai Noodle (J)", desc: "Classic Thai-style rice noodles stir-fried with tamarind, chilli, vegetables, and crushed peanuts", price: "₹319", image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Stir Fry Yaki Soba Noodle (J)", desc: "Japanese-style stir-fried soba noodles tossed with veggies, soy, and aromatics", price: "₹299", image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Black Pepper Udon Noodle (J)", desc: "Thick, chewy udon noodles stir-fried with vegetables in a bold, aromatic black-pepper sauce", price: "₹319", image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Chow Fun (J)", desc: "Stir-fried flat rice noodles tossed with tender tofu, veggies, and a smoky soy-based sauce", price: "₹329", image: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
  {
    id: "pan-asian-gravy",
    label: "Pan Asian Gravy",
    emoji: "🥘",
    items: [
      { name: "Hot Garlic Sauce", desc: "A bold, spicy Indo-Chinese sauce bursting with garlic, chillies, and tangy flavours", price: "Paneer ₹369 / Veg ₹329", image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Spicy Black Bean Sauce (J)", desc: "A rich and savoury Asian sauce made with fermented black beans, chilli, and garlic", price: "Paneer ₹369 / Veg ₹329", image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Mapo Paneer (J)", desc: "Soft tofu simmered in a bold, spicy Sichuan-style chilli and bean sauce", price: "₹369", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Asian Chilli Basil Sauce (J)", desc: "A fragrant, fiery sauce made with fresh chillies, garlic, and Thai basil", price: "Paneer ₹369 / Veg ₹329", image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Hunan Diced (J)", desc: "A bold, spicy Hunan-style gravy made with chillies, garlic, and savoury aromatics", price: "Paneer ₹369 / Veg ₹329", image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Ginger Soy Sauce", desc: "A light, aromatic sauce made with fresh ginger and soy, delivering a warm, savoury flavour", price: "Paneer ₹359 / Veg ₹319", image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Thai Curry With Jasmin Rice Red/Green (J)", price: "₹419", image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    emoji: "🍝",
    items: [
      { name: "Mama Rosa (J)", desc: "A smooth, creamy pink sauce blending tomatoes and cream for a rich, comforting flavour", price: "₹399", image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Alla Puttanesca (J)", desc: "A bold Italian sauce with tangy tomatoes, olives, capers, and garlic for a punchy, vibrant flavour", price: "₹399", image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Basil Pesto (J)", desc: "A fragrant blend of fresh basil, garlic, olive oil, and parmesan for a rich, herby flavour", price: "₹419", image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Alfredo Primavera (J)", desc: "A creamy Alfredo sauce brightened with fresh, seasonal veggies for a light yet indulgent flavour", price: "₹399", image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Spaghetti Aglio Olio", desc: "A classic Italian spaghetti tossed in olive oil, garlic, herbs, and a touch of chilli", price: "₹369", image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Truffle Mac & Cheese (J)", desc: "A baked creamy mac and cheese infused with aromatic truffle for rich, indulgent flavour", price: "₹419", image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
  {
    id: "pizza-pide",
    label: "Pizza & Pide",
    emoji: "🍕",
    items: [
      { name: "Classic Margherita Pizza (J)", price: "₹419", image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Farm Fresh Pizza (J)", desc: "A vibrant pizza loaded with fresh bell peppers, sweet corns, jalapeno, melted cheese, and wholesome farm-fresh flavours", price: "₹469", image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Greek Goddess Pizza (J)", desc: "A Mediterranean-inspired pizza topped with olives, peppers, zuchini for a divine flavour", price: "₹559", image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Juicy Shrooms & Fungi", desc: "A rich, earthy pizza loaded with flavoured juicy mushrooms, and gooey melted cheese", price: "₹509", image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Absolute Pesto (J)", desc: "A fragrant pesto-brushed pizza topped with fresh bell peppers, olive, broccoli, jalapeno and creamy melted cheese", price: "₹509", image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Ciel's Special Calzone (J)", desc: "A stuffed pizza pocket filled with veggies, cheese, and bold Italian flavours", price: "₹479", image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Tandoori Paneer Pizza (J)", price: "₹539", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Spiced Veg & Peri Peri Paneer Pide (J)", price: "₹399", image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Cheese & Zataar Pide (J)", price: "₹359", image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Mushroom Spinach Turkish Pide", desc: "A boat-shaped Turkish flatbread loaded with sautéed mushrooms, spinach, tomato and melted cheese", price: "₹399", image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    emoji: "🫙",
    items: [
      { name: "Roasted / Fried Papad", price: "₹99", image: "https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Masala Papad", price: "₹149", image: "https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Khichiya Papad", price: "₹159", image: "https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Masala Khichiya Papad", price: "₹209", image: "https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Chaas / Lassi", price: "₹159 / ₹209", image: "https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Raita", price: "₹159", image: "https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=500" },
    ],
  },
];

const styles = `
  * { box-sizing: border-box; }

  .ciel-wrap {
    background: #F5EFE7;
    min-height: 100vh;
    font-family: 'Bricolage Grotesque', sans-serif;
    color: #1E3A5F;
  }

  .ciel-hero {
    position: relative;
    background: #F5EFE7;
    text-align: center;
    padding: 80px 24px 60px;
    border-bottom: 1px solid rgba(30, 58, 95, 0.15);
    overflow: hidden;
  }

  .ciel-star-line {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 20px;
  }

  .ciel-line {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #C9A571);
  }

  .ciel-line.right {
    background: linear-gradient(90deg, #C9A571, transparent);
  }

  .ciel-diamond {
    width: 6px; height: 6px;
    background: #C9A571;
    transform: rotate(45deg);
  }

  .ciel-subtitle {
    font-size: 11px;
    letter-spacing: 4px;
    color: #C9A571;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .ciel-title {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: clamp(52px, 8vw, 96px);
    font-weight: 300;
    color: #1E3A5F;
    line-height: 1;
    letter-spacing: -1px;
    margin-bottom: 16px;
  }

  .ciel-tagline {
    font-size: 13px;
    letter-spacing: 2px;
    color: #6B5E4F;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .ciel-badge {
    display: inline-block;
    border: 1px solid #C9A571;
    color: #1E3A5F;
    background: white;
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding: 6px 20px;
    margin-top: 16px;
  }

  .ciel-nav-wrap {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(245, 239, 231, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(30, 58, 95, 0.15);
    padding: 0 16px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .ciel-nav-wrap::-webkit-scrollbar { display: none; }

  .ciel-nav {
    display: flex;
    gap: 0;
    min-width: max-content;
    margin: 0 auto;
    max-width: 1200px;
    align-items: center;
  }

  .ciel-back-btn {
    background: none;
    border: none;
    color: #1E3A5F;
    margin-right: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Bricolage Grotesque', sans-serif;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 2px;
    transition: color 0.3s;
  }
  .ciel-back-btn:hover { color: #C9A571; }

  .ciel-nav-btn {
    background: none;
    border: none;
    color: rgba(30, 58, 95, 0.6);
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 18px 16px;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    transition: color 0.3s;
  }

  .ciel-nav-btn::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: #C9A571;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  .ciel-nav-btn:hover { color: #1E3A5F; }
  .ciel-nav-btn.active { color: #1E3A5F; }
  .ciel-nav-btn.active::after { transform: scaleX(1); }

  .ciel-body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 80px;
  }

  .ciel-section {
    padding-top: 72px;
  }

  .ciel-section-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
  }

  .ciel-section-label {
    font-size: 10px;
    letter-spacing: 4px;
    color: #C9A571;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .ciel-section-title {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 300;
    color: #1E3A5F;
    line-height: 1;
    white-space: nowrap;
  }

  .ciel-divider {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #C9A571, transparent);
  }

  .ciel-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px;
    padding: 10px;
  }

  .ciel-card {
    background: white;
    border: 1px solid rgba(30, 58, 95, 0.1);
    box-shadow: 4px 4px 0px rgba(30, 58, 95, 0.1);
    overflow: hidden;
    cursor: default;
    transition: transform 0.35s, box-shadow 0.3s;
    position: relative;
    border-radius: 0;
  }

  .ciel-card:hover {
    transform: translateY(-4px) translate-x(-2px);
    box-shadow: 6px 6px 0px rgba(30, 58, 95, 0.15);
  }

  .ciel-card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  .ciel-card:hover .ciel-card-img {
    transform: scale(1.06);
  }

  .ciel-card-img-wrap {
    overflow: hidden;
    position: relative;
  }

  .ciel-card-body {
    padding: 18px 20px 20px;
  }

  .ciel-card-name {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #1E3A5F;
    margin-bottom: 6px;
    line-height: 1.25;
  }

  .ciel-card-desc {
    font-size: 12px;
    color: #6B5E4F;
    line-height: 1.6;
    margin-bottom: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .ciel-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(30, 58, 95, 0.1);
    padding-top: 12px;
  }

  .ciel-price {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #1E3A5F;
    letter-spacing: 0.5px;
  }

  .ciel-j-badge {
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #1E3A5F;
    background: rgba(201, 165, 113, 0.15);
    border: 1px solid #C9A571;
    padding: 2px 8px;
  }

  .ciel-footer {
    text-align: center;
    padding: 48px 24px;
    border-top: 1px solid rgba(30, 58, 95, 0.15);
  }

  .ciel-footer-title {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 36px;
    font-weight: 300;
    color: #1E3A5F;
    margin-bottom: 8px;
  }

  .ciel-footer-sub {
    font-size: 12px;
    letter-spacing: 2px;
    color: #6B5E4F;
    text-transform: uppercase;
  }

  .fade-in {
    animation: fadeIn 0.5s ease both;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .ciel-all-grid {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
`;

export default function MenuPage({ onClose }: { onClose?: () => void }) {
  const [activeId, setActiveId] = useState("all");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const displayedCategories =
    activeId === "all" ? menuData : menuData.filter((c) => c.id === activeId);

  const scrollToSection = (id: string) => {
    setActiveId(id);
    if (id !== "all" && sectionRefs.current[id]) {
      sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="ciel-wrap">
        {/* HERO */}
        <div className="ciel-hero">
          <div className="ciel-subtitle">Pure Vegetarian · Andheri East · Mumbai</div>
          <div className="ciel-star-line">
            <div className="ciel-line" />
            <div className="ciel-diamond" />
            <div className="ciel-line right" />
          </div>
          <div className="ciel-title">CiEL</div>
          <div className="ciel-tagline">Where Every Dish Tells a Story</div>
          <div className="ciel-badge">Full Menu</div>
        </div>

        {/* STICKY NAV */}
        <div className="ciel-nav-wrap">
          <div className="ciel-nav">
            {onClose && (
              <button className="ciel-back-btn" onClick={onClose}>
                <ArrowLeft size={16} /> Back
              </button>
            )}
            <button
              className={`ciel-nav-btn${activeId === "all" ? " active" : ""}`}
              onClick={() => scrollToSection("all")}
            >
              All
            </button>
            {menuData.map((cat) => (
              <button
                key={cat.id}
                className={`ciel-nav-btn${activeId === cat.id ? " active" : ""}`}
                onClick={() => scrollToSection(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* MENU BODY */}
        <div className="ciel-body">
          <div className="ciel-all-grid">
            {displayedCategories.map((cat, ci) => (
              <div
                key={cat.id}
                className="ciel-section"
                ref={(el) => (sectionRefs.current[cat.id] = el)}
              >
                {/* Section Header */}
                <div className="ciel-section-header">
                  <div>
                    <div className="ciel-section-label">{cat.emoji} &nbsp; Category</div>
                    <div className="ciel-section-title">{cat.label}</div>
                  </div>
                  <div className="ciel-divider" />
                </div>

                {/* Cards Grid */}
                <div className="ciel-grid">
                  {cat.items.map((item, i) => (
                    <div
                      key={item.name}
                      className="ciel-card fade-in"
                      style={{ animationDelay: `${i * 0.06}s` }}
                    >
                      <div className="ciel-card-img-wrap">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="ciel-card-img"
                          loading="lazy"
                        />
                      </div>
                      <div className="ciel-card-body">
                        <div className="ciel-card-name">{item.name}</div>
                        {item.desc && (
                          <div className="ciel-card-desc">{item.desc}</div>
                        )}
                        <div className="ciel-card-footer">
                          <div className="ciel-price">{item.price}</div>
                          {item.name.includes("(J)") && (
                            <div className="ciel-j-badge">Jain</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="ciel-footer">
          <div className="ciel-star-line" style={{ marginBottom: 16 }}>
            <div className="ciel-line" />
            <div className="ciel-diamond" />
            <div className="ciel-line right" />
          </div>
          <div className="ciel-footer-title">CiEL Pure Veg</div>
          <div className="ciel-footer-sub">45, Teli Gali · Andheri East · Mumbai · +91 98194 33999</div>
        </div>
      </div>
    </>
  );
}