function getInputFromTextField(id){
 const takeValue=document.getElementById(id).value;
 return parsefloat(takeValue);
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
document.getElementById('triangle-btn').addEventListener('click',function(){
    console.log('triangle');
})
document.getElementById('rectangle-btn').addEventListener('click',function(){
    console.log('triangle');
})
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    console.log('triangle');
})
document.getElementById('rhombus-btn').addEventListener('click',function(){
    console.log('triangle');
})
document.getElementById('pentagon-btn').addEventListener('click',function(){
    console.log('triangle');
})
document.getElementById('ellipse-btn').addEventListener('click',function(){
    console.log('triangle');
})