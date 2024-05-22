let picturs=[
  "images\\photo_2024-04-02_12-39-03.jpg",

  "images\\photo_2024-05-06_22-19-16.jpg",

];
let i = 1;
let left = document.getElementById("left");
let right = document.getElementById("right");
let image = document.getElementById("image");
right.onclick = _ =>{
    if(i >= picturs.length)
        i=0;
    image.src = picturs[i];
    i++;
}
left.onclick = _ =>{
    if(i < 0 )
        i= picturs.length - 1;
    image.src = picturs[i];
    i--;
}
