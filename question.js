function questionPage(id,quiz_src,quesion_number,question,mid_img,choice_id1,choice_id2,value1,value2,value3,value4)
{
    return`
    <div id="${id}">
        <div class="bg">
        <div class="container">
            <img src="${quiz_src}" alt="" style="
            width:100px;
            height:100px;
            ">
            <p class="quiz-p" style="
            font-weight: bold;
            font-size: 20px;
            text-align:center;
            ">
            <span style="
            color: orange;
            ">${quesion_number}</span> ${question}
            </p>
            <img src="${mid_img}" alt="" style="
            width:100px;
            height:100px;
            ">
            <div id="${choice_id1}" style="
            display: flex;
            justify-content: space-between;
            width: 280px;value
            ">
            <div class="box" onclick="wrong()">${value1}</div>
            <div class="box" onclick="wrong()">${value2}</div>
            </div>
            <div id="${choice_id2}" style="
            display: flex;
            justify-content: space-between;
            width: 280px;
            ">
            <div class="box" onclick="correct()">${value3}</div>
            <div class="box" onclick="wrong()">${value4}</div>
            </div>
        </div>
        </div>
    </div>
    `
}