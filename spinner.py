import time

frames = [
		    "∙∙∙",
			"●∙∙",
			"∙●∙",
			"∙∙●",
			"∙∙∙"
]

while True:
    for frame in frames:
        print(f"\033[38;2;238;147;34m{frame}\033[0m", end="\r")
        time.sleep(0.5)
