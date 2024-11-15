const sampleListings = [
  {
    title: "Cozy Cottage in the Mountains",
    description:
      "A peaceful retreat in the heart of the mountains with stunning views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 120,
    location: "Rocky Mountains, Colorado",
    country: "USA",
  },
  {
    title: "Modern Apartment in the City Center",
    description:
      "A stylish apartment located in the bustling city center, close to all amenities.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 150,
    location: "New York City, New York",
    country: "USA",
  },
  {
    title: "Beachfront Villa with Private Pool",
    description:
      "Luxurious villa right on the beach with a private pool and ocean views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1686782502813-51579b55f6d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHww",
    },
    price: 350,
    location: "Malibu, California",
    country: "USA",
  },
  {
    title: "Charming House in the Countryside",
    description:
      "Experience the calm of the countryside in this charming, spacious house.",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/architectural-photography-of-concrete-building-WYLuNY5JG4E",
    },
    price: 100,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Cabin in the Woods",
    description:
      "Secluded cabin surrounded by nature, perfect for a quiet getaway.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1686782502813-51579b55f6d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHww",
    },
    price: 80,
    location: "Yosemite National Park, California",
    country: "USA",
  },
  {
    title: "Luxury Loft in Downtown LA",
    description:
      "A modern and spacious loft in the heart of downtown Los Angeles.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 200,
    location: "Los Angeles, California",
    country: "USA",
  },
  {
    title: "Rustic Farmhouse",
    description:
      "A traditional farmhouse in the rural countryside with plenty of space.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 110,
    location: "Normandy",
    country: "France",
  },
  {
    title: "Penthouse with Panoramic Views",
    description: "A luxurious penthouse with stunning panoramic city views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 400,
    location: "London",
    country: "UK",
  },
  {
    title: "Treehouse in the Forest",
    description: "An enchanting treehouse experience surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D",
    },
    price: 95,
    location: "Pacific Northwest",
    country: "USA",
  },
  {
    title: "Seaside Cottage",
    description:
      "A charming cottage located right by the sea, ideal for a relaxing vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D",
    },
    price: 130,
    location: "Cornwall",
    country: "UK",
  },
  {
    title: "Mountain Chalet with Ski Access",
    description:
      "Chalet located near ski slopes, perfect for winter sports enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHx8MHx8fDA%3D",
    },
    price: 275,
    location: "Aspen, Colorado",
    country: "USA",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty in this historic castle with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHx8MHx8fDA%3D",
    },
    price: 500,
    location: "Edinburgh",
    country: "Scotland",
  },
];

//   export default sampleListings;
module.exports = { data: sampleListings };
// module.exports = sampleListings;
