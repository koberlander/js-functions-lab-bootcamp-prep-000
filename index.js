// write your code below!

var name;
var holiday;
var days;

function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  name = "you";
  return "Happy holidays, ${name}!";
}

function happyHolidayTo(holiday, name){
  holiday = "Independence Day";
  name = "you";
  return "Happy ${holiday}, ${name}!";
}

function holidayCountdown(holiday, days){
 days = 20;
 holiday = "Mother's Day"; 
  return "It's ${days} days until ${holiday}!";
}