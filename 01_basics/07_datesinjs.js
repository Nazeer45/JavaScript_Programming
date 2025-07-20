// Dates

let myDate = new Date()
// console.log(myDate); // 2025-07-20T05:31:11.187Z

// console.log(myDate.toString()); // Sun Jul 20 2025 11:02:26 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // Sun Jul 20 2025
// console.log(myDate.toISOString()); // 2025-07-20T05:34:50.372Z
// console.log(myDate.toLocaleDateString()); // 20/7/2025
// console.log(myDate.toLocaleTimeString()); // 11:09:04 am
// console.log(myDate.toTimeString()); // 11:10:11 GMT+0530 (India Standard Time)
// console.log(myDate.getFullYear()); // 2025
// console.log(myDate.getMonth()); // 6
// console.log(myDate.getDate()); // 20
// console.log(myDate.getDay()); // 0 - get day of the week - 0 means sunday
// console.log(myDate.getHours()); // 11
// console.log(myDate.getMinutes()); // 16

// console.log(myDate.getTime()); // 1752990460470 - Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

// console.log(myDate.getTimezoneOffset()); // -330 - Returns the difference in minutes between the local time zone and UTC

let myCreatedDate = new Date(2002, 6, 9 , 5, 3)
// console.log(myCreatedDate.toDateString()); // Tue Jul 09 2002 // months start from 0
// console.log(myCreatedDate.toLocaleString()); // 9/7/2002, 5:03:00 am

let myCreatedDate2 = new Date("07-21-2024")
// console.log(myCreatedDate2.toLocaleString()); // 14/1/2023, 5:30:00 am // in this format we have to pass the date in yyyy-mm-dd or dd-mm-yyyy or mm-dd-yyyy and months start from 1

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1752991294987
// console.log(myCreatedDate2.getTime()); // 1721500200000

// console.log(Math.floor(Date.now() / 1000)); // 1752991488 - to get in seconds

let newDate = new Date()

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})) // Sunday - to customise the date and time format