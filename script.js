const IMAGES = [
  {
    src: "./assets/img/lagoon-nebula.jpg",
    alt: "Pink glowing Lagoon Nebula surrounded by countless stars",
  },
  {
    src: "./assets/img/rosette-nebula.jpg",
    alt: "Red Rosette Nebula in deep space",
  },
  {
    src: "./assets/img/space-nebula.jpg",
    alt: "Colorful nebula with glowing gas clouds",
  },
  {
    src: "./assets/img/galaxy.jpg",
    alt: "Spiral galaxy shining in deep space",
  },
  {
    src: "./assets/img/universe-colors.jpg",
    alt: "Colorful universe with stars and cosmic clouds",
  },
  {
    src: "./assets/img/universe-stars.jpg",
    alt: "Star field with glowing cosmic dust",
  },
  {
    src: "./assets/img/deep-space.jpg",
    alt: "Deep space with countless distant stars",
  },
  {
    src: "./assets/img/astronomy.jpg",
    alt: "Night sky full of bright stars",
  },
  {
    src: "./assets/img/constellations.jpg",
    alt: "Starry sky with visible constellations",
  },
  {
    src: "./assets/img/milky-way.jpg",
    alt: "Milky Way band across the night sky",
  },
  {
    src: "./assets/img/milky-way-mountains.jpg",
    alt: "Milky Way above a dark mountain range",
  },
  {
    src: "./assets/img/starfield-milky-way.jpg",
    alt: "Dense star field with the Milky Way band",
  },
];

let currentImageIndex = 0;

function generatePhotoAlbum() {
  let html = "";
  for (let i = 0; i < IMAGES.length; i++) {
    html += getPhotoTemplate(IMAGES[i], i);
  }
  document.getElementById("photo-album").innerHTML = html;
}

function getPhotoTemplate(image, index) {
  return /*html*/ `
    <img class="thumbnail" onclick="openDialog(${index})" src="${image.src}" alt="${image.alt}">
  `;
}

function openDialog(index) {
  currentImageIndex = index;
  updateDialog();
  document.getElementById("image-dialog").showModal();
}

function updateDialog() {
  const img = IMAGES[currentImageIndex];
  document.getElementById("dialog-image").src = img.src;
  document.getElementById("dialog-image").alt = img.alt;
  document.getElementById("dialog-title").innerHTML = img.alt;
  document.getElementById("image-counter").innerHTML =
    currentImageIndex + 1 + "/" + IMAGES.length;
}

function closeDialog() {
  document.getElementById("image-dialog").close();
}

function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= IMAGES.length) {
    currentImageIndex = 0;
  }
  updateDialog();
}

function showPreviousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = IMAGES.length - 1;
  }
  updateDialog();
}

generatePhotoAlbum();
