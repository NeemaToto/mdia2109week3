export default function EmployeeCard({
    name = "",
    ID = "",
    department = "",
    email = "",
    font = 0,
    colour=" "
}){
    return(
        <div style={{backgroundColor: colour, fontSize: font}}>
            {ID}
            {department}
            {email}
            {name}
        </div>
    )
}