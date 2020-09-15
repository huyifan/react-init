import React from 'react'
import './app.less'
import { DatePicker,Button,Switch} from 'antd';
import 'antd/dist/antd.css'

class App extends React.Component {
    render() {
        return(
            <div className={'app'}>
                <h1>Hello World222</h1>
                <DatePicker/>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Switch defaultChecked />
            </div>
        )
    }
}

export  default App