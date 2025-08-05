// generate a random color

const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const start = document.getElementById('start');
const stop = document.getElementById('stop');

const setColor = function(){
  document.body.style.backgroundColor = randomColor();  
}

let interval;
const startChangingColor = function(){
  if(!interval){
  interval = setInterval(setColor, 1000);
  }
  console.log("Color started Changing");
}

const stopChangingColor = function(){
  clearInterval(interval);
  interval = null;  
  console.log("Color stopped Changing");
}

start.addEventListener('click', startChangingColor);

stop.addEventListener('click', stopChangingColor);