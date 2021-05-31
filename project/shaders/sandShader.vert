attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D sandHeightMap;

void main() {
	float offset = texture2D(sandHeightMap, aTextureCoord).b * 3.0;
	
	float z = aVertexPosition.z + offset - 1.25;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.x, aVertexPosition.y, z, 1.0);

	vTextureCoord = aTextureCoord;
}

