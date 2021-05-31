#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D waterSurfaceTexture;
uniform sampler2D waterSurfaceDistortionMap;

uniform float timeFactor;

void main() {
	float offsetX = texture2D(waterSurfaceDistortionMap, vec2(vTextureCoord.x + timeFactor * 0.01, vTextureCoord.y + timeFactor * 0.01)).r - 0.5;
	float offsetY = texture2D(waterSurfaceDistortionMap, vec2(vTextureCoord.x + timeFactor * 0.01, vTextureCoord.y + timeFactor * 0.01)).g - 0.5;

	vec4 color = texture2D(waterSurfaceTexture, vec2(vTextureCoord.x + offsetX * 0.2, vTextureCoord.y + offsetY * 0.2));

	gl_FragColor = color;
}
