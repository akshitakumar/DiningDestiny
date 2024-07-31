const resortsAndRestaurants = [
    {
      title: "Taj Mahal Palace",
      imageUrl: "http://example.com/image1.jpg",
      pricePerNight: 15000,
      location: "Mumbai, Maharashtra",
      country: "India"
    },
    {
      title: "Leela Palace Bangalore",
      imageUrl: "http://example.com/image2.jpg",
      pricePerNight: 20000,
      location: "Bangalore, Karnataka",
      country: "India"
    },
    {
      title: "Oberoi Udaivilas",
      imageUrl: "http://example.com/image3.jpg",
      pricePerNight: 25000,
      location: "Udaipur, Rajasthan",
      country: "India"
    },
    {
      title: "The Ritz-Carlton Bangalore",
      imageUrl: "http://example.com/image4.jpg",
      pricePerNight: 22000,
      location: "Bangalore, Karnataka",
      country: "India"
    },
    {
      title: "The Oberoi Amarvilas",
      imageUrl: "http://example.com/image5.jpg",
      pricePerNight: 30000,
      location: "Agra, Uttar Pradesh",
      country: "India"
    },
    {
      title: "ITC Grand Chola",
      imageUrl: "http://example.com/image6.jpg",
      pricePerNight: 18000,
      location: "Chennai, Tamil Nadu",
      country: "India"
    },
    {
      title: "JW Marriott Juhu",
      imageUrl: "http://example.com/image7.jpg",
      pricePerNight: 16000,
      location: "Mumbai, Maharashtra",
      country: "India"
    },
    {
      title: "The Lalit New Delhi",
      imageUrl: "http://example.com/image8.jpg",
      pricePerNight: 14000,
      location: "New Delhi",
      country: "India"
    },
    {
      title: "Umaid Bhawan Palace",
      imageUrl: "http://example.com/image9.jpg",
      pricePerNight: 35000,
      location: "Jodhpur, Rajasthan",
      country: "India"
    },
    {
      title: "The Leela Kovalam",
      imageUrl: "http://example.com/image10.jpg",
      pricePerNight: 17000,
      location: "Kovalam, Kerala",
      country: "India"
    },
    {
      title: "Rambagh Palace",
      imageUrl: "http://example.com/image11.jpg",
      pricePerNight: 30000,
      location: "Jaipur, Rajasthan",
      country: "India"
    },
    {
      title: "Wildflower Hall",
      imageUrl: "http://example.com/image12.jpg",
      pricePerNight: 20000,
      location: "Shimla, Himachal Pradesh",
      country: "India"
    },
    {
      title: "The Taj Mahal Tower",
      imageUrl: "http://example.com/image13.jpg",
      pricePerNight: 18000,
      location: "Mumbai, Maharashtra",
      country: "India"
    },
    {
      title: "Suryagarh Jaisalmer",
      imageUrl: "http://example.com/image14.jpg",
      pricePerNight: 22000,
      location: "Jaisalmer, Rajasthan",
      country: "India"
    },
    {
      title: "The Tamara Coorg",
      imageUrl: "http://example.com/image15.jpg",
      pricePerNight: 16000,
      location: "Coorg, Karnataka",
      country: "India"
    },
    {
      title: "Alila Diwa Goa",
      imageUrl: "http://example.com/image16.jpg",
      pricePerNight: 14000,
      location: "Goa",
      country: "India"
    },
    {
      title: "The Oberoi Grand",
      imageUrl: "http://example.com/image17.jpg",
      pricePerNight: 20000,
      location: "Kolkata, West Bengal",
      country: "India"
    },
    {
      title: "Ananda in the Himalayas",
      imageUrl: "http://example.com/image18.jpg",
      pricePerNight: 25000,
      location: "Rishikesh, Uttarakhand",
      country: "India"
    },
    {
      title: "The Leela Palace Udaipur",
      imageUrl: "http://example.com/image19.jpg",
      pricePerNight: 27000,
      location: "Udaipur, Rajasthan",
      country: "India"
    },
    {
      title: "The Roseate",
      imageUrl: "http://example.com/image20.jpg",
      pricePerNight: 18000,
      location: "New Delhi",
      country: "India"
    },
    {
      title: "Vana",
      imageUrl: "http://example.com/image21.jpg",
      pricePerNight: 24000,
      location: "Dehradun, Uttarakhand",
      country: "India"
    },
    {
      title: "The Imperial New Delhi",
      imageUrl: "http://example.com/image22.jpg",
      pricePerNight: 20000,
      location: "New Delhi",
      country: "India"
    },
    {
      title: "Evolve Back Coorg",
      imageUrl: "http://example.com/image23.jpg",
      pricePerNight: 22000,
      location: "Coorg, Karnataka",
      country: "India"
    },
    {
      title: "Taj Falaknuma Palace",
      imageUrl: "http://example.com/image24.jpg",
      pricePerNight: 32000,
      location: "Hyderabad, Telangana",
      country: "India"
    },
    {
      title: "The Oberoi Vanyavilas",
      imageUrl: "http://example.com/image25.jpg",
      pricePerNight: 27000,
      location: "Ranthambhore, Rajasthan",
      country: "India"
    },
    {
      title: "Amanbagh",
      imageUrl: "http://example.com/image26.jpg",
      pricePerNight: 35000,
      location: "Alwar, Rajasthan",
      country: "India"
    },
    {
      title: "The Oberoi Cecil",
      imageUrl: "http://example.com/image27.jpg",
      pricePerNight: 22000,
      location: "Shimla, Himachal Pradesh",
      country: "India"
    },
    {
      title: "The Tamara Kodai",
      imageUrl: "http://example.com/image28.jpg",
      pricePerNight: 20000,
      location: "Kodaikanal, Tamil Nadu",
      country: "India"
    },
    {
      title: "The Taj Gateway Hotel",
      imageUrl: "http://example.com/image29.jpg",
      pricePerNight: 16000,
      location: "Varanasi, Uttar Pradesh",
      country: "India"
    },
    {
      title: "Neemrana Fort Palace",
      imageUrl: "http://example.com/image30.jpg",
      pricePerNight: 14000,
      location: "Neemrana, Rajasthan",
      country: "India"
    },
    {
      title: "Taj Lake Palace",
      imageUrl: "http://example.com/image31.jpg",
      pricePerNight: 30000,
      location: "Udaipur, Rajasthan",
      country: "India"
    },
    {
      title: "The Oberoi Rajvilas",
      imageUrl: "http://example.com/image32.jpg",
      pricePerNight: 32000,
      location: "Jaipur, Rajasthan",
      country: "India"
    },
    {
      title: "Aman-i-Khas",
      imageUrl: "http://example.com/image33.jpg",
      pricePerNight: 36000,
      location: "Ranthambhore, Rajasthan",
      country: "India"
    },
    {
      title: "The Leela Palace Chennai",
      imageUrl: "http://example.com/image34.jpg",
      pricePerNight: 20000,
      location: "Chennai, Tamil Nadu",
      country: "India"
    },
    {
      title: "The Oberoi Mumbai",
      imageUrl: "http://example.com/image35.jpg",
      pricePerNight: 22000,
      location: "Mumbai, Maharashtra",
      country: "India"
    },
    {
      title: "The Serai Bandipur",
      imageUrl: "http://example.com/image36.jpg",
      pricePerNight: 18000,
      location: "Bandipur, Karnataka",
      country: "India"
    },
    {
      title: "RAAS Jodhpur",
      imageUrl: "http://example.com/image37.jpg",
      pricePerNight: 22000,
      location: "Jodhpur, Rajasthan",
      country: "India"
    },
    {
      title: "Taj Exotica Resort & Spa",
      imageUrl: "http://example.com/image38.jpg",
      pricePerNight: 28000,
      location: "Goa",
      country: "India"
    },
    {
      title: "The Lodhi",
      imageUrl: "http://example.com/image39.jpg",
      pricePerNight: 25000,
      location: "New Delhi",
      country: "India"
    },
    {
      title: "Aahana Resort",
      imageUrl: "http://example.com/image40.jpg",
      pricePerNight: 16000,
      location: "Jim Corbett, Uttarakhand",
      country: "India"
    }
  ];
  
  module.exports = resortsAndRestaurants;
  

  // {
  //   title: "Taj Mahal Palace",
  //   description: "Experience the epitome of luxury at the iconic Taj Mahal Palace in Mumbai, featuring stunning views and world-class amenities.",
  //   image: "https://images.unsplash.com/photo-1717326630872-f9b8b65050a4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   price: 10000,
  //   location: "Mumbai, Maharashtra",
  //   country: "India"
  // },
  // {
  //   title: "Luxury Villa in the Maldives",
  //   description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  //   image: "https://media.istockphoto.com/id/1817987093/photo/over-water-villas-in-the-maldives.webp?b=1&s=170667a&w=0&k=20&c=WKuqdk-aRUKjJdJNu04Ea5ZAhpgykXmFHAviF_tW5pE=",
  //   price: 6000,
  //   location: "Maldives",
  //   country: "Maldives"
  },
  // Other listings
  {
    // title: "Leela Palace Bangalore",
    // description: "Indulge in luxury at Leela Palace Bangalore, offering exquisite rooms, fine dining, and impeccable service in the heart of the city.",
    // image: "https://plus.unsplash.com/premium_photo-1697729603596-90888a05a6bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // price: 12000,
    // location: "Bangalore, Karnataka",
    // country: "India"
  },
  // {
  //   title: "Oberoi Udaivilas",
  //   description: "Stay at the majestic Oberoi Udaivilas in Udaipur, where traditional Rajasthani hospitality meets modern luxury.",
  //   imageUrl: "https://images.unsplash.com/photo-1502191204743-d788bba5dbd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  //   price: 15000,
  //   location: "Udaipur, Rajasthan",
  //   country: "India"
  // },
  // {
  //   title: "The Ritz-Carlton Bangalore",
  //   description: "Discover the ultimate luxury experience at The Ritz-Carlton Bangalore, offering refined accommodations and exceptional service.",
  //   imageUrl: "https://images.unsplash.com/photo-1600969563271-27812226a99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  //   price: 13000,
  //   location: "Bangalore, Karnataka",
  //   country: "India"
  // },
  