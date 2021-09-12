import {Component} from 'react'
import destinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchElement: ''}

  render() {
    const {searchElement} = this.state
    const {destinationsList} = this.props
    return (
      <div className="container">
        <h1 className="head">Destination Search</h1>
        <div className="searchBox1">
          <input type="search" placeholder="Search" className="searchBox" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchImg"
          />
        </div>
        <ul>
          {destinationsList.map(eachDestination => (
            <destinationItem
              key={eachDestination.id}
              destinationList={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
