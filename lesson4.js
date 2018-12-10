/*Movie Kiosk:  Write the code to run a kiosk at a movie theater. Program should loop infinitely to allow users to
either see average rating of previous user entries, or enter their own review.

    Requirements:

1. Should store movie title, current user rating, total rating, and number of ratings
2. Should display a list of movies for user to review or option to review a new one
3. Should allow user to select a movie to see average rating
4. Should allow sorting of highest to lowest rated movies

author:Zackary Paulson
*/
"use strict";

const PROMPT= require("readline-sync");

 let newMovieTitle;
 let getNewMovie;
 let movieCollection= [["King Kong", 0,0 ], ["Star Wars", 0,0 ]];
 let errorCount=0;


 const MIN_STARS=0, MAX_STARS=6, MAX_TRIES=3;





function main() {
    rateMovie();
    newMovie();
    averageRating();


}
main();

 function rateMovie() {
     let go;
     go = Number(PROMPT.question("Would you like to rate a movie? [1 = yes 0 = no]"));
     while (go !== 0 && go !== 1) {
         console.log('${go} is an incorrect value. Please try again');
         go = Number(PROMPT.question("Would you like to rate a movie? [1 = yes 0 = no]"));
     }
     if (go === 1) {
         go = Number(PROMPT.question("What Movie Would you Like to review?  King Kong = 0 Star Wars=1"));
         while (go !== 0 && go !== 1) {
             console.log('${go} is an incorrect value. Please try again');
             go = Number(PROMPT.question("What Movie Would you Like to review?  King Kong = 0 Star Wars=1 "));

         }
         //here is where we rate the movie. go is = to the movie in the array array[go]
         let correct = 0;
         while (errorCount < MAX_TRIES && correct === 0) {
             let rating = Number(PROMPT.question("Please give" + movieCollection[go][0] + "a rating between 0-5"));
             if (rating > MIN_STARS && rating < MAX_STARS) {
                 correct = 1;
             }
             else {
                 console.log("Error: Rating must be between 0-5!");
                 errorCount++;
             }
             movieCollection[go][1] = movieCollection[go][1] + rating;
             movieCollection[go][2]++;
         }
     }


     go = Number(PROMPT.question("Would you like to rate a movie again? [1 = yes 0 = no]"));
     while (go !== 0 && go !== 1) {
         console.log('${go} is an incorrect value. Please try again');
         go = Number(PROMPT.question("Would you like to rate a movie? [1 = yes 0 = no]"));

     }

     if (go === 1) {
         rateMovie();
     }
 }
function newMovie() {
        getNewMovie = Number(PROMPT.question("Would you like to rate a new movie? [1 = yes 0 = no]"));
        while (getNewMovie !==0 && getNewMovie !==1){
            console.log('${NewMovie} is an incorrect value. Please try again');
            getNewMovie = Number(PROMPT.question("Would you like to rate a new movie? [1 = yes 0 = no]"));
        }
        if(getNewMovie=1){
            newMovieRating();
        }
}
   function newMovieRating() {
       newMovieTitle = PROMPT.question(' Please enter the new movie title');
       let v = movieCollection.length;
       movieCollection.push([]);
       movieCollection[v][0] = newMovieTitle;
         movieCollection[v][1]= 0;
           movieCollection[v][2]=0;
           //here is where we rate the movie. go is = to the movie in the array array[go]
           let correct = 0,rating;
           while (errorCount < MAX_TRIES && correct === 0) {
                rating = Number(PROMPT.question("Please give" + movieCollection[v][0] + "a rating between 0-5"));
               if (rating > MIN_STARS && rating < MAX_STARS) {
                   correct = 1;
               }

           }
           movieCollection[v][1] = movieCollection[v][1] + rating;
           movieCollection[v][2]++;
       }

function averageRating(){
    let movieName= PROMPT.question("Please Enter In The name of The Movie You Would Like To See The Average Ratings for");
    let i;
    for (i=0;i<movieCollection.length;i++) {
        if (movieName === movieCollection[i][0]) {
           break;
        }
    }
    if (i===movieCollection.length){
     console.log ('The Movie Which You Entered is Not In the Array Please Try Again');
     }
     else{
        let rating= movieCollection[i][1]/movieCollection[i][2];
        console.log ('The Average Ratings for the movie'+  movieCollection[i][0]  +' is '+ rating   +' ');
    }
}

