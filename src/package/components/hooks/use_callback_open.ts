import { useCallback, useState } from 'react';

export const useCallbackOpen = (defaultValue = false): [boolean, () => void, () => void] => {
	const [open, setOpen] = useState(defaultValue);
	const setOpened = useCallback(() => setOpen(true), []);
	const setClosed = useCallback(() => setOpen(false), []);
	return [open, setOpened, setClosed];
};
