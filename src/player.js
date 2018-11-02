var blessed = require('blessed');
var contrib = require('blessed-contrib');
var fs = require('fs')
var dir = require('./dir')

console.log('dir', dir)

dir.dir_emitter.on('dir', function(data){
    // console.log('data', data)
    data.extended = true;
    tree.setData(data);
    fs.writeFile('log.txt', 'event', 'utf-8', function () {

    })
    screen.render();
})

// Create a screen object.
var screen = blessed.screen({
    smartCSR: true
});

// var terminal = blessed.terminal({
//     parent: screen,
//     cursor: 'block',
//     cursorBlink: true,
//     screenKeys: false,
//     label: ' terminals ',
//     left: 0,
//     top: 0,
//     width: '100%',
//     height: '100%',
//     border: 'line',
//     style: {
//         fg: 'default',
//         bg: 'default',
//         focus: {
//             border: {
//                 fg: 'green'
//             }
//         }
//     }
// });
// Create a box perfectly centered horizontally and vertically.
var box = blessed.box({
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    content: 'Hello {bold}world{/bold}!',
    tags: true,
    border: {
        type: 'line'
    },
    style: {
        fg: 'white',
        bg: 'magenta',
        border: {
            fg: '#f0f0f0'
        },
        hover: {
            bg: 'green'
        }
    }
});

// Append our box to the screen.
// screen.append(box);

var tree = contrib.tree({
    fg: 'green',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
})
screen.append(tree);

tree.on('select', function(node){
    // capture selects
})

tree.setData({
    extended: true,
    children: {
        'options': {
            children: {
                'option one': {},
                'option two': {}
            }
        }
    }
})


// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q'], function (ch, key) {
    return process.exit(0);
});

// terminal.focus();
tree.focus();

screen.render();