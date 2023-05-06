let x
let date = new Date(1997, 7, 29, 10, 30)

// x = date.valueOf()
// x = date.getFullYear()
// x = date.getMonth() // Month is zero based
// x = date.getDate()
// x = date.getDay()
// x = date.getHours() // Hours are 10 based
// x = date.getMinutes()
// x = date.getSeconds()
// x = Intl.DateTimeFormat('en-US').format(date)

//New recommended option to do it
x = date.toLocaleDateString('en-GB', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZone: 'Europe/Sofia',
  //https://en.wikipedia.org/wiki/List_of_tz_database_time_zones - For time zones
})

console.log('Logged Output x:', x, '\n\n\nLogged Output type of x:', typeof x)
