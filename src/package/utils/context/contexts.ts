import { createContext } from 'react';

interface DeveloperProfileContextType {
	onFilesUpload: (files: any) => Promise<string>;
}
export const DeveloperProfileContext = createContext<DeveloperProfileContextType>({} as DeveloperProfileContextType);
export const StoreContext = createContext({});
type StaticDataContextType = {
	apiKeys: { giphy: string; unsplash: string };
	endpoints: {
		devIcons: string;
		unsplashProxy: string;
	};
};
export const StaticDataContext = createContext<Partial<StaticDataContextType>>({});
