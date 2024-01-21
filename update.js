let id=document.getElementById("idInput");
let title=document.getElementById("titleInput");
let duration=document.getElementById("durationInput");
let instructor=document.getElementById("instructorInput");
let description=document.getElementById("descriptionInput");
let video=document.getElementById("videoInput");
let btn=document.getElementById("submit");
let baseServerURL=`https://template-6.onrender.com/card`;


async function updateField(){
    try{
        let ide=id.value;
        let newCourse={
          title:title.value,
          duration:duration.value,
          instructor:instructor.value,
          description:description.value,
          video:video.value,
        };
      let res=await fetch(`${baseServerURL}/${ide}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(newCourse)
      });
      let data=await res.json();
      console.log(data);
      title.value="";
      duration.value="";
      instructor.value="";
      description.value="";
      video.value="";
      id.value="";
      openModal()
    }
    catch(er){
      console.log(er);
    }
  }
  btn.addEventListener("click",updateField);

let idUpdateVideo=document.getElementById("idUpdateVideo");
let videoUpdate=document.getElementById("videoUpdate");
 let upd=document.getElementById("upd");
 
  async function updateVideo(){
    try{
        let ide=idUpdateVideo.value;
      let vid={
        video:videoUpdate.value
        
      };
     
      let res=await fetch(`${baseServerURL}/${ide}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(vid)
      });
      let data=await res.json();
      console.log(data);
      openModal()
      idUpdateVideo.value="";
    videoUpdate.value="";
    }
    catch(er){
      console.log(er);
    }
  }
  upd.addEventListener("click",()=>{
    updateVideo();
    
  });

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