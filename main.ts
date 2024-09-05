let num1 = game.askForNumber("Num1 ",5)
let num2 = game.askForNumber("Num2 ", 5)
let num3 = game.askForNumber("Num3 ", 5)
if (num1 >= num2 && num1 >= num3 )
    {
        game.splash("Num1 is the greatest of three i.e.", num1)
    }
else if (num2 >= num1 && num2 >= num3) 
{
    game.splash("Num2 is the greatest of three i.e.", num2)
}
else
{
    game.splash("Num3 is the greatest of three i.e.", num3)
}