const spreadSheetId = "1KVVwjxj-FWMYkaGmDnAx21Uk4KdbLdQdDS5wbbOr9JY"

//fill your spread sheet id between the "" in the above line
const deployid =
  "https://script.google.com/macros/s/AKfycbwgJshW4ysK1UnCUhdfDxqTTeos3EMKfGsDH-X0KX5E-dCfBDuJWtS4fC8LEiZTqdpNBA/exec"

export default spreadSheetId

export { deployid }
//-----

//-----

// copy and paste the below code in the appscript of the spreadsheet

// const sheets = SpreadsheetApp.openByUrl(
//   "//copy and paste the spread url here"
// )
// const sheet = sheets.getSheetByName("//enter the sheet name here")
// function doPost(e) {
//   let data = e.parameter
//   sheet.appendRow([
//     data.name,
//     data.date,
//     data.dayCount,
//     data.companion,
//     data.teamCount,
//     data.tourType,
//     data.guide,
//     data.wishlist,
//     data.luxuryTier,
//     data.starRating,
//     data.importance,
//     data.message,
//     data.email,
//     data.number,
//     data.from,
//     data.city,
//     data.reference,
//     data.enquiryDate,
//   ])
//   return ContentService.createTextOutput(
//     JSON.stringify({ success: true, message: "Successfully submitted." })
//   ).setMimeType(ContentService.MimeType.JSON)
// }
