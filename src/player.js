// // this is for audio

var Player = require('player');

// var tracks = [
//     '/Users/sashakramer/mp3/coloring book/01 - All We Got feat Kanye West and The Chicago Childrens Choir.mp3',
//     '/Users/sashakramer/mp3/coloring book/02 - No Problem feat Lil Wayne and 2 Chainz.mp3',
//     '/Users/sashakramer/mp3/coloring book/03 - Summer Friends feat Jeremih Francis and The Lights.mp3',
//     '/Users/sashakramer/mp3/grey album/01 01-publicserviceannouncement.mp3',
//     '/Users/sashakramer/mp3/grey album/01 06-dirtoffyourshoulder.mp3',
//     '/Users/sashakramer/mp3/grey album/01 05-99problems.mp3',
// ]

// create player instance
var player = new Player([]);

player.on('playend', function(){
    console.log('player finished')
    // naught
    player.playing = false;
})

player.on('error', function(err){
    console.log('error!!!', err)
    player.playing = false;
})

player.on('playing', function(){
    player.playing = true;
})


// setTimeout(function(){
//     player.add(tracks[5])
//     // play now and callback when playend
//     player.play(function (err, player) {
//         console.log('playend!', player.paused);
//         player.add(tracks[2])
//     });
//     // setTimeout(function(){
//     //     // console.log('player', player)
//     //     player.pause();
//     //     // player.add(tracks[3])
//     //     // player.next();
//     // }, 3000)
// },1000)


// const play = require('audio-play');
// const load = require('audio-loader');

// load(tracks[3]).then(audio_buffer=>{
//     play(audio_buffer, {
//         rate: .3
//     })
// });

module.exports = player;
