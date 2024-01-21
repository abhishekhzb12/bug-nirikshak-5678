// -----------------------sujeet_start--------------------------

// -----------------------sujeet_end----------------------------

// -----------------------Azad Start----------------------------

let subsBtn = document.getElementById("subscribeBtn");
subsBtn.addEventListener('click', () =>{
  window.location.href = "./payment.html";
});
// // -----------------------Azad end----------------------------
// ----------------------Abhsihek part----------------------------
function createCourseCard(data) {
    
  // Create card div
  const card = document.createElement("div");
  card.classList.add("card");

  // Create image div
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image");
  const image = document.createElement("iframe");
  image.src = data.video;
  imageDiv.appendChild(image);

  // Create title div
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  const title = document.createElement("h1");
  title.textContent = data.title;
  titleDiv.appendChild(title);

  // Create description div
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("des");

  const disc = document.createElement("p");
  disc.innerHTML = data.description

  const instructor = document.createElement("p");
  instructor.innerHTML = data.instructor
  const duration = document.createElement("p");
  duration.innerHTML = data.duration
  const rating = document.createElement("p");
  rating.innerHTML = data.rating
  
  descriptionDiv.append(disc,instructor,rating);
  // Create button
  const button = document.createElement("button");
  button.textContent = "Add to course";
  button.addEventListener("click",()=>{

      let obj={
        id:data.id,
        title:data.title,
        duration:data.duration,
        instructor:data.instructor,
        description:data.description,
        video:data.video,
        image:data.image,
        rating:data.rating
      };
      
      let arr=JSON.parse(localStorage.getItem("course"))||[];
      let bool=true;
      for(let a=0;a<arr.length;a++){
        if(arr[a].id===obj.id){
          bool=false;
          break;
        }
      }
      if (bool) {
      arr.push(obj);
      
      localStorage.setItem("course",JSON.stringify(arr))
      }
      // console.log()
      button.innerHTML = "Added"
      openModal()
        })

  // Append elements to the card
  card.append(imageDiv,titleDiv,descriptionDiv,button);

  // Append card to the container
  return card;
}

function appendData(data){
  const cardContainer = document.getElementById("abhi_container");
  // cardContainer.innerHTML = "";
  data.forEach(item => {
    let card = createCourseCard(item);
    cardContainer.append(card);    
  });
}

async function fetchData() {
  try {
    // let url1 = `${url}?${condition}&_page=${pageNumber}&_limit=5`
    let res = await fetch(`https://template-6.onrender.com/card`)
    //console.log(res)
  //   let count = res.headers.get("X-Total-Count");
  //   pagination(count, 5,queryParams)
    let data = await res.json();
    appendData(data)
    console.log(data)
  }
  catch (error) {
    console.log(error)
  }
}

fetchData();

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Close the modal if the user clicks outside the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      closeModal();
  }
};

// ----------------------Abhsihek part----------------------------