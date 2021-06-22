import {
	GetServerSideProps,
	GetServerSidePropsContext,
	GetStaticProps,
	GetStaticPropsContext,
} from "next";
import Head from "next/head";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { services } from "../data";
import { componentFadeOut, fadeInUp, stagger } from "../animation";
import { useLanguageContext } from "../context/language";

const index = (props) => {
	const languageContext = useLanguageContext();
	let isEnglish = languageContext.contextLang;

	return (
		<motion.div
			variants={componentFadeOut}
			initial="initial"
			animate="animate"
			exit="exit"
			className="flex flex-col flex-grow px-6 pt-1"
		>
			<Head>
				<title>Benjamin Dexant | Web Developer | Portfolio</title>
			</Head>
			<h5 className="my-3 font-medium">
				{isEnglish
					? "Hi ! I'm a Javascript developer with about two years experience. Looking at the moment for opportunities."
					: "Bonjour ! Je suis un développeur Javascript avec environ deux d'expérience. Actuellement à l'écoute de nouvelles opportunités."}
			</h5>
			<div
				className="flex-grow p-4 mt-5 bg-lightPalette-white dark:bg-darkPalette-white"
				style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
			>
				<h6 className="my-3 text-xl font-bold tracking-wide text-black">
					{isEnglish ? "What I do :" : "Ce que je sais faire :"}
				</h6>
				<motion.div
					variants={stagger}
					initial="initial"
					animate="animate"
					className="grid gap-6 lg:grid-cols-2"
				>
					{services.map((service) => (
						<motion.div
							variants={fadeInUp}
							className="rounded-lg bg-lightPalette-green dark:bg-darkPalette-gray lg:col-span-1"
							key={service.title}
						>
							<ServiceCard service={service} key={service.title} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
};

export default index;

/* const prod = process.env.NODE_ENV !== "production";
console.log(prod);
const url = prod ? `${process.env.SITE_URL}/api/services` : "http://localhost:3000/api/services";
console.log(url);
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const res = await fetch(`${url}`);
	const data = await res.json();
	//TODO : add a 404 page
	// if (!data) {
	//	return {
	//		notFound: true,
	//	};
	//}

	return {
		props: { data: data.data },
	};
}; */

/* const prod = process.env.NODE_ENV !== "production";
console.log(prod);
const url = prod ? `${process.env.SITE_URL}/api/services` : "http://localhost:3000/api/services";
export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	//const res = await fetch(`${url}`);
	//const data = await res.json();
	//if (!data) {
	//	return {
	//		redirect: {
	//			destination: "/resume",
	//			permanent: false,
	//		},
	//	};
	//}
	return { props: { services: data.services } };
};
 */
