console.log("Linked Mark 10 Cash register app")

let subBtn = document.getElementById("subBtn")
subBtn.addEventListener("click", ()=>{
    let billAmt = document.getElementById("billAmt").value
    let cashGiven = document.getElementById("cashGiven").value
    console.log(billAmt, cashGiven)    
    let change = cashGiven - billAmt
    let errChange = billAmt - cashGiven
    let notes = [2000,500,200,100,50,20,10,5,1]
    let dispp = document.querySelectorAll(".dispNotes")
    // if(billAmt <= 0){
    //     //console.log("Invalid Amt")
    //     //document.getElementById("dispErr").innerHTML = "Invalid Amount! "
    //     alert("Invalid Amount!")
    // }else{
    //     console.log("valid amount")
    //     if(cashGiven > billAmt){
    //         console.log("Ok!")

    //     }else{
    //         console.log("Give more cash! ")
    //         document.getElementById("dispMsg").innerHTML = "Give more cash= " 
    //     }
    // }
    if(cashGiven < billAmt){
        document.getElementById("dispMsg").innerHTML = "Give more cash"
    }else{
        for(let i = 0; i<notes.length;i++){
            let newChange = Math.trunc(change / notes[i])
            change = change % notes[i]
            dispp[i].innerHTML = newChange
            //console.log(change)
        }
    }

   

})

console.log(3800%2000)
