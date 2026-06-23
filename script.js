const styles=[
"꧁༒NAME༒꧂",
"★NAME★",
"⚡NAME⚡",
"☠NAME☠",
"亗NAME亗",
"♛NAME♛",
"༄NAME࿐",
"✿NAME✿",
"『NAME』",
"◥NAME◤",
"ᴳᵒᵈNAME",
"NAME〆PRO",
"NAME★VIP",
"NAME★KING",
"NAME★YT",
"NAMEメGAMER",
"NAME々KING",
"⚡NAMEㅤFF",
"NAME࿐Gaming",
"꧁☯NAME☯꧂"
];

let current=[];

function generateNicknames(){

const name=document.getElementById("nameInput").value.trim();

if(!name) return;

current=styles.map(x=>x.replaceAll("NAME",name));

render(current);
}

function render(list){

let html="";

list.forEach(n=>{

html+=`
<div class="nick">
<span>${n}</span>
<div>
<span class="copy" onclick="copyNick('${n}')">📋</span>
<span class="copy" onclick="favNick('${n}')">⭐</span>
</div>
</div>
`;

});

document.getElementById("output").innerHTML=html;

document.getElementById("counter").innerText=
"Total: "+list.length;
}

function copyNick(text){

navigator.clipboard.writeText(text);

}

function randomNick(){

if(current.length===0) return;

const r=current[Math.floor(Math.random()*current.length)];

navigator.clipboard.writeText(r);

alert(r);
}

function favNick(text){

const div=document.createElement("div");

div.className="nick";

div.innerHTML=text;

document.getElementById("favorites").appendChild(div);
}

function searchNick(){

const q=document.getElementById("searchBox").value.toLowerCase();

render(current.filter(x=>x.toLowerCase().includes(q)));
}

function downloadTxt(){

const blob=new Blob([current.join("\n")],
{type:"text/plain"});

const a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="nicknames.txt";

a.click();
}

function toggleTheme(){

document.body.classList.toggle("light");
}

function setCategory(cat){

render(current);
}

/* Matrix Rain */

const canvas=document.getElementById("matrix");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const letters="01アイウエオカキクケコ";

const fontSize=14;

const columns=canvas.width/fontSize;

const drops=[];

for(let x=0;x<columns;x++)
drops[x]=1;

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff41";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=
letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height &&
Math.random()>0.975)
drops[i]=0;

drops[i]++;
}
}

setInterval(draw,33);
