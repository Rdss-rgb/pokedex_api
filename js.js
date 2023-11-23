let output = document.getElementById('wrapperpoke');


async function pokeapi(){
for (let i = 1; i <= 1021; i++) {
    var datas = "https://pokeapi.co/api/v2/pokemon/" + i;
    const response = await fetch(datas);
    response.json().then(data => {
    console.log(data)

    // * Declaration of variables
    var typing=[]
    var types="";
    var outed = "";
    var moves = "";
    let moveLimit = 4;
    let moveCounter = 0;
    var pokename = data.name;
    var poketype = data.types;
    var pokeexp = data.base_experience;
    var pokemoves = data.moves;
    var pokenum = data.id;
    var h = data.height;
    var w = data.weight;
    var pokenames = pokename.charAt(0).toUpperCase() + pokename.slice(1);
    // * For pokemon types
    poketype.forEach((element) => {
      outed = element["type"]["name"];
    //   console.log(outed);
      typing.push(outed)
    //   console.log(typing);
      types=typing.toString()


    });
    // * For pokemon types
    pokemoves.forEach((element) => {
      if (moveCounter < moveLimit) {
        // Append the move name followed by a space to the "moves" string
        moves += '<div style="width:45%; background-color:#6e6e6e3d; border-radius:5px">' + element["move"]["name"] + '</div>';

        // Increment the moveCounter
        moveCounter++;
      }
    //   console.log(moves);
    });

    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute('id', pokename);
    card.setAttribute('onclick','fi(this)')
    output.appendChild(card)
    const inner = document.createElement("div");
    inner.className = "pokeinner";
    card.appendChild(inner)
    const front = document.createElement("div");                                                                        
    front.className = "flip-card-back";
    front.setAttribute('id', 'bgi-' + i);

    inner.appendChild(front)
    const cardhead = document.createElement("div");
    cardhead.className = "card-header";
    cardhead.innerHTML = `
        <p style="align-self:flex-start; padding-left:5px" >`+ pokenames + `</p>
        <p class="typepoke">`+ types.replace(","," "); + `</p>`
       const imgcontainer = document.createElement("div");
       imgcontainer.className = "img-container";
       cardhead.appendChild(imgcontainer)
       const imgc = document.createElement("div");
       imgc.className = "card-img";
       imgcontainer.appendChild(imgc)
       const imgs = document.createElement("img");
       imgs.setAttribute('id', 'shine-' + i);
       imgs.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/` + i + `.png`;
       imgc.appendChild(imgs)
       const stats = document.createElement("p");
       stats.style.fontSize='10px'
       stats.innerHTML+=`base experience:  `+pokeexp+ " " + `height:  `+ " " +h + " " +`weight:  `+w;
       cardhead.appendChild(stats)

    front.appendChild(cardhead)
    const cardbody = document.createElement("div");
    cardbody.className = "card-body";
    cardbody.innerHTML += `<h3 style="padding:3px;">Moveset:<h3> <div style="display:flex; flex-wrap:wrap; gap:6px; justify-content:center; font-size: 17px;">` + moves + `</div>`;
    front.appendChild(cardbody)

    const cardfooter = document.createElement("div");
    cardfooter.className = "card-footer";
    cardfooter.innerHTML += `Pokemon Number:`+pokenum;
    front.appendChild(cardfooter)

    const back = document.createElement("div");
    back.className = "flip-card-front";
    back.innerHTML += `<h1 class="front-name">` + pokenames + `</h1> `;
    inner.appendChild(back)


    // * if else for typing 
    var bg = document.getElementById('bgi-' + i);


    if (typing.includes("bug") || typing.includes("grass")) {
      bg.classList.add('leaf');

    }
    else if (typing.includes("dark")) {
      bg.classList.add('dark');
      bg.style.color='white'
    }
    else if (typing.includes("fire")) {
      bg.classList.add('fire');
    }
    else if (typing.includes("water")) {
      bg.classList.add('water');
    }
    else if (typing.includes("electric")) {
      bg.classList.add('electric');
    }
    else if (typing.includes("poison") || typing.includes("psychic")) {
      bg.classList.add('poison');
    }
    else if (typing.includes("steel")) {
      bg.classList.add('steel');
    }
    else if (typing.includes("fighting")|| typing.includes("rock")|| typing.includes("ground")) {
      bg.classList.add('fighting');
    }
    else {

    }



        var spoke = document.querySelector('#pokesearch');
        
        spoke.addEventListener('input', ()=> {
            var  b = document.querySelectorAll('#'+pokename);
    
            var searchValue = spoke.value.toLowerCase();
    
            if (searchValue !== "") {
                for (let j = 0; j <  b.length; j++) {
                    var elementId =  b[j].id.toLowerCase();
    
                    if (elementId.indexOf(searchValue) !== -1) {
                        b[j].style.display = "flex";
                    } else {
                        b[j].style.display = "none";
                    }
                }
            } else {
                for (let ji = 0; ji < b.length; ji++) {
                    b[ji].style.display = "flex";
                }
            }
        });


  })

    
}
}



function fi(id) {
    id.classList.add('bounce2');
  }
  
  let mybutton = document.getElementById("mybtntop");
  let txtwhite = document.getElementById("txts");
  
  window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      txtwhite.style.color = "white";
    } else {
      mybutton.style.display = "none";
      txtwhite.style.color = "black";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  var opens=false
  document.querySelector('.open').addEventListener('click', ()=>{
    var faceup=document.querySelectorAll('.pokeinner');
    
    if(opens==false){
  
      faceup.forEach(element => {
        opens=true
        element.style.transform="rotateY(180deg)"
        
        
      });
console.log(opens)
    }
    else{
      faceup.forEach(element => {
        opens=false
        element.style.transform="rotateY(0)"
      });
      console.log(opens)
    }
  
  
  })
  
pokeapi();


document.querySelector('.turnshiny').addEventListener('click', ()=>{
    //   console.log('shiny')
   
    for (let i = 1; i < 1021; i++) {
        document.querySelector('#shine-'+i).src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/` + i + `.png `;
        document.querySelector('.turnoriginal').classList.remove('hidden');
        document.querySelector('.turnshiny').classList.add('hidden');
        
    }
    

    })
    document.querySelector('.turnoriginal').addEventListener('click', ()=>{
    //   console.log('shiny')
    for (let i = 1; i < 1021; i++) {
      document.querySelector('#shine-'+i).src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/` + i + `.png `;
      document.querySelector('.turnoriginal').classList.add('hidden');
      document.querySelector('.turnshiny').classList.remove('hidden');
    }
    })



  
 