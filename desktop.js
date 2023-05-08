let itemCounter = 0;

let itemIdArray=[];
function itemclicked(idNr){
    
    return itemIdArray[idNr];
}
class item {
    constructor(icon, label){
        this.icon = icon;
        this.label = label;
        this.itemnr = itemCounter;
        itemCounter++;
        this.item = null;
        this.componentItems = document.querySelector(".componentItems");
    

    }
   
    create(){
        this.componentItems.innerHTML += 
                                    `<div class="item" id="item${this.itemnr}">
                                        <div class="icon"><img src= "${this.icon}" alt=""></div>
                                        <div class="label">${this.label}</div>
                                    </div>`; 
        this.item = document.getElementById(`item${this.itemnr}`);
        itemIdArray.push(this.itemnr);
        console.log(itemIdArray);
        console.log(this.itemnr)
        /* this.item.addEventListener('click', () => this.clicked(itemIdArray[this.itemnr])); */
    
        
    }
    getItemNr(){
        return this.itemnr;
    }

    clicked(number){
        console.log(number);
        let others = document.querySelector(".item");
        others.style.backgroundColor = "none";
        this.item.style.backgroundColor= "blue";
    
    }
    
}

/* let Rechner = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner");
Rechner.create();
let Rechner2 = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner");
Rechner2.create();
let Rechner3 = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner");
Rechner3.create();
let Rechner4 = new item ("https://images.vexels.com/media/users/3/157498/isolated/preview/3896ab22c743905501eefb8d22607b2f-old-school-rechner-symbol.png", "Rechner");
Rechner4.create();

 */