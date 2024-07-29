const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {ActiveEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="No-Active-Event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />

      <h1 className="registrations-closed-hea">"Registrations Are Closed Now!" 
      </h1>
      <p className="">Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="">"You have already registered for the event"</h1>
    </div>
  )

  const renderYetRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="description">"A live performance brings so much to your relationship with dance"</p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderAciveEventRegistrationDetails = () => {
    switch (ActiveEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetRegisteredView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderAciveEventRegistrationDetails()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
