import React from 'react'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <ProductRow />
                </table>
            </div>
        )
    }
}
export default ProductTable
