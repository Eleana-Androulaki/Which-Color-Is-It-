// alert("Connected!");
var all 		   		= document.getElementById("All");
var collapseButton 		= document.getElementById("collapseButton");
var HowToPlay	   		= document.getElementById("HowToPlay");
var numSquares	   		= 0;
var colors         		= generateRandomColor(numSquares);
var squares        		= document.querySelectorAll(".square");
var pickedColor    		= pickColor();
var container	   		= document.getElementById("container1");
var colorDisplay   		= document.getElementById("colorDisplay");
var red   		   		= document.getElementById("red");
var yellow   	   		= document.getElementById("yellow");
var blue   		   		= document.getElementById("blue");
var redBar   	   		= document.getElementById("redBar");
var redBar1   	   		= document.getElementById("redBar1");
var redBar2   	   		= document.getElementById("redBar2");
var yellowBar      		= document.getElementById("yellowBar");
var yellowBar1     		= document.getElementById("yellowBar1");
var yellowBar2     		= document.getElementById("yellowBar2");
var blueBar   	   		= document.getElementById("blueBar");
var blueBar1   	   		= document.getElementById("blueBar1");
var blueBar2   	   		= document.getElementById("blueBar2");
var ColorText      		= document.getElementById("ColorText");
var messageDisplay 		= document.getElementById("message");
var h1             		= document.querySelector("h1");
var resetButton    		= document.querySelector("#reset");
var easyBtn 	   		= document.querySelector("#easyBtn");
var hardBtn 	   		= document.querySelector("#hardBtn");
var playBtn 	   		= document.querySelector("#playBtn");
var body		   		= document.querySelector("body");
var printLevel 	   		= document.getElementById("levelJ");
var printLives 	   		= document.getElementById("livesJ");
var printScore 	   		= document.getElementById("scoreJ");
var win			  		= document.getElementById("win");
var printHighScore		= document.getElementById("highScoreJ");
var gameall        		= document.getElementById("GameAll");
var level 		   		= 1;
var lives 		   		= 10;
var score 		   		= 0;
var diff           		= 100;
var menu 		   		= document.getElementById("menu");
var stripe         		= document.getElementById("stripe");
var mdbd           		= document.getElementById("mdbd");
var iguanaLink		    = document.getElementById("iguanaLink");
var LostLivesAudio 	    = document.getElementById("LostLivesAudio");
var CorrectAnswerAudio  = document.getElementById("CorrectAnswerAudio");
var WrongAnswerAudio	= document.getElementById("WrongAnswerAudio");
var YouWonAudio			= document.getElementById("YouWonAudio");
var endContainer 		= document.getElementById("endContainer");
var square1		 		= document.getElementById("Square1");
var square2		 		= document.getElementById("Square2");
var square3		 		= document.getElementById("Square3");
var square4		 		= document.getElementById("Square4");
var squareCenter1		= document.getElementById("SquareCenter1");
var squareCenter2		= document.getElementById("SquareCenter2");	
var winningText			= document.getElementById("winningText");
var footer				= document.getElementById("footer");
var RGBSound			= document.getElementById("RGBSound");



printLevel.textContent = level;
printLives.textContent = + lives;
printScore.textContent = + score;
localStorage.setItem("lives",lives);
localStorage.setItem("highScore",score);
body.style.backgroundColor = "rgb(35, 35, 35)";
printHighScore.textContent= +score;


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  menu.style.opacity="0.2";
  h1.style.opacity="0.2";
  stripe.style.opacity="0.2";
  win.style.opacity="0.2";
  container.style.opacity="0.2";
  footer.style.opacity="0.2";
  messageDisplay.style.opacity="0.2";
  modal.style.opacity="1";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  menu.style.opacity="1";
  h1.style.opacity="1";
  stripe.style.opacity="1";
  win.style.opacity="1";
  footer.style.opacity="1";
  messageDisplay.style.opacity="1";
  container.style.opacity="1";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    menu.style.opacity="1";
    h1.style.opacity="1";
  stripe.style.opacity="1";
  footer.style.opacity="1";
  win.style.opacity="1";
  messageDisplay.style.opacity="1";
  container.style.opacity="1";
  }
} 
function createParagraphWin(id)
{
	var para=document.createElement("p");
	var node=document.createTextNode("");

	para.appendChild(node);
	para.id=id;

	winningText.appendChild(para);
}

function createParagraph(id)
{
	var para=document.createElement("p");
	var node=document.createTextNode("");

	para.appendChild(node);
	para.id=id;

	mdbd.appendChild(para);
}

function removeModalBodyParagraphs()
{
	while(mdbd.firstChild)
	{
		mdbd.removeChild(mdbd.firstChild);
	}
}

async function PerformAnimation()
{

	squareCenter2.classList.add("SecondSphereAnimation");
	squareCenter2.classList.add("linearXY");
	await sleep(1250);
	square1.classList.remove("hiddenObject");
	// square1.classList.add("Square1SphereAnimation");
	// square1.classList.add("linearXYSquare1");
	await sleep(1250);
	square4.classList.remove("hiddenObject");
	// square4.classList.add("Square4SphereAnimation");
	// square4.classList.add("linearXYSquare4");
	await sleep(1250);
	square2.classList.remove("hiddenObject");
	// square2.classList.add("Square2SphereAnimation");
	// square2.classList.add("linearXYSquare2");
	await sleep(1250);
	square3.classList.remove("hiddenObject");
	// square3.classList.add("Square3SphereAnimation");
	// square3.classList.add("linearXYSquare3");
	 // await sleep(1000);
	squareCenter2.classList.add("hiddenObject");
	square1.classList.add("Square1SphereAnimation");
	square1.classList.add("linearXYSquare1");
	square4.classList.add("Square4SphereAnimation");
	square4.classList.add("linearXYSquare4");
	square2.classList.add("Square2SphereAnimation");
	square2.classList.add("linearXYSquare2");
	square3.classList.add("Square3SphereAnimation");
	square3.classList.add("linearXYSquare3");
	await sleep(2500);
	squareCenter1.classList.remove("hiddenObject");
	squareCenter1.classList.add("FirstSphereScaleAnimation");
	squareCenter1.classList.add("Scale");
	await sleep(4000);
	squareCenter1.classList.remove("FirstSphereScaleAnimation");
	squareCenter1.classList.remove("Scale");
	squareCenter1.classList.add("FirstSphereAnimation");
	squareCenter1.classList.add("spin");

	square1.classList.add("hiddenObject");	
	square2.classList.add("hiddenObject");
	square3.classList.add("hiddenObject");
	square4.classList.add("hiddenObject");
	var typetext=document.getElementById("paragraph1");
	var txt="Congratulations!!"
	var i=0;
	var speed=150;
	typewriter();
	function typewriter(){

		if(i<txt.length)
		{
			typetext.innerHTML+=txt.charAt(i);
			i++;
			setTimeout(typewriter,speed);
		}
	}
	await sleep(2600);
	var txt="You've beaten the color game challenge!!"
	var i=0;
	typetext=document.getElementById("paragraph2");
	typewriter();
	await sleep(6050);

	var txt="You are the next COLOR MASTER!!"
	var i=0;
	typetext=document.getElementById("paragraph3");
	typewriter();
	await sleep(4900);


	var txt="If you wish to play again..."
	var i=0;
	typetext=document.getElementById("paragraph4");
	typewriter();
	await sleep(4250);

	txt="CLICK HERE!!";
	i=0;
	typetext=document.getElementById("NewGame");
	typewriter();
}

function generateSquares(numSquares)
{
	for (var i=0;i<numSquares;i++)
	{
	container.innerHTML += "<div class=\"square block\" ></div>"
	}
	squares = document.querySelectorAll(".square");
	for(var i=0;i<numSquares;i++)
	{
		squares[i].addEventListener("click",theRealGame);
		if (numSquares==3)
			squares[i].classList.add("square3");
		else if (numSquares==6)
		{
			squares[i].classList.add("square6");
			squares[i].classList.add("col-3");
		}
		else if (numSquares==9)
		{
			squares[i].classList.add("square9");
			squares[i].classList.add("col-3");

		}
		else if (numSquares==12)
			squares[i].classList.add("square12");
	}
	// console.log(squares);

};
function changeColors(color)
{
		for(var i = 0; i < colors.length; i++)
		{
			squares[i].style.backgroundColor = color;
			
		};
};
function pickColor()
{
	var randoms = Math.floor(Math.random() * colors.length);
	return colors[randoms];
};
function generateRandomColor(num,diff)
{
	var arr = []
	var color = null;
	var i =0;
	while ( i<num )
	{
		//get random color and push into array
			color = randomColor(1);

			if(!dif(color,body.style.backgroundColor,diff))
			{	
				var valid = true;
				for( var j = 0; j<i; j++)
				{
					if(dif(color,arr[j],diff))
					{
						valid = false;
						break;
					}
				}
				
				if (valid == true)
				{
					arr.push(color);
					i++;
				}	
			}	

	}
	
	return arr;
};

function dif(color1,color2,difference)
{
	var rgb1=color1.substring(4,color1.length-1).replace(/ /g,"").split(",");
	var rgb2=color2.substring(4,color2.length-1).replace(/ /g,"").split(",");
	
	var difs=[];
	var sum=0;
	for(var i=0; i<3; i++)
	{
		rgb1[i]=parseInt(rgb1[i]);
		rgb2[i]=parseInt(rgb2[i]);
		difs[i]=Math.pow(rgb1[i]-rgb2[i],2);
		sum+=difs[i];
	}

	var y=Math.sqrt(sum);
	if(y<difference)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function randomColor(x)
{
	//pick a rgb fro 0-255
	

	var r = Math.floor(Math.random()*Math.floor(255/x+1))*x;
	var g = Math.floor(Math.random()*Math.floor(255/x+1))*x;
	var b = Math.floor(Math.random()*Math.floor(255/x+1))*x;
	var valid=false;
	
		
		if(r>255)
			r=255;
		if(g>255)
			g=255;
		if(b>255)
			b=255;


	while(valid==false)	
	{
		if(r<230)
		{
			if(g<230)
			{
				valid=true;
				break;
			}
			else if (b<230)
			{
				valid=true;
				break;
			}
			else
			{
				g = Math.floor(Math.random()*Math.floor(255/x+1))*x;
				b = Math.floor(Math.random()*Math.floor(255/x+1))*x;
				valid=false;
			}
		}
		else
		{
			if(g<230 && b<230)
			{
				valid=true;
				break;
			}
			else
			{
				r = Math.floor(Math.random()*Math.floor(255/x+1))*x;
				g = Math.floor(Math.random()*Math.floor(255/x+1))*x;
				b = Math.floor(Math.random()*Math.floor(255/x+1))*x;
				valid=false;
			}
		}
	}


	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function drawSquares ()
{
	pickedColor = pickColor();
		var colorD=ryb(pickedColor);
		if(level<=60)
		{	// colorDisplay.textContent = ryb(pickedColor);
			ColorText.textContent = "Basic Colors Combination";
			red.textContent = "Red: "+colorD[0]+"%";
			yellow.textContent = "Yellow: "+colorD[1]+"%";
			yellow.setAttribute("style","color: rgb(230, 230, 0)!important;");
			blue.textContent = "Blue: "+colorD[2]+"%";
			redBar.setAttribute("style","width: "+colorD[0]+"%;");
			yellowBar.setAttribute("style","width: "+colorD[1]+"%;");
			blueBar.setAttribute("style","width: "+colorD[2]+"%;");
		}
		else
		{
			var rgb=pickedColor.substring(4,pickedColor.length-1).replace(/ /g,"").split(",");
			red.textContent = "Red: "+rgb[0]+" /255";
			yellow.textContent = "Green: "+rgb[1]+" /255";
			yellow.setAttribute("style","color: rgb(0, 255, 0)!important;");
			yellowBar.setAttribute("style","background-color: rgb(0, 255, 0)!important;");
			yellowBar1.setAttribute("style","background-color: rgba(0, 255, 0, 0.5)!important;");
			yellowBar2.setAttribute("style","background-color: rgba(0, 255, 0, 0.5)!important;");
			blue.textContent = "Blue: "+rgb[2]+" /255";

			var i=0;
			var colorWidthRGB=[]; 
			for(i=0; i<rgb.length; i++)
			{
				colorWidthRGB[i] = rgb[i]/255*100;
			}

			redBar.setAttribute("style","width: "+colorWidthRGB[0]+"%;");
			yellowBar.setAttribute("style","width: "+colorWidthRGB[1]+"%;");
			blueBar.setAttribute("style","width: "+colorWidthRGB[2]+"%;");
			ColorText.textContent = "RGB System";
		}


		for(var  i=0; i < squares.length; i++)
		{

			if(colors[i])
			{
				squares[i].style.backgroundImage = "radial-gradient(circle at 100px 100px,"+colors[i]+",#000)";
				squares[i].style.backgroundColor=colors[i];
				// squares[i].style.backgroundImage="radial-gradient(circle at 100px 100px,"+color+",#000)";
				squares[i].classList.remove("block");
			}
		 	else 
		 	{
				squares[i].style.background = "none";
				squares[i].classList.add("block");
			}
		}
}

function ryb(pickedColor)
{
	var rgb=pickedColor.substring(4,pickedColor.length-1).replace(/ /g,"").split(",");
	var rYb=rgb2ryb(parseInt(rgb[0]),parseInt(rgb[1]),parseInt(rgb[2]));
	var sum=0;
	for(var i=0;i<3;i++)
	{
		rYb[i]=Math.floor(rYb[i]*100/255);
		sum+=rYb[i];
	}
	for(var i=0;i<3;i++)
	{
		rYb[i]=Math.round(rYb[i]*100/sum);
		
	}
	if(rYb[0]+rYb[1]+rYb[2]<100)
		rYb[2]=100-(rYb[0]+rYb[1]);
	else if(rYb[0]+rYb[1]+rYb[2]>100)
		rYb[2]=Math.abs((rYb[0]+rYb[1])-100);

	return rYb;
}

function rgb2ryb(iRed, iGreen, iBlue)
	{
		// Save the RGB
		var pRgb = [iRed, iGreen, iBlue];
		
		// Remove the white from the color
		var iWhite = Math.min(iRed, iGreen, iBlue);
		
		iRed   -= iWhite;
		iGreen -= iWhite;
		iBlue  -= iWhite;
		

		var iMaxGreen = Math.max(iRed, iGreen, iBlue);
		
		// Get the yellow out of the red+green
		
		var iYellow = Math.min(iRed, iGreen);
		
		iRed   -= iYellow;
		iGreen -= iYellow;
		
		// If this unfortunate conversion combines blue and green, then cut each in half to
		// preserve the value's maximum range.
		if (iBlue > 0 && iGreen > 0)
		{
			iBlue  /= 2;
			iGreen /= 2;
		}
		
		// Redistribute the remaining green.
		iYellow += iGreen;
		iBlue   += iGreen;
		
		// Normalize to values.
		var iMaxYellow = Math.max(iRed, iYellow, iBlue);
		
		if (iMaxYellow > 0)
		{
			var iN = iMaxGreen / iMaxYellow;
			
			iRed    *= iN;
			iYellow *= iN;
			iBlue   *= iN;
		}
		
		// Add the white back in.
		iRed    += iWhite;
		iYellow += iWhite;
		iBlue   += iWhite;
		
		 var pRyb = [Math.floor(iRed), Math.floor(iYellow), Math.floor(iBlue)];
		 return pRyb;
	}

function cmyk(pickedColor)
{
	var rgb=pickedColor.substring(4,pickedColor.length-1).replace(/ /g,"").split(",");
	var cmy=rgb2cmyk(parseInt(rgb[0]),parseInt(rgb[1]),parseInt(rgb[2]));
	for(var i=0;i<4;i++)
	{
		cmy[i]=Math.floor(cmy[i]*100);
	}
	return cmy;
}

function rgb2cmyk (r,g,b) {
 var computedC = 0;
 var computedM = 0;
 var computedY = 0;
 var computedK = 0;

 // BLACK
 if (r==0 && g==0 && b==0) {
  computedK = 1;
  return [0,0,0,1];
 }

 computedC = 1 - (r/255);
 computedM = 1 - (g/255);
 computedY = 1 - (b/255);

 var minCMY = Math.min(computedC,
              Math.min(computedM,computedY));
 computedC = (computedC - minCMY) / (1 - minCMY) ;
 computedM = (computedM - minCMY) / (1 - minCMY) ;
 computedY = (computedY - minCMY) / (1 - minCMY) ;
 computedK = minCMY;

 return [computedC,computedM,computedY,computedK];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function theRealGame()
{
	// grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	// compare color to pickedColor
	console.log(clickedColor)
	console.log(pickedColor)
	if(clickedColor == pickedColor)
	{
		messageDisplay.textContent="Pick The Correct Color";
		// 
		CorrectAnswerAudio.play();
		for(var i=0;i<squares.length;i++)
		{
			if(squares[i].style.backgroundColor!=clickedColor)
				squares[i].classList.add("hiddenObject");
			else
				if(squares.length==6)
					squares[i].classList.add("middleContainer6");
				else if(squares.length==9)
					squares[i].classList.add("middleContainer9");
				else if(squares.length==12)
					squares[i].classList.add("middleContainer12");
		}
		if(squares.length==3)
			this.classList.add("upAndDown3");
		else if (squares.length==6)
			this.classList.add("upAndDown6");
		else if (squares.length==9)
			this.classList.add("upAndDown9");
		else if (squares.length==12)
			this.classList.add("upAndDown12");



		this.classList.add("correctAnimation");


		await sleep(4500);
		container.innerHTML = "";

		messageDisplay.textContent="Pick The Correct Color";

		level++;
		printLevel.textContent = + level;

		if(level<=60)
		{
			if(level==16||level==31||level==46)
			{
				localStorage.setItem("lives",lives);
				localStorage.setItem("score",score);
			}
			var section=(Math.floor((level-1)/15)+1);
			numSquares=section*3;
			var depth=level-((section-1)*15);
			var pentada= Math.floor((depth-1)/5)+1;;
			if(pentada==1)
				diff=100;
			else if (pentada==2)
				diff=75;
			else
				diff=50;

			score+= ((section-1)*30)+pentada*10;
			printScore.textContent = + score;
			if(level%5==0)
				lives++;
			printLives.textContent = + lives;
			colors=generateRandomColor(numSquares,diff);
			generateSquares(numSquares);
			drawSquares();				
		}
		else if(level<65)
		{
			if(level==61)
			{
				RGBSound.play();
				var modal2 = document.getElementById('Modal2');

				// Get the <span> element that closes the modal
				var close2 = document.getElementById("close2");

				// When the user clicks on the button, open the modal
				var footer=document.getElementById("footer");
				  modal2.style.display = "block";
				  menu.style.opacity="0.2";
				  h1.style.opacity="0.2";
				  stripe.style.opacity="0.2";
				  win.style.opacity="0.2";
				  container.style.opacity="0.2";
				  footer.style.opacity="0.2";
				  modal2.style.opacity="1";
				  gameall.classList.add("hiddenstripe");
				  btn.classList.add("pointersNone");
				  playBtn.classList.add("pointersNone");
				  iguanaLink.classList.add("pointersNone");				

				
				await sleep(2500);

				createParagraph("typeWriter1");
				var typetext=document.getElementById("typeWriter1");
				var txt="Congratulations! You've reached the final game section!";

				var i=0;
				var speed=100;
				typewriter();
				function typewriter(){

					if(i<txt.length)
					{
						typetext.innerHTML+=txt.charAt(i);
						i++;
						setTimeout(typewriter,speed);
					}
				}

				await sleep(6000);
				i=0;
				createParagraph("typeWriter2");
				typetext=document.getElementById("typeWriter2");
				txt="Let's see if you can handle the RGB challenge..."
				typewriter();


				await sleep(5100);
				typetext=document.getElementById("close2");
				txt="GO!";
				i=0;
				typewriter();

				// When the user clicks on <span> (x), close the modal
				close2.onclick = function() {
				  modal2.style.display = "none";
				  menu.style.opacity="1";
				  h1.style.opacity="1";
				  stripe.style.opacity="1";
				  win.style.opacity="1";
				  container.style.opacity="1";
				  footer.style.opacity="1";
				  gameall.classList.remove("hiddenstripe");
				  removeModalBodyParagraphs();
				  close2.innerHTML="";
				  btn.classList.remove("pointersNone");
				  playBtn.classList.remove("pointersNone");
				  iguanaLink.classList.remove("pointersNone");
				}

			}

			// redBar.classList.add("hiddenstripe");
			// redBar1.classList.add("hiddenstripe");
			// redBar2.classList.add("hiddenstripe");
			// yellowBar.classList.add("hiddenstripe");
			// yellowBar1.classList.add("hiddenstripe");
			// yellowBar2.classList.add("hiddenstripe");
			// blueBar.classList.add("hiddenstripe");
			// blueBar1.classList.add("hiddenstripe");
			// blueBar2.classList.add("hiddenstripe");
			section=(Math.floor((level-1)/15)+1);
			//if above level 60 the game becomes RGB instead of RYB
			depth=level-((section-1)*15);
			numSquares=depth*3;
			diff=100;
			score+= ((section-1)*30)+depth*10;
			printScore.textContent = + score;
			lives++
			printLives.textContent = + lives;
			colors=generateRandomColor(numSquares,diff);
			generateSquares(numSquares);
			drawSquares();
		}
		else if(level==65)
		{
			// redBar1.classList.add("hiddenstripe");
			// redBar2.classList.add("hiddenstripe");
			// yellowBar1.classList.add("hiddenstripe");
			// yellowBar2.classList.add("hiddenstripe");
			// blueBar1.classList.add("hiddenstripe");
			// blueBar2.classList.add("hiddenstripe");
			diff=50;
			numSquares=12;
			section=(Math.floor((level-1)/15)+1);
			score+= ((section-1)*30)+50;
			printScore.textContent = + score;
			lives++;
			printLives.textContent = + lives;
			colors=generateRandomColor(numSquares,diff);
			generateSquares(numSquares);
			drawSquares();
		}
		else
		{
			YouWonAudio.play();
			all.innerHTML="";
			var footer=document.getElementById("footer");
			footer.classList.add("hiddenObject");
			body.setAttribute("style","background-color:black!important;");
			endContainer.classList.remove("hiddenObject");
			createParagraphWin("paragraph1");
			createParagraphWin("paragraph2");
			createParagraphWin("paragraph3");
			createParagraphWin("paragraph4");
			PerformAnimation();




		}
		if(score>localStorage.getItem("highScore"))
		{
			localStorage.setItem("highScore",score);
			printHighScore.textContent= +score;
		}
	}
	else
	{
			// 
		WrongAnswerAudio.play();
		messageDisplay.textContent = "Try Again!!!";
		this.style.backgroundColor = gameall.style.backgroundColor;
		// this.style.backgroundImage = "none";
		this.classList.add("animation");
		var WhichAnimation=Math.floor(Math.random()*3);
		if(WhichAnimation==0)
			this.classList.add("bounceOutRight1");
		else if(WhichAnimation==1)
			this.classList.add("bounceOutRight2");
		else
			this.classList.add("bounceOutRight3");

		this.style.borderColor = gameall.style.backgroundColor;
		this.classList.add("block");


		lives--;
		printLives.textContent = + lives;
		score-= 30;
		if(score<0)
			score=0;
		printScore.textContent = + score;

		if(lives==0)
		{

			LostLivesAudio.play();
			container.innerHTML = "";
			section=(Math.floor((level-1)/15)+1);
			level=((section-1)*15)+1;
			lives= Math.round(level/4)+3;
			// lives=localStorage.getItem("lives");
			// score=localStorage.getItem("score");

			messageDisplay.textContent = "";
			printLevel.textContent = +level;
			printLives.textContent = + lives;
			printScore.textContent = + score;
			depth=level-((section-1)*15);

				var modal2 = document.getElementById('Modal2');

				// Get the <span> element that closes the modal
				var close2 = document.getElementById("close2");

				// When the user clicks on the button, open the modal
				var footer=document.getElementById("footer");

				  modal2.style.display = "block";
				  menu.style.opacity="0.2";
				  h1.style.opacity="0.2";
				  stripe.style.opacity="0.2";
				  win.style.opacity="0.2";
				  container.style.opacity="0.2";
				  footer.style.opacity="0.2";
				  modal2.style.opacity="1";
				  gameall.classList.add("hiddenstripe");
				  btn.classList.add("pointersNone");
				  playBtn.classList.add("pointersNone");
				  iguanaLink.classList.add("pointersNone");				

				
				await sleep(2500);

				createParagraph("typeWriter1");
				var typetext=document.getElementById("typeWriter1");
				var txt="You lost all your lives!";

				var i=0;
				var speed=100;
				typewriter();
				function typewriter(){

					if(i<txt.length)
					{
						typetext.innerHTML+=txt.charAt(i);
						i++;
						setTimeout(typewriter,speed);
					}
				}

				await sleep(2500);
				i=0;
				createParagraph("typeWriter2");
				typetext=document.getElementById("typeWriter2");
				if(level<=60){
					txt="Continuing from level "+level+"! :(";
				}
				else
					txt="Continuing from level 46! :(";
				
				typewriter();

				await sleep(3000);
				typetext=document.getElementById("close2");
				txt="OK";
				i=0;
				typewriter();

				// When the user clicks on <span> (x), close the modal
				close2.onclick = function() {
				  modal2.style.display = "none";
				  menu.style.opacity="1";
				  h1.style.opacity="1";
				  stripe.style.opacity="1";
				  win.style.opacity="1";
				  container.style.opacity="1";
				  footer.style.opacity="1";
				  gameall.classList.remove("hiddenstripe");
				  removeModalBodyParagraphs();
				  close2.innerHTML="";
				  btn.classList.remove("pointersNone");
				  playBtn.classList.remove("pointersNone");
				  iguanaLink.classList.remove("pointersNone");
				  messageDisplay.textContent="Pick The Correct Color";
				}

				


			if(level<=60)
			{
				numSquares=section*3;
				pentada= Math.floor((depth-1)/5)+1;;
				if(pentada==1)
					diff=100;
				else if (pentada==2)
					diff=75;
				else
					diff=50;

				score-=((section-1)*30)*depth;
				if(score<0){
					score=0;
				}
				colors=generateRandomColor(numSquares,diff);
				generateSquares(numSquares);
				drawSquares();		

			}
			else
			{
				level=46;
				lives = 16;
				printLevel.textContent = +level;
				redBar.classList.remove("hiddenstripe");
				redBar1.classList.remove("hiddenstripe");
				redBar2.classList.remove("hiddenstripe");
				yellowBar.classList.remove("hiddenstripe");
				yellowBar1.classList.remove("hiddenstripe");
				yellowBar2.classList.remove("hiddenstripe");
				blueBar.classList.remove("hiddenstripe")
				blueBar1.classList.remove("hiddenstripe");
				blueBar2.classList.remove("hiddenstripe");
				section=(Math.floor((level-1)/15)+1);
				//if above level 60 the game becomes RGB instead of RYB
				depth=level-((section-1)*15);
				pentada= Math.floor((depth-1)/5)+1;
				if(pentada==1)
					diff=100;
				else if (pentada==2)
					diff=75;
				else
					diff=50;

				score-=((section-1)*30)*depth;
				if(score<0){
					score=0;
				}

				numSquares=section*3;
				
				colors=generateRandomColor(numSquares,diff);
				generateSquares(numSquares);
				drawSquares();

			}

		}
	}
}
function Game()
{
	
	for(var i = 0; i < squares.length; i++)
	{
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares

		squares[i].addEventListener("click",theRealGame);

	}
};

playBtn.addEventListener("click", function()
{
	// h1.style.backgroundColor = "white";
	messageDisplay.color = "steelblue";
	messageDisplay.textContent = "Pick The Correct Color";
 

	gameall.style.backgroundColor = "#105467";
	stripe.classList.remove("hiddenstripe");
	redBar1.classList.remove("hiddenstripe");
	redBar2.classList.remove("hiddenstripe");
	yellowBar1.classList.remove("hiddenstripe");
	yellowBar2.classList.remove("hiddenstripe");
	blueBar1.classList.remove("hiddenstripe");
	blueBar2.classList.remove("hiddenstripe");
	colorDisplay.classList.remove("hiddenstripe");
	win.textContent = " ";
	container.innerHTML = "";
	level=1;
	lives=5;
	score=0;
	numSquares=3;
	localStorage.setItem("score",score);
	localStorage.setItem("lives",lives);
	printLevel.textContent = + level;
	printLives.textContent = + lives;
	printScore.textContent = + score;
	colors = generateRandomColor(numSquares,diff);
	generateSquares(numSquares);
	drawSquares();
	Game();
})

// colorDisplay.textContent = pickedColor;

///INDEX JS
// var About= document.getElementById("AboutGame");
// var AboutGame		   = document.getElementById("AboutGame");
// // console.log(About);
// var indexColors=["#FE840E","#61ffbe","#8D9440","#d29dad","#3366ff","#ff0000"];


// var y ="#8da9d6"

// AboutGame.setAttribute("style","background-color: " +y +"!important;"); 

// function changeIndexColor()
// {
// 	var rand=Math.floor(Math.random()* indexColors.length);
// 	if(indexColors[rand]!=y)
// 	{	
// 		y =indexColors[rand];
// 		AboutGame.setAttribute("style","background-color: " +y +"!important;"); 
// 		// console.log("y= "+y);
// 	}	
// 	else
// 	{	
// 		y ="#8da9d6";
// 		AboutGame.setAttribute("style","background-color: " +y +"!important;");
// 		// console.log("y= "+y);
// 	}	

// }

// var interval=null;
// AboutGame.addEventListener("mouseover",function(){
// 	interval =setInterval(changeIndexColor,2000);
// });
// AboutGame.addEventListener("mouseout",function(){
// 	clearInterval(interval);
// });


function startGame()
{
	AboutGame.classList.add("hiddenObject");
	all.classList.remove("hiddenObject");
}