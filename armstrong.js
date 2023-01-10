document.getElementById("btn").addEventListener("click",function(){
    let txt = document.getElementById("input-text").value;
    checkPalindrome(txt);
});
function checkPalindrome(txt){
    txt = parseInt(txt);
    var num = txt;
    var sum = 0;
    while(txt!=0){
        var digit = Math.floor(txt%10);
        var cube = digit*digit*digit;
        sum = sum+cube;
        txt = Math.floor(txt/10);
    }
    if(num!==sum){
        result.textContent="Nope not a Armstrong";
        return;
    }
    result.textContent = "Yes ! Armstrong";
}