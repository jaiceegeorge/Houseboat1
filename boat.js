const roomTypes = [
  {
    name: "Deluxe Room",
    price: "₹11,000.00 + GST",
    image: "https://irisholidays.com/keralatourism/wp-content/uploads/2018/02/kerala-backwater-cruise-bedroom-houseboat.jpg"
  },
  {
    name: "Premium Room",
    price: "₹15,000.00 + GST",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9tXGh-TmWoBXbc2bgF8elKNEzrFNiKPkGA&s"
  },
  {
    name: "Luxury Room",
    price: "₹22,000.00 + GST",
    image: "https://irisholidays.com/keralatourism/wp-content/uploads/2018/02/kerala-houseboat-backwaters-bedroom.jpg"
  },
  {
    name: "Ultra Luxury Room",
    price: "₹30,000.00 + GST",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SLVOlhzlX4iC1PKcBrDqAtOxBm_TLqNsRw&s"
  }
];

const bedroomTypes = [
  {
    name: "1 Bedroom",
    image: "https://lakequeenhouseboats.com/wp-content/uploads/2024/11/1-Bed-Room-Deluxe-Houseboat-2-scaled-1-768x512.webp"
  },
  {
    name: "2 Bedroom",
    image: "https://alleppeyhouseboat.in/wp-content/uploads/2019/02/doubledeck-Copy-1-1024x512.jpg"
  },
  {
    name: "3 Bedroom",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvm0j_3eQtHbkyOFVtIKrMhOi2RVDmhUBpzhrkHzt0IRJbB8yFxI7aNfXz0uUkkqwRnKs&usqp=CAU"
  },
  {
    name: "4 Bedroom",
    image: "https://bookmyhouseboat.in/wp-content/uploads/2023/03/houseboat.jpg"
  },
  {
    name: "5 Bedroom",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7s6hayIZtQHBT2HJTcCErLpnIrlTbsYABw&s"
  }
];

function showCards(sectionId, items, includePrice) {
  const section = document.getElementById(sectionId);
  section.innerHTML = '';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="info">
        <h4>${item.name}</h4>
        ${includePrice ? `<p class="price">Price: ${item.price} / full day</p>` : ''}
      </div>
    `;
    section.appendChild(card);
  });
}

showCards('room-types', roomTypes, true);
showCards('bedroom-types', bedroomTypes, false);
