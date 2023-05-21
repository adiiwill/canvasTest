window.onload = () => {
  class Vector2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  let canvas = {
    width: 900,
    height: 900,
    resolution: .5,
    // Requires a canvas html tag with the id of "screen"
    canvasObj: document.getElementById("screen"),
    canvasCon: null,

    init: function () {
      this.canvasObj.width = this.width;
      this.canvasObj.height = this.height;

      this.canvasCon = this.canvasObj.getContext("2d");
      this.canvasCon.translate(this.width / 2, this.height / 2);
    },

    dot: function (point) {
      this.canvasCon.fillRect(
        point.x,
        point.y,
        this.resolution,
        this.resolution
      );
    },
  };

  // Core code below

  canvas.init();

  let renders = {
    PYRAMID: {
      runtime: function () {
        const a = new Vector2(canvas.width / 2, -canvas.width / 2);
        const b = new Vector2(0, canvas.width / 2);
        const c = new Vector2(-canvas.width / 2, -canvas.width / 2);

        let dotter = new Vector2(0, 0);
        let direction = new Vector2(0, 0);

        setInterval(() => {
          let r = Math.floor(Math.random() * 4);

          if (r === 1) direction = a;
          else if (r === 2) direction = b;
          else direction = c;

          dotter = getDistance(dotter, direction);

          canvas.dot(dotter);
        }, 0);
      },
      fast: function (iter) {
        const a = new Vector2(canvas.width / 2, -canvas.width / 2);
        const b = new Vector2(0, canvas.width / 2);
        const c = new Vector2(-canvas.width / 2, -canvas.width / 2);

        let dotter = new Vector2(0, 0);
        let direction = new Vector2(0, 0);

        for (let i = 0; i < iter; i++) {
          let r = Math.floor(Math.random() * 4);

          if (r === 1) direction = a;
          else if (r === 2) direction = b;
          else direction = c;

          dotter = getDistance(dotter, direction);

          canvas.dot(dotter);
        }
      },
    },
    CUBE: {
      runtime: function () {
        const a = new Vector2(canvas.width / 2, -canvas.width / 2);
        const b = new Vector2(canvas.width / 2, canvas.width / 2);
        const c = new Vector2(-canvas.width / 2, canvas.width / 2);
        const d = new Vector2(-canvas.width / 2, -canvas.width / 2);

        let dotter = new Vector2(0, 0);
        let direction = new Vector2(0, 0);

        let points = [];

        setInterval(() => {
          let r = Math.floor(Math.random() * 5);

          if (r === 1) direction = a;
          else if (r === 2) direction = b;
          else if (r === 3) direction = c;
          else if (r === 4) direction = d;

          dotter = getDistance(dotter, direction);

          canvas.dot(dotter);
        }, 0);
      },
      fast: function (iter) {
        const a = new Vector2(canvas.width / 2, -canvas.width / 2);
        const b = new Vector2(canvas.width / 2, canvas.width / 2);
        const c = new Vector2(-canvas.width / 2, canvas.width / 2);
        const d = new Vector2(-canvas.width / 2, -canvas.width / 2);

        let dotter = new Vector2(0, 0);
        let direction = new Vector2(0, 0);

        for (let i = 0; i < iter; i++) {
          let r = Math.floor(Math.random() * 5);

          if (r === 1) direction = a;
          else if (r === 2) direction = b;
          else if (r === 3) direction = c;
          else if (r === 4) direction = d;

          dotter = getDistance(dotter, direction);

          canvas.dot(dotter);
        }
      },
    },
  };

  function getDistance(p1, p2) {
    const x = (p1.x - p2.x) / 2;
    const y = (p1.y - p2.y) / 2;
    return new Vector2(Math.floor(x), Math.floor(y));
  }

  renders.CUBE.fast(10000000);
};
