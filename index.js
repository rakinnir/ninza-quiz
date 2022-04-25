// const btn = document.querySelector(".btn")
const result = document.querySelector(".result")
const form = document.querySelector(".quiz-form")
const showResult = document.querySelector(".show-result")
const correctAnswers = ["B", "B", "B", "A"]

// triggering form element 
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let score = 0
  const givenAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ]
  givenAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25
    }
  })

  // show hidden result 
  scrollTo(0, 0)
  result.classList.remove("d-none")

  // get result with animation 
  let output = 0
  const timer = setInterval(() => {
    showResult.textContent = `${output}%`
    if (output === score) {
      clearInterval(timer)
    } else {
      output++
    }
  }, 10)
})
