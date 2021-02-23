 const searchForm = document.getElementById("search-form");
  var results = [];
  searchForm.addEventListener("submit", function(event){
    event.preventDefault();
    fetch(`https://www.balldontlie.io/api/v1/teams/${document.getElementById("equipo").value}`, {
      headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json',
      },
      method: 'GET'
    })
    .then(res => {
      if(res.ok){
        return res.json();
        console.log(res);
      }else{
        throw res;
      }
    })
    .then(r => {
      console.log(r);
      results = r.Search;
      console.log("Updating cards");
      updateCards(r);
    })
    .catch(e => {
      console.error("Error " + e)
    })
    return false;
  })


  function updateCards(result){
    let html = '';
       html += '<div class="col">'
                    +'<div class="card" style="width: 40rem;">'
                      + '<div class="card-body">'
                      +  `<h5 class="card-title" id="nombre_equipo"> <b><FONT COLOR="RED">${result.full_name} </FONT></b></h5>`
                      + `<h6> <b>abreviatura:</b><FONT COLOR="RED">${result.abbreviation} </FONT>    <b>ciudad:</b> <FONT COLOR="RED"> ${result.city} </FONT>  <b>conferencia:</b>  <FONT COLOR="RED">${result.conference}</FONT>   <b>division:</b> <FONT COLOR="RED"> ${result.division} </FONT></h6>`
                      +'</div>'
                    +'</div>'
                  +'</div>';
    document.getElementById("resultados_equipos").innerHTML = html;
  }