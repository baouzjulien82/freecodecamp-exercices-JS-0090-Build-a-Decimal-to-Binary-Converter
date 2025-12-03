// Version de base 

// Récupération des éléments HTML par leur ID
    const numberInput = document.getElementById("number-input");
    const convertBtn = document.getElementById("convert-btn");
    const result = document.getElementById("result");

    /**
     * Fonction qui convertit un nombre décimal en binaire
     * @param {number} input - le nombre décimal à convertir
     */
    const decimalToBinary = (input) => {
      // Tableaux pour tracer les étapes de calcul (utile pour debug)
      const inputs = [];
      const quotients = [];
      const remainders = [];

      // Cas particulier : si l'entrée est 0, on affiche directement "0"
      if (input === 0) {
        result.innerText = "0";
        return;
      }

      // Boucle : on divise successivement par 2 jusqu'à ce que le quotient soit 0
      while (input > 0) {
        const quotient = Math.floor(input / 2); // division entière par 2
        const remainder = input % 2;            // reste de la division (0 ou 1)

        // On stocke les valeurs pour suivi
        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);

        // Mise à jour de l'entrée avec le quotient pour continuer la boucle
        input = quotient;
      }

      // Affichage des étapes dans la console (debug)
      console.log("Inputs: ", inputs);
      console.log("Quotients: ", quotients);
      console.log("Remainders: ", remainders);

      // Les restes sont dans l'ordre inverse → on les renverse et on les colle
      result.innerText = remainders.reverse().join("");
    };

    /**
     * Fonction qui vérifie la saisie utilisateur avant conversion
     */
    const checkUserInput = () => {
      // Vérifie si le champ est vide, si ce n'est pas un nombre, ou si c'est négatif
      if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0
      ) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
      }

      // Si la saisie est valide, on lance la conversion
      decimalToBinary(parseInt(numberInput.value));

      // On vide le champ après la conversion
      numberInput.value = "";
    };

    // Événement : clic sur le bouton → lance la vérification et conversion
    convertBtn.addEventListener("click", checkUserInput);

    // Événement : appui sur la touche "Enter" dans l'input → lance la conversion
    numberInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        checkUserInput();
      }
    });


// Version améliorée
/*
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  let binary = "";

  if (input === 0) {
    binary = "0";
  }

  while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input / 2);
  }

  result.innerText = binary;
};

const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
*/

// Vesrion Recursive
/*
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
];

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {

    }, obj.showMsgDelay);
  });
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
*/
