

function Instagram() {
    console.log("called");
    window.open("https://www.instagram.com/sam__warrener/");
}

function SpotifyLil(){
    window.open("https://distrokid.com/hyperfollow/samwarrener/life-in-lockdown");
}

function PreSave() {
    window.open("https://distrokid.com/hyperfollow/samwarrener/sacrifice-my-soul");
}

function initMap() {
    // The location of Uluru
    const Oktoberfest = { lat: 52.997151, lng: -0.401817 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: Oktoberfest,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: Oktoberfest,
        map: map,
    });
}



//52.99838241083489, -0.4079490784180988