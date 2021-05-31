attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec4 coords;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main() {
	vec4 vertex = vec4(aVertexPosition, 1.0);

	gl_Position = uPMatrix * uMVMatrix * vertex;

	coords = vertex;	

	vTextureCoord = aTextureCoord;
}
