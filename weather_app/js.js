window.addEventListener('load', () => {
    let lat;
    let long;
    let tempDescription = document.querySelector(
        '.temperature-description'
    );
    let tempDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDesc = document.querySelector('.temperature-desc');
    let temperatureIcon = document.querySelector('.icon');

    // Transfer temperature to celsus or fehrenhate
    let temperatureSection = document.querySelector('.temperature');
    let temperatureSpan = document.querySelector('.temperature span');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            long = position.coords.longitude;
            lat = position.coords.latitude;

            // const api = `https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=3gi6VhBfD5OobpPwKGB79lcWCSSUjN2T`
            const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=XRZS9YD4NE349KPSVLENN9FV2&contentType=json`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    // const {temperature, summery, icon} = data
                    console.log(data)
                    locationTimezone.innerHTML = data.timezone;
                    tempDegree.innerHTML = data.currentConditions.temp;
                    tempDescription.innerHTML = data.currentConditions.conditions;
                    temperatureDesc.textContent = data.description;
                    // Set the icon
                    let icon = data.currentConditions.icon;

                    setIcons(icon, temperatureIcon);

                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent === 'F') {
                            temperatureSpan.textContent = 'C';
                            tempDegree.textContent = ((data.currentConditions.temp - 32) * 5 / 9).toFixed(2)
                            // (32°F − 32) × 5/9 = °C

                        } else {
                            tempDegree.innerHTML = (data.currentConditions.temp).toFixed(2);
                            temperatureSpan.textContent = 'F'
                        }
                    })


                });
        });

    } else {
        alert('This is not allowed to execute!!');
    }

    function setIcons(icon, iconId) {
        console.log(icon);

        const skycons = new Skycons({color: 'white'});

        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();

        return skycons.set(iconId, Skycons[currentIcon]);
    }

});