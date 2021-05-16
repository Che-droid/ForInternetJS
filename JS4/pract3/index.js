const photos = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
  ]
  
  const $imgTag = document.getElementById('slider')
  
  const sliderGo = () => {
    let photoIndex = 0
  
    setInterval(() => {
      $imgTag.setAttribute('src', photos[photoIndex])
      photoIndex++
      
      if(photoIndex > 2) {
        photoIndex = 0
      }
    }, 1000)
  }
  
  sliderGo()  