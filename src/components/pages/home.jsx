import React, { Component } from "react";
import Navbar from '../Navbar/index'
import Slider from '../slider/index.js'
import MapContainer from '../map/Map'
import Info from '../info/index.jsx';
import Form from "../contact/index.jsx";
import Video from "../gallery";
import Items from "../gallery/gallery1";
export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar/>
                    <Slider />
                    <Info />
                    {/* <Items/> */}
                    {/* <Video/> */}
                    <MapContainer />
                    <Form/>
                </div>
            </>
        )
    }
}
