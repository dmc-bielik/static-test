const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")

function changeDisplay(div, list) {
  for (const element of list) {
    if (div === element) {
      element.style.display = "flex"
    } else {
      element.style.display = "none"
    }
  }
}

const divList = [div1, div2]

button1.addEventListener("click", function() {
  changeDisplay(div1, divList)
})

button2.addEventListener("click", function() {
    changeDisplay(div2, divList)
  })