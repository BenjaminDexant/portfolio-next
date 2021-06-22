import { AppWrapper } from "../context/language";

import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute="class">
			<AppWrapper>
				<div className="grid grid-cols-12 gap-6 px-2 lg:px-24 2xl:px-72 xl:px-48 sm:px-10 md:px-32 my-14">
					<div className="col-span-12 p-4 text-center bg-lightPalette-green dark:bg-darkPalette-gray lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
						<Sidebar />
					</div>
					<div className="flex flex-col col-span-12 overflow-hidden bg-lightPalette-green dark:bg-darkPalette-gray lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
						<Navbar />
						<AnimatePresence exitBeforeEnter>
							<Component {...pageProps} key={router.route} />
						</AnimatePresence>
					</div>
				</div>
			</AppWrapper>
		</ThemeProvider>
	);
}

export default MyApp;
