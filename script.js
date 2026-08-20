const IMAGES = [
  {
    src: "./assets/img/lagoon-nebula.jpg",
    alt: "Pink glowing Lagoon Nebula",
  },
  {
    src: "./assets/img/rosette-nebula.jpg",
    alt: "Red Rosette Nebula in deep space",
  },
  {
    src: "./assets/img/space-nebula.jpg",
    alt: "Colorful nebula glowing gas clouds",
  },
  {
    src: "./assets/img/galaxy.jpg",
    alt: "Spiral galaxy shining in deep space",
  },
  {
    src: "./assets/img/universe-colors.jpg",
    alt: "Colorful universe with stars",
  },
  {
    src: "./assets/img/universe-stars.jpg",
    alt: "Star field with cosmic dust",
  },
  {
    src: "./assets/img/deep-space.jpg",
    alt: "Deep space with distant stars",
  },
  {
    src: "./assets/img/astronomy.jpg",
    alt: "Night sky full of bright stars",
  },
  {
    src: "./assets/img/constellations.jpg",
    alt: "Starry sky with constellations",
  },
  {
    src: "./assets/img/milky-way.jpg",
    alt: "Milky Way band across night sky",
  },
  {
    src: "./assets/img/milky-way-mountains.jpg",
    alt: "Milky Way above a dark mountain",
  },
  {
    src: "./assets/img/starfield-milky-way.jpg",
    alt: "Dense star field Milky Way band",
  },
];

let currentImageIndex = 0;
let dialogImage = document.getElementById("dialog-image");

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
  dialogImage.src = img.src;
  dialogImage.alt = img.alt;
  document.getElementById("dialog-title").innerHTML = img.alt;
  document.getElementById("image-counter").innerHTML =
    currentImageIndex + 1 + "/" + IMAGES.length;
}

function closeDialog() {
  dialogImage.src = "";
  dialogImage.alt = "";
  document.getElementById("dialog-title").innerHTML = "";
  document.getElementById("image-counter").innerHTML = "";
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
