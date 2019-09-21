import React, { Component } from 'react'
import MainHeader from '../components/MainHeader'
import Player from '../components/Player'
import PodcastList from '../components/PodcastList'
import Search from '../components/Search'
import './style.css'
import './bootstrap.min.css'

export default class Podcast extends Component {
    render() {
        return (
            <div className="podcast-app">
                <MainHeader />
                <Search />
                <Player />
                <PodcastList />
            </div>
        )
    }
}