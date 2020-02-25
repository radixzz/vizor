precision highp float;

varying vec2 v_uv;
uniform sampler2D u_texture;

void main() {
  vec3 color = texture2D(u_texture, v_uv).rgb;
  gl_FragColor = vec4(color, 1.0);
}
