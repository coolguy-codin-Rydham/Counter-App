//set initial
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const classes = e.currentTarget.classList;

    if (classes.contains("decrease")) {
      count--;
    } else if (classes.contains("reset")) {
      count = 0;
    } else if (classes.contains("increase")) {
      count++;
    }

    if(count>0){
        value.style.color='green';
    }
    else if(count==0){
        value.style.color='black';
    }
    else if(count<0){
        value.style.color='red';
    }
    value.innerHTML = count;
  });
});
