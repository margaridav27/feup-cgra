attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main() {
	vec3 offset= aVertexNormal * 0.08 * texture2D(uSampler, aTextureCoord + vec2(timeFactor * 0.02, timeFactor * 0.01)).b;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

	vTextureCoord = aTextureCoord;
}

