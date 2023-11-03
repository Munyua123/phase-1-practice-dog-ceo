console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
  //  CHALLENGE 1
  function displayImage(images) {
    // this is where the images will be going according to the index.html
    let image = document.querySelector("#dog-image-container");
    // This will create an unumbered list which will hold the images
    let display = document.createElement("ul");
    display.style = "list-style: none;";
    // since the image source is in an array we will iterate through the array to pick them
    images.forEach((imageUrl) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = imageUrl;
      li.appendChild(img);
      display.appendChild(li);
    });
    image.appendChild(display);
  }

  // if (!selectedValue) {
  //   return true;
  // } else {
  //   return breed.startsWith(selectedValue);
  // }
  // challenge 2
  function displayBreed(breeds) {
    let ul = document.querySelector("#dog-breeds");
    // challenge 4
    let dropDown = document.querySelector("#breed-dropdown");
    let breedItems = []
    dropDown.addEventListener("change", () => {
        let selectedValue = dropDown.value;
        ul.innerHTML = "";
      Object.keys(breeds).forEach((breed) => {
          previousLetter = selectedValue
        if (selectedValue !== previousLetter || breed.startsWith(selectedValue)) {
            breedItems.push(breed);
        }
    });
        breedItems.forEach((breed) => {
            let list = document.createElement("div");
          list.innerHTML = `<a href="#" id="breedName"><li>${breed}</li></a>`;
          let breedName = list.querySelector("#breedName");
          breedName.style = "text-decoration: none; color: black;";
          // This is for challenge 3
          breedName.addEventListener("click", changeColor);
          function changeColor(e) {
            e.preventDefault()
              breedName.style = " text-decoration: none; color: orange;";
            }
            //  This clears the list
         
            ul.appendChild(list);
        });
});
  }
  // CHALLENGE 4

  // FETCH FOR CHALLENGE 1
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  console.log(imgUrl);
  function getDogImage() {
    fetch(imgUrl)
      .then((res) => res.json())
      // we use the data.message because that is the property name for the object holding the src
      .then((data) => displayImage(data.message))
      .catch((error) => console.error("Error", error));
  }

  // FETCH FOR CHALLENGE 2
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  function getDogBreed() {
    fetch(breedUrl)
      .then((res) => res.json())
      .then((data) => displayBreed(data.message))
      .catch((error) => console.error("error", error));
  }

  // call for challenge1
  getDogImage();

  // call for challenge 2
  getDogBreed();
});
