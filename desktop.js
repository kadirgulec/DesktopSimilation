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
                                    `<div class="item" id="item${this.itemnr}" onclick="item${this.itemnr}.clicked(${this.itemnr})">
                                        <div class="icon"><img src= "${this.icon}" alt=""></div>
                                        <div class="label">${this.label}</div>
                                    </div>`; 
        this.item = document.getElementById(`item${this.itemnr}`);
        itemIdArray.push(this.itemnr);
        
        /* this.item.addEventListener('click', () => this.clicked(itemIdArray[this.itemnr])); */
    
        
    }
    getItemNr(){
        return this.itemnr;
    }

    clicked(number){
        this.item = document.getElementById(`item${number}`);
        console.log(number);
        for (let i = 0; i < itemIdArray.length; i++){
            let itemid = document.getElementById(`item${i}`);
            itemid.style.backgroundColor = "rgba(255, 255, 255, 0)";
        }
        
        this.item.style.backgroundColor= "rgba(56, 56, 190, 0.521)";
    
    }
    
}

