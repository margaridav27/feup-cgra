#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D sandTexture;
uniform sampler2D sandHeightMap;

void main() {
	vec4 color = texture2D(sandTexture, vTextureCoord);
    vec4 filter = texture2D(sandHeightMap, vTextureCoord);

    gl_FragColor = color * vec4(filter.r, filter.r, filter.r, 1.0);
    
}
