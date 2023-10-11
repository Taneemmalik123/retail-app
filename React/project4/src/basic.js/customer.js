const Mycustomer = () => {
    let allcustomer = [
        { name: "Taneem", price: 1200, qty: 10 },
        { name: "Inaam", price: 1300, qty: 22 },
        { name: "Inaaya", price: 400, qty: 19 },
        { name: "Umair", price: 12000, qty: 102 },
        { name: "Malik", price: 10000, qty: 130 },
        { name: "Maliks Home", price: 200, qty: 130 }
    ];

    return (
        <div className="container">
            <h1> Total Customers : {allcustomer.length} </h1>
            <table className="mytable">
                <thead>
                    <tr>
                        <th> Sl No </th>
                        <th> Customer Name </th>
                        <th> price </th>
                        <th> Quantity </th>
                        <th> Total cost</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allcustomer.map((customer, index) => {
                            return (
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {customer.name}  </td>
                                    <td> {customer.price} </td>
                                    <td> {customer.qty}</td>
                                    <td> {customer.qty *  customer.price}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>

            </table>
        </div>
    )



}



export default Mycustomer;
