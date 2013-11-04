var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
//canvas.width = document.body.clientWidth;
//canvas.height = document.body.clientHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";

input.offset  = new Vector2(GetLeft(canvas),GetTop(canvas));

var player = new Player();

var floor = new Array();
floor.push(new Rectangle(0,400,400,20));
floor.push(new Rectangle(100,350,20,20));
floor.push(new Rectangle(150,300,20,20));
floor.push(new Rectangle(200,250,20,20));
floor.push(new Rectangle(250,200,20,20));

var enemy = new Rectangle(450,40,30,30);
enemy.color = new Color(0,0,200,1);

var invblock = new Rectangle(450,270,30,30);
invblock.color = new Color(255,255,255,1);
var invblock2 = new Rectangle(450,0,30,30);

for (var i = 0; i < floor.length; i++)
{
    floor[i].color = new Color(0,0,0,1);
}


var movement = 0.5;


var Update = setInterval(function()
{


   player.Update();

    var collided = false;

    for (var i = 0 ; 1 < floor.length; i++)
    {
        if (floor[i].Intersects(player.rect))
        {
            player.SetPosition(null, floor[i].y - player.rect.height);
            player.jumpAvailable = true;
            collided = true;
            break;
        }
        else
            player.jumpAvailable = false;
    }




    enemy.y += movement;
    if (invblock.Intersects(enemy))
    {
        movement *= -1;
    }
    else if(invblock2.Intersects(enemy))
        movement *= -1;


    for (var j = 0; j<player.bullets.length; j++)
    {
        if (enemy.Intersects(player.bullets[j]))
        {
            enemy.color = new Color(255,0,0,1);
            player.bullets[j].color = new Color(255,0,0,1);
            movement = 1;
            break;
        }
    }
},1);

var Draw = setInterval(function()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (var i=0; i < floor.length; i++)
           floor[i].Draw(ctx);


    invblock.Draw(ctx);
    invblock.Draw(ctx);
    enemy.Draw(ctx);
    player.Draw(ctx);



}, 33);
