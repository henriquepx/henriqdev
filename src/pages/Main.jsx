import TabFiles from './Layout/TabFiles';
import Contact from './Contact';
import Github from './Github';
import Projects from './Projects';
import Skills from './Skills';
import Home from './Home';
import './Main.css';

const pages = [
    { component: <Home />, title: 'Home' },
    { component: <Projects />, title: 'Projects' },
    { component: <Skills />, title: 'Skills' },
    { component: <Contact />, title: 'Contact' },
    { component: <Github />, title: 'Github' },
];

const activeIndex = 1;

const Main = () => {
    return (
        <main>
            <div className='containerPages&Tabs'>
                {pages.map((page, index) => (
                    <div className={`pagetab ${index === activeIndex ? 'active' : ''}`} key={index}>
                        <TabFiles activeIndex={activeIndex} />
                        {page.component}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Main;
