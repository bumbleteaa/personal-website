import { Layout } from "../components/layout/Layout";
import  Button from "../components/ui/Button";
import { Card, CardImage, CardContent, CardTitle, CardDescription } from "../components/ui/Card";
import  Container from "../components/ui/Container";

export default function HomePage() {
    return(
    <Layout>
        /* Hero Section */
        <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-20">
            <Container>
                <h1>I'm Lucky, do you feeling Lucky?</h1>
                <p>I build amazing web experiences with modern technologies.</p>
                <Button size="large" variant="primary">View My Works</Button>
            </Container>
        </section>

        <Container as="section" className="py-20">
            <h2 className="text-3xl font-bold mb-4">Featured</h2>
            <p>
                Check out my recent works
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card variant="flat">
                    <CardContent padding="medium">
                        <CardTitle>Project 1</CardTitle>
                        <CardDescription>
                            Descriptions here for explaining project
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>Project 2</CardTitle>
                        <CardDescription>
                            Descriptions here for explaining project
                        </CardDescription>
                        <Button>See More</Button>
                    </CardContent>
                </Card>
            </div>
        </Container>
    </Layout>
)
        
}