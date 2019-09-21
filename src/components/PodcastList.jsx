import React from 'react'
import './PodcastList.css'
import SinglePodcast from './SinglePodcast'

export default () =>
    <div className="site-section bg-light">
        <div className="container">

            <div className="row mb-5" data-aos="fade-up">
                <div className="col-md-12 text-center">
                <h2 className="font-weight-bold text-black">Recent Podcasts</h2>
                </div>
            </div>

            <SinglePodcast podcastTitle="Como tomar melhores decisões" image="/img/claramente-logo.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastTitle="A ciência da felicidade" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastTitle="A boa liderança" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastTitle="Os hábitos no seu cérebro" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastTitle="O timing perfeito" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastTitle="O que são vicios comportamentais e como lidar com eles" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastTitle="O cérebro e a meditação" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastTitle="A importância de uma mente focada" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
        </div>    
    </div>