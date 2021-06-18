import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="eng">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&family=Permanent+Marker&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap"
						rel="stylesheet"
					/>

					<meta name="description" content="web developer looking for a job" />
					<meta
						name="keywords"
						content="web developer, javascript, react, next, typescript, node, mongodb"
					/>
				</Head>
				<body className="bg-fixed bg-lightPalette-white dark:bg-darkPalette-black">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
