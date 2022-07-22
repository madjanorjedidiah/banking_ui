import React, {useState} from 'react';



function ipLookUp () {
        fetch('http://ip-api.com/json')
        .then(
            function success(response) {
              await fetch('/nearestBanks?lat='+ response.lat + "&lon="+ response.lon, function(){
            alert('data')
        })
            }
        ),
        function fail(error){
            console.log('request failed')
        }
    }


    document.getElementById('coord').click(function(){
        getLocation();
    })


    function showPosition(position) {
        alert(2)
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
      }

    
    function getLocation() {
        if (navigator.geolocation) {
            alert(3)
          navigator.geolocation.getCurrentPosition(showPosition);
          alert(0)
        }else { 
            alert('eror')
        }
      }
      return getLocation()



const bankLocation = () => {
	return (<div class="">
	        <p id="coord"  style="padding: 10px; background-color: white; border-radius: 5px; cursor: pointer;" class="d-flex justify-content-center">Get current Location</p>
	     
	    </div>)
    }