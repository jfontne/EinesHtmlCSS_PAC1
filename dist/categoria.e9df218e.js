function e(e){return e&&e.__esModule?e.default:e}var i;i=JSON.parse('[{"id":"1","titulo":"Romàntiques","descripcion":"Música per somiar","img":"catRomantiques.jpg"},{"id":"2","titulo":"Dance","descripcion":"Anem a deixar-ho tot i disfrutar","img":"catDance.jpg"},{"id":"3","titulo":"Techno","descripcion":"Música electrònica per volar","img":"catTechno.jpg"},{"id":"4","titulo":"Pop/Rock","descripcion":"Clàssics popularts per disfrutar amb tothom","img":"catPop.jpg"},{"id":"5","titulo":"Concerts","descripcion":"Els millors concerts amb bons músics","img":"catConcert.jpg"},{"id":"6","titulo":"Selecció d\'autor","descripcion":"Aquí la meva selecció","img":"catAutor.jpg"}]');var o;o=JSON.parse('[{"id":"1","titulo":"I Can\'t Tell You Why","álbum":"The Long Run","año":"1979","grupo":"Eagles","descripcion":"Unes de les millors balades que mai he escoltat, la meva germana va comprar el single a l\'any si no recordo malament 1979 i mai m\'he cansat d\'escoltar-la.","webGrupo":"https://eagles.com/","creditos":"Timothy B. Schmit, Glenn Frey and Don Henley","categoria":["1","6"],"video":"https://www.youtube.com/embed/iP97m8jwRfE","wikipedia":"https://en.wikipedia.org/wiki/I_Can%27t_Tell_You_Why"},{"id":"2","titulo":"How Deep Is Your Love","álbum":"Saturday Night Fever","año":"1977","grupo":"Bee Gees","descripcion":"Que més dir sobre aquesta balada, indispensable.","webGrupo":"https://www.beegees.com/","creditos":"Barry Gibb","categoria":["1"],"video":"https://www.youtube.com/embed/XpqqjU7u5Yc","wikipedia":"https://es.wikipedia.org/wiki/How_Deep_Is_Your_Love_(canci%C3%B3n_de_Bee_Gees)"},{"id":"3","titulo":"Sara","álbum":"Tusk","año":"1979","grupo":"fleetwood mac","descripcion":"Que més dir sobre aquesta balada, indispensable.","webGrupo":"https://www.fleetwoodmac.com/","creditos":"Stevie Nicks","categoria":["1"],"video":"https://www.youtube.com/embed/vfs6X7boS1s","wikipedia":"https://en.wikipedia.org/wiki/Sara_(Fleetwood_Mac_song)"},{"id":"4","titulo":"Fresh","álbum":"Emergency","año":"1984","grupo":"Kool & The Gang","descripcion":"Que més dir sobre aquesta balada, indispensable.","webGrupo":"https://www.koolandthegang.com/","creditos":"Kool & The Gang","categoria":["2","6"],"video":"https://www.youtube.com/embed/sTJ1XwGDcA4","wikipedia":"https://es.wikipedia.org/wiki/Fresh_(canci%C3%B3n_de_Kool_%26_the_Gang)"},{"id":"5","titulo":"Stayin\' Alive","álbum":"Saturday Night Fever","año":"1977","grupo":"Bee Gees","descripcion":"Que més dir sobre aquesta balada, indispensable.","webGrupo":"https://www.beegees.com/","creditos":"Barry Gibb, Robin Gibb, Maurice Gibb","categoria":["2"],"video":"https://www.youtube.com/embed/I_izvAbhExY","wikipedia":"https://es.wikipedia.org/wiki/Stayin%27_Alive"},{"id":"6","titulo":"Enjoy The Silence","álbum":"Violator","año":"1989","grupo":"Depeche Mode","descripcion":"Que més dir sobre aquesta balada, indispensable.","webGrupo":"https://www.depechemode.com/","creditos":"Martin Gore","categoria":["3","6"],"video":"https://www.youtube.com/embed/aGSKrC7dGcY","wikipedia":"https://es.wikipedia.org/wiki/Enjoy_the_Silence"},{"id":"7","titulo":"A Little Respect","álbum":"The Innocents","año":"1988","grupo":"Erasure","descripcion":"Que més dir sobre aquesta balada, indispensable.","webGrupo":"https://www.erasureinfo.com/","creditos":"Vince Clarke, Andy Bell","categoria":["3","6"],"video":"https://www.youtube.com/embed/x34icYC8zA0","wikipedia":"https://en.wikipedia.org/wiki/A_Little_Respect"},{"id":"8","titulo":"Nobody\'s Diary","álbum":"Saturday Night Fever","año":"1983","grupo":"Yazoo","descripcion":"Que més dir sobre aquesta balada, indispensable.","webGrupo":"https://yazooinfo.com/","creditos":"Alison Moyet","categoria":["3"],"video":"https://www.youtube.com/embed/1qq7jTPkjVg","wikipedia":"https://es.wikipedia.org/wiki/Nobody%27s_Diary"},{"id":"9","titulo":"Hot Water","álbum":"Sirens Tour Live 2015","año":"1984","grupo":"Level 42","descripcion":"Que més dir sobre aquesta balada, indispensable.","webGrupo":"https://level42.com/","creditos":"Mark King, Mike Lindup, Phil Gould, Wally Badarou","categoria":["6","5"],"video":"https://www.youtube.com/embed/g88dvPMEDVA","wikipedia":"https://en.wikipedia.org/wiki/Hot_Water_(song)"},{"id":"10","titulo":"Viva la vida","álbum":"Sirens Tour Live 2015","año":"2008","grupo":"Coldplay","descripcion":"Que més dir sobre aquesta balada, indispensable.","webGrupo":"https://www.coldplay.com/","creditos":"Coldplay","categoria":["6","4"],"video":"https://www.youtube.com/embed/dvgZkm1xWPE","wikipedia":"https://en.wikipedia.org/wiki/Hot_Water_(song)"}]');const t=window.location.search;console.log(t);var a=new URLSearchParams(t).get("cat");console.log(a);var r=e(i).filter((e=>e.id===a));console.log(r),document.getElementById("cos").style.backgroundImage=`url('img/${r[0].img}'`;document.getElementById("titolCap").innerText=r[0].titulo;document.createElement("ul").className="llista";let s=document.querySelectorAll("li.song");[].forEach.call(s,(function(e){e.remove()})),s=document.querySelectorAll("ul.containerSongs"),[].forEach.call(s,(function(e){e.remove()}));const c=document.getElementById("llistaSongs"),l=document.createElement("ul");l.className="containerSongs";const d=e(o).filter((e=>e.categoria.some((e=>e===r[0].id))));console.log(d),d.forEach((e=>{let i=document.createElement("li");i.id=i.id,i.className="song";let o=document.createElement("div");o.className="videoSong",o.innerHTML=`<iframe src="${e.video}" title="${e.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;let t=document.createElement("div");t.className="dadesSong";let a=document.createElement("H1");a.className="titolSong",a.innerText=`${e.grupo} - ${e.titulo}`;let r=document.createElement("ul"),s=`<li><b>Autors:</b> ${e.creditos}</li>`,c=`<li><b>Àlbum:</b> ${e.álbum} (${e.año})</li>`,d=(e.descripcion,`<li><b>Web:</b> <a href="${e.webGrupo}">${e.webGrupo}</a></li>`),n=(e.categoria,s+c+d+`<li><b>Wiki:</b> <a href="${e.wikipedia}">anar-hi</a></li>`);r.innerHTML=n,t.append(a),t.append(r),i.append(o),i.append(t),l.appendChild(i)})),c.append(l);
//# sourceMappingURL=categoria.e9df218e.js.map
