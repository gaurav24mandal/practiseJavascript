 const inputHeight = document.querySelector('.inputHeight');
 const inputWeight = document.querySelector('.inputWeight')
 const screen = document.querySelector('.screen');
 const button = document.querySelector('.button')
 let height = 0;
 let weight = 0 ;
 inputHeight.addEventListener('change',(e)=>{
   height = e.target.value ;
 })
 inputWeight.addEventListener('change',(e)=>{
    weight = e.target.value ;
  })

  button.addEventListener('click',(e)=>{
     const ans = Number(weight)/(Number(height)*Number(height) );
     screen.innerHTML =`your body Mass Index is ${ans}`;
  })