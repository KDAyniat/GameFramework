var anim = new Animation(16,16, 0, 0, 8, "http://farrisarts.com/demo/mario.png",12,4,5 );
anim.position.Set(50,50);

setInterval(function()
{
    anim.Update();
    if(input.d)
        anim.SetRow(0);
    else if (input.a)
        anim.SetRow(2);

    if (input.a)
        anim.position.Move(new Vector2(-0.5,0)) ;
    else if (input.d)
        anim.position.Move(new Vector2(0.5,0));

    else if (input.w)
        anim.position.Move(new Vector2(0,-0.5));

    else if (input.s)
        anim.position.Move(new Vector2(0,0.5));
    else
        anim.Update();
});
anim.Update();
