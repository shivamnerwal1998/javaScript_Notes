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
    doc.text(20,20,"Date of birth:"+document.getElementById("dob").value);
    doc.text(20,30,"Father's Name"+document.getElementById("fName").value);
    doc.text(20,48,"contact number:"+document.getElementById("cont").value);
    doc.text(20,36,"Email:"+document.getElementById("Email").value);
    doc.save("cv.pdf");

}
