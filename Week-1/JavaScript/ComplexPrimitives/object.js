const allUsers = [
    {
        firstName: "Naveen",
        gender: "Male"
    },
    {
        firstName: "Narasimha",
        gender: "Male"
    },
    {
        firstname: "Priyanka",
        gender: "Female"
    }
]

for(let i = 0; i < allUsers.length; i++)
{
    if(allUsers[i]["gender"] == "Male")
        console.log(allUsers[i]["firstName"]);
}