(function(){
  var className = "";
  window.addEventListener("resize",()=>findScreenSize(), 0);
  onclickHandler = () => {
    var addClassHeader = document.getElementsByClassName("aem-header");
    addClassHeader[0].classList.add("aem-response");
    var getElement = document.getElementById("navigation");
    getElement.classList.add("navbar");
    var getElementsClass = document.getElementsByClassName("aem-Offerbanner");
    getElementsClass[0].classList.add("aem-isActive");
    var getElementsHeaderClose = document.getElementsByClassName("aem-close");
    getElementsHeaderClose[0].classList.add("aem-close-isActive");
  };
  closeHandler = () => {
    var addClassHeader = document.getElementsByClassName("aem-header");
    addClassHeader[0].classList.remove("aem-response");
    var getElement = document.getElementById("navigation");
    getElement.classList.remove("navbar");
    var getElementsClass = document.getElementsByClassName("aem-Offerbanner");
    getElementsClass[0].classList.remove("aem-isActive");
    var getElementsHeaderClose = document.getElementsByClassName("aem-close");
    getElementsHeaderClose[0].classList.remove("aem-close-isActive");
  };

  const findScreenSize = () => {
    let addClass = document.getElementById("compatible-device");
    if (className !== "") addClass.classList.remove(className);
    var width = screen.width;
    console.log(width)
    if (width <= 320) className = "mobile";
    else if (width <= 768 && width >= 320) className = "tablet";
    else if (width <= 1024 && width >= 768) className = "dasktop";
    else if (width <= 1280 && width >= 1024) className = "desktop-md";
    else if (width <= 1440 && width >= 1280) className = "desktop-lg";
    else if (width <= 1920 && width >= 1440) className = "desktop-lg";
    addClass.classList.add(className);
  };
  
  findScreenSize();
})();


