import React, { Component } from 'react'

import Player from '../components/Player'
import PodcastList from '../components/PodcastList'

import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';

export default class Podcast extends Component {
    constructor() {
        super();
        state = {
            podcasts: []
        };
    }
    
    getPodcasts() {
        fetch('data/Podcasts.json')
            .then((r) => r.json())
            .then((data) =>{
                this.state.podcasts = data.episodes;
                console.log(this.state.podcasts);
            })
    }

    componentDidMount() {
        this.getPodcasts();
    }

    render() {
        return (
            <div className="podcast-app">
                <Player />
                <PodcastList podcasts={this.state.podcasts} />
            </div>
        )
    }
}