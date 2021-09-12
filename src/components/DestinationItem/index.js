import './index.css'

const destinationItem = props => {
  const {destinationList} = props
  const {imgUrl, name} = destinationList
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default destinationItem
