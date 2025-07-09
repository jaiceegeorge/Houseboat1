document.addEventListener("DOMContentLoaded", () => {
  const foods = [
    { name: "Tea", image: "https://images.pexels.com/photos/4974543/pexels-photo-4974543.jpeg", price: 15 },
    { name: "Lime Tea", image: "https://images.pexels.com/photos/30757988/pexels-photo-30757988.jpeg", price: 12 },
    { name: "Coffee", image: "https://www.bbassets.com/media/uploads/p/l/40233401_1-fresho-fresh-hot-coffee.jpg", price: 20 },
    { name: "Lime Juice", image: "https://images.pexels.com/photos/32667555/pexels-photo-32667555.jpeg", price: 30 },
    { name: "Kerala Toddy", image: "https://realbharat.org/wp-content/uploads/2017/06/IMG_20170419_173348-e1503429555571.jpg", price: 60 },
    { name: "Omelette", image: "https://images.pexels.com/photos/1437268/pexels-photo-1437268.jpeg", price: 60 },
    { name: "Bread & Jam", image: "https://images.pexels.com/photos/8108194/pexels-photo-8108194.jpeg", price: 40 },
    { name: "Idly", image: "https://srinivasabhavan.com/wp-content/uploads/2024/11/idly-vada.jpg", price: 50 },
    { name: "Dosa", image: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg", price: 50 },
    { name: "Poori Masala", image: "https://www.awesomecuisine.com/wp-content/uploads/2020/03/poori-masala-kizhangu.jpg", price: 60 },
    { name: "Appam &Egg Roast", image: "https://www.recipesaresimple.com/wp-content/uploads/2013/10/appam-egg-roast.jpg", price: 70 },
    { name: "Puttu & Kadala Curry", image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/07/puttu-kadala-curry-recipe.jpg", price: 60 },
    { name: "Appam & Veg Curry", image: "https://i.pinimg.com/564x/b8/dd/da/b8dddacd159a70dd993fcc91c9f154e3.jpg", price: 50 },
    { name: "Kerala Meals Veg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp37Q7Rh4duAJkyLnKFIf9NsY8KAR7dMwVXg", price: 120 },
    { name: "Kerala Meals Non-Veg", image: "https://gogeoholidays.wordpress.com/wp-content/uploads/2017/08/kerala-1.jpg?w=676&h=507", price: 180 },
    { name: "Chicken Roast", image: "https://swatisani.net/kitchen/wp-content/uploads/2015/09/IMG_9051.jpg", price: 180 },
    { name: "Appam(Set of 3)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAI3MebS4Bcg-mR3LG8niJ8lJa1iyYnrZxQ", price: 36 },
    { name: "Paneer Masala", image: "https://www.kitchensanctuary.com/wp-content/uploads/2024/03/Paneer-Curry-square-FS.jpg", price: 150 },
    { name: "Chapathi(Set of 3)", image: "https://static.vegsoc.org/app/uploads/2020/07/chapati-in-basket-scaled-1.jpg", price: 36 },
    { name: "Kottayam Fish Curry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5bv5CUtCfSyCjiwS29HyMoq0FfaCTGxX1A", price: 130 },
    { name: "Veg Fried Rice", image: "https://www.whiskaffair.com/wp-content/uploads/2018/11/Vegetable-Fried-Rice-2-3.jpg", price: 140 },
    { name: "Fried Rice Non-Veg", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCx4Ps3cSHwpPObWOd6ifCQAnoAjc1ff4mXNtzZp2xH4cmgC3LrN1QMthlwebn4cIBxTnD7sKmxcvDXf0Icrkl9YEnM_Nf0YY3vTVpPi5aX2jHZpE7OdNsa6otz3Pn1EoQbLSfyzhiuBL0BGKlvBJ4uVGbKFfGEdUzCIy7kpiWXk6GddI2XlT4_4R95bA/s1280/maxresdefault.jpg", price: 190 },
    { name: "Chicken Biryani", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIycguxFgTpIN3L00tYQhJ2WkypXj5w_QkQ", price: 220 },
    { name: "Fish Biryani", image: "https://www.bigbasket.com/media/uploads/recipe/w-l/1025_1.jpg", price: 190 },
    { name: "Mutton Biryani", image: "https://happietrio.com/wp-content/uploads/2023/10/MuttonBiryani1.jpg", price: 240 },
    { name: "Beef Biryani", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwnSE18JgqmYHIMlmUAcp5G_yMyMkzDWxyQ", price: 220 },
    { name: "Paneer Biryani", image: "https://ministryofcurry.com/wp-content/uploads/2023/10/paneer-biryani_-9.jpg", price: 190 },
    { name: "Kerala Banana Fritters", image: "https://media.assettype.com/gulfnews/import/2021/01/04/Banana-fritters_176cca9d93b_medium.jpg", price: 10 },
    { name: "Uzhunu Vada", image: "https://farm7.static.flickr.com/6155/6175642892_78596580d2_b.jpg", price: 10 },
    { name: "Elayada", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZCVK1uaGya8y6evOmWOcetAq6iF8_WEFZw", price: 20 },
    { name: "Bonda", image: "https://revi.b-cdn.net/wp-content/uploads/2015/12/sweet-bonda-vert.jpg", price: 10 },
    { name: "Unniappam", image: "https://static.toiimg.com/thumb/60083785.cms?imgsize=504454&width=800&height=800", price: 5 }
  ];

  const cardsContainer = document.getElementById("food-cards");
  const itemSelectContainer = document.getElementById("item-select-container");
  const grandTotalDisplay = document.getElementById("grand-total");
  const billSummary = document.getElementById("bill-summary");

  // Render item cards
  foods.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "food-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
    `;
    cardsContainer.appendChild(card);

    // Render form inputs
    const input = document.createElement("div");
    input.innerHTML = `
      <label>
        <input type="checkbox" data-index="${i}" class="item-check" />
        ${item.name} - ₹${item.price}
        Qty: <input type="number" class="qty-input" data-index="${i}" value="1" min="1" style="width:50px;">
      </label>
    `;
    itemSelectContainer.appendChild(input);
  });

  function updateTotal() {
    let total = 0;
    let summaryHtml = "<strong>Selected Items:</strong><ul>";

    document.querySelectorAll(".item-check").forEach((checkbox) => {
      const idx = checkbox.dataset.index;
      const qty = document.querySelector(`.qty-input[data-index="${idx}"]`).value || 1;
      if (checkbox.checked) {
        const itemTotal = foods[idx].price * parseInt(qty);
        summaryHtml += `<li>${foods[idx].name} × ${qty} = ₹${itemTotal}</li>`;
        total += itemTotal;
      }
    });

    summaryHtml += "</ul>";
    billSummary.innerHTML = summaryHtml;
    grandTotalDisplay.textContent = total;
  }

  document.addEventListener("change", updateTotal);
});
