import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        const meta = {
            title: "kurokeita's personal portfolio",
            description: 'My personal portfolio.',
            image:
                '/1.jpg'
        }

        return (
            <Html lang="en">
                <Head>
                    <meta name="robots" content="follow, index"/>
                    <meta name="description" content={meta.description}/>
                    <meta property="og:site_name" content={meta.title}/>
                    <meta property="og:description" content={meta.description}/>
                    <meta property="og:title" content={meta.title}/>
                    <meta property="og:image" content={meta.image}/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <title>kurokeita's portfolio</title>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument