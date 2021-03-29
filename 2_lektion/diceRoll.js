let diceRoll=[1,6,6,2,3,4,6];

/*let is_ones = v => v==1;
find_dices_v1(diceRoll,is_ones);*/
/*let find_values_under_4 = v => v<=3;*/
find_dices_v1(diceRoll,v => v<=3);


function find_dices_v1(diceRoll,cmpFunc)
{
    let index = 0;
    for (let i of diceRoll)
    {
        if (cmpFunc(i))
            console.log(index + ":" + i);
        index++;
    }
}

function is6(v)
{
    return v == 6
}



/*function get6s_v3(diceRoll,cmpFunc)
{
    let index = 0;
    for (let i of diceRoll)
    {
        if (cmpFunc(i))
            console.log(index + ":" + i);
        index++;
    }
}*/

