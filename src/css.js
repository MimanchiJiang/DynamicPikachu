const string = `.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.skin *::after {
    box-sizing: border-box;
}

.skin *::before {
    box-sizing: border-box;
}

.skin {
    position: relative;
    background: #ffe600;
    height: 100vh;
}

.all {
    position: absolute;
    top: 100px;
    left: 50%
}

.circle {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
}

.nose {
    border: 10px solid black;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    border-color: black transparent black transparent;
    border-bottom: none;
    z-index: 10;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(8deg);
    }

    50% {
        transform: rotate(0deg);
    }

    75% {
        transform: rotate(-8deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}

.eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}


.eye::before {
    content: '';
    border: 3px solid black;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: block;
    background: #fff;
    position: relative;
    left: 8px;
    top: 5px;
}

.eye.left {
    transform: translateX(-100px);

}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
    top: 0px;
}

.mouth .up .lip.right {
    transform: rotate(14deg) translateX(53px);
    border-radius: 0 0 50px 0;
}

.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
}

.mouth .up .lip.left::before {
    width: 10px;
    height: 35px;
    right: -5px;
}

.mouth .up .lip.right::before {
    width: 7px;
    height: 30px;
    left: -6px;
}

.mouth .up .lip::before {
    position: absolute;
    content: '';
    display: block;
    bottom: 0px;
    background: #ffe600;
}

.mouth .down {
    height: 130px;
    width: 100%;
    position: absolute;
    top: 0px;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 2px solid black;
    height: 1000px;
    width: 150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;

}



.mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -210px;
    background: #ff485f;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
}



.face>img {
    position: absolute;
    top: 50%;
    left: 50%;

}

.face.left>img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}

.face.left {
    transform: translateX(-180px);
    border-radius: 50%;
    background: red;
}

.face.right {
    transform: translateX(180px);
    border-radius: 50%;
    background: red;
}


.ball {
    transform-origin: center bottom;
    animation: shake 1s infinite linear;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 70%;
    top: 80%;
    box-shadow: 1px 1px 2px black
}

.ball::before {
    content: '';
    display: block;
    height: 50px;
    background: red;
    border-bottom-color: black;
    border-bottom: 3px solid black;
}

.ball::after {
    content: '';
    display: block;
    height: 50px;
    background: white;
    border-top-color: black;
    border-top: 3px solid black;
}

.ball_in {
    border: 1px solid black;
    height: 30px;
    width: 30px;
    position: absolute;
    left: 50%;
    margin-left: -15px;
    top: 33px;
    background: #000;
    border-radius: 50%;
}

.ball_inn {
    position: absolute;
    border: 3px solid white;
    height: 20px;
    width: 20px;
    left: 15%;
    top: 4px;
    background: #fff;
    border-radius: 50%;
}
.ball_inn::before {
    content: '';
    display: block;
    position: absolute;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    left: 0px;
    top: 0.5px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
}
@keyframes ball {
    0% {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(15deg);
    }

    40% {
        transform: rotate(0deg);
        box-shadow: 1px 1px 2px red, 0 0 25px red, 0 0 5px darkred;

    }

    60% {
        transform: rotate(-15deg);
    }

    80% {
        transform: rotate(5deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.ball:hover {
    transform-origin: center bottom;
    animation: ball 2s infinite linear;
}
@keyframes shake {
    0% {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(2deg);

    }

    40% {
        transform: rotate(0deg);

    }

    60% {
        transform: rotate(-2deg);

    }

    80% {
        transform: rotate(0deg);

    }

    100% {
        transform: rotate(0deg);
    }
}
`

export default string