const spinnerFrames = ['∙∙∙', '●∙∙', '∙●∙', '∙∙●', '∙∙∙'];

while (true) {
	for (const frame of spinnerFrames) {
		process.stdout.write(`\r\x1b[38;2;238;147;34m${frame}\x1b[0m`);
		await new Promise(resolve => setTimeout(resolve, 500));
	}
}

export {};
