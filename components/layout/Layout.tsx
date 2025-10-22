import { Header } from "./Header"; // Import Header component
import { Footer } from "./Footer"; // Import Footer component

// Layout component that includes Header and Footer
export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen bg gray-50">
            <Header />
            <main className="flex-1 p-6">
                {children} 
            </main>
            <Footer /> 
        </div>
    );
}
