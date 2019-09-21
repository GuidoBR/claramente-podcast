import React, { Component } from 'react'
import Player from '../components/Player'
import PodcastList from '../components/PodcastList'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';

export default class Podcast extends Component {
    render() {
        return (
            <div className="podcast-app">
                <Player />
                <PodcastList />
            </div>
        )
    }
}