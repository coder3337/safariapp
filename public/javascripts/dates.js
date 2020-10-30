exports.dateYesterday = function() {
  return dateYesterday = new Date(),
  dateYesterday.getDate() - 1,
  dateYesterday.toISOString().slice(0, 10);
};
exports.today = function() {
  return today = new Date(),
  today.toISOString().slice(0, 10);
};

exports.dayYesterday = function() {
  return dayYesterday = new Date(),
  dayYesterday = new Date(),
  days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ],
  dayYesterday.setDate(dayYesterday.getDate() - 1),
  dayYesterday = days[dayYesterday.getDay()];
};


exports.dateTomorrow = function() {
  return dateTomorrow = new Date(),
  dateTomorrow.setDate(dateTomorrow.getDate() + 1),
  dateTomorrow.toISOString().slice(0, 10);
};

exports.dayTomorrow = function() {
  return dayTomorrow = new Date(),
  futureDays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ],
  dayTomorrow.setDate(dayTomorrow.getDate() + 1),
  dayTomorrow = futureDays[dayTomorrow.getDay()];
};


let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}
document.getElementById('demo').innerHTML = 'Today is ' + day;


