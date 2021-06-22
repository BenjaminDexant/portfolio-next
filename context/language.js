import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function AppWrapper({ children }) {
	const [contextLang, setContextLang] = useState(true);

	return (
		<LanguageContext.Provider value={{ contextLang, setContextLang }}>{children}</LanguageContext.Provider>
	);
}

export function useLanguageContext() {
	return useContext(LanguageContext);
}
