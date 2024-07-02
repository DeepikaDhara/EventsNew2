const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="No-Active-Event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationClosedView = () => (
    <>
      <div className="view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
      </div>
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now
      </h1>
      <p className="">Stay tuned. We will reopen the registrations soon!</p>
    </>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <p className="">You have already registered for event</p>
    </div>
  )

  const renderYetRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="description">A live Performance brings </p>
      <button type="button">Registere Here</button>
    </div>
  )

  const renderAciveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
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
