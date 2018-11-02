const dirTree = require('directory-tree');
const EventEmitter = require('events');
var fs = require('fs');

var dir_emitter = new EventEmitter();

var file_path = `/Users/sashakramer/mp3`


setTimeout(function(){
    const tree = dirTree(file_path);

    // transform structure
    // if (tree.children) {
    //     // console.log('treeee')
    //     // tree.children = _.object(_.map(tree.children, _.values))
    //     var children = {};
    //     tree.children.forEach(function (c) {
    //         children[c.name] = c;
    //     })
    //     tree.children = children;
    // }
    // console.log('tree', tree)
    fs.writeFile('log.json', JSON.stringify(tree), 'utf-8', function () {

    })


    dir_emitter.emit('dir', tree)
}, 1000)


module.exports = {
    dir_emitter
}