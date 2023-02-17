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
