var i = 0 ;  
function createMore()
{
    i++ ; 
    let data = document.getElementById("educationDetails") ;
    let element = document.createElement("textarea");
    let linebreak = document.createElement("br") ;
    element.id = "educationDetails" + i ; 
    element.rows = 2 ;
    element.cols = 30 ;
    data.appendChild(element);
    let toremove = document.getElementById("educationDetails" + i) ;
    
}
function remove()
{
    let target = document.getElementById("educationDetails") ;
    
    try
    {
        let target = document.getElementById("educationDetails") ;
        let element = document.getElementById("educationDetails"+i) ;
        target.removeChild(element) ;     
        i-- ;   
    
    }
    catch
    {
        alert("nothing to delete ") ; 

    } 

}
