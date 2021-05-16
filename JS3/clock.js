function clock(){
function checkTime(i) {
    if (i < 10) {
      i = '0' + i
    }
    return i
  }
  
  function startTime() {
    let tm = new Date()
    let h = tm.getHours()
    let m = tm.getMinutes()
    let s = tm.getSeconds()
    m = checkTime(m)
    s = checkTime(s)
    document.getElementById('clockDiv').innerHTML = h + ':' + m + ':' + s
    t = setTimeout(startTime, 500)
  }
  
  startTime()
}