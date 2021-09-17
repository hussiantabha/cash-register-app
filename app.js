console.log("Linked Mark 10 Cash register app")

let subBtn = document.getElementById("subBtn")
let bill = document.getElementById("billAmt")
let cash = document.getElementById("cashGiven")
let notes = [2000,500,200,100,50,20,10,5,1]
let dispp = document.querySelectorAll(".dispNotes")
function calChange(){
    let billAmt = Number(bill.value);
    let cashAmt = Number(cash.value);
    let changeGiven = cashAmt - billAmt;
    if(billAmt > cashAmt){
        alert("Invalid Amt")
    }
    else{
        for(let i =0;i<notes.length;i++){
            let changingChange = Math.trunc(changeGiven/notes[i])
            changeGiven = changeGiven % notes[i]
            console.log(notes[i] + " " + changingChange)
            dispp[i].innerHTML = changingChange
        }
    }
}
subBtn.addEventListener("click",calChange)
