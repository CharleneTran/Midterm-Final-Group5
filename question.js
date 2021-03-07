function questionPage(id,quiz_src,quesion_number,question,mid_img,choice_id)
{
    return`
    <div id="${id}>
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
        <div id="${choice_id}" style="
            display: flex;
            justify-content: space-between;
            width: 280px;
        ">
            <div class="box">454.9</div>
            <div class="box">367.9</div>
        </div>
        <div id="${choice_id}" style="
            display: flex;
            justify-content: space-between;
            width: 280px;
        ">
            <div class="box">550</div>
            <div class="box">500</div>
        </div>
        </div>
        </div>
    </div>
    `
}