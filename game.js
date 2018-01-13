var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'isoBall', null, true, false);

var BasicGame = function () { };

BasicGame.Boot = function () { };

var isoGroup;

BasicGame.Boot.prototype =
{
    preload: function () {
        game.plugins.add(new Phaser.Plugin.Isometric(game));

        game.load.atlasJSONHash('tileset', 'assets/spritesheet.png', 'assets/sprites.json');

        game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
        game.iso.anchor.setTo(0.5, 0.2);
    },
    create: function () {
        isoGroup = game.add.group();

        isoGroup.enableBody = true;
        isoGroup.physicsBodyType = Phaser.Plugin.Isometric.ISOARCADE;

        var tileArray = [];
        tileArray[1] = 'sprite1';
        tileArray[2] = 'sprite2';
        tileArray[3] = 'sprite3';
        tileArray[4] = 'sprite4';
        tileArray[5] = 'sprite5';
        tileArray[6] = 'sprite6';
        tileArray[7] = 'sprite7';
        tileArray[8] = 'sprite8';
        tileArray[9] = 'sprite9';
        tileArray[10] = 'sprite10';
        tileArray[11] = 'sprite11';
        tileArray[12] = 'sprite12';
        tileArray[13] = 'sprite13';
        tileArray[14] = 'sprite14';
        tileArray[15] = 'sprite15';
        tileArray[16] = 'sprite16';
        tileArray[17] = 'sprite17';
        tileArray[18] = 'sprite18';
        tileArray[19] = 'sprite19';
        tileArray[20] = 'sprite20';
        tileArray[21] = 'sprite21';
        tileArray[22] = 'sprite22';
        tileArray[23] = 'sprite23';
        tileArray[24] = 'sprite24';

        var tiles = [
            [5, 6, 5, 6, 5, 6, 5, 6],
            [6, 5, 6, 5, 6, 5, 6, 5],
            [5, 6, 5, 6, 5, 6, 5, 6],
            [6, 5, 6, 20, 10, 5, 6, 5],
            [5, 6, 5, 6, 5, 6, 5, 6],
            [6, 5, 6, 5, 6, 5, 6, 5],
            [5, 6, 5, 17, 5, 6, 20, 6],
            [6, 5, 6, 5, 6, 5, 6, 5],
        ];

        var size = 38;
        for (var x = 0; x < tiles.length ; x++) {
            for (var y = 0; y < tiles[x].length ; y++) {
              tile = game.add.isoSprite(x*size, y*size, 0, 'tileset', tileArray[tiles[x][y]], isoGroup);
              tile.anchor.set(0.5, 1);
              tile.smoothed = false;
              tile.body.moves = false;
            }
        }
    }
};

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');
