function convertToNepali() {
    let gregorianYear = parseInt(document.querySelector("#gregorianYear").value);
    let gregorianMonth = parseInt(document.querySelector("#gregorianMonth").value) - 1;
    let gregorianDay = parseInt(document.querySelector("#gregorianDay").value);

    let date = new Date(parseInt(gregorianYear), parseInt(gregorianMonth), parseInt(gregorianDay));
    let nepDate = new NepaliDate(date);

    // let result = "Nepali date: " + nepDate.getDay() + " " + nepDate.getMonth() + " " + nepDate.getYear();

    document.querySelector("#result").innerHTML = nepDate.format('ddd DD, MMMM YYYY', 'np');
}

window.onload = function() {
    const today = document.getElementById("today");
    let todayDate = new NepaliDate(new Date());
    today.innerHTML = todayDate.format('To\\day is ddd DD, MMMM YYYY');
}