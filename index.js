const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let textLeft = document.getElementById("textLeft")
let textRight = document.getElementById("textRight")
let btnGenerate = document.getElementById("btn-generate")
let maxChars = 15

btnGenerate.addEventListener("click", function(){
    textLeft.textContent = randomPasGen()
    textRight.textContent = randomPasGen()
})

function randomPasGen(){
        let newPassword = ""
    for (let i = 0; i < maxChars; i++){
        let randomNumber = Math.floor(Math.random() * characters.length)
        newPassword += characters[randomNumber]
    }
    return newPassword
}
