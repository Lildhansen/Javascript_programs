function avgStringLength(a_list)
{
    let all_string_lengths = 0;
    let i = 0;
    while (i !== a_list.length)
    {
        all_string_lengths += a_list[i].length;
        i++;    
    }
    return all_string_lengths / a_list.length;    
}
console.log(avgStringLength(["Hejsa", "med", "dig!"]));
