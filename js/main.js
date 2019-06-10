 //initialize  and add the map

 function initMap() {

     //Your location

     const loc = { lat: 5.603717, lng: -0.186964 }

     //Centered map on location

     const map = new google.maps.Map(document.querySelector('.map'), {

         center: loc,
         zoom: 14
     });


     //The marker , positioned at location

     const marker = new google.maps.Marker({ position: loc, map: map });




 }