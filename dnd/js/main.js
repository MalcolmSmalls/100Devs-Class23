//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let choice = document.querySelector('input').value
  if(choice.includes(" ") === true){
    choice = choice.split(" ").join("-")
  }
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)
       document.querySelector('.name').innerText = data.name
       document.querySelector('.class').innerText = data.classes[0].name
       for(i=0; i < data.subclasses.length; i++){  
        document.querySelector('ul').appendChild(document.createElement('li')).textContent = data.subclasses[i].name}
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

