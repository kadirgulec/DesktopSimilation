class item {
    constructor(icon, label, itemnr){
        this.icon = icon;
        this.label = label;
        this.componentItems = document.querySelector(".componentItems");
        this.item = document.getElementsByClassName("item")[itemnr];
    }
   
    create(){
        this.componentItems.innerHTML += 
                                    `<div class="item">
                                        <div class="icon"><img src= "${this.icon}" alt=""></div>
                                        <div class="label">${this.label}</div>
                                    </div>`; 
        document.addEventListener("click", this.clicked);
    }
    clicked(){
        this.item.style.backgroundColor= "blue";
        console.log("clicked");
    }
    
}

let Rechner = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner","0");
Rechner.create();

let Rechner2 = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner","1");
let Rechner3 = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner","2");
Rechner2.create();
Rechner3.create();


