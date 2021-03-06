getLocation = () => {
    let geo = navigator.geolocation;
    if (geo) {
        geo.getCurrentPosition(showLocation, error);
        console.log("Geolocation is supported by this browser.");
    } else {
        console.info("Geolocation is not supported by this browser.")
    }
}

showLocation = (p) => {
    let s = document.getElementById('cords');
    s.innerHTML = "<br>Latitude: " + p.coords.latitude + "<br>Longitude: " + p.coords.longitude;
}

error = () => {
    let s = document.getElementById('cords');
    s.innerHTML = "<br> There was a problem retriving the locat"
    console.error("Error in retriving location.")
}