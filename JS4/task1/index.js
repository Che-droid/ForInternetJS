function Formula(xValues) {
    const y = [];
  
    xValues.forEach(xValue => {
      y.push(
        Math.pow(Math.sin(xValue), 3) + Math.pow(Math.cos(xValue), 3)
      )
    });
  
    return y;
  }
  
  function showHideEl(el) {
    let showCount = 0
  
    setInterval(() => {
      showCount % 2 === 0 ? el.style.display = 'flex' : el.style.display = 'none'
      showCount++
    }, 200)
  }
  
  function startMove(values, el) {
    values.forEach((value, index) => {
      const moveRight = (value * 100) < 0 ? (value * 100) : (value * 100) * (-1)
      const moveBottom = (value * 100) < 0 ? (value * 100) : (value * 100) * (-1)
  
      setTimeout(() => {
        el.style.right = moveRight + 'px'
        el.style.bottom = moveBottom + 'px'
      }, 500 * index);
    })
  }
  
  const $el = document.getElementById('movingLine')
  const movingValue = Formula([0.4,3,24,0.7,33,12,9,0]);
  
  startMove(movingValue, $el)
  showHideEl($el)