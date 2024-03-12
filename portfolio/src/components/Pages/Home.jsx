import Hero from '../utils/hero';
import TextBubble from '../utils/text-bubble';
import ProjectCard from '../utils/project-card';
import ImageSlider from '../utils/ImageSlider';


function Home() {
    return (
        <div>
            <Hero />
            <ImageSlider />
            <TextBubble />
        </div>
    );
}

export default Home;