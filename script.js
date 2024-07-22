const viewArea = document.querySelectorAll(".bookLinks");
const bookData = document.querySelectorAll(".bookData");
var isInline = false;

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
        bookData[i].style.display = isInline ? 'inline-block' : 'none';
    }

    
    
    console.log(viewArea[0].style.display);
    console.log(isInline);
}