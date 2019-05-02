import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <h1>Store</h1>
                <SearchBar />
                <ProductTable />
            </div>
        )
    }
}
export default FilterableProductTable
