const transMatrix = (function () {
    let pub = {};
    pub.translate = function (x, y, z) {
        return ([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [x, y, z, 1]]);
    }
    pub.rotateX = function (theta) {
        let c = Math.cos(theta);
        let s = Math.sin(theta);
        return ([[1, 0, 0, 0], [0, c, s, 0], [0, -s, c, 0], [0, 0, 0, 1]]);
    }
    pub.rotateY = function (theta) {
        let c = Math.cos(theta);
        let s = Math.sin(theta);
        return ([[c, 0, -s, 0], [0, 1, 0, 0], [s, 0, c, 0], [0, 0, 0, 1]]);
    }
    pub.rotateZ = function (theta) {
        let c = Math.cos(theta);
        let s = Math.sin(theta);
        return ([[c, s, 0, 0], [-s, c, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
    }
    pub.scale = function (x, y, z) {
        return ([[x, 0, 0, 0], [0, y, 0, 0], [0, 0, z, 0], [0, 0, 0, 1]]);
    }
    pub.shearX = function (y, z) {
        return ([[1, y, z, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
    }
    pub.shearY = function (x, z) {
        return ([[1, 0, 0, 0], [x, 1, z, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
    }
    pub.shearZ = function (y, z) {
        return ([[1, 0, 0, 0], [0, 1, 0, 0], [y, z, 1, 0], [0, 0, 0, 1]])
    }
    pub.reflectXY = function () {
        return ([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, -1, 0], [0, 0, 0, 1]])
    }
    pub.reflectYZ = function () {
        return ([[-1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
    }
    pub.reflectZX = function () {
        return ([[1, 0, 0, 0], [0, -1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
    }
    pub.identity = function () {
        return ([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
    }
    pub.ortho = function (left, right, bottom, top, near, far) {
        return [[2 / (right - left), 0, 0, 0], [0, 2 / (top - bottom), 0, 0], [0, 0, 2 / (near - far), 0], [(left + right) / (left - right), (bottom + top) / (bottom - top), (near + far) / (near - far), 1],];
    }
    return (pub)
})();
