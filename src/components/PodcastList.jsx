import React from 'react'
import './PodcastList.css'
import SinglePodcast from './SinglePodcast'
import Search from './Search'

export default props => (
<div className="site-section bg-light">
        <div className="container">
            <Search search={props.search} description={props.description} handleDescriptionChange={props.handleDescriptionChange} />

            <div className="row mb-5" data-aos="fade-up">
                <div className="col-md-12 text-center">
                </div>
            </div>
            
            {
                props.podcasts.map(
                    podcast => <SinglePodcast 
                        podcastFile={podcast.File} 
                        podcastTitle={podcast.Title} 
                        image={podcast.Image} 
                        description={podcast.Description.substring(0, 240) + "..."} 
                        author="Fernanda Pantoja"
                        key={podcast.id} />
                )
            }
        </div>    
    </div>
)