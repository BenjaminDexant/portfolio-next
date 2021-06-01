import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<div>Sidebar</div>
			<div>
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
