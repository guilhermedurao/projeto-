input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playMelody("C5 D B E G F C A ", 40)
    music.playMelody("B F G E D A C5 G ", 40)
    music.playMelody("G F B D A G C5 C ", 40)
})
led.plot(0, 1)
led.toggle(3, 1)
led.unplot(4, 3)
basic.forever(function () {
    basic.showNumber(10 * 10)
})
