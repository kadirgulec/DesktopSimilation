var window_tab;
function openTab(class_name){
    window_tab = document.querySelector(`.${class_name}`)
    window_tab.showModal() // Opens a modal
    console.log(window_tab);
}

function closeTab () {
    window_tab.close();
}


