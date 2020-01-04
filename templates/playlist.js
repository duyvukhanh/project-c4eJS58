function displayPlaylist(inputTracks) {
    let content = ``;

    for (let i = 0; i < inputTracks.length; i++) {
        const track = inputTracks[i];
        content += `
                    <div class="playlist-card d-flex justify-content-between align-items-center" id="playlist-card-${i}" onmouseover="trackMouseOver(${i})" onmouseleave="trackMouseOut(${i})" onclick="playFirstTime('${track.id}')">
                        <div class="playlist-detail" id="playlist-detail-${i}">
                            <div class="playlist-detail-row d-flex align-items-center" style="font-size: 15px;" id="playlist-name-${i}">${track.name}</div>
                            <div class="playlist-detail-row d-flex align-items-center" style="font-size: 12px;" id="playlist-artist-${i}">${getArtistById(track.artist)}</div>
                        </div>
                        <div class="playlist-img" id="playlist-img-${i}">
                            <img src="${track.cover}" alt="">
                        </div>

                    </div>
        `
    }

    document.getElementById("play-list-tag-box").innerHTML = content
}

displayPlaylist(currentPlaylist);


function trackMouseOver(index) {
    // document.getElementById(`playlist-card-${index}`).style.opacity = 0.5;
    document.getElementById(`playlist-card-${index}`).style.backgroundColor = "#1D2D3C";

    document.getElementById(`playlist-detail-${index}`).style.cursor = "pointer";
    document.getElementById(`playlist-name-${index}`).style.color = "crimson";
    document.getElementById(`playlist-artist-${index}`).style.color = "crimson";
    // document.getElementById(`playlist-detail-${index}`).onclick = playFirstTime(currentPlaylist[index].id)
    document.getElementById(`playlist-img-${index}`).innerHTML = `<i class="fas fa-times"></i>`
    document.getElementById(`playlist-img-${index}`).className = "playlist-img d-flex justify-content-center align-items-center";
    document.getElementById(`playlist-img-${index}`).style.cursor = "pointer";
    document.getElementById(`playlist-img-${index}`).style.color = "crimson";
    document.getElementById(`playlist-img-${index}`).setAttribute("onclick",`deletePlaylist('${currentPlaylist[index].url}')`);
}

function trackMouseOut(index) {
    document.getElementById(`playlist-card-${index}`).style.backgroundColor = "#293E54";

    // document.getElementById(`playlist-card-${index}`).style.opacity = 1;
    document.getElementById(`playlist-name-${index}`).style.color = "lightgray";
    document.getElementById(`playlist-artist-${index}`).style.color = "lightgray";
    document.getElementById(`playlist-img-${index}`).innerHTML = `<img src="${currentPlaylist[index].cover}" alt="">`;
    document.getElementById(`playlist-img-${index}`).className = "playlist-img";
    document.getElementById(`playlist-img-${index}`).removeAttribute("onclick");

}

// function deleteTrackPlaylist(index) {
//     if (currentPlaylist.length > 2) {
//         let url = document.getElementById("audio-source").getAttribute("src");
//         currentPlaylist.splice(index,1);
//         nextAndPreviousTrack(url);
//         displayPlaylist(currentPlaylist);
//     } else {
//         $('#deleteAlert').modal('show');
//     }

    

    // location.reload(false)
// }
