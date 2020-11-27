function loadImage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.response;
        console.log(this.response);
        var json = JSON.parse(data);
        image = json["url"]
        var img = document.createElement("img");
        img.src = image;
        img.alt = "Image of the day"
        img.style = "max-width: 100%; height: auto;";
        var src = document.getElementById("loadedImage");
        src.appendChild(img); 
        var copyrightData = json["copyright"];
        var descriptionData = json["explanation"]
        var copyright = document.getElementById("copyright");
        copyright.textContent = "Copyright: "+ copyrightData ;
        var description = document.getElementById("description");
        description.textContent = "Description: "+descriptionData;
    }
};
    xhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=JKdYeVT3fHkhjhWLoBSDPvpMLqNugREOccoeLFgF", true);
    xhttp.send();
}