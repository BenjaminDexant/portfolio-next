import {
	GetServerSideProps,
	GetServerSidePropsContext,
	GetStaticProps,
	GetStaticPropsContext,
} from "next";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";

import { services } from "../data";
import { componentFadeOut, fadeInUp, stagger } from "../animation";

const index = () => {
	return (
		<motion.div
			variants={componentFadeOut}
			initial="initial"
			animate="animate"
			exit="exit"
			className="flex flex-col flex-grow px-6 pt-1"
		>
			<h5 className="my-3 font-medium">
				Hi ! I'm a Javascript developper with about two years experience.
			</h5>
			<div
				className="flex-grow p-4 mt-5 bg-lightPalette-white dark:bg-darkPalette-white"
				style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
			>
				<h6 className="my-3 text-xl font-bold tracking-wide text-black">What I do :</h6>
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

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const res = await fetch(`${process.env.SITE_URL}/api/services`);
	const data = await res.json();
	return { props: { services: data.services } };
};

/* 
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const res = await fetch(`${process.env.SITE_URL}/api/services`);
	const { services } = await res.json();
	return { props: { services: services } };
};
 */
