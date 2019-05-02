import React from 'react'
class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <h1>searc bar</h1>
                <input
                    type="text"
                    className="input"
                    // onChange={this.handleSearch}
                    placeholder="search..."
                    // value={this.state.input}
                />
            </div>
        )
    }
}

export default SearchBar
