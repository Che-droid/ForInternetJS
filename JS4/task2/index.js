TweenMax.set('#rect', {x: -200})
TweenMax.set('#text', {x: -1})

TweenMax.to('#circle', 1.5, {x:-750, y:432, ease: Power0.easeNon, onComplete: () => {
  TweenMax.to('#circle', 1, {x:-1555, y:-70, ease: Power0.easeNone})
}})