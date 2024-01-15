function changevolume(){
    $(".player-video__video")[0].volume=$(".volumeinput")[0].value;
}

onkeydown = (event) => {
    if ($(".focus.volumedown")[0]!=undefined){
        $(".volumeinput")[0].value=Number($(".volumeinput")[0].value)-0.1;
        changevolume();
    }
    if ($(".focus.volumeup")[0]!=undefined){
        $(".volumeinput")[0].value=Number($(".volumeinput")[0].value)+0.1;
        changevolume();
    }
};

(() => {
    console.log("[lampavolume] Hello");
    
    el='<input class="volumeinput selector" type="range" min="0" max="1" step="0.05" value="0.3" style="margin-left: 50px;" oninput="changevolume();"></input>';


    vdbtn=```
        <div class="button selector volumedown" data-controller="player_panel">
            <div>
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L18 12" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
            <div>
                <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="6" height="25" rx="2" fill="currentColor"></rect>
                <rect x="13" width="6" height="25" rx="2" fill="currentColor"></rect>
                </svg>                    
            </div>
        </div>
    ```;

    vubtn=```
        <div class="button selector volumeup" data-controller="player_panel">
            <div>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M12 4V20" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div>
                <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="6" height="25" rx="2" fill="currentColor"></rect>
                <rect x="13" width="6" height="25" rx="2" fill="currentColor"></rect>
                </svg>                    
            </div>
        </div>
    ```;

    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if ($(".player-panel__left")[0]!=undefined && $(".volumeinput")[0]==undefined){
                $(".player-panel__left")[0].innerHTML=$(".player-panel__left")[0].innerHTML+el+vdbtn+vubtn;
                changevolume();
            }
        });    
      });

    observer.observe(document.body,  {attributes:true, childList:true, characterData:true});
})(); 