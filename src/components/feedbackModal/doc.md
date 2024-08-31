### Usage of the feedback modals

As shown in the example code below

```jsx
import React, {useState} from 'react'
import { Text, View} from 'react-native'
import { SCButton } from '../../components/button/button'

import styles from './style'

import { FeedbackOverlay } from '../../components/feedbackModal/FeedbackModal'

function App() : React.JSX.Element {
    const [visible,setVisible] = useState(false)
    const [type,setType] = useState('')
    const body = 'Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled'

    function toggle () {
        setVisible(!visible)
    }

    return (
        <View>
            <Text>App Home page</Text>
            <FeedbackOverlay
            type={type}
            visible={visible}
            actionFn={toggle}
            backdropPressFn={()=>{}}
            body={body}
            buttonText={'Okay'} ></FeedbackOverlay>

            <SCButton onPress={()=>{
                setType('success')
                toggle();
            }}><Text>Open Success</Text></SCButton>
            <SCButton onPress={()=>{
                setType('warning')
                toggle();
            }}><Text>Open Warning</Text></SCButton>
            <SCButton onPress={()=>{
                setType('error')
                toggle();
            }}><Text>Open Error</Text></SCButton>
            <SCButton onPress={()=>{
                setType('info')
                toggle();
            }}><Text>Open Info</Text></SCButton>

        </View>
    )
}

export default App
```
