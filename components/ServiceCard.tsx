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
		<div className="grid items-center grid-cols-4 gap-4 p-2">
			<Icon className="col-span-1 w-14 h-14 xl:w-17 xl:h-17 2xl:w-24 2xl:h-24 text-lightPalette-blue dark:text-darkPalette-orange" />
			<h5 className="col-span-1 text-sm font-bold text-left xl:text-md">{title}</h5>
			<p
				className="col-span-2 text-sm text-left xl:text-md "
				dangerouslySetInnerHTML={createMarkup()}
			/>
		</div>
	);
};

export default ServiceCard;
