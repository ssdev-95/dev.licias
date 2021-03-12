import Document, { Html, Main } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html >
                <head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap" rel="stylesheet" />
                </head>
                <body>
                    <Main />
                </body>
            </Html>
        );
    }
}