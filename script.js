// ---------- Elements ----------
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCaption = document.getElementById("lb-caption");
const lbCounter = document.getElementById("lb-counter");
const lbClose = document.getElementById("lb-close");
const lbPrev = document.getElementById("lb-prev");
const lbNext = document.getElementById("lb-next");

// ---------- State ----------
let visibleItems = Array.from(items); // abhi jo photos dikh rahi hain
let currentIndex = 0;

// ---------- Filter ----------
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    items.forEach((item) => {
      const match = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("hide", !match);
    });

    // Lightbox sirf dikhne wali photos mein chalega
    visibleItems = Array.from(items).filter(
      (item) => !item.classList.contains("hide")
    );
  });
});

// ---------- Lightbox ----------
function showImage(index) {
  currentIndex = index;
  const item = visibleItems[index];
  const img = item.querySelector("img");
  const caption = item.querySelector("figcaption").textContent;

  lbImg.classList.add("fade");

  setTimeout(() => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = caption;
    lbCounter.textContent = index + 1 + " / " + visibleItems.length;
    lbImg.classList.remove("fade");
  }, 150);
}

function openLightbox(index) {
  lbImg.src = visibleItems[index].querySelector("img").src;
  lbImg.alt = visibleItems[index].querySelector("img").alt;
  lbCaption.textContent = visibleItems[index].querySelector("figcaption").textContent;
  lbCounter.textContent = index + 1 + " / " + visibleItems.length;
  currentIndex = index;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function nextImage() {
  showImage((currentIndex + 1) % visibleItems.length);
}

function prevImage() {
  showImage((currentIndex - 1 + visibleItems.length) % visibleItems.length);
}

// Photo par click
items.forEach((item) => {
  item.addEventListener("click", () => {
    const index = visibleItems.indexOf(item);
    if (index !== -1) openLightbox(index);
  });
});

// Buttons
lbClose.addEventListener("click", closeLightbox);
lbNext.addEventListener("click", nextImage);
lbPrev.addEventListener("click", prevImage);

// Kaali jagah par click karne se band ho
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard: Esc, Left, Right
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
});
