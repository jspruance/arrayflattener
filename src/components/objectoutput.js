// projects component - responsible for listing all of the projects
import React, { Component } from 'react';

const styles = {
  outputblock: {
    clear: 'both',
    float: 'left',
    marginTop: 20
  }
}

class Objectoutput extends Component {

  render() {

    return (
      <div id="objectoutput" style={styles.outputblock} className="Objectoutput">
        {this.props.displayarray}
      </div>
    );
  }
}

export default Objectoutput;
