let controller = {
  brand: "Amazon Alexa",
  color: "black",
  shape: "oval",
  price: 29.99,
  buttons: []
}

let buttonsList = [
  {
    name: "microphone",
    color: "black and white",
    position: "top-center",
    funtion: "starts recording",
    pressed: false
  },
  {
    name: "play",
    color: "black and white",
    position: "middle-center",
    function: "plays recording",
    pressed: false
  },
  {
    name: "rewind",
    color: "black and white",
    position: "middle-left",
    funtion: "rewinds recording",
    pressed: false
  },
  {
    name: "fast-forward",
    color: "black and white",
    position: "middle-right",
    funtion: "fast-forwards recording",
    pressed: false
  },
  {
    name: "up-arrow",
    color: "black and white",
    position: "middle-top",
    function: "moves cursor up",
    pressed: false
  },
  {
    name: "down-arrow",
    color: "black and white",
    position: "middle-bottom",
    function: "moves cursor down",
    pressed: false
  }
]

controller.buttons.push(buttonsList[1]);

console.log(controller.buttons);