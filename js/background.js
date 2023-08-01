const images = ["1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
bgImage.src = `https://c.wallhere.com/photos/2e/da/brunette_looking_at_viewer_blue_background_ponytail_digital_art_women_artwork_Ilya_Kuvshinov-55032.png!d`;

document.body.appendChild(bgImage);
