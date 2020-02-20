function loadNav(htmlPath){
    document.write("<nav><ul><li><a href='" + htmlPath + "index.html'>Home</a></li><li><a href='" + htmlPath + "sorting.html'>Sorting</a></li><li id='dropdown'><a href='#'>Searching</a><div class='dropdown-content'><a href='#'>...</a><a href='#'>...</a><a href='#'>...</a></div></li></ul></nav>"); 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
