
const categories = document.querySelector(".categories");
const movies = document.querySelectorAll(".category");




categories.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-category")){
        categories.querySelector(".active").classList.remove("active");

        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        movies.forEach((item) =>{
        if(item.classList.contains(filterValue) || filterValue === "all"){
            item.classList.remove("hide");
            item.classList.add("show");
        }
        else{
            item.classList.remove("show");
            item.classList.add("hide");
        }
        });
    }
  });
 