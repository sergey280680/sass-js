
// global variable declaration
var table__tab;
var table__tabContent;


// an array of all tabs tab and an array of all tabContent elements
window.onload=function () {
    table__tabContent=document.getElementsByClassName('table__tabContent');
    table__tab=document.getElementsByClassName('table__tab');
    // hide tabs
    hideTabsContent(1);
}



// starting a cycle from the parameter that is specified when the function is called until the end of the tabContent array
function hideTabsContent(a) {
    for (var i=a; i<table__tabContent.length; i++){
        // after on each tabContent element remove the show class
        table__tabContent[i].classList.remove('show');
        // and add the hide class
        table__tabContent[i].classList.add('hide');
        // and add the hide class
        table__tab[i].classList.remove('whiteborder');
    }
}



// get an item when you click on the tab title
document.getElementById('tabs').onclick=function (event) {
    var target=event.target;
    // checked the clicked item
    // if this element has a tab class, then a cycle is launched whose purpose is to find out the element id
    if (target.className=='table__tab'){
        for (var i=0; i<table__tab.length; i++){
            // this serial number can be used to display the desired element 'tabContent'
            if (target == table__tab[i]){
                // as soon as the desired element is found, the loop will start the function showTabsContent
                showTabsContent(i);
                // and will be stopped break
                break;
            }
        }
    }
}



function showTabsContent(b) {
    // we check the presence of the block on which the class click is committed hide
    if (table__tabContent[b].classList.contains('hide')){
        // if this class is present, the function "hideTabsContent" is called, which hides all tab blocks
        hideTabsContent(0);
        // then the 'whiteborder' class is added to the active tab
        table__tab[b].classList.add('whiteborder');
        // class 'hide' is deleted
        table__tabContent[b].classList.remove('hide');
        // and the class 'show' is added
        table__tabContent[b].classList.add('show');
    }
}