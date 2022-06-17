    var className = "";
    window.addEventListener("resize",()=>findScreenSize(), 0);
    const findScreenSize = () => {
        let addClass = document.getElementById("compatible-device");
        if (className !== "") addClass.classList.remove(className);
        var width = window.innerWidth;
        console.log(width)
        if (width <= 320) className = "mobile";
        else if (width <= 991 && width >= 320) className = "tablet";
        else if (width <= 1024 && width >= 991) className = "dasktop";
        else if (width <= 1280 && width >= 1024) className = "desktop-md";
        else if (width <= 1440 && width >= 1280) className = "desktop-lg";
        else if (width <= 1920 && width >= 1440) className = "desktop-lg";
        addClass.classList.add(className);
      };
      findScreenSize();


