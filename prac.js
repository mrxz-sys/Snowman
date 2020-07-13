function addClickEventToCells(){
  var header=document.getElementById('header');
  var eyes=document.getElementsByClassName('eye');
  var color=document.getElementById('mycolor');
  var body=document.getElementById('body');
  var circ=document.getElementsByClassName('circ');
  //painting the head
header.addEventListener('click',function(event){
    let clickedHeader=event.target;
    clickedHeader.style.backgroundColor = color.value;
  })
  //painting the eyes
for(let i=0;i<eyes.length;i++){
  eyes[i].addEventListener('click',function(event){
    let clickedEye=event.target;
    clickedEye.style.backgroundColor=color.value;
  });
}
//painting the outer body

body.addEventListener('click',function(event){
  let clickedBody=event.target;
  clickedBody.style.backgroundColor = color.value;
})
//painting the inner body
for(let i=0;i<circ.length;i++){
  circ[i].addEventListener('click',function(event){
    let clickedCirc=event.target;
    clickedCirc.style.backgroundColor=color.value;
  });
}
//Make me happy :)
var btn=document.getElementById('get');
btn.addEventListener('click',function(e){
  e.preventDefault();
  let p=document.getElementById('p');
  let compStyles = window.getComputedStyle(header);
    let index=0;
    //check if user didnt draw or used white color as a color for the head element
    if(compStyles.getPropertyValue('background-color')==='rgb(255, 255, 255)' || compStyles.getPropertyValue('background-color')=== 'rgba(0, 0, 0, 0)'){
      index-=1;

    }
    //check the !prevstatement for the head element
    else if(compStyles.getPropertyValue('background-color')!=='rgb(255, 255, 255)' || compStyles.getPropertyValue('background-color')!== 'rgba(0, 0, 0, 0)'){
      index+=1;

    }
    let compStyleslefteye =  window.getComputedStyle(eyes[0],null);

    //check if user didnt draw or used white color as a color for the left eye element
    if(compStyleslefteye.getPropertyValue('background-color')==='rgb(255, 255, 255)' || compStyleslefteye.getPropertyValue('background-color')=== 'rgba(0, 0, 0, 0)'){
      index-=1;

    }

    //check the !prevstatement for the left eye element
    else if(compStyleslefteye.getPropertyValue('background-color')!=='rgb(255, 255, 255)' || compStyleslefteye.getPropertyValue('background-color')!== 'rgba(0, 0, 0, 0)'){
      index+=1;

    }
    let compStylesrighteye =  window.getComputedStyle(eyes[1],null);

    //check if user didnt draw or used white color as a color for the right eye element
    if(compStylesrighteye.getPropertyValue('background-color')==='rgb(255, 255, 255)' || compStylesrighteye.getPropertyValue('background-color')=== 'rgba(0, 0, 0, 0)'){
      index-=1;

    }

    //check the !prevstatement for the right eye element
    else if(compStylesrighteye.getPropertyValue('background-color')!=='rgb(255, 255, 255)' || compStylesrighteye.getPropertyValue('background-color')!== 'rgba(0, 0, 0, 0)'){
      index+=1;

    }
    let compStylesbody =  window.getComputedStyle(body,null);

    //check if user didnt draw or used white color as a color for the body element
    if(compStylesbody.getPropertyValue('background-color')==='rgb(255, 255, 255)' || compStylesbody.getPropertyValue('background-color')=== 'rgba(0, 0, 0, 0)'){
      index-=1;

    }

    //check the !prevstatement for the body element
    else if(compStylesbody.getPropertyValue('background-color')!=='rgb(255, 255, 255)' || compStylesbody.getPropertyValue('background-color')!== 'rgba(0, 0, 0, 0)'){
      index+=1;

    }
    let compStylesfirstcirc =  window.getComputedStyle(circ[0],null);

    //check if user didnt draw or used white color as a color for the left eye element
    if(compStylesfirstcirc.getPropertyValue('background-color')==='rgb(255, 255, 255)' || compStylesfirstcirc.getPropertyValue('background-color')=== 'rgba(0, 0, 0, 0)'){
      index-=1;

    }

    //check the !prevstatement for the left eye element
    else if(compStylesfirstcirc.getPropertyValue('background-color')!=='rgb(255, 255, 255)' || compStylesfirstcirc.getPropertyValue('background-color')!== 'rgba(0, 0, 0, 0)'){
      index+=1;

    }
    let compStylesseccirc =  window.getComputedStyle(circ[1],null);

    //check if user didnt draw or used white color as a color for the left eye element
    if(compStylesseccirc.getPropertyValue('background-color')==='rgb(255, 255, 255)' || compStylesseccirc.getPropertyValue('background-color')=== 'rgba(0, 0, 0, 0)'){
      index-=1;

    }

    //check the !prevstatement for the left eye element
    else if(compStylesseccirc.getPropertyValue('background-color')!=='rgb(255, 255, 255)' || compStylesseccirc.getPropertyValue('background-color')!== 'rgba(0, 0, 0, 0)'){
      index+=1;

    }
    let compStylestcirc =  window.getComputedStyle(circ[2],null);

    //check if user didnt draw or used white color as a color for the left eye element
    if(compStylestcirc.getPropertyValue('background-color')==='rgb(255, 255, 255)' || compStylestcirc.getPropertyValue('background-color')=== 'rgba(0, 0, 0, 0)'){
      index-=1;

    }

    //check the !prevstatement for the left eye element
    else if(compStylestcirc.getPropertyValue('background-color')!=='rgb(255, 255, 255)' || compStylestcirc.getPropertyValue('background-color')!== 'rgba(0, 0, 0, 0)'){
      index+=1;

    }
    console.log(index);
    //happiness mission is completed!
    if(index==7){
      var smile=document.createElement('div');
      smile.setAttribute('style','content:"";position:absolute;border-top:5px solid red;width:40px;height:40px;transform: rotate(180deg);transform-origin: 0% 0%;-webkit-border-radius:20px 20px;margin-top:60px;margin-left:69px;');
      var mouth=document.querySelector('.mouth');
      mouth.appendChild(smile)

      mouth.classList.remove('mouth');
      var h1=  document.getElementById('h1');
      h1.textContent="Thank you for putting a smile on my face :) ";
        h1.setAttribute('style','color:pink;font-family:serif;font-weight:bolder');
    }
    else if(index!==7){
      alert('* Check that you painted every inner and outer parts of your snowman && with any color except white! * \n * It \'s recommanded that inner parts should be painted first not to be confused with the outer parts*\n * It \'s recommanded that the inner parts have a different color from the outer parts*');


    }
});}

function formSubmission(){
  addClickEventToCells();
}
document.getElementById('sub').onsubmit=formSubmission();
