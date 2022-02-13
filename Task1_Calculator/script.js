let answer=document.getElementById("output");
function print(num){
    answer.value+=num;
}
function ON(){
    answer.value="";
}
function del(){
    answer.value=answer.value.slice(0,-1);
}
function Cal(){
    try{
        answer.value=eval(answer.value);
    }
    catch(err){
        alert("Invalid")
    }
}
