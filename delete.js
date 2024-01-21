

let id=document.getElementById("idUpdateVideo");
let btn=document.getElementById("upd");
let baseServerURL=`https://template-6.onrender.com/card`;
async function deleteJob(){
    try{
      let res=await fetch(`${baseServerURL}/${id.value}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        },
      });
      let data=await res.json();
      console.log(data);
      openModal();
      id.value="";
    }
    catch(er){
      console.log(er);
    }
  }
  btn.addEventListener("click",()=>{
    deleteJob();
  })
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
  };