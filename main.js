function enterName() {
  let nameInput = document.getElementById('name');
  let name = nameInput.value;
  let funnyName = document.getElementById('funny-name');
  let adjectives = ['Creepy', 'Amazing', 'Jealous', 'Funny', 'Hairy', 'Gross', 'Brave', 'Bored', 'Brainy', 'Bright', 'Careful']
  let randomItem = adjectives[Math.floor(Math.random() * adjectives.length)];

  funnyName.innerText = (name + ' is ' + randomItem);
}