#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D fishSkinTexture;
uniform vec4 fishSkinColor;

varying vec4 coords;
varying vec2 vTextureCoord;

void main() {
	gl_FragColor =  coords.z * 2.0 >= 0.6 ? fishSkinColor : texture2D(fishSkinTexture, vTextureCoord);
}
