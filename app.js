setInterval(setClock,1000)



hourHand= document.querySelector('[data-hour-hand]')
minuteHand= document.getElementById('mins')
secondHand= document.querySelector('[data-sec-hand]')
console.log(minuteHand)
function setClock(){
    currentDate = new Date()

    secondsRatio = currentDate.getSeconds() / 60
    minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60
    hoursRatio = (minuteRatio + currentDate.getHours()) / 12

    setRotation(hourHand,hoursRatio)
    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minuteRatio)
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
  
    
    
    
}



