import './style.css'

const onMasatoClick = () => {
    window.location.href = 'https://heyzine.com/flip-book/79bb6a9f2a.html'
}

const onMasumiClick = () => {
    window.location.href = 'https://heyzine.com/flip-book/cd7d15690e.html'
}

const main = async () => {
    const $masato = document.querySelector('div#masato')!
    $masato.addEventListener('click', () => {
        onMasatoClick()
    })
    const $masumi = document.querySelector('div#masumi')!
    $masumi.addEventListener('click', () => {
        onMasumiClick()
    })

    const audio = new Audio('/audio/ost_characters.mp3')
    audio.volume = 0.02

    document.addEventListener('DOMContentLoaded', () => {
        audio.play()
    })

    window.addEventListener('beforeunload', () => {
        audio.pause()
        audio.currentTime = 0
    })
}

main()