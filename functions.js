// Your functions go here!

// Counting Cards
function countCard(count, card) {
   var countChange = 0;

   switch (card) {
      case "A":
      case "K":
      case "J":
      case "Q":
      case "T":
      case "a":
      case "k":
      case "j":
      case "t":
      case 10:
         countChange = -1;
         break;
      case 6:
      case 5:
      case 4:
      case 3:
      case 2:
         countChange = +1;
         break;
   }

   count += countChange;

   var choice;

   if (count > 0) {
      choice = "Bet";
   } else {
      choice = "Hold";
   }

   result = count + " " + choice;
   console.log(result);
   return result;
}

// Record Collection
var collection = {
   2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
   },
   2468: {
      album: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
   },
   1245: {
      artist: "Robert Palmer",
      tracks: [],
   },
   5439: {
      album: "ABBA Gold",
   },
};

function updateRecords(id, prop, value) {
   // updates or makes a new record in your collection
   if (collection.hasOwnProperty(id) == false) {
      // if there is no record with this id
      // make a new record with the id
      console.log("There are no records with that id, making a new one.");
      collection[id] = {};
   }

   if (prop != "tracks" && value != "") {
      collection[id][prop] = value;
      console.log("set " + prop + " of " + id + " to " + value);
   } else if (
      prop == "tracks" &&
      collection[id].hasOwnProperty("tracks") == false
   ) {
      collection[id].tracks = [value];
   } else if (prop == "tracks" && value != "") {
      collection[id].tracks.push(value);
   } else if (value == "") {
      delete collection[id][prop];
   }

   console.log(collection);

   return "See the console to examine updated collection details.";
}

// Iterate Odd Numbers With a For Loop
function iterateBy(start, end, increment) {
   // returns a list of numbers from start to end incrementing by increment
   var myArray = [];

   for (var number = start; number <= end; number += increment) {
      myArray.push(number);
   }

   return myArray;
}

// Profile Lookup

// Generate Random Whole Numbers within a Range

// Remove Items Using splice()

// Add Items Using splice()

// Check For The Presence of an Element With indexOf()

// Use typeof to Check the Type of a Variable
