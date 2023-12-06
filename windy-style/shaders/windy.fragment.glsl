#define PATT_MATRIX vec2(16.)

#ifdef HIGHP
precision highp float;
#endif

uniform float u_opacity;
uniform sampler2D u_image;

varying vec2 v_pos;

uniform float u_brightness_low;
uniform float u_brightness_high;

uniform float u_saturation_factor;
uniform float u_contrast_factor;
uniform vec3 u_spin_weights;


// cloud 部分
uniform vec4 u_pars0;
uniform vec4 u_pars1;
uniform vec4 u_pars2;
uniform sampler2D u_gradient;

#ifdef PTYPE
// ptype时构建的颜色条，一个颜色的长度单位 11 / 128;
#define COLOR_UNIT 0.0859375
#endif

#ifdef CLOUDS
uniform sampler2D u_gradient1;
#endif

 #ifdef PATT
uniform sampler2D u_patt0;
 #endif

#ifdef PATT2
uniform sampler2D u_patt1;
#endif

#ifdef SATELLITE
#define SEA_COLOR vec4(0.11372549019607843, 0.2196078431372549, 0.5098039215686274, 1)
#define LAND_COLOR vec4(0.1764705882352941, 0.26666666666666666, 0, 1)
#endif

void main() {

    // vec4 nn = vec4(16., 16., 0.00194921875, 0.00194921875);

    #ifdef PATT
    lowp vec4 patt0 = texture2D(u_patt0, v_pos * PATT_MATRIX);
    #endif

    #ifdef PATT2
    lowp vec4 patt1 = texture2D(u_patt1, v_pos * PATT_MATRIX);
    #endif

    mediump vec2 f1 = fract(v_pos.xy);
    mediump vec2 f0 = vec2(1.) - f1;
    mediump vec4 w4 = vec4(f0.y * f0.x, f0.y * f1.x, f1.y * f0.x, f1.y * f1.x);

    // 本身的颜色数据
    vec4 color = texture2D(u_image, v_pos);

    // r代表的数据
    float r_value = color.r;

    // g代表的数据
    float g_value = color.g;

    float a_value = color.a;

    #ifdef BCH
    r_value = color.b;
    #endif

    #ifndef RADAR
    r_value = r_value * u_pars0.x + u_pars0.y;
    #endif

    // 实际的数据，使用此值从渐变条获得最终的颜色值
    float value = r_value;

    #ifdef PNG
    a_value  = color.a;
    #else
    a_value = 1. - color.b;
    #endif


    #ifdef LOG
    r_value = max(u_pars2.y, pow(2., r_value) + u_pars2.x);
    value = r_value;
    #endif

    // 由r和g分量共同决定最终值
    #ifdef VSIZE
    g_value = color.g * u_pars0.z + u_pars0.w;
    value = length(vec2(r_value, g_value));
    #endif


    // --- ptype 模式-----
    #ifdef PTYPE
    r_value = max(0., pow(2., r_value) - .001);
    g_value = g_value * u_pars0.z + u_pars0.w;

    float w = w4.x + w4.y + w4.z + w4.w - .45;

    if (r_value < .1 || w < 0.) {
        color = texture2D(u_gradient, vec2(0.5 * COLOR_UNIT, .5));
    } else {
        color = texture2D(u_gradient, vec2((floor(g_value + .45) + 0.5) * COLOR_UNIT, .5));
    }
    #else
        // ----- windy 带顶部颜色条取值方式-----
        #ifndef NORMAL
        value = value * u_pars1.x + u_pars1.y;
        #endif

        #ifdef SATELLITE
        color = mix(SEA_COLOR, LAND_COLOR, color.rrrr);
        #else
        // 最终颜色的纹理坐标
        vec2 gtc = vec2(value, .5);
        // 最终颜色
        color = texture2D(u_gradient, gtc);
        #endif
    #endif


    color.a *= u_opacity;

    vec3 rgb = color.rgb;

    #ifdef RADAR
//    vec4 nnn = vec4(0.5333333, 1., 0.7, 0.);
//    float m = max(color.g, color.b);
//    vec2 v = clamp(vec2(-90.0, -40.0) + m * 100.0, 0.0, 1.0);
//    v.g = 1.0 - v.g;
//    vec4 compoMask = v.rgrg;
//
//    float mixA = color.a * clamp(compoMask.g, 0.0, 1.0);
//
//    vec3 bg = nnn.rrr;
//
////    vec4 nnn = vec4(0.5333333, 1., 0.7, 0.);
////    vec3 bg = nnn.rrr;
////    float minA = color.a * clamp(g_value, 0., 1.);
////
//    rgb = mix(bg, rgb, mixA);
    #endif


    #ifdef CLOUDS
//    g_value = dot(vec4(color.g), w4);
    g_value = g_value * u_pars0.z + u_pars0.w;
    if (g_value > 10.) g_value = g_value * 10. - 90.;
    lowp vec4 grad2 = texture2D(u_gradient1, vec2(g_value * u_pars1.z + u_pars1.w, .5));
    lowp float pa = max(0.0, sign(patt0.r + grad2.a - 1.));
    rgb = mix(rgb, grad2.rgb, vec3(pa));
    #endif



    #ifdef RAIN
    if (r_value > 0.1){
        g_value = color.g * u_pars0.z + u_pars0.w;

        // mask1
        lowp float m06 = sign(g_value - 6.) - sign(g_value - 7.);
        lowp float m45 = sign(g_value - 4.) - sign(g_value - 6.);
        lowp float m07 = sign(g_value - 7.) - sign(g_value - 8.);
        lowp float m08 = sign(g_value - 8.) - sign(g_value - 9.);

        // mask2
        lowp float m09 = sign(g_value - 9.) - sign(g_value - 10.);
        lowp float m10 = sign(g_value - 10.) - sign(g_value - 11.);
        lowp float m11 = sign(g_value - 11.) - sign(g_value - 12.);
        lowp float m03 = sign(g_value - 3.) - sign(g_value - 4.);

        // mask1
        lowp float mr1 = dot(vec4(clamp(m06, 0., 1.)), w4);
        lowp float mg1 = dot(vec4(clamp(m45, 0., 1.)), w4);
        lowp float mb1 = dot(vec4(clamp(m07, 0., 1.)), w4);
        lowp float ma1 = dot(vec4(clamp(m08, 0., 1.)), w4);

        // mask2
        lowp float mr2 = dot(vec4(clamp(m09, 0., 1.)), w4);
        lowp float mg2 = dot(vec4(clamp(m10, 0., 1.)), w4);
        lowp float mb2 = dot(vec4(clamp(m11, 0., 1.)), w4);
        lowp float ma2 = dot(vec4(clamp(m03, 0., 1.)), w4);


        lowp vec4 mask1 = clamp(vec4(mr1, mg1, mb1, ma1) * 10. - 4.5, 0., 1.);
        lowp vec4 mask2 = clamp(vec4(mr2, mg2, mb2, ma2) * 10. - 4.5, 0., 1.);


        lowp vec4 masked1 = patt0 * mask1;
        lowp vec4 masked2 = patt1 * mask2;

        rgb = mix(rgb, vec3(0.85, 0.85, 1.0), masked1.rrr * .65);
        rgb = mix(rgb, vec3(1.0, 1.0, 1.0), masked1.ggg * .55);
        rgb = mix(rgb, vec3(0.8, 0.9, 1.0), masked1.bbb * .5);
        rgb = mix(rgb, vec3(0.8, 0.7, 1.0), masked1.aaa * .6);

        rgb = mix(rgb, vec3(1.0, 1.0, 0.7), masked2.rrr * .27);
        rgb = mix(rgb, vec3(1.0, 1.0, 0.7), masked2.ggg * .50);
        rgb = mix(rgb, vec3(1.0, 1.0, 0.7), masked2.bbb * .70);
        rgb = mix(rgb, vec3(1.0, 0.8, 0.8), masked2.aaa * .9);

    }
    #endif

    rgb = mix(u_pars2.zzz, rgb, vec3(a_value));


    // spin
    rgb = vec3(
    dot(rgb, u_spin_weights.xyz),
    dot(rgb, u_spin_weights.zxy),
    dot(rgb, u_spin_weights.yzx));


    // saturation
    float average = (color.r + color.g + color.b) / 3.0;

    rgb += (average - rgb) * u_saturation_factor;

    // contrast
    rgb = (rgb - 0.5) * u_contrast_factor + 0.5;

    // brightness
    vec3 u_high_vec = vec3(u_brightness_low, u_brightness_low, u_brightness_low);
    vec3 u_low_vec = vec3(u_brightness_high, u_brightness_high, u_brightness_high);

    vec3 out_color = mix(u_high_vec, u_low_vec, rgb);

#ifdef LIGHTING_3D_MODE
    out_color = apply_lighting(out_color);
#endif

#ifdef FOG
    out_color = fog_dither(fog_apply(out_color, v_fog_pos));
#endif

    gl_FragColor = vec4(out_color * color.a, color.a);


#ifdef OVERDRAW_INSPECTOR
    gl_FragColor = vec4(1.0);
#endif
}

