import categories from '../data/categories.json' /*assert {type: "json"}*/;
import songs from '../data/songs.json' /*assert {type: "json"}*/;

console.log(categories[0]);


const cat = document.getElementById("containerCat");

const llistaCat = document.createElement('ul');
llistaCat.className = 'llista';

categories.forEach(categoria => {

    let img = document.createElement('img');
    img.src = `img/${categoria.img}`;
    img.className = 'miniatura';
    img.alt = categoria.titulo;
    
    let titolPuntCat = document.createElement('H1');
    titolPuntCat.innerText = categoria.titulo;
    titolPuntCat.className = "puntTitol";
    
    let puntCat = document.createElement('li');
    puntCat.id = categoria.id;
    puntCat.className = 'puntCat';
    img.addEventListener('click', procesaCat);
    puntCat.append(img);
    puntCat.append(titolPuntCat);
    
    llistaCat.appendChild(puntCat);
});

function procesaCat(event){

    //Posem en gris totes les categories actives
    const cats = document.getElementsByClassName('puntActiu');
    [].forEach.call(cats, function (c) {
        c.className = "puntCat";
    });
    //resaltem la categoria activa
    event.target.parentElement.className = "puntActiu";
    
    //borrem cançons anteriors llistades
    let llistaCan = document.querySelectorAll('li.song');
    [].forEach.call(llistaCan, function (c) {
        c.remove();
    });
    llistaCan = document.querySelectorAll('ul.containerSongs');
    [].forEach.call(llistaCan, function (c) {
        c.remove();
    });
    
    //Llistat de cançons
    const espaiSongs = document.getElementById('llistaSongs');
    const llista = document.createElement('ul');
    llista.className = "containerSongs";
    const categoria = event.target.parentElement.id;
    //console.log(categoria);
    //console.log(songs);
    const songsCat = songs.filter(x => x.categoria.some(xx => xx === categoria));
    console.log(songsCat);
    
    //Bucle per llistar les cançons filtrades per categoria
    songsCat.forEach(song =>{
        let single = document.createElement('li');
        single.id = single.id;
        single.className = "song";
        let video = document.createElement('div');
        video.className = "videoSong";
        video.innerHTML = `<iframe src="${song.video}" title="${song.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        let dades = document.createElement('div');
        dades.className = "dadesSong";

        let titolSong = document.createElement('H1');
        titolSong.className = "titolSong"
        titolSong.innerText = song.titulo;
        let grupSong = document.createElement('a');
        grupSong.href = `./grup.html?grup=${song.grupo}`
        grupSong.innerText = song.grupo;
        grupSong.className="songGrup";
       
        let dadesSong = document.createElement('ul');
        let creditos = `<li><b>Autors:</b> ${song.creditos}</li>`
        let album = `<li><b>Àlbum:</b> ${song.álbum} (${song.año})</li>`
        let descripcion = `<li><p><b>Comentari:</b></p> ${song.descripcion}</li>`
        let webGrupo = `<li><b>Web:</b> <a href="${song.webGrupo}">${song.webGrupo}</a></li>`
        let categoria = `<li><p><b>Categoria:</b></p> ${song.categoria}</li>`
        let wikipedia = `<li><b>Wiki:</b> <a href="${song.wikipedia}">anar-hi</a></li>`
        let htmlDades =  creditos + album  + webGrupo  + wikipedia;
        dadesSong.innerHTML = htmlDades;
        
        dades.append(titolSong);
        dades.append(grupSong);
        dades.append(dadesSong);
        
        single.append(video);
        single.append(dades);
        
        llista.appendChild(single);
    });
    espaiSongs.append(llista);
}

//cat.append(titol);
cat.append(llistaCat);