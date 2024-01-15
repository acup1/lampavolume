function changevolume(){
    $(".player-video__video")[0].volume=$(".volumeinput")[0].value;
}

(() => {
    console.log("[lampavolune] Hello");
    
    el='<input class="volumeinput" type="range" min="0" max="1" step="0.05" value="0.3" oninput="changevolume();"></input>';

    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if ($(".player-panel__left")[0]!=undefined && $(".volumeinput")[0]==undefined){
                $(".player-panel__left")[0].innerHTML=$(".player-panel__left")[0].innerHTML+el;
            }
        });    
      });

    observer.observe(document.body,  {attributes:true, childList:true, characterData:true});
})(); 