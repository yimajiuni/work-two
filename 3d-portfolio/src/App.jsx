import React, { Suspense, lazy, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NavbarJump from "./components/NavbarJump";
import Service from "./pages/Service";

const Contact = lazy(() => import("./pages/Contact"));
const Content = lazy(() => import("./components/Content"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));

const RouteFallback = () => (
    <div
        className="min-h-[40dvh] flex items-center justify-center"
        aria-hidden="true"
        role="presentation"
    />
);

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <HelmetProvider>
            <div
                className={`pink-gradient_bg min-h-[100dvh] h-full mt-14 sm:mt-0 transition-all`}
            >
                <Router>
                    <NavbarJump onMenuStateChange={setIsMobileMenuOpen} />
                    {isMobileMenuOpen && (
                        <div
                            aria-hidden="true"
                            className="sm:hidden fixed inset-x-0 top-16 bottom-0 bg-pink-200/40 transition-opacity duration-300"
                        />
                    )}
                    <div
                        aria-hidden="true"
                        className={`sm:hidden transition-[height] duration-300 ${isMobileMenuOpen ? "h-16" : "h-0"}`}
                    />
                    <Suspense fallback={<RouteFallback />}>
                        <Routes>
                            <Route path="/about" element={<Content id="about" />} />
                            <Route path="/works" element={<Content id="works" />} />
                            <Route path="/details/:id" element={<WorkDetails />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<Service />} />
                        </Routes>
                    </Suspense>
                </Router>
            </div>
        </HelmetProvider>
    );
}

export default App;
