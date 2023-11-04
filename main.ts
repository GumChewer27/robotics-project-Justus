function CreatePlayer () {
    PlayerOne = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . . d f d d f d . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 8 2 2 2 2 2 2 8 . . . . 
        . . . . 8 8 2 2 2 2 8 8 . . . . 
        . . . . 8 8 8 2 2 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(PlayerOne, 150, 150)
    scene.cameraFollowSprite(PlayerOne)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    CreatePlayer()
    tiles.placeOnTile(PlayerOne, tiles.getTileLocation(16, 46))
})
let PlayerOne: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
CreatePlayer()
tiles.placeOnTile(PlayerOne, tiles.getTileLocation(41, 61))
