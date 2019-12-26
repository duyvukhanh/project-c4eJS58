function displaySinglePage(inputGenre,inputSingles) {
    content = `
    <div class="main-left">
    <div class="search-bar-sector d-flex align-items-center">
    <input class="search-bar-input" type="text" name="search" placeholder="Search.." onchange="searchProcess()">

</div>
            <div class="genre-page-title d-flex justify-content-center align-items-center">${inputGenre}
            </div>

            <div class="genre-page-single-sector">
                <div id="genre-page-single-box" class="genre-page-single-list">
                    
                </div>
            </div>
            
        </div>
        <div class="main-right"></div>
    `;

    document.getElementById("main").innerHTML = content;
    assignSingleRowSinglePage(inputSingles);
    assignSinglePageSingleCard(reversedArr(inputSingles));
    roundImage()
    addNoimageToAllImgTag()

}
// displaySinglePage("ALL SINGLES",tracks)


function assignSingleRowSinglePage(inputSingles) {
    content = ``;
    let numberOfRowSingle = Math.ceil(inputSingles.length / 6);
    for (let i = 0; i < numberOfRowSingle; i++) {
        content += `
        <div id="genre-page-single-row-${i}" class="genre-page-single-list-row d-flex"></div>
        `;
    }
    document.getElementById("genre-page-single-box").innerHTML = content;
}

function assignSinglePageSingleCard(inputSingles) {
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
        document.getElementById(`genre-page-single-row-${i}`).innerHTML = content;
    }
   
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