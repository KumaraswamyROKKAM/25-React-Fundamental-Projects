import React from 'react'
import Tabs from './Tabs'

const data = [
    {
        lable:"Tab1",
        content: <div>This is from Tab1</div>
    },
    {
        lable:"Tab2",
        content: <div>This is from Tab2</div>
    },
    {
        lable:"Tab3",
        content: <div>This is from Tab3</div>
    }
]
const TabsData = () =>
{
    
    return(
        <div>
            <h1><center>Project 9 (Custom-Tabs)</center></h1>
            <Tabs TabsContent={data} />
        </div>
    )
}
export default TabsData