class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line
  const Camper = ({name}) => {
      return (
          <p>{name}</p>
      )
  }
  Camper.propTypes = { name: PropTypes.string.isRequired}
  // Change code above this line
  
  Camper.defaultProps = {
    name: "CamperBot"
  };