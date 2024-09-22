function setElementVisibility(currentEleID, targetEleID){

    const currentEle = document.getElementById(currentEleID)
    currentEle.style.display = "none"

    const targetEle = document.getElementById(targetEleID)
    targetEle.style.display = "block"
}