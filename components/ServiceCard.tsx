import { FunctionComponent } from "react";
import { IService } from "../types";
import { useLanguageContext } from "../context/language";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
	service: { Icon, about, title, aboutFr, titleFr },
}) => {
	const languageContext = useLanguageContext();
	let isEnglish = languageContext.contextLang;
	let info = isEnglish ? about : aboutFr;

	const createMarkup = () => {
		return {
			__html: info,
		};
	};
	const createMarkupFr = () => {
		return {
			__html: about,
		};
	};

	return (
		<div className="grid items-center grid-cols-4 gap-4 p-2">
			<Icon className="col-span-1 w-14 h-14 xl:w-17 xl:h-17 2xl:w-24 2xl:h-24 text-lightPalette-blue dark:text-darkPalette-orange" />
			<h5 className="col-span-1 text-xs font-bold text-left lg:text-sm xl:text-md">{isEnglish ? title : titleFr}</h5>
			<p
				className="col-span-2 text-xs text-left lg:text-sm xl:text-md "
				dangerouslySetInnerHTML={createMarkup()}
			/>
		</div>
	);
};

export default ServiceCard;
