#ifdef GL_ES
precision highp float;
#endif

uniform vec4 seaWeedColor;

void main() {
	gl_FragColor = seaWeedColor;
}
