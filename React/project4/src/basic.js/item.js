const Myproduct = () => {
    let allproduct = [
        { name: "Printer", price: 1200, qty: 10 },
        { name: "Scanner", price: 1300, qty: 22 },
        { name: "Mouse", price: 400, qty: 19 },
        { name: "Keyboard", price: 12000, qty: 102 },
        { name: "Laptop", price: 10000, qty: 130 },
        { name: "Network card", price: 200, qty: 130 }

    ];
    return (
        <div className="container">

            <h1> Product List : {allproduct.length} </h1>
            <table className="mytable">
                <thead>
                    <tr>
                        <th> Sl No </th>
                        <th> Product Name </th>
                        <th> Product price</th>
                        <th> Quantity </th>
                        <th> Total cost</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allproduct.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {product.name}</td>
                                    <td> {product.price} </td>
                                    <td> {product.qty} </td>
                                    <td> {product.qty * product.price} </td>
                                </tr>

                            )
                        })
                    }
                </tbody>

            </table>
        </div>

    )
}

export default Myproduct;