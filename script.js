const pboxes = document.getElementsByClassName("pbox");
const titles = document.getElementsByClassName("title");

const picApp = document.getElementsByClassName("picApp");
const livingAtlas = document.getElementsByClassName("livingAtlas");
const macMeals = document.getElementsByClassName("macMeals");
const jsExercises = document.getElementsByClassName("jsExercises");
console.log(picApp);

picApp[0].onmouseenter = () => {
  for (let i = 0; i < pboxes.length; i++) {
    console.log(this);
    pboxes[i].classList.add("inactive");
    titles[i].classList.add("inactive");
  }
  picApp[1].classList.remove("inactive");
  picApp[0].classList.remove("inactive");
};

livingAtlas[0].onmouseenter = () => {
  for (let i = 0; i < pboxes.length; i++) {
    console.log(i);
    pboxes[i].classList.add("inactive");
    titles[i].classList.add("inactive");
  }
  livingAtlas[1].classList.remove("inactive");
  livingAtlas[0].classList.remove("inactive");
};

macMeals[0].onmouseenter = () => {
  for (let i = 0; i < pboxes.length; i++) {
    console.log(i);
    pboxes[i].classList.add("inactive");
    titles[i].classList.add("inactive");
  }
  macMeals[1].classList.remove("inactive");
  macMeals[0].classList.remove("inactive");
};

jsExercises[0].onmouseenter = () => {
  for (let i = 0; i < pboxes.length; i++) {
    console.log(i);
    pboxes[i].classList.add("inactive");
    titles[i].classList.add("inactive");
  }
  jsExercises[1].classList.remove("inactive");
  jsExercises[0].classList.remove("inactive");
};
