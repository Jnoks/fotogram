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

function generatePhotoAlbum() {
  let html = "";
  for (let i = 0; i < IMAGES.length; i++) {
    html += getPhotoTemplate(IMAGES[i]);
  }
  document.getElementById("photo-album").innerHTML = html;
}

function getPhotoTemplate(image) {
  return /*html*/ `
    <img class="thumbnail" src="${image.src}" alt="${image.alt}">
  `;
}

generatePhotoAlbum();
