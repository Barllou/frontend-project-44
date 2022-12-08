install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

rec:
	asciinema rec

calc:
	brain-calc  

even:
	brain-even

gcd:
	brain-gcd 

prime:
	brain-prime

progr:
	brain-progression     	  