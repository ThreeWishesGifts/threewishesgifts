// Three Wishes Gifts — product catalog
// Synced from https://www.etsy.com/shop/ThreeWishesGiftsShop — prices as listed on Etsy (EUR, before your local tax/currency conversion).

const PRODUCTS = [
  {
    title: "She Said Yes Bridal Shower Invitation Suite, Editable Canva Template Bundle",
    category: "Celebrations & Invites",
    price: 3.39, was: 6.78,
    img: "assets/products/she-said-yes.jpg",
    url: "https://www.etsy.com/listing/4557598126/she-said-yes-bridal-shower-invitation"
  },
  {
    title: "Party Invite Template | Editable Wine Dinner Party Birthday Invitation Canva",
    category: "Celebrations & Invites",
    price: 2.78, was: 5.57,
    img: "assets/products/party-invite-wine.jpg",
    url: "https://www.etsy.com/listing/4561767649/party-invite-template-editable-wine"
  },
  {
    title: "Halloween Kids Party Invitation Bundle | 4 Editable Invites + 4 Printable Coloring Placemats",
    category: "Halloween",
    price: 3.93, was: 7.87,
    img: "assets/products/halloween-party.jpg",
    url: "https://www.etsy.com/listing/4575741529/halloween-kids-party-invitation-bundle-4"
  },
  {
    title: "Gothic Fun Halloween Party Pack for Adults, Editable Invitations, Murder Mystery Game Pack",
    category: "Halloween",
    price: 7.86, was: 15.72,
    img: "assets/products/gothic-halloween-party-pack.jpg",
    url: "https://www.etsy.com/listing/4581991245/gothic-fun-halloween-party-pack-for"
  },
  {
    title: "Cute Halloween Party Bundle for Adults, Editable Invitations & Menu Cards, Party Games",
    category: "Halloween",
    price: 9.67, was: 19.35,
    img: "assets/products/cute-halloween-party-bundle.jpg",
    url: "https://www.etsy.com/listing/4584990719/cute-halloween-party-bundle-for-adults"
  },
  {
    title: "Halloween Glam Girly Wall Art Set of 6, Coquette Witch Vibes, Home Decor Printables",
    category: "Halloween",
    price: 6.04, was: 12.09,
    img: "assets/products/halloween-glam-wall-art.jpg",
    url: "https://www.etsy.com/listing/4582679784/halloween-glam-girly-wall-art-set-of-6"
  },
  {
    title: "Halloween Planner Bumper Bundle, 30 Day Template, Party Invites, Kids Colouring, Bonus Stickers",
    category: "Halloween",
    price: 7.86, was: 15.72,
    img: "assets/products/halloween-bumper-bundle.jpg",
    url: "https://www.etsy.com/listing/4578066312/halloween-planner-bumper-bundle-30-day"
  },
  {
    title: "Halloween Countdown Planner, 30-Day Digital & Print Prep Guide, Costume Decor Candy Party PDF",
    category: "Halloween",
    price: 3.39, was: 6.78,
    img: "assets/products/halloween-countdown-planner.jpg",
    url: "https://www.etsy.com/listing/4572936173/halloween-countdown-planner-30-day"
  },
  {
    title: "Editable Bar Opening Flyer Template, Canva Gastrobar Poster",
    category: "Business & Event Flyers",
    price: 3.02, was: 6.05,
    img: "assets/products/bar-opening-flyer.jpg",
    url: "https://www.etsy.com/listing/4561056352/new-bar-opening-flyer-template-editable"
  },
  {
    title: "Coffee Shop Grand Opening Flyer Template, A5 Canva Poster",
    category: "Business & Event Flyers",
    price: 3.02, was: 6.05,
    img: "assets/products/coffee-shop-flyer.jpg",
    url: "https://www.etsy.com/listing/4561024649/coffee-shop-grand-opening-flyer-template"
  },
  {
    title: "Meal Plan & Grocery List Printable PDF | Aisle-by-Aisle Shopping List, Pantry Inventory",
    category: "Meal Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/meal-plan-grocery-list.png",
    url: "https://www.etsy.com/listing/4572661590/meal-plan-grocery-list-printable-pdf"
  },
  {
    title: "Simple Weekly Meal Planner PDF | 7 Dinners Printable, Grocery List by Aisle",
    category: "Meal Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/seven-dinners.png",
    url: "https://www.etsy.com/listing/4572661074/simple-weekly-meal-planner-pdf-7-dinners"
  },
  {
    title: "Minimalist Meal Plan Printable PDF | Calm Weekly Planner, Grocery List, Pantry & Freezer Log",
    category: "Meal Planners",
    price: 2.90, was: 5.81,
    img: "assets/products/minimalist-meal-plan.png",
    url: "https://www.etsy.com/listing/4572660544/minimalist-meal-plan-printable-pdf-calm"
  },
  {
    title: "Kitchen Meal Planner PDF | Printable Weekly & Monthly Meal Plan, Prep Day Schedule",
    category: "Meal Planners",
    price: 2.90, was: 5.81,
    img: "assets/products/kitchen-meal-planner.png",
    url: "https://www.etsy.com/listing/4572659814/kitchen-meal-planner-pdf-printable"
  },
  {
    title: "UK Student Planner 2026/27, ADHD & Neurodivergent Friendly, GoodNotes iPad PDF",
    category: "Study & School Planners",
    price: 5.75, was: 11.50,
    img: "assets/products/uk-student-planner.jpg",
    url: "https://www.etsy.com/listing/4566019959/uk-student-planner-202627-digital"
  },
  {
    title: "UK Medical School Planner, Undated Digital Study Planner for Med Students Years 1-2",
    category: "Study & School Planners",
    price: 5.75, was: 11.50,
    img: "assets/products/uk-medical-school.jpg",
    url: "https://www.etsy.com/listing/4572735627/uk-medical-school-planner-undated"
  },
  {
    title: "ADHD 2026-2027 Planner for Students, Study Tracker, Focus Homework Planner",
    category: "Study & School Planners",
    price: 5.75, was: 11.50,
    img: "assets/products/adhd-student-planner.jpg",
    url: "https://www.etsy.com/listing/4561162366/adhd-digital-student-planner-2026-2027"
  },
  {
    title: "Focus Tracker for Students, Undated Hyperlinked Digital PDF, 12 Week Focus & Energy Log",
    category: "Study & School Planners",
    price: 6.04, was: 12.09,
    img: "assets/products/focus-tracker.jpg",
    url: "https://www.etsy.com/listing/4565366500/focus-tracker-for-students-undated"
  },
  {
    title: "Student Success Planner 2026 2027, Study System & Habit Tracker, Dated School Planner",
    category: "Study & School Planners",
    price: 5.75, was: 11.50,
    img: "assets/products/student-success-planner.jpg",
    url: "https://www.etsy.com/listing/4561614385/student-success-planner-2026-2027"
  },
  {
    title: "Fall Planner 2026 Digital Hyperlinked, Autumn Journal, Weekly Daily All In One Hub",
    category: "Study & School Planners",
    price: 5.75, was: 11.50,
    img: "assets/products/fall-planner.jpg",
    url: "https://www.etsy.com/listing/4559933797/fall-planner-2026-digital-hyperlinked"
  },
  {
    title: "Self Care Journal for Women, Undated Daily Journal, Brain Dump for Busy Women",
    category: "Journals",
    price: 7.44, was: 14.88,
    img: "assets/products/self-care-journal.jpg",
    url: "https://www.etsy.com/listing/4568921015/self-care-journal-for-women-undated"
  },
  {
    title: "Student Journal, Brain Dump Journal, 30-Day Focus Journal for ADHD",
    category: "Journals",
    price: 5.75, was: 11.50,
    img: "assets/products/student-journal-brain-dump.jpg",
    url: "https://www.etsy.com/listing/4566037170/student-journal-brain-dump-journal-30"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Burnt | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/budget-burnt.jpg",
    url: "https://www.etsy.com/listing/4566612143/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Ledger Red | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/budget-ledger-red.jpg",
    url: "https://www.etsy.com/listing/4566610560/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Purple | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/budget-purple.jpg",
    url: "https://www.etsy.com/listing/4566635876/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Deep Oxide | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/budget-deep-oxide.jpg",
    url: "https://www.etsy.com/listing/4566598257/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Blue and Black | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/budget-blue-black.jpg",
    url: "https://www.etsy.com/listing/4566601941/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Quiet Ink | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/budget-quiet-ink.jpg",
    url: "https://www.etsy.com/listing/4566592533/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Ember | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/budget-ember.jpg",
    url: "https://www.etsy.com/listing/4566631430/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Green | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/budget-green.jpg",
    url: "https://www.etsy.com/listing/4566600127/digital-budget-planner-debt-payoff"
  },
  {
    title: "Digital Budget Planner & Debt Payoff Tracker | Signal | GoodNotes iPad PDF",
    category: "Budget Planners",
    price: 3.39, was: 6.78,
    img: "assets/products/budget-signal.jpg",
    url: "https://www.etsy.com/listing/4566595371/digital-budget-planner-debt-payoff"
  },
  {
    title: "30 Day Puppy & Dog Training Guide, Hyperlinked Digital Planner for GoodNotes Notability",
    category: "Lifestyle Guides",
    price: 3.33, was: 6.66,
    img: "assets/products/puppy-dog-training-guide.jpg",
    url: "https://www.etsy.com/listing/4572947222/30-day-puppy-dog-training-guide-digital"
  },
  {
    title: "Glow Up 30 Day Guide, Hyperlinked Digital Planner for iPad, Skincare Fitness Habit Tracker",
    category: "Lifestyle Guides",
    price: 3.33, was: 6.66,
    img: "assets/products/glow-up-30-day-guide.jpg",
    url: "https://www.etsy.com/listing/4572892007/glow-up-30-day-guide-hyperlinked-digital"
  }
];

const ETSY_SHOP_URL = "https://www.etsy.com/shop/ThreeWishesGiftsShop";

function twProductCardHTML(p) {
  const pct = Math.round((1 - p.price / p.was) * 100);
  return `
    <article class="product-card reveal">
      <a class="product-thumb" href="${p.url}" target="_blank" rel="noopener">
        <span class="badge-off">-${pct}%</span>
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
      </a>
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-title">${p.title}</h3>
        <div class="product-price">
          <span class="price-now">&euro;${p.price.toFixed(2)}</span>
          <span class="price-was">&euro;${p.was.toFixed(2)}</span>
        </div>
        <a class="btn btn-primary btn-sm" href="${p.url}" target="_blank" rel="noopener">Shop on Etsy</a>
      </div>
    </article>`;
}
