const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, message } = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
      <img src={iconUrl} className="icon" />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Notifications</h1>
    <div className="notification-list">
      <Notification
        className="primary-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information message"
      />
      <Notification
        className="success-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success message"
      />
      <Notification
        className="warning-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning message"
      />
      <Notification
        className="danger-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
