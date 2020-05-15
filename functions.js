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
var contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];

function lookUpProfile(name, prop) {
   // make a contact list to display in the console if needed
   var contactList = [];

   // first step is find the contact index if it exists
   var contactIndex = null;
   for (var i = 0; i < contacts.length; i++) {
      contactList.push(contacts[i].firstName);
      if (name == contacts[i].firstName) {
         // if this contact exists
         contactIndex = i;
      }
   }

   if (contactIndex == null) {
      console.log(contactList);
      return "No such contact, see console for a list of contacts.";
   } // if there is no such contact
   else {
      // contact is found

      // see if the property exists for the found contact
      if (contacts[contactIndex].hasOwnProperty(prop)) {
         // if this property exists
         return contacts[contactIndex][prop];
      } else {
         console.log(contacts[contactIndex]);
         return (
            contacts[contactIndex].firstName +
            " has no such property. See console for a list of properties."
         );
      }
   }
}

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax, amount = 1) {
   randomNumbers = [];
   for (var i = 0; i < amount; i++) {
      randomNumbers.push(
         Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
      );
   }
   return randomNumbers;
}

// Remove Items Using splice()
function mySplice(array, spliceStart, sliceLength) {
   // Takes array, then splices out sliceLength items starting with spliceStart.
   array.splice(spliceStart, sliceLength);
   return array;
}

// Add Items Using splice()

// Check For The Presence of an Element With indexOf()

// Use typeof to Check the Type of a Variable
