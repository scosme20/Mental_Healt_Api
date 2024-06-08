import prettier from 'prettier';
import fs from 'fs';
import path from 'path';

const formatDirectory = (dir) => {
    fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file);
        if (fs.lstatSync(filePath).isDirectory()) {
            formatDirectory(filePath);
        } else if (filePath.endsWith('.js')) {
            const options = prettier.resolveConfig.sync(filePath);
            const input = fs.readFileSync(filePath, 'utf8');
            const output = prettier.format(input, { ...options, filepath: filePath });
            if (input !== output) {
                fs.writeFileSync(filePath, output, 'utf8');
                console.log(`Formatted: ${filePath}`);
            }
        }
    });
};

formatDirectory('src');
