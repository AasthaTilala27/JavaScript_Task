//Movie Booking System

let movie = {

    movieName : "Avengers",
    ticketPrice : 250,
    availableSeats : 100,
    theatreName : "PVR"

};

// 1. Display Movie Details
console.log(movie);

// 2. Update the Ticket Price
movie.ticketPrice = 300;

//3. Add a property `showTime`.
movie.showTime = "7 PM";

// 4. Delete the `theatreName` property.
delete movie.theatreName;

// 5. Create a method `movieInfo()` that displays complete movie information.
movie.movieInfo = function(){
    console.log(this);
};

movie.movieInfo();

// 6. Use a `for...in` loop to display all properties.

for(let key in movie){

    console.log(key , ":" , movie[key]);

}