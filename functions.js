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

   return count + " " + choice;
}

// Record Collection

// Iterate Odd Numbers With a For Loop

// Profile Lookup

// Generate Random Whole Numbers within a Range

// Remove Items Using splice()

// Add Items Using splice()

// Check For The Presence of an Element With indexOf()

// Use typeof to Check the Type of a Variable
