import * as fs from "fs";

export function findProjectRoot(path: string):	string {
	const dir = path.split('/').slice(0, -1).join('/');
	
	if (!fs.existsSync(`${dir}/package.json`)) {
		return findProjectRoot(dir);
	} 
	
	console.log(dir);
	return dir;
}

export function findTestDir(path: string): string {
	const dir = path.split('/');
	const [firstDir, ...rest] = dir;

	if(firstDir === 'tests'){
		const lastDir = rest.pop()!;
		const builtFileName = `${lastDir.slice(0, -2)}js`;

		return ['dist-tests', ...rest, builtFileName].join('/');
	}

	return findTestDir(rest.join('/'));
}

export function extractTestCase(text: string): string {
	return text.match(/'([^']*)'/)![1];
}
