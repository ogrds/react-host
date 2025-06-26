export const mfConfig = {
	name: 'react_host',
	exposes: {},
	remotes: {
		react_remote:
			'react_remote@https://gabriel-ribeiro-253-react-remote-react-remote-ogr-b2e2dc0be-ze.zephyrcloud.app/remoteEntry.js',
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
