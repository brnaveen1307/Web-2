
type Employee = {
    name: string;
    startDate: Date;
}

interface Manager {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager;
const t: TeamLead = {
    name: "Naveen",
    startDate: new Date(),
    department: "IT"
}