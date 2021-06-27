import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export type RuleNames = 'button' | 'cardTitle';

export interface IProps {}

export interface CustomTheme {
	background: string;
	screenSizes: {
		xs: string;
	};
	miscellaneous: {
		spacing: string;
	};
}

export const styles = (theme: CustomTheme) => ({
	button: {
		textAlign: 'initial'
	},
	cardTitle: {},
	[createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
		content: {
			padding: [theme.miscellaneous.spacing, '!important']
		},
		cardTitle: {
			fontSize: 28
		}
	}
});
