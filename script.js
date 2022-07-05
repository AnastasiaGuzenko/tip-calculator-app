let btns = document.querySelectorAll('.btn');
let btnIndex;
let btnReset = document.querySelector('.btn_big');

let inputBill = document.querySelector('.bill')
let inputTip  = document.querySelector('.btn_input')
let inputPeople  = document.querySelector('.number-of-people');

let tipStr = document.querySelector('.tip')
let totalStr = document.querySelector('.total')

let inputs = document.querySelectorAll('input')

function showResultCalc(bill = 8, tip = 15, people = 1) {
  let tipSum = (bill / 100 * tip)
  let resultTip =  (tipSum / people).toFixed(2)
  let resultTotal = ((Number(bill) + Number(tipSum)) / people).toFixed(2)

  tipStr.innerHTML = ` $${resultTip}`
  totalStr.innerHTML = ` $${resultTotal}`
}

showResultCalc()

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', function() {
    let bill = inputBill.value
    let tip = inputTip.value
    let people = inputPeople.value
  
    showResultCalc(bill, tip, people)
  })
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    if (btnIndex == i) {
      btnIndex = null
    } else {
      btnIndex = i
    }
    btnClick()
  })
  
}

function btnClick() {
  for (let i = 0; i < btns.length; i++) {
    if (i == btnIndex) {
      btns[i].classList.add('btn_active')
    } else {
      btns[i].classList.remove('btn_active')
    }
  }
}

function changeColor(elem) {
  elem.style.backgroundColor = '#F3F8FB'
  elem.style.border = '2px solid #5CA99F'
}

btnReset.addEventListener('click', function() {
  inputBill.value = ''
  inputTip.innerHTML = ''
  inputPeople.value = ''
})


