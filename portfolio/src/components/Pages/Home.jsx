import Hero from '../utils/hero';
import Navbar from '../utils/Navbar';
import TextBubble from '../utils/text-bubble';
import ProjectCard from '../utils/project-card';


function Home() {
    return (
        <div>
            <Hero />
            <ProjectCard />
            <TextBubble />
        </div>
    );
}

export default Home;