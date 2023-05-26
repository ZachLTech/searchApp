export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.bee529e7.js","app":"_app/immutable/entry/app.24689e38.js","imports":["_app/immutable/entry/start.bee529e7.js","_app/immutable/chunks/index.153e9287.js","_app/immutable/chunks/singletons.0097aa29.js","_app/immutable/entry/app.24689e38.js","_app/immutable/chunks/index.153e9287.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
