---PROJECT LINK---
[CLICK HERE] https://stackblitz.com/edit/dom-project-chaiaurcode-8reuuaja?file=1-colorChanger%2Fchaiaurcode.js

#SOLUTION CODE

##PROJECT 1

```JAVASCRIPT```
const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
console.log(e.target)
if(e.target.id==='grey'){
  body.style.backgroundColor=e.target.id;
}
if(e.target.id==='yellow'){
  body.style.backgroundColor=e.target.id;
}
if(e.target.id==='blue'){
  body.style.backgroundColor=e.target.id;
}
if(e.target.id==='white'){
  body.style.backgroundColor=e.target.id;
}
  });
});
