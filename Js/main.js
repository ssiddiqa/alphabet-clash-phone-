console.log('connected')
function getRandomAlphabet() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const rand = alphabet.split('')
    const randNum = Math.random() * 25
    const index = Math.round(randNum);
    const resValue = rand[index]
    return resValue
}

function getElement(elementId) {
    const val = document.getElementById(elementId)
    return val
}

function hide(elementId) {
    const hd = getElement(elementId)
    hd.classList.add('hidden')
}
function show(elementId) {
    const sh = getElement(elementId)
    sh.classList.remove('hidden')
}

function setValue(elementId, value) {
    const val = document.getElementById(elementId)
    val.innerText = value
}
function getValue(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText
    const score = parseInt(text)
    return score
}


function startGame() {
    const alphabet = getRandomAlphabet()
    const current = document.getElementById('screen')
    console.log(current.innerText)
    current.innerText = alphabet
}

function letsPlay() {
    hide('home')
    hide('finalRes')
    show('playGround')
    setValue('life', 5)
    setValue('score', 0)
    startGame()
}

function gameOver() {
    hide('playGround')
    show('finalRes')
    const score = document.getElementById('score').innerText
    setValue('result-final', score)
    const current = document.getElementById('screen').innerText
}


const btns = document.querySelectorAll('#btn')
for (const btn of btns) {
    btn.addEventListener('click', function (e) {
        const current = getElement('screen').innerText
        const later = e.target.innerText
        const expect = current.toLocaleLowerCase()

        if (later == expect) {
            const curScore = getValue('score')

            const newScore = curScore + 1
            setValue('score', newScore)
            startGame()
        } else {
            const currentScore = getValue('life')
            const newScore = currentScore - 1
            setValue('life', newScore)
            if (newScore == 0) {
                gameOver()
            }
        }
    })
}
