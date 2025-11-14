interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsPartial = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsPartial) {
    //hit the database to update the user
}