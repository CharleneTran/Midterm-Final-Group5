document.querySelector("#question-page1").innerHTML = questionPage("question-page1","./quiz.png","Q1",": How Many calories does ground beef hamburger have?","./hamburger1.png","choice1","choice2","454.9","367.9","550","500","wrong1","correct1")
document.querySelector("#question-page2").innerHTML = questionPage("question-page2","./quiz.png","Q2",": How much time you need to spend on exercise to burn the total hamburger calories?","./jumping-rope.png","choice1","choice2","2 hours","30 mins","61 mins","10 mins","wrong2","correct2")
document.querySelector("#Next1").innerHTML = NextUI("Next1")
document.querySelector("#Next2").innerHTML = NextUI("Next2")
document.querySelector("#Next3").innerHTML = NextUI("Next3")
document.querySelector("#Next4").innerHTML = NextUI("Next4")
document.querySelector("#Next5").innerHTML = NextUI("Next5")
document.querySelector("#Next6").innerHTML = NextUI("Next6")
document.querySelector("#Next7").innerHTML = NextUI("Next7")
document.querySelector("#Next8").innerHTML = NextUI("Next8")
document.querySelector("#Next9").innerHTML = NextUI("Next9")
document.querySelector("#Next10").innerHTML = NextUI("Next10")
document.querySelector("#Next11").innerHTML = NextUI("Next11")
document.querySelector("#Next12").innerHTML = NextUI("Next12")
document.querySelector("#Next13").innerHTML = NextUI("Next13")
document.querySelector("#Next14").innerHTML = NextUI("Next14")

function Clicked(){
    document.querySelector("#top-firstpage").style.display = "none"
    document.querySelector("#botton-firstpage").style.display = "block"
}

function SecondPage(){
    document.querySelector("#botton-firstpage").style.display = "none"
    document.querySelector("#second-page").style.display = "block"
}

function ThirdPage(){
    document.querySelector("#third-page").style.display = "block"
    document.querySelector("#second-page").style.display = "none"
}

function FourthPage(){
    document.querySelector("#third-page").style.display = "none"
    document.querySelector("#fourth-page").style.display = "block"
}

function FifthPage(){
    document.querySelector("#fifth-page").style.display = "block"
    document.querySelector("#fourth-page").style.display = "none"
}

function SixthPage(){
    document.querySelector("#fifth-page").style.display = "none"
    document.querySelector("#sixth-page").style.display = "block"
}

function SeventhPage(){
    document.querySelector("#seventh-page").style.display = "block"
    document.querySelector("#sixth-page").style.display = "none"
}

function EighthPage(){
    document.querySelector("#seventh-page").style.display = "none"
    document.querySelector("#eighth-page").style.display = "block"
}

function NinethPage(){
    document.querySelector("#nineth-page").style.display = "block"
    document.querySelector("#eighth-page").style.display = "none"
}

function TenthPage(){
    document.querySelector("#nineth-page").style.display = "none"
    document.querySelector("#tenth-page").style.display = "block"
}

function EleventhPage(){
    document.querySelector("#eleventh-page").style.display = "block"
    document.querySelector("#tenth-page").style.display = "none"
}

function TwelfthPage(){
    document.querySelector("#eleventh-page").style.display = "none"
    document.querySelector("#twelfth-page").style.display = "block"
}

function QuizClicked1(){
    document.querySelector("#twelfth-page").style.display = "none"
    document.querySelector("#question-page1").style.display = "block"
}

function correct1(){
    document.querySelector("#question-page1").style.display = "none"
    document.querySelector("#correctanswer1").style.display = "block"
}
function wrong1(){
    document.querySelector("#question-page1").style.display = "none"
    document.querySelector("#wronganswer1").style.display = "block"
}

function BacktoQuiz1(){
    document.querySelector("#question-page1").style.display = "block"
    document.querySelector("#wronganswer1").style.display = "none"
}

function ThirteenthPage(){
    document.querySelector("#correctanswer1").style.display = "none"
    document.querySelector("#thirteenth-page").style.display = "block"
}

function FourteenthPage(){
    document.querySelector("#fourteenth-page").style.display = "block"
    document.querySelector("#thirteenth-page").style.display = "none"
}

function FifteenthPage(){
    document.querySelector("#fourteenth-page").style.display = "none"
    document.querySelector("#fifteenth-page").style.display = "block"
}

function QuizClicked2(){
    document.querySelector("#question-page2").style.display = "block"
    document.querySelector("#fifteenth-page").style.display = "none"
}

function correct2(){
    document.querySelector("#question-page2").style.display = "none"
    document.querySelector("#correctanswer2").style.display = "block"
}
function wrong2(){
    document.querySelector("#question-page2").style.display = "none"
    document.querySelector("#wronganswer2").style.display = "block"
}

function BacktoQuiz2(){
    document.querySelector("#question-page2").style.display = "block"
    document.querySelector("#wronganswer2").style.display = "none"
}

function SixteenthPage(){
    document.querySelector("#correctanswer2").style.display = "none"
    document.querySelector("#sixteenth-page").style.display = "block"
}

function SeventeenthPage(){
    document.querySelector("#seventeenth-page").style.display = "block"
    document.querySelector("#sixteenth-page").style.display = "none"
}

function EighteenthPage(){
    document.querySelector("#seventeenth-page").style.display = "none"
    document.querySelector("#eighteenth-page").style.display = "block"
}