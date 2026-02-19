import { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "dresses",
    name: "Vestidos",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
  },
  {
    id: "blazers",
    name: "Blazers",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
  },
  {
    id: "casual",
    name: "Casual",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
  },
  {
    id: "evening",
    name: "Noche",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
  },
  {
    id: "essentials",
    name: "Esenciales",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
  },
];

export const products: Product[] = [
  // Vestidos
  {
    id: "1",
    name: "Vestido Midi de Seda",
    price: 298,
    category: "dresses",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80",
    ],
    description: "Elegante vestido midi de seda con una silueta atemporal. Perfecto tanto para ocasiones de día como de noche. Confeccionado en seda premium con una caída fluida.",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "2",
    name: "Vestido de Noche Negro",
    price: 485,
    category: "evening",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1200&q=80",
    ],
    description: "Impresionante vestido de noche negro con detalles sofisticados. Cuenta con corsé ajustado y falda fluida para una silueta dramática.",
    sizes: ["XS", "S", "M", "L"],
    featured: true,
  },
  {
    id: "3",
    name: "Vestido Cruzado de Lino",
    price: 245,
    category: "dresses",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
    ],
    description: "Vestido cruzado de lino transpirable en corte relajado. Perfecto para clima cálido con su tejido natural y corte favorecedor.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  
  // Blazers
  {
    id: "4",
    name: "Blazer de Lana Entallado",
    price: 395,
    category: "blazers",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=1200&q=80",
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=1200&q=80",
    ],
    description: "Blazer clásico entallado en lana premium. Con hombros estructurados y ajuste refinado que funciona de la oficina a la noche.",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "5",
    name: "Blazer Oversize de Lino",
    price: 325,
    category: "blazers",
    images: [
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=1200&q=80",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=1200&q=80",
    ],
    description: "Blazer oversize contemporáneo en lino suave. Estilo sin esfuerzo con una silueta relajada y moderna.",
    sizes: ["XS", "S", "M", "L"],
  },
  
  // Casual
  {
    id: "6",
    name: "Vestido Camiseta de Algodón",
    price: 145,
    category: "casual",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&q=80",
    ],
    description: "Vestido camiseta esencial de algodón con diseño minimalista. Cómodo y versátil para el uso diario.",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "7",
    name: "Pantalones Anchos",
    price: 225,
    category: "casual",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80",
      "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=1200&q=80",
    ],
    description: "Pantalones de pierna ancha fluidos en tejido premium. Elegantes y cómodos con un ajuste moderno y relajado.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  
  // Esenciales
  {
    id: "8",
    name: "Suéter de Cachemira",
    price: 385,
    category: "essentials",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&q=80",
    ],
    description: "Lujoso suéter de cachemira en diseño atemporal. Increíblemente suave con un corte clásico y favorecedor.",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "9",
    name: "Blusa de Seda",
    price: 265,
    category: "essentials",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&q=80",
      "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=1200&q=80",
    ],
    description: "Elegante blusa de seda con detalles refinados. Un esencial de guardarropa que combina hermosamente con todo.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "10",
    name: "Cinturón de Cuero",
    price: 125,
    category: "essentials",
    images: [
      "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=1200&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&q=80",
    ],
    description: "Cinturón de cuero premium con herrajes minimalistas. El toque final para cualquier outfit.",
    sizes: ["XS", "S", "M", "L"],
  },
  
  // Noche
  {
    id: "11",
    name: "Vestido Lencero de Satén",
    price: 325,
    category: "evening",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
    ],
    description: "Lujoso vestido lencero de satén con caída elegante. Perfecto para ocasiones especiales.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "12",
    name: "Vestido Cóctel de Terciopelo",
    price: 395,
    category: "evening",
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1200&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=80",
    ],
    description: "Rico vestido cóctel de terciopelo con corte moderno. Sofisticado y atemporal.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];
