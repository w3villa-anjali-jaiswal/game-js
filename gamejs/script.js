
let character = document.getElementById('ninja');
let characterbox = document.getElementById('ninja_char');

let score = 0;
let state = "running";


document.addEventListener('keydown', function(){
    jump();
});

function jump(){
    if(character.classList != "jump-animation"){
        character.classList.add("jump-animation");
    }
    setTimeout(function(){
        character.classList.remove("jump-animation");
    },500)
}


function checkCollision(){
    var obsticleLeft = document.getElementById("obsticle").offsetLeft;
   var characterTop = document.getElementById('ninja').offsetTop;
    console.log("ninja", characterTop);
    console.log("obsticle left", obsticleLeft);
    if(obsticleLeft < 400 && obsticleLeft > 300 && characterTop > 400){
        state = "gameOver";
        obsticle.style.display = "none";
      
        character.src="assets/blast.gif";
      
        setTimeout(function(){
            
            alert("game over");
            characterbox.style.display = "none";
          
        },500)
    }
   
}
setInterval(()=>{
    checkCollision();
 },50)


 setInterval(()=>{
    if(state == 'running'){
      score = score + 1;
      document.getElementById("score").innerHTML = `<h1>score :${score}</h1>`;
    }    

},1000)
