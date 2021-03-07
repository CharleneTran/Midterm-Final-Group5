function Clicked(){
    document.querySelector("#top-firstpage").style.display = "none"
    document.querySelector("#botton-firstpage").style.display = "block"
}


document.querySelector("#question-page1").innerHTML = questionPage("question-page1","./quiz.png","Q1",": How Many calories does ground beef hamburger have?","./hamburger1.png","choice1","choice2")
document.querySelector("#question-page2").innerHTML = questionPage("question-page2","./quiz.png","Q2",": How much time you need to spend on exercise to burn the total hamburger calories?","./jumping-rope.png","choice1","choice2")
