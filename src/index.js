// alert("Welcome to the AI agent");

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: [response.data.answer], 
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault(); 
  let userInput = document.querySelector("#input-form");
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4-line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning.";
  let prompt = `User instructions: Generate a French poem about ${userInput.value}.sign the poem with<strong>'SheCode AL'</strong>at the end`;
  let apiKey = "0a744841eo85af43btc634f9048290bb";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#peom-genetor"); 
poemForm.addEventListener("submit", generatePoem);
