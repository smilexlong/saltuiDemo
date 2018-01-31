import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'saltui/lib/Button'
import Dialog from 'saltui/lib/Dialog'

class App extends Component {
    handelClick() {
        Dialog.alert({
            title: '测试',
            content: '我是 Dialog.alert 的调用'
        });
    }

    render() {
        return ( < div >
            < Button onClick = {
                () => this.handelClick()
            } > 弹出框 < /Button> < /div > );
    }
}

export default App;
