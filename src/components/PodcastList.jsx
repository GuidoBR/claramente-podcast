import React from 'react'
import './PodcastList.css'
import SinglePodcast from './SinglePodcast'
import Search from './Search'

export default props => (
    <div className="site-section bg-light">
        <div className="container">
            <Search />

            <div className="row mb-5" data-aos="fade-up">
                <div className="col-md-12 text-center">
                </div>
            </div>
            
            {
                this.props.map(
                    podcast => <SinglePodcast 
                        podcastFile={podcast.file} 
                        podcastTitle={podcast.title} 
                        image={podcast.Image} 
                        description={podcast.description} 
                        author="Fernanda Pantoja" />
                )
            }
        </div>    
    </div>
)