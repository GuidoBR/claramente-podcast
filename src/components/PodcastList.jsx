import React from 'react'
import './PodcastList.css'
import SinglePodcast from './SinglePodcast'
import Search from './Search'

export default () =>
    <div className="site-section bg-light">
        <div className="container">
            <Search />

            <div className="row mb-5" data-aos="fade-up">
                <div className="col-md-12 text-center">
                </div>
            </div>

            <SinglePodcast podcastFile="Como-tomar-melhores-decisões.mp3" podcastTitle="Como tomar melhores decisões" image="/img/claramente-logo.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastFile="A-ciência-da-felicidade.mp3" podcastTitle="A ciência da felicidade" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastFile="A-boa-liderança.mp3" podcastTitle="A boa liderança" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastFile="Os-hábitos-no-seu-cérebro.mp3" podcastTitle="Os hábitos no seu cérebro" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastFile="Os-hábitos-no-seu-cérebro.mp3" podcastTitle="O timing perfeito" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastFile="O-que-são-vícios-comportamentais-e-como-lidar-com-eles.mp3" podcastTitle="O que são vicios comportamentais e como lidar com eles" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastFile="O-cérebro-e-a-meditação.mp3" podcastTitle="O cérebro e a meditação" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
            <SinglePodcast podcastFile="A-importância-de-uma-mente-focada.mp3" podcastTitle="A importância de uma mente focada" image="/img/claramente-logo.jpg"  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Iste voluptates excepturi tenetur, nesciunt." author="Fernanda Pantoja" />
        </div>    
    </div>