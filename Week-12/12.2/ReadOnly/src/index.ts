type User = {
    name: string;
    age: number;
}

const user: Readonly<User> = {
    name: "Naveen",
    age: 20
}

//name is a readonly property
// user.name = 'Naveen Msd'; 