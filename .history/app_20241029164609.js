document.addEventListener("DOMContentLoaded", function () {
  const dropdownList = document.getElementById("dropdown-list");
  const dropdownPlaceholder = document.querySelector(".dropdown-placeholder");
  const dropdown = document.querySelector(".dropdown");
  const mainDroopdownContainer = document.querySelector(
    ".mainDroopdownContainer"
  );

  const mapUrls = {
    map1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.95366833906!2d74.00473563194774!3d31.4825179898092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730176526239!5m2!1sen!2s",
    map2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27862.987832444564!2d72.8383562308508!3d29.19785162305655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393dd04c11706083%3A0xf48314403e31087e!2sFort%20Abbas%2C%20Bahawalnagar%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730110366901!5m2!1sen!2s",
    map3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0327074327!2d54.8978298298269!3d25.075658397988136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1730110632454!5m2!1sen!2s",
    map4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.75802333384!2d71.60761057736994!3d29.3769149704731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730097186118!5m2!1sen!2s",
    map5: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57901.46394541025!2d55.542576382505736!3d24.903387652331165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5791513ac22ff%3A0xdbcbd681fee6ebeb!2sMargham%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1730110676508!5m2!1sen!2s",
    map6: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.75802333384!2d71.60761057736994!3d29.3769149704731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730097186118!5m2!1sen!2s",
  };

  // Get the iframe element
  const mapFrame = document.getElementById("map-frame");

  // Add click event listeners to each button
  document.querySelectorAll(".map-list__item").forEach((button) => {
    button.addEventListener("click", () => {
      const mapId = button.id;
      mapFrame.src = mapUrls[mapId];
      openModal(button);
    });
  });
  // Toggle dropdown visibility
  mainDroopdownContainer.addEventListener("click", function () {
    dropdown.classList.toggle("open");
  });

  // Update selected options in placeholder when clicking outside dropdown
  document.addEventListener("click", function (e) {
    if (dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      updateSelectedOptions();
    }
  });

  function updateSelectedOptions() {
    const selected = Array.from(
      dropdownList.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    // Display selected values in the dropdown placeholder
    dropdownPlaceholder.innerText =
      selected.length > 0 ? selected.join(", ") : "Select age Group";
  }
});

function openModal(button) {
  // Get the button element by ID
  const buttonDetail = document.querySelector(`#${button.id}`);

  // Extract the title and description text
  const title = buttonDetail.querySelector(".map-list__item-title").innerHTML;
  const discription = buttonDetail.querySelector(
    ".map-list__item-description"
  ).innerHTML;
  const titleModal = document.querySelector(".map-card__titleModal");
  const discriptionModal = document.querySelector(
    ".map-card__descriptionModal"
  );
  titleModal.innerHTML = title;
  discriptionModal.innerHTML = discription;
  document.getElementById("modal").style.display = "block";
}

const tabMenuBtn = document.querySelectorAll(".tab-btn");

tabMenuBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    tabMenuBtn.forEach((btn) => btn.classList.remove("active"));
    el.classList.add("active");
  });
});

const MenuitemBtn = document.querySelectorAll(".item");

const scrollerContent = document.querySelector(".scroller-content");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let scrollAmount = 0;

MenuitemBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    MenuitemBtn.forEach((btn) => btn.classList.remove("activeMenu"));
    el.classList.add("activeMenu");
  });
});
function scrollContent(direction) {
  const maxScroll = scrollerContent.scrollWidth - scrollerContent.clientWidth;

  // Adjust scroll amount
  scrollAmount += direction * 100;

  // Prevent over-scrolling
  if (scrollAmount < 0) scrollAmount = 0;
  if (scrollAmount > maxScroll) scrollAmount = maxScroll;

  // Apply translation
  scrollerContent.style.transform = `translateX(-${scrollAmount}px)`;
}

prevBtn.addEventListener("click", () => scrollContent(-1));
nextBtn.addEventListener("click", () => scrollContent(1));

// Smooth scroll function
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Adding click event listeners to the tab buttons
document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = this.closest("a").getAttribute("href").substring(1); // Get the target ID without '#'
    smoothScroll(targetId);

    // Optionally, remove 'active' class from all buttons and add to the clicked button
    document
      .querySelectorAll(".tab-btn")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

// Close modal function (for demonstration)
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Add your close modal logic here
}

function toggleDropdown(id) {
  const dropdown1 = document.getElementById("dropdown1");
  const dropdown2 = document.getElementById("dropdown2");

  if (id === 1) {
    dropdown1.style.display =
      dropdown1.style.display === "block" ? "none" : "block";
    dropdown2.style.display = "none";
  } else {
    dropdown2.style.display =
      dropdown2.style.display === "block" ? "none" : "block";
    dropdown1.style.display = "none";
  }
}
