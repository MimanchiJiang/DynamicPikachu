import string from "./css"


const player = {
    n: 1,
    time: 100,
    id: undefined,
    ui: {
        demo1: document.querySelector('#demo1'),
        demo2: document.querySelector('#demo2')
    },
    init: () => {
        player.ui.demo1.innerText = string.substring(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.play()
        player.bindEvents()


    },
    events: {
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnReset': 'reset'
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo1.innerText = string.substring(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 30
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 10
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
}

player.init()







