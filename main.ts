controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.setVelocity(-16, -60)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    ball.vy += -60
})
let ball: Sprite = null
scene.setBackgroundColor(15)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 d d d d d d d d d d d d d d 1 
    1 d d d d d d d d d d d d d d 1 
    1 d d d d d d d d d d d d d d 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 3 1 1 3 . . . . . . 
    . . . . . 2 1 1 1 1 2 . . . . . 
    . . . . . 2 1 1 1 1 2 . . . . . 
    . . . . . . 3 1 1 3 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
ball.setPosition(76, 89)
mySprite.setStayInScreen(true)
ball.setBounceOnWall(true)
mySprite.top = 95
controller.moveSprite(mySprite, 100, 0)
