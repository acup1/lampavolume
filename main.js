function changevolume(){
    $(".player-video__video")[0].volume=$(".volumeinput")[0].value;
}

function volumedown(){
    $(".volumeinput")[0].value=Number($(".volumeinput")[0].value)-0.1;
    changevolume();
}

function volumeup(){
    $(".volumeinput")[0].value=Number($(".volumeinput")[0].value)+0.1;
    changevolume();
}

onkeydown = (event) => {
    if (event.key === 'Enter'){
        if ($(".focus.volumedown")[0]!=undefined){
            $(".volumeinput")[0].value=Number($(".volumeinput")[0].value)-0.1;
            changevolume();
        }
        if ($(".focus.volumeup")[0]!=undefined){
            $(".volumeinput")[0].value=Number($(".volumeinput")[0].value)+0.1;
            changevolume();
        }
    }
};

(() => {
    console.log("[lampavolume] Hello");
    
    el='<input class="volumeinput selector" type="range" min="0" max="1" step="0.05" value="0.3" oninput="changevolume();"></input>';


    vdbtn='<div class="button selector volumedown" onclick="volumedown();" data-controller="player_panel"><div><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L18 12" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div>';

    vubtn='<div class="button selector volumeup" onclick="volumeup();" data-controller="player_panel"><div><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12H20M12 4V20" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>';

    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if ($(".player-panel__right")[0]!=undefined && $(".volumeinput")[0]==undefined){
                $(".player-panel__right")[0].innerHTML=el+vdbtn+vubtn+$(".player-panel__right")[0].innerHTML;
                changevolume();
            }
        });    
      });

    observer.observe(document.body,  {attributes:true, childList:true, characterData:true});
})(); 