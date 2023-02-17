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
   const theArea=0.5*FirstValue*SecondValue;
   console.log(theArea.toFixed(2));
}
function rectangleParallelogram(firstValue,secondValue){
    const FirstValue=getInputFromTextField(firstValue);
    const SecondValue=getInputFromTextField(secondValue);
   const theArea=FirstValue*SecondValue;
   console.log(theArea.toFixed(2));
}
function ellipse(firstValue,secondValue){
    const FirstValue=getInputFromTextField(firstValue);
    const SecondValue=getInputFromTextField(secondValue);
   const theArea=3.1416*FirstValue*SecondValue;
   console.log(theArea.toFixed(2));
}


document.getElementById('triangle-btn').addEventListener('click',function(){
    triangleRhombusPentagon('b-triangle','h-triangle');
    
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