// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var milesPerKm = 0.621;
var kmToMars = 225000000;
var kmToTheMoon = 384400;
// Part 2: Print Days to Mars
var milesToMars = kmToMars * milesPerKm;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
// input: kilometersAway --> some distance to a location (number)
// output: days to make it to the location (number)
function getDaysToLocation(kilometersAway) {
    // take this kilometersAway input and calculate number of days to location
    // let milesAway: number = kilometersAway * milesPerKm;
    // let hoursAway: number = milesAway / speedMph;
    // let daysAway: number = hoursAway / 24;
    // return daysAway; --> could also do return hoursAway / 24 directly 
    return kilometersAway * milesPerKm / speedMph / 24;
}
// getDaysToLocation(kmToMars); ----> number representing how many days it will take our spacecraft to get to Mars
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log(spacecraftName + " would take " + getDaysToLocation(kmToMars) + " days to get to Mars.");
console.log(spacecraftName + " would take " + getDaysToLocation(kmToTheMoon) + " days to get to the Moon.");
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
