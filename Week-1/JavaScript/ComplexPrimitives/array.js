const arrayPerson = ["Naveen", "Bharath", "Tharun"];

console.log(arrayPerson);

const ages = [21, 22, 25, 26, 45, 36, 100];
const numberOfPeople = ages.length;
for(let i = 0; i < ages.length; i++)
{
    if(ages[i] % 2 == 0)
        console.log(ages[i]);
}