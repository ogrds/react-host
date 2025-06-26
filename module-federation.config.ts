export const mfConfig = {
	name: 'react_host',
	filename: 'remoteEntry.js',
	exposes: {},
	remotes: {
		react_remote: 'react_remote@http://localhost:3001/remoteEntry.js',
	},
	shared: ['react', 'react-dom'],
};
