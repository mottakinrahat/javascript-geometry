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
function titleElement(id){
 const titleText=document.getElementById(id).innerText;
 return titleText;
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
   return parseFloat(theArea) ;
//    console.log(theArea.toFixed(2));
}
function addInTable(titleName,geometryValue){
    parent=document.getElementById('content-container');
    const tr=document.createElement('tr');
    count+=1;
    tr.innerHTML=`
         
    <td>${count}.${titleName} &nbsp &nbsp &nbsp &nbsp;</td>
    <td>${geometryValue}cm<sup>2</sup>&nbsp &nbsp &nbsp &nbsp;</td>
    <td>
      
       <button class="px-2 py-1 bg-blue-600 rounded-xl text-white font-semibold">convert to m<sup>2</sup></button>
  </td>
    `;
    parent.appendChild(tr);
}



let count=0;
document.getElementById('triangle-btn').addEventListener('click',function(){
  const triangleArea=triangleRhombusPentagon('b-triangle','h-triangle');
 const triangleTitle=titleElement('triangle-title');

 
  addInTable(triangleTitle,triangleArea);
    
})
document.getElementById('rectangle-btn').addEventListener('click',function(){
   const rectangleArea= rectangleParallelogram('w-value','l-value');
   const rectangleTitle=titleElement('rectangle-title');
   addInTable(rectangleTitle,rectangleArea);
})
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const parallelogramArea= rectangleParallelogram('b-parallelogram','h-parallelogram');
    const parallelogramTitle=titleElement('parallelogram-title');
    addInTable(parallelogramTitle,parallelogramArea);
})
document.getElementById('rhombus-btn').addEventListener('click',function(){
   const rhombusArea= triangleRhombusPentagon('d1-Value','d2-Value');
   const rhombusTitle=titleElement('rhombus-title');
   addInTable(rhombusTitle,rhombusArea);
})
document.getElementById('pentagon-btn').addEventListener('click',function(){
  const pentagonArea= triangleRhombusPentagon('b-pentagon','h-pentagon');
  const pentagonTitle=titleElement('pentagon-title');
  addInTable(pentagonTitle,pentagonArea);
})
document.getElementById('ellipse-btn').addEventListener('click',function(){
   const ellipseArea=ellipse('a-ellipse','b-ellipse');
   const ellipseTitle=titleElement('ellipse-title');
   addInTable(ellipseTitle,ellipseArea);
})