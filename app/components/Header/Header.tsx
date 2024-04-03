import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

const Header = () => {
    return (
        <header>
            <Layout>
                <Link href="/">
                    <Image
                        src="/images/cushon-logo.png"
                        alt="Cushon"
                        width={96}
                        height={46}
                    />
                </Link>
            </Layout>
        </header>
    );
};

export default Header;
