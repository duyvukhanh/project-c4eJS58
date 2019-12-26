function displayGenrePage(inputGenre,inputAlbums,inputArtists,inputSingles) {
    content = `
    <div class="main-left">
    <div class="search-bar-sector d-flex align-items-center">
    <input class="search-bar-input" type="text" name="search" placeholder="Search.." onchange="searchProcess()">

</div>
            <div class="genre-page-title d-flex justify-content-center align-items-center">${inputGenre}
            </div>

            <div class="genre-page-single-sector">
                <div class="genre-page-single-sector-title d-flex justify-content-between">
                    <span class="genre-page-single">Singles</span>
                </div>
                <div id="genre-page-single-box" class="genre-page-single-list">
                    
                </div>
            </div>
            <div class="genre-page-artist-sector">
                <div class="genre-page-artist-sector-title d-flex justify-content-between">
                    <span class="genre-page-artist">Artists</span>
                </div>
                <div id="genre-page-artist-box" class="genre-page-artist-list">
                    
                </div>
            </div>
            <div class="genre-page-album-sector">
                <div class="genre-page-album-sector-title d-flex justify-content-between">
                    <span class="genre-page-album">Albums</span>
                </div>
                <div id="genre-page-album-box" class="genre-page-album-list">
                    
                </div>
            </div>
        </div>
        <div class="main-right"></div>
    `;

    document.getElementById("main").innerHTML = content;
    assignArtistRowGenrePage(inputArtists);
    assignAlbumRowGenrePage(inputAlbums);
    assignSingleRowGenrePage(inputSingles);
    assignGenrePageArtistCard(reversedArr(inputArtists));
    assignGenrePageSingleCard(reversedArr(inputSingles));
    assignGenrePageAlbumCard(reversedArr(inputAlbums));
    roundImage()
    addNoimageToAllImgTag()

}


function assignArtistRowGenrePage(inputArtists) {
    content = ``;
    let numberOfRowArtist = Math.ceil(inputArtists.length / 6);
    for (let i = 0; i < numberOfRowArtist; i++) {
        content += `
        <div id="genre-page-artist-row-${i}" class="genre-page-artist-list-row d-flex"></div>
        `;
        if (i === 1) {
            break;
        }
    }
    document.getElementById("genre-page-artist-box").innerHTML = content;
}

function assignAlbumRowGenrePage(inputAlbums) {
    content = ``;
    // let numberOfRowAlbum = Math.ceil(inputAlbums.length / 6);
    if (inputAlbums.length === 0) {
        content = `
            <div id="genre-page-album-row-0" class="genre-page-album-list-row d-flex style="height:0px;"></div>
            `;
    } else if (inputAlbums.length > 6) {
        let numberOfRowAlbum = Math.ceil(inputAlbums.length / 6);
        for (let i = 0; i < numberOfRowAlbum; i++) {
            content += `
            <div id="genre-page-album-row-${i}" class="genre-page-album-list-row d-flex"></div>
            `;
        }
    } else {
        content = `
            <div id="genre-page-album-row-0" class="genre-page-album-list-row d-flex"></div>
            `;
    }   



    // for (let i = 0; i < numberOfRowAlbum; i++) {
    //     content += `
    //     <div id="genre-page-album-row-${i}" class="genre-page-album-list-row d-flex"></div>
    //     `;
    //     console.log("number of row album : " + numberOfRowAlbum)
    //     console.log(inputAlbums)
    // }
    document.getElementById("genre-page-album-box").innerHTML = content;
}

function assignSingleRowGenrePage(inputSingles) {
    content = ``;
    let numberOfRowSingle = Math.ceil(inputSingles.length / 6);
    for (let i = 0; i < numberOfRowSingle; i++) {
        content += `
        <div id="genre-page-single-row-${i}" class="genre-page-single-list-row d-flex"></div>
        `;
        if (i === 1) {
            break;
        }
    }
    document.getElementById("genre-page-single-box").innerHTML = content;
}




function assignGenrePageArtistCard(inputArtists) {
    let numberOfRowArtist = Math.ceil(inputArtists.length / 6);
    let numberOfRow6Artists = Math.floor(inputArtists.length / 6);
    for (let i = 0; i < numberOfRow6Artists; i++) {
        let content = ``;
        for (let j = 1; j < 7; j++) {
            if (j < 6) {
                content += `
                        <div class="genre-page-artist-card">
                            <div class="genre-page-artist-card-img d-flex justify-content-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[i*6+j-1].id}'),getAlbumListByArtistId('${inputArtists[i*6+j-1].id}'),getSingleListByArtistId('${inputArtists[i*6+j-1].id}'))">
                                <img class="circle-img" src="${inputArtists[i*6+j-1].cover}" alt="">
                            </div>
                            <div class="genre-page-artist-card-detail">
                                <div class="genre-page-artist-card-title d-flex align-items-end justify-content-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[i*6+j-1].id}'),getAlbumListByArtistId('${inputArtists[i*6+j-1].id}'),getSingleListByArtistId('${inputArtists[i*6+j-1].id}'))">
                                    <span>${inputArtists[i*6+j-1].name}</span>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 2%; height: 100%;"></div>

                `;
            } else {
                content += `
                <div class="genre-page-artist-card">
                    <div class="genre-page-artist-card-img d-flex justify-content-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[i*6+j-1].id}'),getAlbumListByArtistId('${inputArtists[i*6+j-1].id}'),getSingleListByArtistId('${inputArtists[i*6+j-1].id}'))">
                        <img class="circle-img" src="${inputArtists[i*6+j-1].cover}" alt="">
                    </div>
                    <div class="genre-page-artist-card-detail">
                        <div class="genre-page-artist-card-title d-flex align-items-end justify-content-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[i*6+j-1].id}'),getAlbumListByArtistId('${inputArtists[i*6+j-1].id}'),getSingleListByArtistId('${inputArtists[i*6+j-1].id}'))">
                            <span>${inputArtists[i*6+j-1].name}</span>
                        </div>
                    </div>
                </div>
                `;
            }
        }
        if (i === 2) {
            break;
        }
        document.getElementById(`genre-page-artist-row-${i}`).innerHTML = content;
    }
    if (numberOfRow6Artists <= 1) {
        let du = inputArtists.length - (numberOfRow6Artists * 6);
        let content1 = ``;
        for (let i = 0; i < du; i++) {
            content1 += `
                <div class="genre-page-artist-card">
                    <div class="genre-page-artist-card-img d-flex justify-content-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[numberOfRow6Artists*6+i].id}'),getAlbumListByArtistId('${inputArtists[numberOfRow6Artists*6+i].id}'),getSingleListByArtistId('${inputArtists[numberOfRow6Artists*6+i].id}'))">
                        <img class="circle-img" src="${inputArtists[numberOfRow6Artists*6+i].cover}" alt="">
                    </div>
                    <div class="genre-page-artist-card-detail">
                        <div class="genre-page-artist-card-title d-flex align-items-end justify-content-center" onclick="displayArtistDetailPage(getArtistById('${inputArtists[numberOfRow6Artists*6+i].id}'),getAlbumListByArtistId('${inputArtists[numberOfRow6Artists*6+i].id}'),getSingleListByArtistId('${inputArtists[numberOfRow6Artists*6+i].id}'))">
                            <span>${inputArtists[numberOfRow6Artists*6+i].name}</span>
                        </div>
                    </div>
                </div>
                <div class="" style="width: 2%; height: 100%;"></div>

        `;
        }
        document.getElementById(`genre-page-artist-row-${numberOfRow6Artists}`).innerHTML = content1;
    }


}





function assignGenrePageSingleCard(inputSingles) {
    let numberOfRow6Singles = Math.floor(inputSingles.length / 6);
    for (let i = 0; i < numberOfRow6Singles; i++) {
        let content = ``;
        for (let j = 1; j < 7; j++) {
            if (j < 6) {
                content += `
                        <div class="genre-page-single-card">
                            <div class="genre-page-single-card-img" onclick="playFirstTime('${inputSingles[i*6+j-1].id}')">
                                <img class="circle-img" src="${inputSingles[i*6+j-1].cover}" alt="">
                            </div>
                            

                            <div class="genre-page-single-card-detail">
                                <div class="genre-page-single-card-title d-flex align-items-end" onclick="playFirstTime('${inputSingles[i*6+j-1].id}')">
                                    <span>${inputSingles[i*6+j-1].name}</span>
                                </div>
                                <div class="genre-page-single-card-artist d-flex align-items-start" onclick="displayArtistDetailPage(getArtistById('${inputSingles[i*6+j-1].artist}'),getAlbumListByArtistId('${inputSingles[i*6+j-1].artist}'),getSingleListByArtistId('${inputSingles[i*6+j-1].artist}'))">
                                    <span>${getArtistById(inputSingles[i*6+j-1].artist)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 2%; height: 100%;"></div>
                `;
            } else {
                content += `
                        <div class="genre-page-single-card">
                            <div class="genre-page-single-card-img" onclick="playFirstTime('${inputSingles[i*6+j-1].id}')">
                                <img class="circle-img" src="${inputSingles[i*6+j-1].cover}" alt="">
                            </div>
                            <div class="genre-page-single-card-detail">
                                <div class="genre-page-single-card-title d-flex align-items-end" onclick="playFirstTime('${inputSingles[i*6+j-1].id}')">
                                    <span>${inputSingles[i*6+j-1].name}</span>
                                </div>
                                <div class="genre-page-single-card-artist d-flex align-items-start" onclick="displayArtistDetailPage(getArtistById('${inputSingles[i*6+j-1].artist}'),getAlbumListByArtistId('${inputSingles[i*6+j-1].artist}'),getSingleListByArtistId('${inputSingles[i*6+j-1].artist}'))">
                                    <span>${getArtistById(inputSingles[i*6+j-1].artist)}</span>
                                </div>
                            </div>
                        </div>
                `;
            }
        }
        if (i === 2) {
            break;
        }
        document.getElementById(`genre-page-single-row-${i}`).innerHTML = content;
    }
    if (numberOfRow6Singles <= 1) {
        let du = inputSingles.length - (numberOfRow6Singles * 6);
        let content1 = ``;
        for (let i = 0; i < du; i++) {
            content1 += `
                        <div class="genre-page-single-card">
                            <div class="genre-page-single-card-img" onclick="playFirstTime('${inputSingles[numberOfRow6Singles*6+i].id}')">
                                <img class="circle-img" src="${inputSingles[numberOfRow6Singles*6+i].cover}" alt="">
                            </div>
                            <div class="genre-page-single-card-detail">
                                <div class="genre-page-single-card-title d-flex align-items-end" onclick="playFirstTime('${inputSingles[numberOfRow6Singles*6+i].id}')">
                                    <span>${inputSingles[numberOfRow6Singles*6+i].name}</span>
                                </div>
                                <div class="genre-page-single-card-artist d-flex align-items-start" onclick="displayArtistDetailPage(getArtistById('${inputSingles[numberOfRow6Singles*6+i].artist}'),getAlbumListByArtistId('${inputSingles[numberOfRow6Singles*6+i].artist}'),getSingleListByArtistId('${inputSingles[numberOfRow6Singles*6+i].artist}'))">
                                    <span>${getArtistById(inputSingles[numberOfRow6Singles*6+i].artist)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 2%; height: 100%;"></div>

                        
        `;
        }
        document.getElementById(`genre-page-single-row-${numberOfRow6Singles}`).innerHTML = content1;
    }


}



function assignGenrePageAlbumCard(inputAlbums) {
    let numberOfRow6Albums = Math.floor(inputAlbums.length / 6);
    for (let i = 0; i < numberOfRow6Albums; i++) {
        let content = ``;
        for (let j = 1; j < 7; j++) {
            if (j < 6) {
                content += `
                        

                        <div class="genre-page-album-card">
                            <div class="genre-page-album-card-img" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*6+j-1].id}'))">
                                <img src="${inputAlbums[i*6+j-1].cover}" alt="">
                            </div>
                            <div class="genre-page-album-card-detail">
                                <div class="genre-page-album-card-title d-flex align-items-end" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*6+j-1].id}'))">
                                    <span>${inputAlbums[i*6+j-1].name}</span>
                                </div>
                                <div class="genre-page-album-card-artist d-flex align-items-start" onclick="displayArtistDetailPage(getArtistById('${inputAlbums[i*6+j-1].artist}'),getAlbumListByArtistId('${inputAlbums[i*6+j-1].artist}'),getSingleListByArtistId('${inputAlbums[i*6+j-1].artist}'))">
                                    <span>${getArtistById(inputAlbums[i*6+j-1].artist)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="" style="width: 2%; height: 100%;"></div>
                `;
            } else {
                content += `
                <div class="genre-page-album-card">
                <div class="genre-page-album-card-img" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*6+j-1].id}'))">
                    <img src="${inputAlbums[i*6+j-1].cover}" alt="">
                </div>
                <div class="genre-page-album-card-detail">
                    <div class="genre-page-album-card-title d-flex align-items-end" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[i*6+j-1].id}'))">
                        <span>${inputAlbums[i*6+j-1].name}</span>
                    </div>
                    <div class="genre-page-album-card-artist d-flex align-items-start" onclick="displayArtistDetailPage(getArtistById('${inputAlbums[i*6+j-1].artist}'),getAlbumListByArtistId('${inputAlbums[i*6+j-1].artist}'),getSingleListByArtistId('${inputAlbums[i*6+j-1].artist}'))">
                        <span>${getArtistById(inputAlbums[i*6+j-1].artist)}</span>
                    </div>
                </div>
            </div>
      
                `;
            }
        }
        if (i === 2) {
            break;
        }
        document.getElementById(`genre-page-album-row-${i}`).innerHTML = content;
    }
    if (numberOfRow6Albums < 1) {
        let du = inputAlbums.length - (numberOfRow6Albums * 6);
        let content1 = ``;
        for (let i = 0; i < du; i++) {
            content1 += `
                            
    
    
                            <div class="genre-page-album-card">
                                <div class="genre-page-album-card-img" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[numberOfRow6Albums*6+i].id}'))">
                                    <img src="${inputAlbums[numberOfRow6Albums*6+i].cover}" alt="">
                                </div>
                                <div class="genre-page-album-card-detail">
                                    <div class="genre-page-album-card-title d-flex align-items-end" onclick="displayAlbumDetailPage(getAlbumByAlbumId('${inputAlbums[numberOfRow6Albums*6+i].id}'))">
                                        <span>${inputAlbums[numberOfRow6Albums*6+i].name}</span>
                                    </div>
                                    <div class="genre-page-album-card-artist d-flex align-items-start" onclick="displayArtistDetailPage(getArtistById('${inputAlbums[numberOfRow6Albums*6+i].artist}'),getAlbumListByArtistId('${inputAlbums[numberOfRow6Albums*6+i].artist}'),getSingleListByArtistId('${inputAlbums[numberOfRow6Albums*6+i].artist}'))">
                                        <span>${getArtistById(inputAlbums[numberOfRow6Albums*6+i].artist)}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="" style="width: 2%; height: 100%;"></div>

                          
            `;
        }
        
        
        document.getElementById(`genre-page-album-row-${numberOfRow6Albums}`).innerHTML = content1;
    }


}