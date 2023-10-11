const Myemployee = () => {
    let allemployee = [
        { name: "Inaam", salary: 1200, experience: "2 years" },
        { name: "Inaaya", salary: 1300, experience: "3 years" },
        { name: "Umair", salary: 400, experience: "6 years" },
        { name: "Maliks", salary: 12000, experience: "4 years" },
        { name: "Taneem", salary: 10000, experience: "3 years" },
        { name: "Tanu", salary: 200, experience: "2 years" }

    ];

    return (
        <div className="container">
            <h1> Total employee expence : {allemployee.length} </h1>
            <table className="mytable">
                <thead>
                    <tr>
                        <th> sl No </th>
                        <th> Name </th>
                        <th> Salary </th>
                        <th> experience </th>
                        <th> Total L.P.A </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allemployee.map((employee, index) => {
                            return (

                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {employee.name} </td>
                                    <td> {employee.salary}</td>
                                    <td> {employee.experience} </td>
                                    <td> {employee.salary * 12} </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Myemployee;