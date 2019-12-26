function displayArtistPage(inputString,inputArtists) {
    content = `
    <div class="main-left">
    <div class="search-bar-sector d-flex align-items-center">
    <input class="search-bar-input" type="text" name="search" placeholder="Search.." onchange="searchProcess()">

</div>
        <div class="artist-page-artist-sector">
            <div class="artist-page-title d-flex justify-content-center align-items-center my-5">
                ${inputString} ARTISTS LIST
            </div>

            <div id="artist-page-artist-box" class="artist-page-artist-box">
                
            </div>
        </div>
    </div>
    <div class="main-right"></div>`;
    document.getElementById("main").innerHTML = content;
    assignRowArtistPage(inputArtists)
    assignArtistPageCard(inputArtists)
    roundImage()
    addNoimageToAllImgTag()

}

// displayArtistPage()


function assignRowArtistPage(inputArtists) {
    content =``;
    let numberOfRow = Math.ceil(inputArtists.length/6);
    for (let i = 0; i < numberOfRow; i++) {
        content += `
        <div id="artist-page-row-${i}" class="artist-page-row d-flex align-items-center"></div>
        `;
    }
    document.getElementById("artist-page-artist-box").innerHTML = content;
}


function assignArtistPageCard(inputArtists) {
    let numberOfRow = Math.ceil(inputArtists.length/6);
    let numberOfRow6Artists = Math.floor(inputArtists.length/6);
    for (let i = 0; i < numberOfRow6Artists; i++) {
        let content = ``;
        for (let j = 1; j < 7; j++) {
            if (j<6) {
                content += `
                        <div class="artist-page-artist-card">
                            <div class="artist-page-artist-img d-flex justify-content-center align-items-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[i*6+j-1].id}'),getAlbumListByArtistId('${inputArtists[i*6+j-1].id}'),getSingleListByArtistId('${inputArtists[i*6+j-1].id}'))">
                                <img class="circle-img" src="${inputArtists[i*6+j-1].cover}" alt="">
                            </div>
                            <div
                                class="artist-page-artist-name d-flex justify-content-center align-items-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[i*6+j-1].id}'),getAlbumListByArtistId('${inputArtists[i*6+j-1].id}'),getSingleListByArtistId('${inputArtists[i*6+j-1].id}'))"> 
                                <span>${inputArtists[i*6+j-1].name}</span>
                            </div>
                        </div>
                        <div class="sub-artist-page-artist-card" style="width: 2%; height: 100%;"></div>
                `;
            } else {
                content += `
                        <div class="artist-page-artist-card">
                            <div class="artist-page-artist-img d-flex justify-content-center align-items-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[i*6+j-1].id}'),getAlbumListByArtistId('${inputArtists[i*6+j-1].id}'),getSingleListByArtistId('${inputArtists[i*6+j-1].id}'))">
                                <img class="circle-img" src="${inputArtists[i*6+j-1].cover}" alt="">
                            </div>
                            <div
                                class="artist-page-artist-name d-flex justify-content-center align-items-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[i*6+j-1].id}'),getAlbumListByArtistId('${inputArtists[i*6+j-1].id}'),getSingleListByArtistId('${inputArtists[i*6+j-1].id}'))">
                                <span>${inputArtists[i*6+j-1].name}</span>
                            </div>
                        </div>
                        <div class="sub-artist-page-artist-card" style="width: 0%; height: 100%;"></div>
                `;
            } 
        }
        document.getElementById(`artist-page-row-${i}`).innerHTML = content;
    }

    let du = inputArtists.length - (numberOfRow6Artists*6);
    let content1 = ``;
    for (let i = 0; i < du; i++) {
        content1 += `
                
                    <div class="artist-page-artist-card">
                        <div class="artist-page-artist-img d-flex justify-content-center align-items-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[numberOfRow6Artists*6+i].id}'),getAlbumListByArtistId('${inputArtists[numberOfRow6Artists*6+i].id}'),getSingleListByArtistId('${inputArtists[numberOfRow6Artists*6+i].id}'))">
                            <img class="circle-img" src="${inputArtists[numberOfRow6Artists*6+i].cover}" alt="">
                        </div>
                        <div class="artist-page-artist-name d-flex justify-content-center align-items-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[numberOfRow6Artists*6+i].id}'),getAlbumListByArtistId('${inputArtists[numberOfRow6Artists*6+i].id}'),getSingleListByArtistId('${inputArtists[numberOfRow6Artists*6+i].id}'))">
                            <span>${inputArtists[numberOfRow6Artists*6+i].name}</span>
                        </div>
                    </div>
                    <div class="sub-artist-page-artist-card" style="width: 2%; height: 100%;"></div>
                
        `;
    }
    document.getElementById(`artist-page-row-${numberOfRow6Artists}`).innerHTML = content1;

}