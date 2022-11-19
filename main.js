function addValue(buttonID) {
  const screen = document.getElementById('screen')
  const button = document.getElementById(buttonID)
  screen.innerHTML += button.value
}

function clearScreen() {
  const screen = document.getElementById('screen')
  screen.innerHTML = ''
}

function eraser() {
  const screen = document.getElementById('screen')
  let screenValue = screen.innerHTML
  screenValue = screenValue.substring(0, screenValue.length - 1)
  screen.innerHTML = screenValue
}

function result() {
  const screen = document.getElementById('screen')
  
  try{
    screen.innerHTML = eval(screen.innerHTML)
  }catch(error){
    screen.innerHTML = error;
  }
}

