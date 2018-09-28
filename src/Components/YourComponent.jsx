import React, { Component } from "react";
import fire from '../config/fire'

class YourComponent extends Component {
  state = {
    name: ""
  }

  componentDidMount() {
    //name direkt referansa sahip olduğundan ref metodundan
    //dönen referans yeterli
    const nameRef = fire.database().ref("name")

    //on metodu firebase'de değişiklik olunca da çalışır yani realtime çalışır.
    //once metodu sadece bir kere çalışır.
    //Realtime'a gerek yok ise once kullanılır.
    nameRef.on("value", snapshot => {
      this.setState({
        name: snapshot.val()
      })
    })
  }

  componentWillUnmount() {
    fire
      .database()
      .ref("name")
      .off();
  }

  render() {
    return (
      <div>
          <p>{'Your component is here'}</p>
          {`Data from firebase : ${this.state.name}`}
      </div>
    )
  }
}

export default YourComponent