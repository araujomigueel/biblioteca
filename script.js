const viewArea = document.querySelectorAll(".bookLinks");
var isInline = true;

function changeView(){
    
    if(viewArea[0].style.display == 'block')
    {
        isInline = false;
    }
    else
    {
        isInline = true;
    }
    
    for (let i = 0; i < viewArea.length; i++) {

        viewArea[i].style.display = isInline ? 'block' : 'inline-block';
        
    }
    
    console.log(viewArea[0].style.display);
    console.log(isInline);
}