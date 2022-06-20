const jsQR = require("jsqr");

self.addEventListener("message", function (e) {
  const input = e.data;

  switch (input.cmd) {
    case "init":
      init();
      break;
    case "process":
      process(input);
      break;
    default:
      console.log("Unknown command for QRCode worker.");
      break;
  }
});

function init() {
  // nothing to do
}

function process(input) {
  let result = false;
  try {
    result = jsQR(input.imageData.data, input.width, input.height, {
      inversionAttempts: "attemptBoth",
    });
  } catch (e) {}

  postMessage(result);
}
