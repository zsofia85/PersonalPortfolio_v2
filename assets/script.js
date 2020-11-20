
    var fold = document.getElementById("ViewBtn");
    var i;

    for (i = 0; i < fold.length; i++) {
        fold[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var gallery = this.nextElement;
            if (gallery.style.display === "block") {
                gallery.style.display = "none";
            } else {
                gallery.style.display = "block";
            }
        });
    }


