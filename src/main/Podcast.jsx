import React, { Component } from 'react'

import Player from '../components/Player'
import PodcastList from '../components/PodcastList'

import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';

export default class Podcast extends Component {
    state = {
        podcasts: [],
        description: '',
        selectedPodcast: {}
    };

    constructor() {
        super();
        this.search = this.search.bind(this);
        this.getPodcasts = this.getPodcasts.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }
    
    getPodcasts() {
        fetch('data/Podcasts.json')
            .then((r) => r.json())
            .then((data) =>{
                this.setState({podcasts: data.episodes, selectedPodcast: data.episodes[0]});
            })
    }

    componentDidMount() {
        this.getPodcasts();
    }

    handleDescriptionChange(e) {
        this.setState({description: e.target.value })
    }

    search() {
        var query = this.state.description;
        if (query !== undefined && query !== '') {
            this.setState({
                podcasts: this.state.podcasts.filter(o => o.Title.includes(query))
            })
        } else {
            this.getPodcasts()
        }
    }

    render() {
        return (
            <div className="podcast-app">
                <Player selectedPodcast={this.state.selectedPodcast} />
                <PodcastList
                    podcasts={this.state.podcasts}
                    search={this.search}
                    handleDescriptionChange={this.handleDescriptionChange}
                    description={this.state.description} />
            </div>
        )
    }
}