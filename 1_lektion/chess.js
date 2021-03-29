'use strict'
let row1 = " ";
let row2 = "#";
let size = 15;
let numberOfRows = 0;

function makeRightLength(row)
{
    while (row.length !== size)
    {
        if (row[row.length-1] === "#")
            row += " ";
        else
            row += "#";
    }
    return row;
}
row1 = makeRightLength(row1);
row2 = makeRightLength(row2);

while(numberOfRows !== size)
{
    console.log(row1);
    numberOfRows++;
    if (numberOfRows === size)
        break;
    console.log(row2);
    numberOfRows++;
}