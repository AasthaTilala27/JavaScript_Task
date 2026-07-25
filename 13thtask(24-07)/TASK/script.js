//API= https://api.tvmaze.com/search/shows?q=friends

let section = document.createElement("section");


fetch("https://api.tvmaze.com/search/shows?q=friends").then((api) => {
  api.json().then((data) => {
    for (const element of data) {
      let main = document.createElement("main");

      let h2 = document.createElement("h2");
      let img = document.createElement("img");
      let p = document.createElement("p");

      h2.append(element.show.name);
      img.src = element.show.image.medium;
     p.innerHTML = element.show.summary;

      main.appendChild(h2);
      main.appendChild(img);
      main.appendChild(p);

      section.appendChild(main);
    }
    document.body.appendChild(section);

  });
});
