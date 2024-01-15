(() => {
    el='<input class="volumeinput" type="range" min="0" max="1" step="0.05" value="0.3"></input>'

    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if ($(".player-panel__left")[0]!=undefined && $(".volumeinput")[0]==undefined){
                $(".player-panel__left")[0].innerHTML=$(".player-panel__left")[0].innerHTML+el;
            }
        });    
      });

    observer.observe(Document,  {attributes:true, childList:true, characterData:true});
})(); 