onclickHandler=()=>{


    var addClassHeader=document.getElementsByClassName('aem-Header');
    addClassHeader[0].classList.add('aem-response');
   var getElement=document.getElementById("navigation");
     getElement.classList.add("navbar");
     var getElementsClass=document.getElementsByClassName("aem-Offerbanner");
     getElementsClass[0].classList.add("aem-isActive");
     var getElementsHeaderClose=document.getElementsByClassName("aem-close");
     getElementsHeaderClose[0].classList.add("aem-close-isActive");
    

}





closeHandler=()=>{
    var addClassHeader=document.getElementsByClassName('aem-Header');
    addClassHeader[0].classList.remove('aem-response');
    var getElement=document.getElementById("navigation");
    getElement.classList.remove("navbar");
    var getElementsClass=document.getElementsByClassName("aem-Offerbanner");
    getElementsClass[0].classList.remove("aem-isActive");
    var getElementsHeaderClose=document.getElementsByClassName("aem-close");
    getElementsHeaderClose[0].classList.remove("aem-close-isActive");
}