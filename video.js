let sum_course=JSON.parse(localStorage.getItem("course")) || [];
let sum_container_vid=document.getElementById("sum_container_vid");
// sum_course=[{
//     "id": "1",
//     "title": "Spanish Language Fundamentals",
//     "duration": "1h 15min",
//     "instructor": "Carlos",
//     "description": "Build a strong foundation in the Spanish language with essential concepts and practical exercises.",
//     "video": "https://www.youtube.com/embed/UmAP1C7pOzU?si=zKW2HPaVgw-lylEB",
//     "image": "https://imgs.search.brave.com/hJ457pVPD6jN800G4qk64q8nm9DwkmXYlJsPba-T6mE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzk5LzA2LzQ2/LzM2MF9GXzk5MDY0/Njc4XzkzcEszdWdF/U3ZMMFJteWlhdGlP/bGFFRGFhNk9qcnFq/LmpwZw",
//     "rating": "⭐⭐⭐⭐⭐ 4.2"
//   }];
append(sum_course);
function append(sum_course){
     sum_container_vid.innerHTML="";
    sum_course.forEach((elem) => {
        let card=cardCreate(elem);
       
        sum_container_vid.append(card);
    });
    console.log(sum_course);
    
}

function cardCreate(elem){
    let card=document.createElement("div");
        card.className="sum_card";
        let iframe=document.createElement("iframe");
        iframe.setAttribute("src",`${elem.video}`);
        // iframe.src(`${elem.video}`);
        iframe.setAttribute("width","560");
        iframe.setAttribute("height","315");
        let desc=document.createElement("div");
        desc.className="description";
        let h1=document.createElement("h1");
        h1.className="sum_title";
        h1.innerText=elem.title;
        let h3=document.createElement("h3");
        h3.innerText=elem.description;
        let s_h3=document.createElement("h3");
        s_h3.innerText=`Duration: ${elem.duration}`;
        let t_h3=document.createElement("h3");
        t_h3.innerText=`Rating: ${elem.rating}`;
        // t_h3.className="sum_title";
        let btn=document.createElement("button");
        btn.className="sum_btn";
        btn.innerText="Watch Now";
        btn.addEventListener("click",()=>{
            let obj={
                video:elem.video,
                title:elem.title,
                description:elem.description,
                duration:elem.duration,
                rating:elem.rating,
                instructor:elem.instructor
            };
            videoDisplay(obj);
        });
        desc.append(h1,h3,s_h3,t_h3,btn);
        card.append(iframe,desc);
        return card;
}
let sum_container=document.getElementById("sum_container");
function videoDisplay(obj){
    sum_container.innerHTML="";
    let div=document.createElement("div");
    div.id="sum_card";
    let iframe=document.createElement("iframe");
    iframe.setAttribute("src",`${obj.video}`);
    iframe.setAttribute("width","1200");
    iframe.setAttribute("height","555");
   
    div.append(iframe);
    let text_div=document.createElement("div");
    text_div.id="sum_text";

    let cont_div=document.createElement("div");
    cont_div.id="cont_div";

    let title=document.createElement("h1");
    title.className="sum_title";
    title.innerText=obj.title;

    let desc=document.createElement("h3");
    desc.innerText=obj.description;

    cont_div.append(title,desc);

    let inst=document.createElement("div");
    inst.id="sum_inst";
    let inst_h2=document.createElement("h2");
    inst_h2.innerText=`Instructor: ${obj.instructor}`;

    let dura=document.createElement("h2");
    dura.innerText=`Duration: ${obj.duration}`;

    let rat=document.createElement("h2");
    rat.innerText=`Rating: ${obj.rating}`
    

    inst.append(inst_h2,dura,rat);

    text_div.append(cont_div,inst);
    
    sum_container.append(div,text_div);
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    console.log(obj);
}
