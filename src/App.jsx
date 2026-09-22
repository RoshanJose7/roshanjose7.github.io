import {
    About,
    Contact,
    Education,
    Experience,
    Hero,
    Navbar,
    Projects,
    Publications,
    Skills,
    Volunteer,
} from "./components";

const App = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <Navbar/>
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
            <Skills/>
            <Education/>
            <Volunteer/>
            <Publications/>
            <Contact/>
        </div>
    );
};

export default App;
