// Print to Dom Function
const printToDom = (stringToPrint, selectedDiv) => {
    document.getElementById(selectedDiv).innerHTML += stringToPrint;
};

// People Object
const people = [
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 1747,
          death: 1797
        }
      },
      {
        title: "Singer",
        name: "Bobby McFerrin",
        bio: "Bobby McFerrin is a famous singer. He is widely known for this song 'Don't Worry, Be Happy'. It is an appropriate song for people who must confront the harsh reality that learning to code is not easy.",
        image: "https://static1.squarespace.com/static/56da084620c647e27e4c950d/56de5d0120c6470c194d9379/5ac3b427aa4a99acb77a3f68/1536593860123/Bobby+McFerrin.jpg?format=1500w",
        lifespan: {
          birth: 1747,
          death: "still alive"
        }
      },
      {
        title: "Sage",
        name: "Confucious",
        bio: "Confucious was a Chinese teacher, editor, politician, and philosopher of the Spring and Autumn perod of Chinese history.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%E5%AD%94%E5%AD%90%E8%81%96%E8%B9%9F%E5%9C%96.png/640px-%E5%AD%94%E5%AD%90%E8%81%96%E8%B9%9F%E5%9C%96.png?1537841528866",
        lifespan: {
          birth: 1494,
          death: 1552
        }
      },
      {
        title: "Actor",
        name: "Abe Vigoda",
        bio: "Abe Vigoda was the single greatest actor of all time. He is most known for his seminal role in the films 'The Godfather', and 'The Godfather Part II'.",
        image: "http://www.bostonherald.com/sites/default/files/styles/gallery/public/media/2008/10/16/2777644687_abe_10172008.jpg?itok=z4wZ9ZR7",
        lifespan: {
          birth: 1921,
          death: 2016
        }
      },
      {
        title: "Tennis player",
        name: "Bjorn Borg",
        bio: "Former No.1 tennis player in the world, and is widely considered to be the greatest in the sport. He has won many tennis games.",
        image: "https://www.mediastorehouse.com/p/210/bjorn-borg-1976-wimbledon-champion-7395831.jpg",
        lifespan: {
          birth: 1956,
          death: "still alive"
        }
      }
];

// Card Builder
const peopleCardBuilder = () => {
  let newString = '';
  for (let i=0; i<people.length; i++) {
      newString +=`<div class="card">`;
      newString +=  `<div class="card-header">`;
      newString +=    `<h1>${people[i].name}</h1>`;
      newString +=    `<h3>${people[i].title}</h3>`;
      newString +=  `</div>`;
      newString +=  `<div class="card-middle">`;
      newString +=    `<img class="photo" src="${people[i].image}"></img>`;
      newString +=    `<p class="bio">${people[i].bio}</p>`;
      newString +=  `</div>`;
      newString +=  `<div class="card-footer">`;
      newString +=    `<p class="lifespan">${people[i].lifespan.birth} to ${people[i].lifespan.death}</p>`;
      newString +=  `</div>`;
  }
  printToDom(newString, "cards");
};

peopleCardBuilder();