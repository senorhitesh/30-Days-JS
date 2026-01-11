const page = 1;
const  container = document.querySelector(".container");
const  URL       = "https://picsum.photos/v2/list?page={${page}}&limit={10}"
let    isLoading = false;

async function LoadImages(){
 if(isLoading) return;
  
 isLoading = true;
 try{
    let api = await fetch(URL);
    let data = await api.json();

    data.forEach(element => {
         const image = document.createElement("img");
         image.src =  element.download_url
         image.classList.add("image")
         container.appendChild(image);
    });

    page++
 }
 catch (error){
 console.log("Error", error)
 }
 finally{
    isLoading = false;
 }
}

LoadImages();

window.addEventListener("scroll", () =>{
    if(window.innerHeight + window.scrollY <= document.documentElement.scrollHeight - 10){
        LoadImages();
    }
})