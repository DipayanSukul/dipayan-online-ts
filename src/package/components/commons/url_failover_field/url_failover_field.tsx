import React, { useCallback, useEffect, useState } from 'react';
import { TextField, Typography } from '@welovedevs/ui';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { styles } from './url_failover_field_styles';

const useStyles = createUseStyles(styles);

interface uRLFailoverFieldProps {
	onChange: (url: any) => void;
	value?: string;
}

export const URLFailoverField: React.FC<uRLFailoverFieldProps> = ({ onChange, value: inputValue = '' }) => {
	const classes = useStyles();

	const [input, setInput] = useState('');

	useEffect(() => setInput(inputValue), [inputValue]);

	const handleChange = useCallback(
		(e) => {
			setInput(e.target.value);
			onChange({ url: e.target.value });
		},
		[onChange]
	);

	return (
		<div className={classes.container}>
			<Typography component="div" className={classes.title}>
				<FormattedMessage id="URLFailover.title" defaultMessage="Enter an URL" />
			</Typography>
			<TextField fullWidth variant="flat" placeholder="URL" onChange={handleChange} name="name" value={input} />
		</div>
	);
};
