const viewArea = document.querySelectorAll(".bookLinks");

function changeView(){
    var isBlock = true;
    if(viewArea[0].style.display == 'block')
    {
        isBlock = true;
    }
    else
    {
        isBlock = false;
    }
    
    for (let i = 0; i < viewArea.length; i++) {

        viewArea[i].style.display = isBlock ? 'inline-block' : 'block';
        
    }
    
    
    console.log(viewArea[0].style.display);
    console.log(isBlock);
}