function getInputFromTextField(id){
 const takeValue=document.getElementById(id).value;
 document.getElementById(id).value="";
 return parseFloat(takeValue);
}
function getElementFromElementField(id){
    const takeValue=document.getElementById(id);
    const takeValueInner=takeValue.innerText;
    return parseFloat(takeValueInner);
}
function setTheTextValue(id,value){
    const takeField=document.getElementById(id);
    takeField.innerText=value;
}
function triangleRhombusPentagon(firstValue,secondValue){
    const FirstValue=getInputFromTextField(firstValue);
    const SecondValue=getInputFromTextField(secondValue);
   const theThreeAreaAnswer=0.5*FirstValue*SecondValue;
//    console.log(theArea.toFixed(2));
return parseFloat(theThreeAreaAnswer) ;
}
function rectangleParallelogram(firstValue,secondValue){
    const FirstValue=getInputFromTextField(firstValue);
    const SecondValue=getInputFromTextField(secondValue);
   const theTwoArea=FirstValue*SecondValue;
   return parseFloat(theTwoArea);
//    console.log(theArea.toFixed(2));
}
function ellipse(firstValue,secondValue){
    const FirstValue=getInputFromTextField(firstValue);
    const SecondValue=getInputFromTextField(secondValue);
   const theArea=3.1416*FirstValue*SecondValue;
   return parent(theArea) ;
//    console.log(theArea.toFixed(2));
}

let count=0;
document.getElementById('triangle-btn').addEventListener('click',function(){
   const triangleArea= triangleRhombusPentagon('b-triangle','h-triangle');
    console.log(triangleArea);
   parent=document.getElementById('content-container');
   const tr=document.createElement('tr');
   count+=1;
   tr.innerHTML=`
        
   <td>${count}.Triangle &nbsp &nbsp &nbsp &nbsp;</td>
   <td>${(triangleArea)}cm<sup>2</sup>&nbsp &nbsp &nbsp &nbsp;</td>
   <td>
     
      <button class="px-2 py-1 bg-blue-600 rounded-xl text-white font-semibold">convert to m<sup>2</sup></button>
 </td>
   `;
   parent.appendChild(tr);
    
})
document.getElementById('rectangle-btn').addEventListener('click',function(){
    rectangleParallelogram('w-value','l-value');
})
document.getElementById('parallelogram-btn').addEventListener('click',function(){
   rectangleParallelogram('b-parallelogram','h-parallelogram');
})
document.getElementById('rhombus-btn').addEventListener('click',function(){
    triangleRhombusPentagon('d1-Value','d2-Value');
})
document.getElementById('pentagon-btn').addEventListener('click',function(){
   triangleRhombusPentagon('b-pentagon','h-pentagon');
})
document.getElementById('ellipse-btn').addEventListener('click',function(){
    ellipse('a-ellipse','b-ellipse');
})