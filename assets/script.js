
    const viewBtn = document.getElementById("ViewBtn");
   
    const galleryCtn = document.getElementById("gallery");

    let toggle = true;
    viewBtn.addEventListener ("click", ()=> {
       if (toggle) {
           viewBtn.innerText = "Close";
           //galleryCtn.style.display = "flex";
           galleryCtn.classList.add("open")
           toggle = !toggle
        }
        else {
            viewBtn.innerText = "View"
           //galleryCtn.style.display = "none";
           galleryCtn.classList.remove("open")
            toggle = !toggle
        }
       
    })


