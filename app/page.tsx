import Layout from '@/components/Layout';
import Welcome from '@/components/Welcome';

export default function Home() {
    const WelcomeProps = {
        textCenter: false,
        heading: 'A better financial future worth saving for',
        description:
            'Savings, investments and pensions, all together. Set up your ISA today!',
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Layout>
                <Welcome {...WelcomeProps} />
            </Layout>
        </main>
    );
}
