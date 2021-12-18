const adventureData = [
  {
    id: 1,
    excursionTitle: 'Resivoir Kayak Tour',
    excursionDescription: 'Enjoy kayaking on a smooth resivor. No motorized boats are allowed here. Great for beginners.',
    rating: 5,
    reviews: 3,
    cost: 50,
    image: '../../assets/kayak-excursion-1.jpg'
  },
  {
    id: 4,
    excursionTitle: 'Cave Kayaking',
    excursionDescription: 'Want the ultimate adventure? Kayak through caves in this expert guided tour.',
    rating: 5,
    reviews: 3,
    cost: 250,
    image: '../../assets/kayak-excursion-4.jpg'
  },
  {
    id: 5,
    excursionTitle: 'Sunset Kayaking',
    excursionDescription: 'Enjoy a beautiful sunset from a kayak. With dinner provided, it doesn\'t get much better than this. All levels welcome.',
    rating: 5,
    reviews: 3,
    cost: 100,
    image: '../../assets/kayak-excursion-5.jpg'
  },
  {
    id: 2,
    excursionTitle: 'Mountain Lake Tour',
    excursionDescription: 'Take a scenic float surrounded by mountains.',
    rating: 5,
    reviews: 3,
    cost: 75,
    image: '../../assets/kayak-excursion-2.jpg'
  },
  {
    id: 3,
    excursionTitle: 'Camp and Kayak',
    excursionDescription: 'Feeling adventurous? Join us on a three day kayak trip.',
    rating: 5,
    reviews: 3,
    cost: 500,
    image: '../../assets/kayak-excursion-3.jpg'
  },
  {
    excursionTitle: 'Ocean Kayaking',
    excursionDescription: 'Includes flight to a tropical location and lodging for 3 days and two nights of beach kayaking.',
    rating: 5,
    reviews: 3,
    cost: 3000,
    image: '../../assets/kayak-excursion-6.jpg'
  },
  {
    excursionTitle: 'Family Kayak Tour',
    excursionDescription: 'Bring the whole family along for this easy and relaxing river kayak day trip. Includes trip for a family of 4.',
    rating: 5,
    reviews: 3,
    cost: 1500,
    image: '../../assets/kayak-excursion-7.jpg'
  },
  {
    excursionTitle: 'Extreme Kayaking',
    excursionDescription: 'Take on the highest level rapids on this extreme adventure. Test required to participate.',
    rating: 5,
    reviews: 3,
    cost: 500,
    image: '../../assets/kayak-excursion-8.jpg'
  }
];

populateAdventures();
setActiveLink();

function populateAdventures() {
  const adventureSection = document.getElementById("adventure");
  console.log(adventureSection)

  adventureData.forEach(item => {
    let card = document.createElement('div');
    card.className = 'excursion-card';

    buildImageTag(card, item.image);

    let excursionContent = document.createElement('div');
    excursionContent.className = 'excursion-content';
    buildTitleTag(excursionContent, item.excursionTitle);
    buildRatings(excursionContent, item.reviews);
    buildDescription(excursionContent, item.excursionDescription);
    buildActions(excursionContent, item.cost, item.excursionTitle);

    card.appendChild(excursionContent);
    adventureSection.appendChild(card);
  });

}

function buildImageTag(card, imageSource) {
  let image = document.createElement('img');
  image.width = 300;
  image.src = imageSource;
  card.appendChild(image);
}

function buildTitleTag(contentTag, title) {
  titleTag = document.createElement('div');
  titleTag.className = 'excursion-title';
  titleTag.innerHTML = title;
  contentTag.appendChild(titleTag);
}

function buildRatings(contentTag, reviewData) {
  let rating = document.createElement('div');
  rating.className = 'rating-flex';

  buildStar(rating);
  buildStar(rating);
  buildStar(rating);
  buildStar(rating);
  buildStar(rating);

  let reviews = document.createElement('div');
  reviews.className = 'reviews';
  reviews.innerHTML = `${reviewData} Reviews`;
  rating.appendChild(reviews);
  contentTag.appendChild(rating);
}

function buildStar(rating) {
  let star = document.createElement('i');
  star.className = 'fas fa-star stars';
  rating.appendChild(star);
}

function buildDescription(contentTag, descriptionData) {
  const description = document.createElement('div');
  description.className = 'description';
  description.innerHTML = descriptionData;
  contentTag.appendChild(description);
}

function buildActions(contentTag, amount, title) {
  let actions = document.createElement('div');
  actions.className = 'actions-flex';

  let button = document.createElement('button');
  button.className = 'view-tour-btn';
  button.innerHTML = 'VIEW TOUR';
  openDialog(title, button);
  actions.appendChild(button);

  let cost = document.createElement('div');
  cost.className = 'price';
  cost.innerHTML = `$${amount} USD`;
  actions.appendChild(cost);

  contentTag.appendChild(actions);
}

// Modal
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

function openDialog(title, button) {
  button.addEventListener('click', () => {
    modal.style.display = "block";
    const test = document.getElementById('modal-title');
    test.innerHTML = title;
  });
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Set Active Link
function setActiveLink() {
  var links = document.getElementsByClassName("nav-link");
  console.log(links.length)
  for (var i = 0; i < links.length; i++) {
    console.log(links[i])
    if (links[i].innerHTML === 'Adventures') {
      links[i].style = "text-decoration: underline";
    }
  }
}
