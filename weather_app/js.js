window.addEventListener('load', () => {
    let lat;
    let long;

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
                    console.log(data);
                })
        });
    } else {
        alert('This is not allowed to execute!!');
    }
});