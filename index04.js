
function extractGroups(pattern, str) {
   
    const regex = new RegExp(pattern);
    const match = str.match(regex);
    if (match) {
        return match.groups;
    } else {
        return null;
    }
}
const datePattern = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;
console.log(extractGroups(datePattern, "Today's date is 18-08-2024.")); 
console.log(extractGroups(datePattern, "My birthday is on 01-01-2000.")); 
console.log(extractGroups(datePattern, "No date here!")); 
console.log(extractGroups(datePattern, "The event is scheduled for 30-12-2023.")); 
console.log(extractGroups(datePattern, "Meeting on 15-09-2022.")); 

