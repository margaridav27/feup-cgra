#ifdef GL_ES
precision highp float;
#endif

uniform vec4 fishSkinColor;

void main() {
	gl_FragColor = fishSkinColor;
}
