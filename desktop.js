let itemCounter = 0;
const dialogCodes = {
    Rechner : `<div class="dialog-content-wrapper">
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
</div>`
,
AboutMe:`<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur minus dolorum consectetur perspiciatis explicabo amet cupiditate, quidem recusandae iure voluptatum, atque ea ipsa itaque vel.</p>
`
,
Contact:`<form action="">
<label for="">Name: <input type="text"></label> <br>
<label for="">Surname: <input type="text"></label> <br>
<label for="">E-Mail: <input type="email"></label> <br>
<label for="">Your Message: <textarea name="" id="" cols="30" rows="10"></textarea></label> <br>
<input type="submit" value="Senden">
</form>`
}
const startMenuIcons = {
Rechner : `<i class="fa-solid fa-calculator"></i>`,
AboutMe : `<i class="fa-solid fa-address-card"></i>`,
Contact : `<i class="fa-solid fa-envelope-open-text"></i>`
}
let itemIdArray=[];
let itemLabelArray = [];
let itemIconArray = [];
function resetBackgroundOfSelectedIcon(){
    for (let i = 0; i < itemIdArray.length; i++){
        let itemid = document.getElementById(`item${i}`);
        itemid.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
}
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
                                    `<div class="item" id="item${this.itemnr}" onclick="item${this.itemnr}.clicked(${this.itemnr})" ondblclick="item${this.itemnr}.doubleClicked('${this.itemnr}','${this.label}')">
                                        <div class="icon"><img src= "${this.icon}" alt=""></div>
                                        <div class="label">${this.label}</div>
                                    </div>`; 
        this.item = document.getElementById(`item${this.itemnr}`);
        itemIdArray.push(this.itemnr);
        itemLabelArray.push(this.label);
        itemIconArray.push(this.icon);
        
        /* this.item.addEventListener('click', () => this.clicked(itemIdArray[this.itemnr])); */
    
        
    }
    getItemNr(){
        return this.itemnr;
    }
    getItemLabel(){
        return this.label
    }

    clicked(number){
        this.item = document.getElementById(`item${number}`);
    
        resetBackgroundOfSelectedIcon();
        
        this.item.style.backgroundColor= "rgba(56, 56, 190, 0.521)";
    
    }
    doubleClicked(number,label){
        this.dialogBoxes = document.querySelector(".dialogBoxes")
    
        this.dialogBoxes.innerHTML = `<dialog class="dialog dialog1" id="${label}${number}" onload="calculatorLoad()">
                    <div class="top-bar">
                        <h2>${label}</h2>
                        <div class="close-button" onclick="item${number}.closeTab('${number}','${label}')"></div>
                    </div>
                    </dialog>`;
        let contentDialog = document.querySelector(`#${label}${number}`);
        contentDialog.innerHTML += dialogCodes[label];

        let window_tab = document.querySelector(`#${label}${number}`);
        window_tab.showModal(); // Opens a modal

       resetBackgroundOfSelectedIcon();
    }
    closeTab (number, label) {
        let window_tab = document.getElementById(`${label}${number}`);
        window_tab.close();

        resetBackgroundOfSelectedIcon();
       
    }
    
}
/* date and time */
function printDate(){
    const date = new Date();
    console.log(date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10){
        day = `0` + day;
    }
    if (month < 10){
        month = "0" + month;
    }
    let fullDate = `${day}.${month}.${year}`;
    console.log(fullDate);
    
    let hour = date.getHours();
    let minute = date.getMinutes();
    if (hour < 10){
        hour = "0" + hour;
    }
    if (minute < 10){
        minute = "0" + minute;
    }
    let fullTime = `${hour}:${minute}`;
    console.log(fullTime);

    let printhour = document.querySelector(".hour");
    let printdate = document.querySelector(".date");
    printhour.innerHTML = fullTime;
    printdate.innerHTML = fullDate; 
   


}

setInterval(printDate, 10000);

/* date and time end */

/* start menu */

function startMenuOpen(){
    let startMenu = document.querySelector("#startMenu");
    let startMenuList = document.querySelector("#startMenuList");
    startMenuList.innerHTML = "";
    for (i = 0; i < itemLabelArray.length; i++ ){
        startMenuList.innerHTML += `<li onclick="item${i}.doubleClicked('${itemIdArray[i]}','${itemLabelArray[i]}')">${startMenuIcons[itemLabelArray[i]]} ${itemLabelArray[i]}</li>`
    }
    resetBackgroundOfSelectedIcon();
    startMenu.show();
}

function startMenuClose(){
    let startMenu = document.querySelector("#startMenu");
    startMenu.close();
}