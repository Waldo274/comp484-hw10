$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.dust-button').click(clickedDustButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Mochi", weight:10, happiness:50};
  
    function clickedTreatButton() {
      pet_info.happiness += 10;
      pet_info.weight += 2;
      $('.pet-message').text("Mochi: Yum! I love treats!");
      animatePetMessage();
      checkAndUpdatePetInfoInHtml();
    }

    function clickedPlayButton() {
      pet_info.happiness += 10;
      pet_info.weight -= 1;
      $('.pet-message').text("Mochi: Wheee! This is fun!");
      animatePetMessage();
      checkAndUpdatePetInfoInHtml();
    }

    function clickedExerciseButton() {
      pet_info.happiness -= 5;
      pet_info.weight -= 2;
      $('.pet-message').text("Mochi: I'm getting tired!");
      animatePetMessage();
      checkAndUpdatePetInfoInHtml();
    }

    function clickedDustButton() {
      pet_info.happiness += 15;
      $('.pet-message').text("Mochi: My fur feels so fluffy!");
      animatePetMessage();
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      console.log("Mochi stats updated", pet_info.weight, pet_info.happiness);
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info.weight < 0) {
          pet_info.weight = 0;
      }

      if (pet_info.happiness < 0) {
          pet_info.happiness = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      // jQuery .add() combines the weight and happiness elements
      // into one selection so both can be highlighted together.
      $('.weight').add('.happiness').css('color', '#e67e22');
    }

    function animatePetMessage() {
    $('.pet-message')
    .clearQueue()
        .queue(function(next) {
            // jQuery .queue() adds this function to the
            // animation queue so the message can react in sequence.
            $(this).css('color', '#e67e22');
            next();
        })
        .delay(500)
        .queue(function(next) {
            $(this).css('color', '#333333');
            next();
        });
}
  
// HW10: Chrome DevTools demonstrations
function demoLogs() {
  console.group("Mochi diagnostics");
  console.info("Mochi: game information");
  console.log("Mochi: current weight", pet_info.weight);
  if (pet_info.happiness < 60) {
    console.warn("Mochi: happiness below 60");
  }
  console.error("Mochi: invalid action (simulated)");
  console.table([pet_info]);
  console.log("%cMochi DevTools", "color: orange; font-size: 18px; font-weight: bold;");
  console.groupEnd();
}

function demo404() {
  var missingImage = new Image();
  missingImage.src = "images/missing-mochi.jpg";
}

function demoTypeError() {
  var missingPet;
  console.log(missingPet.name);
}

function demoViolation() {
  var start = performance.now();
  while (performance.now() - start < 250) {
    // Intentionally block the click handler for a short demonstration.
  }
}

document.getElementById("demo-logs").addEventListener("click", demoLogs);
document.getElementById("demo-404").addEventListener("click", demo404);
document.getElementById("demo-typeerror").addEventListener("click", demoTypeError);
document.getElementById("demo-violation").addEventListener("click", demoViolation);
