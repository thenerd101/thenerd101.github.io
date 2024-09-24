//import {  createRequire  } from 'module';
//const require = createRequire(import.meta.url);
//const FindLyric = require(`./find_lyrics`)
//const prompt = require("prompt-sync")();

//const fs = require('node:fs');

const encodeRFC3986URI = (str) => {
    return encodeURIComponent(str.replace(/ /g, "_"))
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]")
    .replace(
      /[!'()*]/g,
      (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
    ); 
}




//const CommandFiles = fs.readdirSync('./Tools').filter(file => file.endsWith(".js"));
//for (const file of CommandFiles) {
    //const command = require(`./Tools${file}`);

//}

document.getElementById("test").onclick = function() {
    //console.log("YES U CLICKED MEEE!!")
    let answer = prompt("Which song do you choose to find lyrics for? ")
    console.log("Answer:\n", answer, "\n")
    async function Search() {
        let result = await fetch(`https://lrclib.net/api/search?q=${encodeRFC3986URI(answer)}`)
        let body = await result.json()
        console.log({ synced: body[0].syncedLyrics })

    }
    Search()
}
//FindLyric.LyricsSearch()
