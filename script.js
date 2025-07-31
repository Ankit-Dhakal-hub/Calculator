let display = document.querySelector("input")

function appendValue(value){
    display.value += value
}

function clearDisplay(){
    display.value = ""
}

function calculator(){
    try{
        display.value = eval(display.value)
    } catch{
        display.value = "Error"
    }
}


document.addEventListener("keydown", function(event){
    const key = event.key;

    if (!isNaN(key) || "+/%-*".includes(key)){
        appendValue(key)
    } else if (key === "Enter") {
        calculator()
    } else if (key.toLowerCase() === "c") {
        clearDisplay()
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1)
    }
})