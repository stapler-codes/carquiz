var score = 0
function hide()
{
    document.getElementById("question1_div").style.display = "block";
    document.getElementById("question2_div").style.display = "none";
    document.getElementById("question3_div").style.display = "none";
    document.getElementById("question4_div").style.display = "none";
    document.getElementById("question5_div").style.display = "none";
    document.getElementById("restart").style.display = "none";
}
function check_question1()
{
    if (document.getElementById("question1_input").value == "1000hp" || document.getElementById("question1_input").value == "1000Hp" || document.getElementById("question1_input").value == "1000HP" || document.getElementById("question1_input").value == "1000" || document.getElementById("question1_input").value == "1000 hp" || document.getElementById("question1_input").value == "1000 HP" || document.getElementById("question1_input").value == "1000 Hp")
    {
        score += 1
        document.getElementById("question1_div").style.display = "none";
        document.getElementById("question2_div").style.display = "block";
        document.getElementById("score_text").innerHTML = "Score: " + score
    }
    else
    {
        score += 0
        document.getElementById("question1_div").style.display = "none";
        document.getElementById("question2_div").style.display = "block";
    }
}
function check_question2()
{
    if (document.getElementById("question2_input").value == "Nissan Skyline R34 GTR" || document.getElementById("question2_input").value == "nissan skyline r34 gtr" || document.getElementById("question2_input").value == "Nissan skyline r34 gtr")
    {
        score += 1
        document.getElementById("question2_div").style.display = "none";
        document.getElementById("question3_div").style.display = "block";
        document.getElementById("score_text").innerHTML = "Score: " + score
    }
    else
    {
        score += 0
        document.getElementById("question2_div").style.display = "none";
        document.getElementById("question3_div").style.display = "block";
    }
}
function check_question3()
{
    if (document.getElementById("question3_input").value == "Naturally Aspirated V12" || document.getElementById("question3_input").value == "Naturally aspirated v12" || document.getElementById("question3_input").value == "Naturally aspirated v12" || document.getElementById("question3_input").value == "naturally aspirated v12")
    {
        score += 1
        document.getElementById("question3_div").style.display = "none";
        document.getElementById("question4_div").style.display = "block";
        document.getElementById("score_text").innerHTML = "Score: " + score
    }
    else
    {
        score += 0
        document.getElementById("question3_div").style.display = "none";
        document.getElementById("question4_div").style.display = "block";
    }
}
function check_question4()
{
    if (document.getElementById("question4_input").value == "Flat 6" || document.getElementById("question4_input").value == "Flat Six" || document.getElementById("question4_input").value == "flat 6" || document.getElementById("question4_input").value == "flat six" || document.getElementById("question4_input").value == "FLAT SIX")
    {
        score += 1
        document.getElementById("question4_div").style.display = "none";
        document.getElementById("question5_div").style.display = "block";
        document.getElementById("score_text").innerHTML = "Score: " + score
    }
    else
    {
        score += 0
        document.getElementById("question4_div").style.display = "none";
        document.getElementById("question5_div").style.display = "block";
    }
}
function check_question5()
{
    if (document.getElementById("question5_input").value == "Toyota Corolla" || document.getElementById("question5_input").value == "Toyota corolla" || document.getElementById("question5_input").value == "toyota corolla" || document.getElementById("question5_input").value == "TOYOTA COROLLA")
    {
        score += 1
        document.getElementById("question4_div").style.display = "none";
        document.getElementById("question5_div").style.display = "block";
        document.getElementById("score_text").innerHTML = "Score: " + score
    }
    else
    {
        score += 0
        document.getElementById("question5_div").style.display = "none";
        document.getElementById("score_text").style.position = "absolute";
        document.getElementById("score_text").style.top = "25%";
        document.getElementById("score_text").style.left = "45%";
        document.getElementById("restart").style.display = "block";
        document.getElementById("restart").style.position = "absolute";
        document.getElementById("restart").style.top = "45%";
        document.getElementById("restart").style.left = "40%";
    }
}
function restart()
{
    score = 0
    document.getElementById("restart").style.display = "none";
    document.getElementById("score_text").style.position = "absolute";
    document.getElementById("score_text").style.top = "-7%";
    document.getElementById("score_text").style.left = "70%";
    document.getElementById("question1_div").style.display = "block";
}