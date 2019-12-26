function displayAlbumPage(inputString,inputAlbums) {
    let content = `
    <div class="main-left">
    <div class="search-bar-sector d-flex align-items-center">
    <input class="search-bar-input" type="text" name="search" placeholder="Search.." onchange="searchProcess()">

</div>
            <div class="album-page-album-sector">
                <div class="album-page-title d-flex justify-content-center align-items-center my-5">
                    RECENT ${inputString} ALBUMS CHART 
                </div>
                
                <div id="album-page-album-box" class="album-page-album-box">
                    

                </div>
            </div>
        </div>
        <div class="main-right">
        </div>
    `;
    document.getElementById("main").innerHTML = content;
    assignRowAlbumPage(inputAlbums);
    assignAlbumPageCard(reversedArr(inputAlbums));
    roundImage()
    addNoimageToAllImgTag()

}

// displayAlbumPage();


function assignRowAlbumPage(inputAlbums) {
    content =``;
    let numberOfRow = Math.ceil(inputAlbums.length/5);
    

    for (let i = 0; i < numberOfRow; i++) {
        content += `
        <div id="album-page-row-${i}" class="album-page-row d-flex align-items-center"></div>
        `;
    }
    document.getElementById("album-page-album-box").innerHTML = content;
}


function assignAlbumPageCard(inputAlbums) {
    let numberOfRow = Math.ceil(inputAlbums.length/5);
    let numberOfRow5Albums = Math.floor(inputAlbums.length/5);
    for (let i = 0; i < numberOfRow5Albums; i++) {
        let content = ``;
        for (let j = 1; j < 6; j++) {
            if (j<5) {
                content += `
                <div class="album-page-album-card">
                    <div class="album-page-album-img" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*5+j-1].id}'))">
                        <img src="${inputAlbums[i*5+j-1].cover}" alt="">
                    </div>
                    <div class="album-page-album-detail">
                        <div class="album-page-album-title d-flex align-items-end" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*5+j-1].id}'))">
                            ${inputAlbums[i*5+j-1].name}
                        </div>
                        <div class="album-page-album-artist d-flex align-items-start" onclick="displayArtistDetailPage(getArtistById('${inputAlbums[i*5+j-1].artist}'),getAlbumListByArtistId('${inputAlbums[i*5+j-1].artist}'),getSingleListByArtistId('${inputAlbums[i*5+j-1].artist}'))">
                            ${getArtistById(inputAlbums[i*5+j-1].artist)}
                        </div>
                    </div>
                </div>
                <div class="sub-album-page-album-card" style="width: 2.5%; height: 100%;"></div>
                `;
            } else {
                content += `
                <div class="album-page-album-card">
                    <div class="album-page-album-img" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*5+j-1].id}'))">
                        <img src="${inputAlbums[i*5+j-1].cover}" alt="">
                    </div>
                    <div class="album-page-album-detail">
                        <div class="album-page-album-title d-flex align-items-end" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*5+j-1].id}'))">
                            ${inputAlbums[i*5+j-1].name}
                        </div>
                        <div class="album-page-album-artist d-flex align-items-start" onclick="displayArtistDetailPage(getArtistById('${inputAlbums[i*5+j-1].artist}'),getAlbumListByArtistId('${inputAlbums[i*5+j-1].artist}'),getSingleListByArtistId('${inputAlbums[i*5+j-1].artist}'))">
                            ${getArtistById(inputAlbums[i*5+j-1].artist)}
                        </div>
                    </div>
                </div>
                <div class="sub-album-page-album-card" style="width: 0%; height: 100%;"></div>
                `;
            } 
        }
        document.getElementById(`album-page-row-${i}`).innerHTML = content;
    }

    let du = inputAlbums.length - (numberOfRow5Albums*5);
    let content1 = ``;
    for (let i = 0; i < du; i++) {
        content1 += `
        <div class="album-page-album-card">
            <div class="album-page-album-img" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[numberOfRow5Albums*5+i].id}'))">
                <img src="${inputAlbums[numberOfRow5Albums*5+i].cover}" alt="">
            </div>
            <div class="album-page-album-detail">
                <div class="album-page-album-title d-flex align-items-end" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[numberOfRow5Albums*5+i].id}'))">
                    ${inputAlbums[numberOfRow5Albums*5+i].name}
                </div>
                <div class="album-page-album-artist d-flex align-items-start" onclick="displayArtistDetailPage(getArtistById('${inputAlbums[numberOfRow5Albums*5+i].artist}'),getAlbumListByArtistId('${inputAlbums[numberOfRow5Albums*5+i].artist}'),getSingleListByArtistId('${inputAlbums[numberOfRow5Albums*5+i].artist}'))">
                    ${getArtistById(inputAlbums[numberOfRow5Albums*5+i].artist)}
                </div>
            </div>
        </div>
        <div class="sub-album-page-album-card" style="width: 2.5%; height: 100%;"></div>
        `;
    }
    document.getElementById(`album-page-row-${numberOfRow5Albums}`).innerHTML = content1;
}



