let btnIndex;
let btnTip = 15;
let btns = document.querySelectorAll('.btn');
let btnReset = document.querySelector('.btn_big');
let inputBill = document.querySelector('.bill');
let inputTip  = document.querySelector('.btn_input');
let inputPeople  = document.querySelector('.number-of-people');
let tipStr = document.querySelector('.tip');
let totalStr = document.querySelector('.total');
let inputs = document.querySelectorAll('input');
let bill;
let tip;
let people;

function showResultCalc(bill = 8, tip = 15, people = 1) {
  let tipSum = (bill / 100 * tip)
  let resultTip =  (tipSum / people).toFixed(2)
  let resultTotal = ((Number(bill) + Number(tipSum)) / people).toFixed(2)

  if (isNaN(resultTip) === true || isFinite(resultTip) === false) {
    tipStr.innerHTML = `$0.00`
  } else {
    tipStr.innerHTML = `$${resultTip}`
  }

  if (isNaN(resultTotal) === true || isFinite(resultTotal) === false) {
    totalStr.innerHTML = `$0.00`
  } else {
    totalStr.innerHTML = `$${resultTotal}`
  }

  errorChecking(bill, tip, people)
}

function errorChecking(bill, tip, people) {
  let arrValue = [bill, tip, people]

  for (let i = 0; i < arrValue.length; i++) {
    if (arrValue[i] < 0 || isFinite(arrValue[i]) === false || isNaN(arrValue[i]) === true)  {
      totalStr.innerHTML = `$0.00`
      tipStr.innerHTML = `$0.00`
    }
  }
}

showResultCalc(inputBill.value, btnTip, inputPeople.value)

let errorMessages = document.querySelectorAll('.error')

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', function() {
    for (let j = 0; j < errorMessages.length; j++) {
      if (parseInt(inputs[i].value) <= 0) {
        if (i === 0) {
          errorMessages[0].style.display = 'block'
          inputs[0].style.border =  '2px solid #BE7C6E'
        } else if (i === 2) {
          errorMessages[1].style.display = 'block'
          inputs[2].style.border =  '2px solid #BE7C6E'
        } 

        if (inputs[1].value < 0) {
          inputs[1].style.border =  '2px solid #BE7C6E'
        }
      } else {
        inputs[i].style.border =  'none'
        errorMessages[j].style.display = 'none'
      }
    } 
    bill = inputBill.value
    
    if (inputTip.value === '') {
      tip = btnTip
    } else {
      tip = inputTip.value
    }

    people = inputPeople.value
    showResultCalc(bill, tip, people)
  })
}

function btnClick() {
  for (let i = 0; i < btns.length; i++) {
    if (i === btnIndex) {
      btns[i].classList.add('btn_active')
      btnTip = parseInt((btns[i].innerHTML), 10)
    } else {
      btns[i].classList.remove('btn_active')
    }

    showResultCalc(bill, btnTip, people)
  }
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

function changeColor(elem) {
  elem.style.backgroundColor = '#F3F8FB'
  elem.style.border = '2px solid #5CA99F'
}

// btnReset.addEventListener('click', function() {
//   inputBill.value = ''
//   inputTip.innerHTML = ''
//   inputPeople.value = ''
//   tipStr.innerHTML = `$0`
//   totalStr.innerHTML = `$0`
// })
