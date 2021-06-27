import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@welovedevs/ui';

import { styles } from './profile_card_section_text_styles';

const useStyles = createUseStyles(styles);

interface profileCardSectionTextProps {
	children?: any;
	component?: any;
	classes?: any;
}

export const ProfileCardSectionText: React.FC<profileCardSectionTextProps> = ({
	children,
	component,
	classes: receivedClasses = {}
}) => {
	const classes = useStyles();
	return (
		<Typography component={component} classes={{ container: cn(classes.container, receivedClasses.container) }}>
			{children}
		</Typography>
	);
};
