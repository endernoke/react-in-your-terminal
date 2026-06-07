import React from 'react';
import {Box, Text, render} from 'ink';

const App = () => {
	return (
		<Box flexDirection="column">
			<Box flexDirection="row" gap={1} marginBottom={1}>
				<Box width={4} height={2} borderStyle="classic"></Box>
				<Box width={4} height={2} borderStyle="round"></Box>
				<Box width={4} height={2} borderStyle="single"></Box>
				<Box width={4} height={2} borderStyle="double"></Box>
			</Box>

			<Box width={40} flexDirection="column" borderStyle="doubleSingle">
				<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
				<Box flexDirection="row" gap={1}>
					<Box flexGrow={1} borderStyle="round">
						<Text>Foo</Text>
					</Box>
					<Box flexGrow={1} borderStyle="round">
						<Text>Bar</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

render(<App />);
