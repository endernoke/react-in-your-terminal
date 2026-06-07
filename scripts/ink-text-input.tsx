import React, {useState} from 'react';
import {render, Box, Text, useInput} from 'ink';

function TextInput() {
	const [input, setInput] = useState('');

	useInput((input, key) => {
		if (key.backspace) {
			setInput(prevInput => prevInput.slice(0, -1));
		} else if (input) {
			setInput(prevInput => prevInput + input);
		}
	});

	return (
		<Box flexDirection="row" borderStyle="single">
			<Text>Type something: </Text>
			<Text>{input}</Text>
		</Box>
	);
}

render(<TextInput />);
