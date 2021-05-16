TweenMax.set('#ball', {x:10, y:-300})

const ballMove = new TimelineMax({repeat:-1, yoyo:true})
.to('#ball', 1, {x:100, y:-500, ease:Power0.easeNone})
.to('#ball', 1, {x:300, y:-300, ease:Power0.easeNone})
.to('#ball', 1, {x:400, y:0, ease:Power0.easeNone})
.to('#ball', 1, {x:200, y:-200, ease:Power0.easeNone})
.to('#ball', 1, {x:10, y:-300, ease:Power0.easeNone})