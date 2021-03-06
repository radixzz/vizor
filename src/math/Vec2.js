import * as VecFun from './VecFun';

export default class Vec2 {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  add(v1, v2) {
    return VecFun.add(this, v2 || this, v1, 2);
  }

  addScalar(scalar) {
    return VecFun.addScalar(this, scalar, 2);
  }

  addScaledVector(v, scale) {
    return VecFun.scaleAndAdd(this, v, scale, 2);
  }

  ceil() {
    return VecFun.ceil(this, 2);
  }

  clamp(min, max) {
    return VecFun.clamp(this, min, max, 2);
  }

  clampLength(min, max) {
    return VecFun.clampLength(this, min, max, 2);
  }

  clampScalar(minScalar, maxScalar) {
    return VecFun.clampScalar(this, minScalar, maxScalar, 2);
  }

  copy(v) {
    return VecFun.copy(this, v, 2);
  }

  distanceTo(v) {
    return VecFun.distanceTo(this, v, 2);
  }

  distanceSquared(v) {
    return VecFun.distanceSquared(this, v, 2);
  }

  div(v) {
    return VecFun.div(this, v, 2);
  }

  divScalar(scalar) {
    return VecFun.mulScalar(this, 1 / scalar, 2);
  }

  dot(v) {
    return VecFun.dot(this, v, 2);
  }

  equals(v) {
    return VecFun.equals(this, v, 2);
  }

  floor() {
    return VecFun.floor(this, 2);
  }

  length() {
    return VecFun.length(this, 2);
  }

  lengthSqrt() {
    return VecFun.lengthSqrt(this, 2);
  }

  lerp(v, alpha) {
    return VecFun.lerp(this, v, alpha, 2);
  }

  max(v) {
    return VecFun.max(this, v, 2);
  }

  manhattanDistance(v) {
    return VecFun.manhattanDistance(this, v, 2);
  }

  manhattanLength() {
    return VecFun.manhattanLength(this, 2);
  }

  min(v) {
    return VecFun.min(this, v, 2);
  }

  multiply(v1, v2) {
    return VecFun.mul(this, v2 || this, v1, 2);
  }

  multiplyScalar(scalar) {
    return VecFun.mulScalar(this, scalar, 2);
  }

  negate() {
    return VecFun.negate(this, 2);
  }

  normalize() {
    return VecFun.normalize(this, 2);
  }

  round() {
    return VecFun.round(this, 2);
  }

  set(x, y) {
    return VecFun.set(this, x, y, 0, 0, 2);
  }

  setLength(length) {
    return VecFun.setLength(this, length, 2);
  }

  setScalar(scalar) {
    return VecFun.set(this, scalar, scalar, 0, 0, 2);
  }

  sub(v1, v2) {
    if (v2) return VecFun.sub(this, v1, v2, 2);
    return VecFun.sub(this, this, v1, 2);
  }

  subScalar(scalar) {
    return VecFun.subScalar(this, scalar, 2);
  }

  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }

  applyMatrix3(m) {
    const { x, y } = this;
		this.x = m[0] * x + m[3] * y + m[6];
		this.y = m[1] * x + m[4] * y + m[7];
    return this;
  }

  cross(v) {
    return this.x * v.y - this.y * v.x;
  }

  clone() {
    return new Vec3(this.x, this.y);
  }

  rotateAround(center, angle) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const x = this.x - center.x;
    const y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }

  toArray(arr, offset) {
    return VecFun.toArray(this, arr, offset, 2);
  }
}