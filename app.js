const plyr1score = document.querySelector('#plyr1score');
const plyr2score = document.querySelector('#plyr2score');
const plyr1btn = document.querySelector('#plyr1btn');
const plyr2btn = document.querySelector('#plyr2btn');
const reset = document.querySelector('#reset');
const opt= document.querySelector('#options');
const p1data = document.querySelector('#p1');
const p2data = document.querySelector('#p2');
const heading1 = document.querySelector('#heading1');
const heading2 = document.querySelector('#heading2');
const btn =document.querySelector('.btn');

console.log("hiii");


let p1score =0;
let p2score =0;
let gameOver= false;
let highestcount= 3;

btn.addEventListener('click',function(){
    heading1.textContent = p1data.value;
    heading2.textContent= p2data.value;
	p1data.value= "";
	p2data.value= "";
})


plyr1btn.addEventListener('click',function(){
	if(!gameOver){
	p1score += 1;
	if(p1score === highestcount){
		gameOver = true;
		plyr1score.classList.add('win');
		plyr2score.classList.add('lose');
	}
	plyr1score.textContent = p1score;
	};
});
plyr2btn.addEventListener('click',function(){
	if(!gameOver){
	p2score += 1;
	if(p2score === highestcount){
		gameOver = true;
		plyr2score.classList.add('win');
		plyr1score.classList.add('lose');
	}
	plyr2score.textContent = p2score;
	}
})

reset.addEventListener('click',end);

opt.addEventListener('change',function(){
	highestcount= parseInt(this.value);
	end();
})

function end(){
	gameOver=false;
	p1score=0;
	p2score=0
	plyr1score.textContent= 0;
	plyr2score.textContent= 0;
	plyr1score.classList.remove('win','lose');
    plyr2score.classList.remove('win','lose');
}

