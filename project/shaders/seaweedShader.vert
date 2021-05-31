attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec4 coords;
varying vec2 vTextureCoord;

uniform float timeFactor;

void main() {
	vec3 vVertexPosition = aVertexPosition;

	float x = vVertexPosition.x + sin(timeFactor * vVertexPosition.y);
	float z = vVertexPosition.z + cos(timeFactor * vVertexPosition.y);

	gl_Position = uPMatrix * uMVMatrix * vec4(x, vVertexPosition.y, z, 1.0);

	vTextureCoord = aTextureCoord;
}
