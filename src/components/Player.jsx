import React from 'react'
import './Player.css'

export default props =>
    <div className="container">
        <div class="row">
            <div class="col">
                <h2>{props.selectedPodcast.Title}</h2>

                <div className="player">
                    <audio id="player2" preload="none" controls>
                        <source src={props.selectedPodcast.podcastFile} type="audio/mp3" />
                    </audio>
                </div>
            </div>

            <div class="col">
                <p className="card-text">{props.selectedPodcast.Description}</p>
            </div>
        </div>
        

    </div>