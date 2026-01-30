class Light extends movableObject {
    y = 0;
    width = 720;
    height = 480;
    baseAlpha = 0.55;
    pulseAmp = 1;
    pulseSpeed = 6;
    alpha = this.baseAlpha;
    phase = Math.random() * Math.PI * 2;
    debugTint = true;              // zum Testen
    tintColor = "magenta";         // knallig zum Prüfen
    tintStrength = 0.8;            // 0..1

  constructor(imagePath, x = 0) {
    super();
    this.loadImage(imagePath);
    this.x = x;
  }

  update(t) {
    this.alpha = this.baseAlpha + this.pulseAmp * Math.sin(t * this.pulseSpeed + this.phase);
  }
}