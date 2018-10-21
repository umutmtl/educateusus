import React, { Component } from "react";
import fire from '../config/fire'

class DiscoverComponent extends Component {
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
          {/* tıplı html'deki bootstrap kullanımı gibi tek fark "class" yerine "className" kullanıyoruz. */}
          <p className='lead'>{DiscoverComponent}</p>
          {`Data from firebase : ${this.state.name}`}
      </div>
    )
  }
}

export default DiscoverComponent