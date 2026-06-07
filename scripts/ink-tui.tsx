import React from 'react';
import {render, Box, Text, useWindowSize} from 'ink';

function App() {
	const {columns, rows} = useWindowSize();

  setInterval(() => {}, 1000);

  return (
		<Box
			width={columns}
			height={rows}
      justifyContent="center"
			alignItems="center"
			borderStyle="round"
		>
			<Text>Hello World</Text>
		</Box>
	);
}

render(<App />, {
  alternateScreen: true,
});
