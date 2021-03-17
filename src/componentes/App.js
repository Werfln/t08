import React from 'react'
import Post from './Post'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <Post title="p1"/>
                <Post title="p2"/>
                <Post title="p3"/>
            </div>
        );
    }
}