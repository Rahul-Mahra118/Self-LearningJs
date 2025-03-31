document.getElementById('div').innerText='rahul';
document.getElementById('div').style.backgroundColor='red'
const h1=document.createElement('h1');
const textNode= document.createTextNode("I am a heading");

h1.appendChild(textNode)
document.body.append(h1);
h1.style.color='blue'

const h2= document.createElement('h2');
const textnodeh2= document.createTextNode('I am second Heading')

//------------------------------------

let div= document.createElement('div');
div.innerText='hello from Dom';
let p= document.createElement('p')
p.innerText='I am a p tag'
document.body.append(div,p);

let img= document.createElement('img');
img.src=''
