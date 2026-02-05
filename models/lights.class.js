class Light extends movableObject {
  y = 0;
  width = 720;
  height = 480;
  baseAlpha = 0.55;
  // pulseAmp = 0.02;    // kaum sichtbar
  // pulseAmp = 0.09;    // schön
  pulseAmp = 0.1;     // deutlich
  // pulseAmp = 0.7;     // Debug

  // pulseSpeed = 0.3;   // sehr langsam, ruhig
  // pulseSpeed = 1;   // sanftes Atmen
  // pulseSpeed = 1.2;   // normal
  // pulseSpeed = 3;     // schnell
  pulseSpeed = 2.5;     // Debug / Flackern

  phase = Math.random() * Math.PI * 2;

  constructor(imagePath, x = 0) {
    super();
    this.loadImage(imagePath);
    this.x = x;
  }

  update(t) {
    this.alpha = this.baseAlpha + this.pulseAmp * Math.sin(t * this.pulseSpeed + this.phase);
  }
}