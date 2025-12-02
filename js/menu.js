document.addEventListener("DOMContentLoaded", () => {
  const data = window.menuData;

  // Extract unique categories
  const categories = [...new Set(data.map(item => item.category))];

  const categoriesContainer = document.getElementById("menu-categories");
  const itemsContainer = document.getElementById("menu-items");

  // Create category buttons
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.innerText = cat;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b =>
        b.classList.remove("active")
      );
      btn.classList.add("active");
      displayItems(cat);
    });

    categoriesContainer.appendChild(btn);
  });

  // Highlight the first button on load
  const firstBtn = document.querySelector(".category-btn");
  if (firstBtn) firstBtn.classList.add("active");

  // Display first category on load
  if (categories.length) {
    displayItems(categories[0]);
  }

  // Display items for selected category
  function displayItems(category) {
    itemsContainer.innerHTML = "";

    const filtered = data.filter(item => item.category === category);

    filtered.forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-item";

      div.innerHTML = `
        <div class="item-row">
          <span class="item-name">${item.name}</span>
          <span class="dots"></span>
          <span class="item-price">$${item.price}</span>
        </div>

        ${item.description ? `<p class="item-desc">${item.description}</p>` : ""}
      `;

      itemsContainer.appendChild(div);
    });
  }
});
