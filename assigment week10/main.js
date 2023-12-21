var nameInput=document.getElementById("siteName")
var linkInput=document.getElementById("siteURL")
var linkslist=[];
if(localStorage.getItem("linksData") !=null){
    linkslist = JSON.parse(localStorage.getItem("linksData"));
    displayLink()
}
function addLink() {
    var name = nameInput.value;
    var link = linkInput.value;
  
    // Validate the link URL
    if (validateURL(link)) {
      var namelink = {
        name: name,
        link: link
      };
      linkslist.push(namelink);
      localStorage.setItem("linksData", JSON.stringify(linkslist));
      displayLink();
    } else {
      alert("Invalid URL. Please enter a valid URL.");
    }
  }
  
  function validateURL(url) {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?((([a-zA-Z\\d]([a-zA-Z\\d-]{0,61}[a-zA-Z\\d])?)\\.)+[a-zA-Z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*(\\?[;&a-zA-Z\\d%_.~+=-]*)?(\\#[-a-zA-Z\\d_]*)?$",
      "i"
    );
    return urlPattern.test(url);
  }
  
function displayLink(){
    
    var temp = ""
    for (var i=0; i<linkslist.length;i++){
        temp += `
        <tr>
        <td> `+i+` </td>
        <td> `+ linkslist[i].name +` </td>
        <td> <button onclick="redirect(`+i+`)"   class=" btn tablebtn" > visit</button> </td>
        <td> <button onclick="Deletelink(`+i+`)"  class="btn btn-danger"> Delete</button> </td>
    </tr>
        `
    }
    //hna ahoo nadet lel temp gwa el taple 3chan et3red
    document.getElementById("myData").innerHTML = temp



  
}
function Deletelink(x){
    linkslist.splice(x,1)
    localStorage.setItem("linksData",JSON.stringify(linkslist))
     displayLink()
}



function redirect(index)
{ 
    var url= linkslist[index].link
    window.location.href = url;
    

}


