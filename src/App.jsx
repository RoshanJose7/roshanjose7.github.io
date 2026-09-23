import {
    About,
    Contact,
    Education,
    Experience,
    Footer,
    Hero,
    Metrics,
    Navbar,
    Projects,
    Publications,
    Skills,
    Volunteer,
} from "./components";

// Desktop layout groups sections into viewport-height "folds": each fold
// wrapper is `lg:min-h-screen lg:flex lg:flex-col[ lg:justify-center]` so
// its sections stack and center as a block when shorter than the
// viewport, and grow past it uncapped when their content is taller.
// About and Experience are each a fold on their own (via Sheet's
// `fullHeight` prop) since they naturally run close to a full viewport.
const App = () => {
    return (
        <div className="paper relative min-h-screen w-full border-[3px] border-ink box-border text-ink">
            <div className="lg:min-h-screen lg:flex lg:flex-col">
                <Navbar />
                <Hero />
                <Metrics />
            </div>
            <About />
            <Experience />
            <div className="lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
                <Projects />
                <Skills />
            </div>
            <div className="lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
                <Education />
                <Volunteer />
                <Publications />
            </div>
            <div className="lg:min-h-screen lg:flex lg:flex-col">
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default App;
