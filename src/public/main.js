const ACCESS_TOKEN = "a95e8uruYvj9kfbP6MUO9Fj_hyMEQm_EO6Pg7n1Gd08";
const imageList = document.getElementById("image-list");

const searchImages = async (search) => {
  return fetch(
    `https://api.unsplash.com/search/photos/?query=${search}&client_id=${ACCESS_TOKEN}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

const listImages = async () => {
  const searchValue = document.getElementById("search-input").value;
  let foundImages = await searchImages(searchValue);

  imageList.innerHTML = "";

  for (image in foundImages) {
    console.log(foundImages[image]);
    let newImage = document.createElement("img");
    newImage.src = foundImages[image].urls.regular;
    newImage.alt = foundImages[image].alt_description;
    imageList.appendChild(newImage);
  }
};
