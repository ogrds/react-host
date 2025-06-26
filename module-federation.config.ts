export const mfConfig = {
	name: 'react_host',
	exposes: {},
	remotes: {
		react_remote: 'react_remote@http://localhost:3001/remoteEntry.js',
	},
	shared: {
		react: {
			singleton: true,
		},
		'react-dom': {
			singleton: true,
		},
	},
};
