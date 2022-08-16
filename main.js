const keys = document.querySelectorAll('.key')

// play notes
function playNote(event) {
    let audioKeyCode = getKeyCode(event)

    const key = document.querySelector(`.key[data-key=${audioKeyCode}]`)
    
    const cantFindAnyKeys = !key
    
    if (cantFindAnyKeys) {
        return
    }

    playAudio(audioKeyCode)

}

function getKeyCode(event) {
    let keyCode

    const isKeyDown = event.type === 'keydown'

    if (isKeyDown) {
        keyCode = event.key
    } else {
        keyCode = event.target.dataset.key
    }
    
    return keyCode
    
}

function playAudio(audioKeyCode) {

    const audio = document.querySelector(`audio[data-key=${audioKeyCode}]`)
    audio.currentTime = 0
    audio.play()

}

// click with mouse
keys.forEach((key) => {
    key.addEventListener('click', playNote)
})


// on keyboard down
window.addEventListener('keydown', playNote)