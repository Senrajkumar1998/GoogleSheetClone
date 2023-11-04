const cellNamePlaceholder=document.querySelector("#active-cell");
const fontSizeInput=document.querySelector("#fontsize");
let activeElement=null;
const form=document.querySelector("#form")
 
const state={};

let defaultProperties={
    fontFamily: 'sans',
    fontSize:16 ,
    color:"#000",
    textAlign:"left", //left ,right ,center
    backgroundColor:"#fff",
    isBold:false,
    isItalic:false,
    isUnderLine: false
}

function onCellFocus(event){
    const elementId=event.target.id;
    cellNamePlaceholder.innerText = elementId;
    activeElement =event.target;
    if(state[elementId]){
        //already selected cell
        //fill the option with that cell
        resetOption(state[elementId]);
    }
    else{
        //selected to first time
        //fill the option default state
        resetOption(defaultProperties);
    }
    
}

function resetOption(optionsState){
    //update the ui as per option state
    /*
    optionState={
        fontSize: ,
        fontFamily: ,
        color: '

    }
    */ 
   form.fontfamily.value = optionsState.fontFamily;
   form.fontsize.value= optionsState.fontSize;
   form.textalign.value =optionsState.textAlign;
   form.bold.checked=optionsState.isBold;
   form.italic.checked =optionsState.isItalic;
   form.underlined.checked =optionsState.isUnderLine;
   form.textcolor.value =optionsState.color;
   form.bgcolor.value =optionsState.backgroundColor;
    
}

function onFormChange(){

    if(!activeElement){
        alert("please select the cell to be modify");
        form.reset();
        return;
    }
    let currentState={

        textcolor :form.textcolor.value,
        backgroundColor: form.bgcolor.value,
        fontSize:form.fontsize.value,
        fontFamily:form.fontfamily.value,
        textAlign:form.textalign.value,
        isBold:form.bold.checked,
        isItalic:form.italic.checked,
        isUnderLine:form.underlined.checked

    }
    //function apply to all style to active cell
    applyStylesToCell(currentState);

    //update the state object for active cell
    state[activeElement.id]=currentState;
}

function applyStylesToCell(styleObject){

    activeElement.style.fontSize=styleObject.fontSize;
    activeElement.style.fontFamily=styleObject.fontFamily;
    activeElement.style.textcolor=styleObject.textcolor;
    activeElement.style.backgroundColor=styleObject.backgroundColor;
    activeElement.style.textAlign=styleObject.textAlign;
    
    if(styleObject.isBold){
        activeElement.style.fontWeight="bold";
    }
    if(styleObject.isItalic){
        activeElement.style.fontStyle="italic";
    }
    if(styleObject.isUnderLine){
        activeElement.style.textDecoration="underline"
    }

    
}