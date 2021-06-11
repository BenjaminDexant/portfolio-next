import { FunctionComponent } from "react";
import { IService } from "../types";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
	service: { Icon, about, title },
}) => {
	const createMarkup = () => {
		return {
			__html: about,
		};
	};
	return (
		<div className="grid items-center grid-cols-4 gap-3 p-2">
			<Icon className="w-12 h-12 col-span-1 lg:w-24 lg:h-24 text-lightPalette-blue dark:text-darkPalette-orange" />
			<h5 className="col-span-1 text-lg font-bold text-left">{title}</h5>
			<p className="col-span-2 text-left" dangerouslySetInnerHTML={createMarkup()} />
		</div>
	);
};

export default ServiceCard;
