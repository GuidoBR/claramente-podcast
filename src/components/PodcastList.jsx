import React from 'react'
import './PodcastList.css'

export default () =>
    <div className="site-section bg-light">
        <div className="container">

            <div className="row mb-5" data-aos="fade-up">
                <div className="col-md-12 text-center">
                <h2 className="font-weight-bold text-black">Recent Podcasts</h2>
                </div>
            </div>
    
        <div className="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">
            <div className="image"></div>
                <div className="text">
                    <h3 className="font-weight-light"><a href="single-post.html">Episode 08: How To Create Web Page Using Bootstrap 4</a></h3>
                    <div className="text-white mb-3"><span className="text-black-opacity-05"><small>By Mike Smith <span className="sep">/</span> 16 September 2017 <span className="sep">/</span> 1:30:20</small></span></div>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt.</p>

                    <div className="player">
                        <audio id="player2" preload="none" controls>
                        <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3" type="audio/mp3" />
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    </div>