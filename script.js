    let geo = navigator.geolocation;
    if (geo) {
        geo.getCurrentPosition(showLocation, error);
        console.log("Geolocation is supported by this browser.");
    } else {
        console.info("Geolocation is not supported by this browser.")
    }
}

function showLocation(p) {
    let s = document.getElementById('cords');
    s.innerHTML = "<br>Latitude: " + p.coords.latitude + "<br>Longitude: " + p.coords.longitude;
}

function error() {
    console.error("Error in retriving location.")
}