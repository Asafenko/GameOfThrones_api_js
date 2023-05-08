
// http://www.omdbapi.com/?i=tt3896198&apikey=d3f0a7c9
// d3f0a7c9
let seasons = document.querySelectorAll('input[name="num"]');
let answearbutton = document.querySelector('input[type="button"]');
let series = document.querySelector('input[type="number"]');
let info = document.querySelector('textarea');





answearbutton.addEventListener('click',function(){
    let season='';
    let seria=series.value;
    for(let item of seasons){
        if(item.checked){
            season=item.value;
        }
    }
    
    fetch(`http://www.omdbapi.com/?i=tt0944947&Season=${season}&apikey=d3f0a7c9`)
    .then(response=>{
             return response.json()
         }).then(data=>{

info.innerHTML=`Episodes: ${data.Episodes.length} 
Response: ${data.Response}
Name Series: ${data.Episodes[seria-1].Title}
Realeased: ${data.Episodes[seria-1].Released}
Rating: ${data.Episodes[seria-1].imdbRating}
${data.Title}`;
  })
});
