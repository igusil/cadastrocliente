// Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password"); /* botao que gera a senha */
const generatedPasswordElement = document.querySelector("#generated-password");


//Funções
//Letras, Numeros e Simbolos
const getLetterLowerCase = () => {

return String.fromCharCode(Math.floor(Math.random() * 26) + 97);       /*pegar do objeto String o metodo .fromCharCode*/
};

const getLetterUpperCase = () => {

return String.fromCharCode(Math.floor(Math.random() * 26) + 65);       /*pegar do objeto String o metodo .fromCharCode*/
};

const getNumber = () => {
  return Math.floor(Math.random() *10).toString();
};

const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%&*+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

  let password = ""

  //    segunda versão
  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  ]

  for(i = 0; i < passwordLength; i = i + 4) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }

  password = password.slice(0, passwordLength);

  generatedPasswordElement.style.display = "block"
  generatedPasswordElement.querySelector("h4").innerText = password;
};

//Eventos
/* evento do botao que dispara geração de senha */
generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});
