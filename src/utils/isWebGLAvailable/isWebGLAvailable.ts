// ------------------------------------------------------------------------------------------

const isWebGLAvailable = (): boolean => {
	try {
		const canvas = document.createElement('canvas');

		const webgl2 = !!(
			window.WebGL2RenderingContext &&
			canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: true })
		);

		return webgl2;
	} catch {
		return false;
	}
};

// ------------------------------------------------------------------------------------------

export default isWebGLAvailable;

// ------------------------------------------------------------------------------------------
