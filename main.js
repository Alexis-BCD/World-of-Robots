
// =====================================================
var gl;

var vertexBuffer;
var shaders = [];
var shaderProgram;



// =====================================================
// Shaders definition (strings)
// =====================================================

shaders['quad'] = {

    vert: `
    //================================================================
    attribute vec2 vertexPosition;   // 2D position of one vertex
    uniform float shapeOffsetX;
    uniform float shapeOffsetY;
    uniform float angle;

    void main(void)
    {
        float radians = angle * (3.141 / 180.0); // Conversion de l'angle en radians
        
        float rotatedX = vertexPosition.x * cos(radians) - vertexPosition.y * sin(radians);
        float rotatedY = vertexPosition.x * sin(radians) + vertexPosition.y * cos(radians);
        
        gl_Position = vec4(rotatedX + shapeOffsetX, rotatedY + shapeOffsetY, 0.0, 1.0);
    }
    //================================================================`
    ,

    frag: `
    //================================================================
    precision mediump float;
    uniform vec3 shapeColor;

    void main(void)
    {
        gl_FragColor = vec4(shapeColor, 1.0);
    }
    //================================================================`
};

// =====================================================
function webGLStart() {

    console.log("Run 2D rendering...")

    var canvas = document.getElementById("WebGL-test");
    initGL(canvas);
    initBuffers();
    initShaders(shaders['quad'].vert, shaders['quad'].frag);
    drawScene();
}

// =====================================================
function initGL(canvas) {
    try {
        gl = canvas.getContext("experimental-webgl");
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0.7, 0.7, 0.7, 1.0);
    } catch (e) {}
    if (!gl) {
        alert("Could not initialise WebGL");
    }
}

// =====================================================
function initBuffers() {
    vertices = [
        -0.3, -0.3,
        0,  0,
        0.3, -0.3,
    ];
    vertexBuffer = gl.createBuffer();             
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer); 
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW); 
    vertexBuffer.itemSize = 2;
    vertexBuffer.numItems = 3;
}

// =====================================================
function initShaders(vShaderTxt, fShaderTxt) {
    var vshader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vshader, vShaderTxt);
    gl.compileShader(vshader);
    if (!gl.getShaderParameter(vshader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(vshader));
        return null;
    }

    var fshader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fshader, fShaderTxt);
    gl.compileShader(fshader);
    if (!gl.getShaderParameter(fshader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(fshader));
        return null;
    }

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vshader);
    gl.attachShader(shaderProgram, fshader);

    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }

    gl.useProgram(shaderProgram);

    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "vertexPosition");
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);

    shaderProgram.shapeOffsetX = gl.getUniformLocation(shaderProgram, "shapeOffsetX");
	gl.uniform1f(shaderProgram.shapeOffsetX, 0);

    shaderProgram.shapeOffsetY = gl.getUniformLocation(shaderProgram, "shapeOffsetY");
	gl.uniform1f(shaderProgram.shapeOffsetY, 0);

    shaderProgram.shapeColorUniform = gl.getUniformLocation(shaderProgram, "shapeColor");
	gl.uniform3fv(shaderProgram.shapeColorUniform, [1, 0, 0]);

    shaderProgram.angleUniform = gl.getUniformLocation(shaderProgram, "angle");
    gl.uniform1f(shaderProgram.angleUniform, 45);
}

// =====================================================
function drawScene() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.uniform1f(shaderProgram.shapeOffsetX, -0.5);
    gl.uniform1f(shaderProgram.shapeOffsetY, -0.5);
    gl.uniform1f(shaderProgram.angleUniform, 45); // Rotation de 45°
    gl.uniform3fv(shaderProgram.shapeColorUniform, [1, 0, 0]);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, vertexBuffer.numItems);

    gl.uniform1f(shaderProgram.shapeOffsetX, 0);
    gl.uniform1f(shaderProgram.shapeOffsetY, 0);
    gl.uniform1f(shaderProgram.angleUniform, 90); // Rotation de 90°
    gl.uniform3fv(shaderProgram.shapeColorUniform, [0, 1, 0]);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, vertexBuffer.numItems);

    gl.uniform1f(shaderProgram.shapeOffsetX, 0.5);
    gl.uniform1f(shaderProgram.shapeOffsetY, 0.5);
    gl.uniform1f(shaderProgram.angleUniform, 135); // Rotation de 135°
    gl.uniform3fv(shaderProgram.shapeColorUniform, [0, 0, 1]);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, vertexBuffer.numItems);
}
