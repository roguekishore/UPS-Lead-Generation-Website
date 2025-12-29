// Product Data for Universal Power Systems
// Based on the provided price list (prices hidden for B2B catalog)

export const productCategories = [
  {
    id: 'generators',
    name: 'Generators (PGS)',
    description: 'Reliable portable generators for home, commercial, and industrial use.',
    hsn: '8502',
    image: 'https://placehold.co/600x400/DC2626/FFFFFF?text=Generators',
  },
  {
    id: 'engines',
    name: 'Engines',
    description: 'High-performance Honda engines for various applications.',
    hsn: '8407',
    image: 'https://placehold.co/600x400/DC2626/FFFFFF?text=Engines',
  },
  {
    id: 'concrete-vibrators',
    name: 'Concrete Vibrators',
    description: 'Professional-grade concrete vibrators for construction needs.',
    hsn: '8479',
    image: 'https://placehold.co/600x400/DC2626/FFFFFF?text=Concrete+Vibrators',
  },
  {
    id: 'water-pumps',
    name: 'Water Pumps',
    description: 'Efficient water pumps for agriculture, construction, and general use.',
    hsn: '8413',
    image: 'https://placehold.co/600x400/DC2626/FFFFFF?text=Water+Pumps',
  },
  {
    id: 'tillers',
    name: 'Tillers',
    description: 'Power tillers for agricultural and gardening applications.',
    hsn: '8432',
    image: 'https://placehold.co/600x400/DC2626/FFFFFF?text=Tillers',
  },
  {
    id: 'brush-cutters',
    name: 'Brush Cutters',
    description: 'Heavy-duty brush cutters for land clearing and maintenance.',
    hsn: '8467',
    image: 'https://placehold.co/600x400/DC2626/FFFFFF?text=Brush+Cutters',
  },
  {
    id: 'lawn-movers',
    name: 'Lawn Movers',
    description: 'Professional lawn movers for residential and commercial landscaping.',
    hsn: '8433',
    image: 'https://placehold.co/600x400/DC2626/FFFFFF?text=Lawn+Movers',
  },
];

export const products = [
  // Generators (PGS) - HSN 8502
  {
    id: 'ep-1000',
    name: 'EP 1000',
    model: 'EP 1000',
    category: 'generators',
    description: 'Compact portable generator ideal for light home use and small appliances.',
    features: ['Portable Design', 'Fuel Efficient', 'Low Noise Operation'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=EP+1000',
    specifications: {
      type: 'Portable Generator',
      brand: 'Honda',
    },
  },
  {
    id: 'ex-2400',
    name: 'EX 2400',
    model: 'EX2400',
    category: 'generators',
    description: 'Reliable generator with enhanced power output for home backup.',
    features: ['High Output', 'Reliable Performance', 'Easy Start'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=EX+2400',
    specifications: {
      type: 'Portable Generator',
      brand: 'Honda',
    },
  },
  {
    id: 'ex-2400s',
    name: 'EX 2400S',
    model: 'EX2400S',
    category: 'generators',
    description: 'Premium silent series generator with superior noise reduction.',
    features: ['Silent Operation', 'Premium Build', 'Extended Runtime'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=EX+2400S',
    specifications: {
      type: 'Silent Generator',
      brand: 'Honda',
    },
  },
  {
    id: 'eu-30i',
    name: 'EU 30i',
    model: 'EU 30i',
    category: 'generators',
    description: 'Inverter generator with pure sine wave output for sensitive electronics.',
    features: ['Inverter Technology', 'Pure Sine Wave', 'Fuel Efficient'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=EU+30i',
    specifications: {
      type: 'Inverter Generator',
      brand: 'Honda',
    },
  },
  {
    id: 'eu-30is',
    name: 'EU 30is',
    model: 'EU 30is',
    category: 'generators',
    description: 'Premium inverter generator with electric start and silent operation.',
    features: ['Electric Start', 'Ultra Silent', 'Premium Quality'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=EU+30is',
    specifications: {
      type: 'Silent Inverter Generator',
      brand: 'Honda',
    },
  },
  {
    id: 'eu-70is',
    name: 'EU 70is',
    model: 'EU 70is',
    category: 'generators',
    description: 'High-capacity inverter generator for commercial and heavy-duty applications.',
    features: ['High Capacity', 'Commercial Grade', 'Advanced Inverter'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=EU+70is',
    specifications: {
      type: 'Commercial Inverter Generator',
      brand: 'Honda',
    },
  },

  // Engines - HSN 8407
  {
    id: 'gx80-dqx',
    name: 'GX80 DQX',
    model: 'GX80 DQX',
    category: 'engines',
    description: 'Compact and reliable engine for small equipment applications.',
    features: ['Compact Design', 'High Durability', 'Easy Maintenance'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=GX80+DQX',
    specifications: {
      type: 'General Purpose Engine',
      brand: 'Honda',
    },
  },
  {
    id: 'gx-160d-qtb',
    name: 'GX 160D QTB',
    model: 'GX 160D QTB',
    category: 'engines',
    description: 'Versatile mid-range engine suitable for pumps and small machinery.',
    features: ['Versatile Application', 'Fuel Efficient', 'Low Emissions'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=GX+160D+QTB',
    specifications: {
      type: 'General Purpose Engine',
      brand: 'Honda',
    },
  },
  {
    id: 'gx-200d-qtb',
    name: 'GX 200D QTB',
    model: 'GX 200 D QTB',
    category: 'engines',
    description: 'Powerful engine for heavy-duty applications and construction equipment.',
    features: ['High Power Output', 'Heavy Duty', 'Long Life'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=GX+200D+QTB',
    specifications: {
      type: 'Heavy Duty Engine',
      brand: 'Honda',
    },
  },

  // Concrete Vibrators - GST 18%
  {
    id: 'cv-40-80',
    name: 'CV 40-80 (GX 80)',
    model: 'CV 40-80',
    category: 'concrete-vibrators',
    description: 'Professional concrete vibrator with GX80 engine for construction sites.',
    features: ['GX80 Engine', 'High Frequency', 'Durable Construction'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=CV+40-80',
    specifications: {
      type: 'Concrete Vibrator',
      engine: 'GX 80',
      brand: 'Honda',
    },
  },
  {
    id: 'cv-60-160',
    name: 'CV 60-160 (GX 160)',
    model: 'CV60-160',
    category: 'concrete-vibrators',
    description: 'Heavy-duty concrete vibrator powered by GX160 engine.',
    features: ['GX160 Engine', 'Heavy Duty', 'Professional Grade'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=CV+60-160',
    specifications: {
      type: 'Concrete Vibrator',
      engine: 'GX 160',
      brand: 'Honda',
    },
  },

  // Water Pumps - HSN 8413
  {
    id: 'wb15x',
    name: 'WB15X',
    model: 'WB15X',
    category: 'water-pumps',
    description: 'Compact water pump ideal for light irrigation and water transfer.',
    features: ['Compact Size', 'Easy to Carry', 'Quick Priming'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=WB15X',
    specifications: {
      type: 'Self-Priming Pump',
      brand: 'Honda',
    },
  },
  {
    id: 'ws-20x',
    name: 'WS 20X',
    model: 'WS 20X',
    category: 'water-pumps',
    description: 'Versatile pump for general water transfer applications.',
    features: ['High Flow Rate', 'Reliable', 'Low Maintenance'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=WS+20X',
    specifications: {
      type: 'Water Pump',
      brand: 'Honda',
    },
  },
  {
    id: 'wb20xd',
    name: 'WB20XD',
    model: 'WB20XD',
    category: 'water-pumps',
    description: 'Medium capacity pump with diesel efficiency for extended use.',
    features: ['Medium Capacity', 'Fuel Efficient', 'Durable'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=WB20XD',
    specifications: {
      type: 'Self-Priming Pump',
      brand: 'Honda',
    },
  },
  {
    id: 'wb30xd',
    name: 'WB30XD',
    model: 'WB30XD',
    category: 'water-pumps',
    description: 'High capacity pump for agriculture and construction dewatering.',
    features: ['High Capacity', 'Heavy Duty Frame', 'Easy Start'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=WB30XD',
    specifications: {
      type: 'High Capacity Pump',
      brand: 'Honda',
    },
  },
  {
    id: 'wb-40xd',
    name: 'WB 40XD',
    model: 'WB 40XD',
    category: 'water-pumps',
    description: 'Industrial grade pump for high-volume water movement.',
    features: ['Industrial Grade', 'Maximum Flow', 'Professional Use'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=WB+40XD',
    specifications: {
      type: 'Industrial Pump',
      brand: 'Honda',
    },
  },

  // Tillers - HSN 8432
  {
    id: 'power-tiller-fj500',
    name: 'Power Tiller FJ500',
    model: 'POWER TILLER FJ500',
    category: 'tillers',
    description: 'Heavy-duty power tiller for large agricultural operations.',
    features: ['Heavy Duty', 'Wide Coverage', 'High Performance'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=FJ500',
    specifications: {
      type: 'Power Tiller',
      brand: 'Honda',
    },
  },
  {
    id: 'power-tiller-f300',
    name: 'Power Tiller F300',
    model: 'POWER TILLER F300',
    category: 'tillers',
    description: 'Compact tiller perfect for small farms and gardens.',
    features: ['Compact', 'Easy to Maneuver', 'Versatile'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=F300',
    specifications: {
      type: 'Mini Tiller',
      brand: 'Honda',
    },
  },
  {
    id: 'power-tiller-fq650dx',
    name: 'Power Tiller FQ 650 DX',
    model: 'POWER TILLER FQ 650 DX',
    category: 'tillers',
    description: 'Premium deluxe tiller with advanced features for professional farming.',
    features: ['Deluxe Model', 'Advanced Features', 'Premium Build'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=FQ+650+DX',
    specifications: {
      type: 'Deluxe Power Tiller',
      brand: 'Honda',
    },
  },

  // Brush Cutters - HSN 8467
  {
    id: 'brush-cutter-435-u2nt',
    name: 'Brush Cutter 435 U2NT',
    model: 'BRUSH CUTTER 435 U2NT',
    category: 'brush-cutters',
    description: 'Lightweight brush cutter for residential and light commercial use.',
    features: ['Lightweight', 'Easy Handling', 'Efficient Cutting'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=435+U2NT',
    specifications: {
      type: 'Brush Cutter',
      brand: 'Honda',
    },
  },
  {
    id: 'brush-cutter-450-u2nt',
    name: 'Brush Cutter 450 U2NT',
    model: 'B. CUTTER 450 U2NT',
    category: 'brush-cutters',
    description: 'Professional brush cutter for heavy vegetation clearing.',
    features: ['Professional Grade', 'High Power', 'Heavy Vegetation'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=450+U2NT',
    specifications: {
      type: 'Professional Brush Cutter',
      brand: 'Honda',
    },
  },

  // Lawn Movers - HSN 8433
  {
    id: 'lawn-mover-196',
    name: 'Lawn Mover 196',
    model: 'LAWN MOVER 196',
    category: 'lawn-movers',
    description: 'Reliable lawn mover for residential lawns and small gardens.',
    features: ['Residential Use', 'Easy Operation', 'Clean Cut'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=Lawn+Mover+196',
    specifications: {
      type: 'Walk-Behind Mower',
      brand: 'Honda',
    },
  },
  {
    id: 'lawn-mover-216',
    name: 'Lawn Mover 216',
    model: 'LAWN MOVER 216',
    category: 'lawn-movers',
    description: 'Premium lawn mover for larger lawns with enhanced cutting width.',
    features: ['Wider Cut', 'Premium Quality', 'Professional Finish'],
    image: 'https://placehold.co/400x300/171717/FFFFFF?text=Lawn+Mover+216',
    specifications: {
      type: 'Premium Walk-Behind Mower',
      brand: 'Honda',
    },
  },
];

// Get products by category
export const getProductsByCategory = (categoryId) => {
  return products.filter((product) => product.category === categoryId);
};

// Get product by ID
export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};

// Get category by ID
export const getCategoryById = (categoryId) => {
  return productCategories.find((category) => category.id === categoryId);
};

// Search products
export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.model.toLowerCase().includes(searchTerm)
  );
};

export default products;
