(async () => {
  let data = await fetch('./dataURI.txt')

  fetch(data).then(response => response.blob()).then(newD => {
    const uri = (URL.createObjectURL(newD))
    const bruh = document.querySelector("a")
    console.log(uri)
    bruh.setAttribute("href", uri)
  })
})()
