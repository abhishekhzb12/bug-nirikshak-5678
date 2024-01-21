// function changeSection(sectionId) {
//     // Remove the 'active' class from all links
//     const links = document.querySelectorAll('.sidebar a');
//     links.forEach(link => link.classList.remove('active'));

//     // Add the 'active' class to the clicked link
//     const clickedLink = document.querySelector(`[onclick="changeSection('${sectionId}')"]`);
//     clickedLink.classList.add('active');

//     // Scroll to the section
//     const section = document.getElementById(sectionId);
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
let id=document.getElementById("idInput");
let title=document.getElementById("titleInput");
let duration=document.getElementById("durationInput");
let instructor=document.getElementById("instructorInput");
let description=document.getElementById("descriptionInput");
let video=document.getElementById("videoInput");
let btn=document.getElementById("submit");
let baseServerURL=`https://template-6.onrender.com/card`;

async function addCourse(){
    try{
       
      let newCourse={
        title:title.value,
        duration:duration.value,
        instructor:instructor.value,
        description:description.value,
        video:video.value,
      };
      let res=await fetch(`${baseServerURL}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(newCourse)
      });
      let data=await res.json();
      console.log(data);
      id.value="";
      title.value="";
      duration.value="";
      instructor.value="";
      description.value="";
      video.value="";
      openModal()
      
    }
    catch(er){
      console.log(er);
    }
  }
  btn.addEventListener("click",()=>{
    addCourse();
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