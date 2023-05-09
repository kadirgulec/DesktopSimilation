let itemCounter = 0;
/* const dialogCodes = {
    Rechner : `<dialog class="dialog dialog1" id="item${this.itemnr}">
                    <div class="top-bar">
                        <h2>About Me</h2>
                        <div class="close-button" onclick="closeTab()">
                        </div>
                    </div>
                    <div class="dialog-content-wrapper">
                        <div class="dialog-content">
                        <div class="wrapper">
                            <div class="gridContainer">
                                <div id="dasErgebnis">
                                    <p id="current"></p>
                                    <p id="ergebnis">0</p>
                                </div>
                                <button onclick="clearit()" id="clear" class="button kommand clear">Clear</button>
                                <button onclick="backspace()" id="backspace" class="button kommand backspace">⌫</button>
                                <button onclick="zahldruck(7)" id="7" class="button zahlen">7</button>
                                <button onclick="zahldruck(8)" id="8" class="button zahlen">8</button>
                                <button onclick="zahldruck(9)" id="9" class="button zahlen">9</button>
                                <button onclick="command(bol)" id="bol" class="button kommand">÷</button>
                                <button onclick="zahldruck(4)" id="4" class="button zahlen">4</button>
                                <button onclick="zahldruck(5)" id="5" class="button zahlen">5</button>
                                <button onclick="zahldruck(6)" id="6" class="button zahlen">6</button>
                                <button onclick="command(carp)" id="carp" class="button kommand">x</button>
                                <button onclick="zahldruck(1)" id="1" class="button zahlen">1</button>
                                <button onclick="zahldruck(2)" id="2" class="button zahlen">2</button>
                                <button onclick="zahldruck(3)" id="3" class="button zahlen">3</button>
                                <button onclick="command(topla)" id="topla" class="button kommand">+</button>      
                                <button onclick="zahldruck(0)" id="0" class="button zahlen">0</button>
                                <button onclick="zahldruck(true)" id="komma" class="button zahlen komma">,</button>
                                <button onclick="command(cikar)" id="cikar" class="button kommand">-</button>
                                <button onclick="esittir()" id="esittir" class="button kommand esittir">=</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </dialog>`
} */
let itemIdArray=[];

class item {
    constructor(icon, label){
        this.icon = icon;
        this.label = label;
        this.itemnr = itemCounter;
        itemCounter++;
        this.item = null;
        this.componentItems = document.querySelector(".componentItems");
        this.dialogBoxes = document.querySelector(".dialogBoxes");

    }
   
    create(){
        this.componentItems.innerHTML += 
                                    `<div class="item" id="item${this.itemnr}" onclick="item${this.itemnr}.clicked(${this.itemnr})" ondblclick="item${this.itemnr}.doubleClicked(${this.itemnr},${this.label})">
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
    
        for (let i = 0; i < itemIdArray.length; i++){
            let itemid = document.getElementById(`item${i}`);
            itemid.style.backgroundColor = "rgba(255, 255, 255, 0)";
        }
        
        this.item.style.backgroundColor= "rgba(56, 56, 190, 0.521)";
    
    }
    doubleClicked(number, codeShortCut){
        this.dialogBoxes = document.querySelector(".dialogBoxes");
        console.log(this.dialogBoxes);

        window_tab = document.querySelector(`#item${number}`);
        window_tab.showModal(); // Opens a modal
       


    }
    
}

