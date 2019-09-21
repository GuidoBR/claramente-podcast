import React from 'react'

export default props =>
    <div className="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">
        <div className="image"><img src={props.image} alt='' width="100%" /></div>
        <div className="text">
            <h3 className="font-weight-light"><a href="/">{props.podcastTitle}</a></h3>
            <div className="text-white mb-3"><span className="text-black-opacity-05"><small>por {props.author} <span className="sep">/</span> 16 September 2017 <span className="sep">/</span> 1:30:20</small></span></div>
            <p className="mb-4">{props.Description}</p>

            <div className="player">
                <audio id="player2" preload="none" controls>
                    <source src={props.AudioUrl} type="audio/mp3" />
                </audio>
            </div>
        </div>
    </div>