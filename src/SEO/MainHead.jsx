import { Helmet } from 'react-helmet';

const MainHead = () => (
        <Helmet>
                {/* MAIN */}
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                        name="description"
                        content="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
                />
                {/* TYPEFACE */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                        href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800&family=Noto+Sans:wght@300;400;500;700&display=swap"
                        rel="stylesheet"
                />
                {/* FAVICONS */}
                <link
                        rel="icon"
                        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😻</text></svg>"
                />

                {/* TITLE */}
                <title>Pets Paw</title>
        </Helmet>
);
export default MainHead;
