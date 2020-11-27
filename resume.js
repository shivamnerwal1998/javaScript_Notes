var count = 0 ; 
  
function addDetails()
{
    count++ ; 
    let target  = document.getElementById("education");
    let element = document.createElement("tr");
    element.id = "education"+ count ;
    for(let i = 0 ; i<= 4 ; i++ ){
        let feild  = document.createElement("td") ;
        let details = document.createElement("input") ;
        details.setAttribute("type" , "text") ;
        details.placeholder = "Enter data" ;
        feild.appendChild(details);
        element.appendChild(feild);
        target.appendChild(element);
    } 

}


function removeDetails()
{
    let target = document.getElementById("education");
    try{
        let element  = document.getElementById("education"+count);
        target.removeChild(element);
        count-- ;
    }
    catch{
        alert("Nothing to delete");
        return;
    }

    
}
function downloadPdf()
{
    
    let doc = new jsPDF();
    doc.setFontType("bold");
    doc.text(20,20,document.getElementById("name").value);
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(20,30,"Date of birth:"+document.getElementById("dob").value);
    doc.text(20,35,"Father's Name"+document.getElementById("fName").value);
    doc.text(20,40,"contact number:"+document.getElementById("cont").value);
    doc.text(20,45,"Email:"+document.getElementById("Email").value);
    doc.text(20,50,"Address:"+document.getElementById("add").value);
    doc.setFontType("bold");
    doc.setFontSize(16)
    doc.text(50,60,"qualification") ;
    doc.setFontType("normal");
    doc.setFontSize(12)


    doc.save("cv.pdf");
    
  


}
