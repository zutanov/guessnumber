const title = document.querySelector('.guess__title')
const inp = document.querySelector('.guess__inp')
const btn = document.querySelector('.guess__btn')
const hint = document.querySelector('.guess__hint')
const answer = document.querySelector('.guess__answer')
const previous = document.querySelector('.guess__previous')

const colors = ['red', 'orange', 'green']
let i = 0
let num = null
let attempts = [`Try: `]
const guessedNumber = Math.ceil(Math.random()*20)

setInterval (()=> {   
    title.style.background = colors[i++]
    if ( i === colors.length) {
        return i = 0
    }
}, 1000)

const pressEnter = (e) => {
    if (e.key === 'Enter') {
        submitter()
    }
}

const attemptsWriter = () => {
    attempts = attempts.concat(num)
    previous.innerText = attempts.join(' ')
}

const hintWriter = () => {
    if (num > guessedNumber) {
        hint.innerText = 'You number is greater'
    } else if (num < guessedNumber)  {
        hint.innerText = 'You number is less'
    } else if (num === guessedNumber) {
        hint.innerText = ""
    }
}

const reloader = () => {    
        btn.innerText = 'Try Again'
        btn.style.background = 'orange'
        inp.removeEventListener('keypress', pressEnter)
        btn.removeEventListener('click', submitter)
        btn.addEventListener('click', () => {
            document.location.reload()            
        })
}

const submitter = () => {
        if (num === null) {
        hint.innerText = 'Enter a number!'
        hint.style.color = 'red'
        answer.innerText = "Wrong!"
        answer.style.color = 'red'
    } 
    else if (num === guessedNumber) {
        hint.innerText = 'Congrarulations, You Win!'
        hint.style.color = 'green'
        answer.innerText = "Right!"
        answer.style.color = 'green'
        inp.value = ''
        reloader()                      
    } else {
        if (attempts.length > 4) {
        reloader()
        }
        inp.value = ''
        answer.innerText = "Wrong!"
        answer.style.color = 'red'
        hintWriter()
        attemptsWriter()

    } 
}

inp.addEventListener('input', (e) => {
    num = Number(e.target.value)  
  })
inp.addEventListener('keypress', pressEnter)
btn.addEventListener('click', submitter)

console.log(guessedNumber)