import React, {Component} from 'react';
//import * as Orientation from "react-native-orientation";
import Navigator from "./src/app/navigation/Navigator";

interface Props {
}

export default class App extends Component<Props> {
    componentDidMount = () => {
      //  Orientation.lockToPortrait();
    };

    render() {
        return <Navigator/>;
    }
}
