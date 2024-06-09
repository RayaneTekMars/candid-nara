import './style.css'

const $first = document.querySelector('div#first')!
const $second = document.querySelector('div#second')!
const $third = document.querySelector('div#third')!

const displayLanding = () => {
    $second.innerHTML = `<img src="/shikamaru.gif" id="gif" />`
    const $gif = document.querySelector('img#gif')!
    const audioJutsu = new Audio('/audio/jutsu.mp3')
    audioJutsu.volume = 0.2
    audioJutsu.play()
    setTimeout(() => {
        displayShadowZone()
        $gif.remove()
    }, 1080)
}

const displayShadowZone = () => {
    $second.remove()
    $third.classList.remove('hidden')
    $third.classList.add('flex')

    let spaceClickedNumber = 0
    const maxClicks = 6
    const $progressBar = document.querySelector('#progress-bar') as HTMLDivElement

    const spaceHandler = (event: KeyboardEvent) => {
        if (event.key != ' ') return;

        spaceClickedNumber++
        const progress = Math.min((spaceClickedNumber / maxClicks) * 100, 100)
        $progressBar.style.width = `${progress}%`

        if (spaceClickedNumber >= maxClicks) {
            // redirect to the next page
            window.location.href = '/characters.html'
            document.removeEventListener('keydown', spaceHandler)
        }
    }

    document.addEventListener('keydown', spaceHandler)
}

const main = async () => {
    const $buttonStart = document.querySelector('button#start')!

    const audioShikamaru = new Audio('/audio/ost_shikamaru.mp3')
    audioShikamaru.volume = 0.03

    document.addEventListener('DOMContentLoaded', () => {
        audioShikamaru.play()
    })

    $buttonStart.addEventListener('click', () => {
        audioShikamaru.pause()
        audioShikamaru.currentTime = 0
        $first.remove()
        displayLanding()
    })
}

main()
