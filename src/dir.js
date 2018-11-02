const dirTree = require('directory-tree');
const EventEmitter = require('events');
var fs = require('fs');
const mm = require('music-metadata');
const util = require('util')
const imageToAscii = require('image-to-ascii')

var dir_emitter = new EventEmitter();

var file_path = `/Users/sashakramer/mp3`



setTimeout(function(){
    const tree = dirTree(file_path);

    readFileData(tree);


    dir_emitter.emit('dir', tree)
}, 100)


function readFileData(obj){
    if(obj.children){
        obj.children.forEach(function(child){
            if(child.extension == '.mp3'){
                mm.parseFile(child.path, {
                        native: true
                    })
                    .then(metadata => {
                        // console.log('name:', child.name)
                        // console.log(util.inspect(metadata, {
                        //     showHidden: false,
                        //     depth: null
                        // }));
                        // console.log('metadata', metadata.common.title, metadata.common.artist, metadata.common.album)
                        if (metadata.common && metadata.common.picture && metadata.common.picture[0]) {
                            imageToAscii(metadata.common.picture[0].data, (err, converted) => {
                                // console.log(err || converted);
                                // dir_emitter.emit('image', converted)
                                child.image = converted;
                            });
                        }
                    })
                    .catch(err => {
                        console.error(err.message);
                    });
            }
            if(child.children && child.children.length > 0){
                readFileData(child);
            }
        })
    }
}


module.exports = {
    dir_emitter
}