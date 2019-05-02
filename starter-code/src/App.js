import React, { Component } from 'react'
import './App.css'
import FilterableProductTable from './components/FilterableProductTable'
import JSONdata from './data.json'

class App extends Component {
    render() {
        return (
            <div className="App">
                <FilterableProductTable products={JSONdata} />
            </div>
        )
    }
}

export default App
