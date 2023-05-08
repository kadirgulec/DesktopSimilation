var itemCounter = 0;
class item {
    constructor(icon, label){
        this.icon = icon;
        this.label = label;
        this.itemnr = itemCounter;
        this.componentItems = document.querySelector(".componentItems");
        this.item = document.getElementById(`item${this.itemnr}`);

    }
   
    create(){
        this.componentItems.innerHTML += 
                                    `<div class="item" id="item${this.itemnr}">
                                        <div class="icon"><img src= "${this.icon}" alt=""></div>
                                        <div class="label">${this.label}</div>
                                    </div>`; 
        document.addEventListener("click", this.clicked);
        console.log(this.getItemNr());
        this.setItemNr();
        
    }
    getItemNr(){
        return this.itemnr;
    }
    setItemNr(){
        itemCounter = itemCounter + 1;
    }

    clicked(){
        console.log(this.getItemNr);
        this.item.style.backgroundColor= "blue";
    
    }
    
}

let Rechner = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner");
Rechner.create();
let Rechner2 = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner");
Rechner2.create();
let Rechner3 = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner");
Rechner3.create();
let Rechner4 = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner");
Rechner4.create();

