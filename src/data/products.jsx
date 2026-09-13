// const Products = [
//   {
//     id: 1,
//     name: "Classic Sneakers",
//     price: 45000,
//     category: "Shoes",
//     image: "https://via.placeholder.com/300"
//   },
//   {
//     id: 2,
//     name: "Premium Wristwatch",
//     price: 75000,
//     category: "Accessories",
//     image: "https://via.placeholder.com/300"
//   },
//   {
//     id: 3,
//     name: "Wireless Headphones",
//     price: 60000,
//     category: "Electronics",
//     image: "https://via.placeholder.com/300"
//   },
//   {
//     id: 4,
//     name: "Smartphone",
//     price: 350000,
//     category: "Electronics",
//     image: "https://via.placeholder.com/300"
//   },
//   {
//     id: 5,
//     name: "Dell Desktop",
//     price: 470000,
//     category: "Computer",
//     image: "https://via.placeholder.com/300"
//   },
//   {
//     id: 6,
//     name: "Washing Machine",
//     price: 350000,
//     category: "Electronics",
//     image: "https://via.placeholder.com/300"
//   }
// ];

const Products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    category: "Gaming",
    brand: "HAVIT",
    stock: 20,
    discount: "-40%",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=500&q=80",
    description:
      "The HAVIT HV-G92 Gamepad is a high-performance gaming controller designed for an immersive gaming experience. With its ergonomic design, responsive buttons, and customizable features, it provides precise control and comfort during long gaming sessions. Compatible with multiple platforms, this gamepad is perfect for both casual and competitive gamers.",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    brand: "AK",
    stock: 10,
    discount: "-35%",
    rating: 4,
    category: "Computers",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80",
    description:
      "The AK-900 Wired Keyboard is a premium gaming keyboard designed for an immersive gaming experience. With its mechanical switches, customizable RGB lighting, and durable build, it provides precise keystrokes and a satisfying typing experience. Perfect for both casual and competitive gamers.", 
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    brand: "IPS",
    stock: 9,
    discount: "-30%",
    rating: 5,
    reviews: 99,
    category: "Computers",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80",
    description:
      "The IPS LCD Gaming Monitor is a high-performance display designed for an immersive gaming experience. With its fast response time, wide viewing angle, and vibrant colors, it provides a clear and detailed image for both casual and competitive gamers.",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    brand: "S-Series",
    stock: 12,
    discount: "-25%",
    rating: 4,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80",
    description:
      "The S-Series Comfort Chair is a ergonomic seating solution designed for maximum comfort and support. With its durable construction and comfortable cushioning, it provides a relaxing seating experience for both home and office use.",
  },
  {
    id: 5,
    name: "S-Series Comfort Chair",
    price: 375,
    brand: "S-Series",
    stock: 15,
    discount: "-25%",
    rating: 4,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=500&q=80",
    description:
      "The S-Series Comfort Chair is a ergonomic seating solution designed for maximum comfort and support. With its durable construction and comfortable cushioning, it provides a relaxing seating experience for both home and office use.",
  },
  {
    id: 6,
    name: "The north coat",
    price: 260,
    brand: "North",
    stock: 15,
    discount: "",
    rating: 5,
    category: "Women's Fashion",
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=500&q=80",
    description:
      "The North Coat is a stylish and warm outerwear option designed for both fashion and functionality. With its durable construction and comfortable fit, it provides excellent protection against the cold while maintaining a sleek appearance.",
  },
  {
    id: 7,
    name: "Gucci duffle bag",
    price: 960,
    brand: "Gucci",
    stock: 15,
    discount: "",
    rating: 4,
    category: "Women's Fashion",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
    description:
      "The Gucci Duffle Bag is a luxury accessory designed for both style and functionality. With its premium materials and distinctive design, it provides ample storage for your essentials while making a statement.",
  },
  {
    id: 8,
    name: "RGB liquid CPU Cooler",
    price: 160,
    brand: "Cooler Master",
    stock: 15,
    discount: "",
    rating: 4,
    category: "Computers",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=500&q=80",
    description:
      "The RGB Liquid CPU Cooler is a high-performance cooling solution designed for gaming enthusiasts. With its efficient heat dissipation and customizable RGB lighting, it ensures optimal performance and a visually striking setup.",
  },
  {
    id: 9,
    name: "Small BookShelf",
    price: 360,
   brand: "Home Essentials",
    stock: 15,
    discount: "",
    rating: 5,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=500&q=80",
    description:
      "The Small BookShelf is a compact and stylish storage solution designed for both functionality and aesthetics. With its durable construction and versatile design, it provides ample space for your books and decorative items while complementing any room's decor.",
  },
  {
    id: 10,
    name: "Breed Dry Dog Food",
    price: 100,
    brand: "Breed",
    stock: 15,
    oldPrice: null,
    discount: "",
    rating: 4,
    category: "Groceries & Pets",
    image:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=500&q=80",
    description:
      "The Breed Dry Dog Food is a high-quality nutrition solution designed for your canine companion. With its balanced ingredients and delicious taste, it supports your dog's overall health and well-being.",
  },
  {
    id: 11,
    name: "CANON EOS DSLR Camera",
    price: 360,
    brand: "CANON",
    stock: 15,
    discount: "",
    rating: 4,
    category: "Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
    description:
      "The CANON EOS DSLR Camera is a professional-grade imaging device designed for photographers who demand exceptional quality and performance. With its advanced sensor and versatile lens system, it delivers stunning images in various lighting conditions.",
  },
  {
    id: 12,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    brand: "ASUS",
    stock: 15,
    discount: "",
    rating: 5,
    category: "Computers",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
    description:
      "The ASUS FHD Gaming Laptop is a high-performance computing device designed for gamers who demand exceptional performance and visual quality. With its powerful processor and dedicated graphics card, it delivers smooth gameplay and immersive visuals.",
  },
  {
    id: 13,
    name: "Curology Product Set",
    price: 500,
    brand: "Curology",
    stock: 15,
    discount: "",
    rating: 5,
    category: "Health & Beauty",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80",
    description:
      "The Curology Product Set is a comprehensive skincare solution designed to address various skin concerns. With its carefully formulated ingredients and gentle approach, it helps improve the appearance and health of your skin.",
  },
  {
    id: 14,
    name: "Kids Electric Car",
    price: 960,
    brand: "Vibespark",
    stock: 15,
    discount: "-10%",
    rating: 5,
    category: "Baby's & Toys",
    image:
      "https://images.https://i5.walmartimages.com/seo/VIBESPARK-24-Volt-Kids-Ride-Toys-2-Seater-4WD-Ride-Cars-Remote-Control-7AH-Battery-Powered-Ride-Electric-Truck-Car-Power-Car-Wheels-W-Bluetooth-Music_3771468d-f146-4447-8954-330b2faec941.dd92652daed2ff1ab6ac3727f9962b85.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFFunsplash.com/photo-1594784055418-4c7a5b9fba9e?auto=format&fit=crop&w=500&q=80",
    description:
      "The Kids Electric Car is a fun and engaging toy designed for children who love to play and explore. With its realistic design and smooth operation, it provides hours of entertainment while helping to develop motor skills.",
  },
  {
    id: 15,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    brand: "Zoom",
    stock: 15,
    discount: "",
    rating: 5,
    category: "Sports & Outdoor",
    image:
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=500&q=80",
    description:
      "The Jr. Zoom Soccer Cleats are designed for young athletes who want to perform at their best on the field. With their durable construction and comfortable fit, they provide the support and traction needed for optimal gameplay.",
  },
  {
    id: 16,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    brand: "GP11",
    stock: 15,
    discount: "-15%",
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1592840496694-26c035b52b754?auto=format&fit=crop&w=500&q=80",
    description:
      "The GP11 Shooter USB Gamepad is a high-performance gaming controller designed for immersive gameplay. With its responsive buttons and ergonomic design, it provides precise control and a comfortable grip during extended gaming sessions.",
  },
  {
    id: 17,
    name: "Quilted Satin Jacket",
    price: 660,
    category: "Men's Fashion",
    brand: "SatinWear",
    stock: 15,
    discount: "",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
    description:
      "The Quilted Satin Jacket is a stylish and comfortable outerwear option designed for everyday wear. With its soft texture and elegant design, it provides warmth and sophistication for any occasion.",
  },
];

export default Products;
