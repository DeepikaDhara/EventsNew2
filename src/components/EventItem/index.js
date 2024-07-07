// Write your code here
const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEvent = () => {
    setActiveEventId(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
