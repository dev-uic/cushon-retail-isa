import Link from 'next/link';
import styles from './Welcome.module.css';
import clsx from 'clsx';

interface WelcomeProps {
    textCenter?: boolean;
    heading: string;
    description: string;
    cta?: boolean;
}

const Welcome = ({
    textCenter = true,
    heading,
    description,
    cta = true,
}: WelcomeProps) => {
    const welcomeClasses = clsx({
        'text-center': textCenter,
        'text-left': !textCenter,
    });

    return (
        <div className={`${styles['curved-bottom']} relative`}>
            <div
                className={`${welcomeClasses} bg-cushon-pink text-white te p-6 rounded-md`}
            >
                <h1 className="text-2xl font-bold mb-4">{heading}</h1>
                <p className="mb-16">{description}</p>
                {cta && (
                    <div className="flex justify-start">
                        <Link
                            href="/retail-isa"
                            className="bg-white text-cushon-pink p-3 rounded-md"
                        >
                            Find out more
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Welcome;
