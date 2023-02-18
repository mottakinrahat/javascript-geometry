
// take the value from input field
function getInputFromTextField(id){
 const takeValue=document.getElementById(id).value;
 document.getElementById(id).value="";
 return parseFloat(takeValue);

}

// take the value from element 
function getElementFromElementField(id){
    const takeValue=document.getElementById(id);
    const takeValueInner=takeValue.innerText;
    return parseFloat(takeValueInner);
}

// take the title name of geometry
function titleElement(id){
 const titleText=document.getElementById(id).innerText;
 return titleText;
}

//take set the text Value for display 
function setTheTextValue(id,value){
    const takeField=document.getElementById(id);
    takeField.innerText=value;
}

//triangle Rhombus and Pentagon area calculation
function triangleRhombusPentagon(firstValue,secondValue){
    const FirstValue=getInputFromTextField(firstValue);
    const SecondValue=getInputFromTextField(secondValue);
    if(isNaN(FirstValue)|| FirstValue<0 ||isNaN(SecondValue) || SecondValue<0){
        alert('Please add valid input: 1.Add a positive number as input. 2. Do not keep null any input field. 3.Do not add string as input.');
       
    }
    else{
        const theThreeAreaAnswer=0.5*FirstValue*SecondValue;
        return parseFloat(theThreeAreaAnswer.toFixed(2));
    }
   

return parseFloat(theThreeAreaAnswer.toFixed(2)) ;
}

//Rectangle and Parallelogram area calculation
function rectangleParallelogram(firstValue,secondValue){
    const FirstValue=getInputFromTextField(firstValue);
    const SecondValue=getInputFromTextField(secondValue);
    if(isNaN(FirstValue)|| FirstValue<0 ||isNaN(SecondValue) ||SecondValue<0){
        alert('Please add valid input:1.Add a positive number as input 2. Do not keep null any input field. 3.Do not add string as input.');
       
    }
    else{
        const theTwoArea=FirstValue*SecondValue;
        return parseFloat(theTwoArea.toFixed(2));
    }
   
    return parseFloat(theTwoArea.toFixed(2));
}

//ellipse area calculation
function ellipse(firstValue,secondValue){
    const FirstValue=getInputFromTextField(firstValue);
    const SecondValue=getInputFromTextField(secondValue);
    if(isNaN(FirstValue)|| FirstValue<0 ||isNaN(SecondValue) || SecondValue<0){
        alert('Please add valid input:1.Add a positive number as input 2. Do not keep null any input field. 3.Do not add string as input.');
       
    }
    else{
        const theArea=3.1416*FirstValue*SecondValue;
        return parseFloat(theArea.toFixed(2));
    }
  
   return parseFloat(theArea.toFixed(2)) ;

}

//crate table and area of all geometrical component show in the calculation field
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

//triangle Button
document.getElementById('triangle-btn').addEventListener('click',function(){
  const triangleArea=triangleRhombusPentagon('b-triangle','h-triangle');
 const triangleTitle=titleElement('triangle-title');

 
  addInTable(triangleTitle,triangleArea);
    
})

//Rectangle Button
document.getElementById('rectangle-btn').addEventListener('click',function(){
   const rectangleArea= rectangleParallelogram('w-value','l-value');
   const rectangleTitle=titleElement('rectangle-title');
   addInTable(rectangleTitle,rectangleArea);
})

//parallelogram button
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const parallelogramArea= rectangleParallelogram('b-parallelogram','h-parallelogram');
    const parallelogramTitle=titleElement('parallelogram-title');
    addInTable(parallelogramTitle,parallelogramArea);
})

//Rhombus Button
document.getElementById('rhombus-btn').addEventListener('click',function(){
   const rhombusArea= triangleRhombusPentagon('d1-Value','d2-Value');
   const rhombusTitle=titleElement('rhombus-title');
   addInTable(rhombusTitle,rhombusArea);
})

//Pentagon Button
document.getElementById('pentagon-btn').addEventListener('click',function(){
  const pentagonArea= triangleRhombusPentagon('b-pentagon','h-pentagon');
  const pentagonTitle=titleElement('pentagon-title');
  addInTable(pentagonTitle,pentagonArea);
})

//Ellipse Button
document.getElementById('ellipse-btn').addEventListener('click',function(){
   const ellipseArea=ellipse('a-ellipse','b-ellipse');
   const ellipseTitle=titleElement('ellipse-title');
   addInTable(ellipseTitle,ellipseArea);
})


//random color generator
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  function mouseHover(id){
 document.getElementById(id).addEventListener("mouseover", function(){
  
    document.getElementById(id).style.backgroundColor = randomColor();
  
  });
 document.getElementById(id).addEventListener("mouseout", function(){
    document.getElementById(id).style.backgroundColor ='white';
  
  });
  }
  
  mouseHover('triangleHover');
  mouseHover('rectangleHover');
  mouseHover('parallelogramHover');
  mouseHover('rhombusHover');
  mouseHover('pentagonHover');
  mouseHover('ellipseHover');

  
  //locate to blog page
  document.getElementById('blog-html').addEventListener('click',function(){
    window.location.href='blog.html';
  })