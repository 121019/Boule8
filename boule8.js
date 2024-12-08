let userName = "";

let userQuestion = "";

//8 questions
function nextAnswer() {
  let randomNumber = Math.floor(Math.random() * 8);

  let eightBall = "";

  const answer = document.querySelector(".answer");

  //Boucle
  switch (randomNumber) {
    case 0:
      eightBall = "Peut-être que oui peut-être que non";
      break;
    case 1:
      eightBall = "T a rêvé";
      break;
    case 2:
      eightBall = "Reviens plus tard je dors";
      break;
    case 3:
      eightBall = "Mais oui oh la la tu me reveilles pour ça !!!";
      break;
    case 4:
      eightBall = "Compte pas la dessus";
      break;
    case 5:
      eightBall = "Yes yes yes";
      break;
    case 6:
      eightBall = "Les perspectives ne sont pas bonnes";
      break;
    case 7:
      eightBall = "j aimerais tellement te dire oui...mais pas envie !!!";
      break;
  }

  //Pour les réponses
  answer.textContent = eightBall;
  console.log(`The magic eight ball say : ${eightBall}`);
}
