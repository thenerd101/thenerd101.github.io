const LyricsSnatch = require("lyrics-snatcher");


const LyricsSearch = async function Search(keyword) {
    //const results = await LyricsSnatch.getLyrics(Song, Artist, Album, Duration);
    //console.log(results);

    //const results2 = await LyricsSnatch.getLyrics('The Man Who Sold the World', 'David Bowie', 'The Man Who Sold the World', '241');

    //console.log(await LyricsSnatch.getLyricsByID(3396226));

    if (keyword == null && keyword.length == 0) {
        return
    }

    const results = await LyricsSnatch.getLyricsByKeyword(keyword);

    console.log(results)
};

//document.getElementById("lyricgenerate").onclick = function() {
    //let answer = prompt("Which song do you choose to find lyrics for? ")

    //Search(answer);
//}

module.exports = {
    LyricsSearch
}