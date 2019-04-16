import React, { Component } from "react"
import Layout from "../components/layout"

import app from './canvas'
import { Color, Vector3 } from "three"
import Engine from "../assets/three/Engine"
import LineGenerator from "../assets/three/LineGenerator"
import getRandomFloat from "../assets/three/getRandomFloat"
import getRandomItem from "../assets/three/getRandomItem"
import AnimatedText3D from "../assets/three/AnimatedText3D.js"
import HandleCameraOrbit from "../assets/three/HandleCameraOrbit"
import FullScreenInBackground from "../assets/three/FullScreenInBackground"
class Index extends Component {
  componentDidMount() {

    /**
     * * *******************
     * * ENGINE
     * * *******************
     */

    @FullScreenInBackground
    @HandleCameraOrbit({ x: 4, y: 4 })
    class CustomEngine extends Engine {}

    const engine = new CustomEngine()

    /**
     * * *******************
     * * TITLE
     * * *******************
     */

    const text = new AnimatedText3D("Radhika Morabia", {
      color: "#0f070a",
      size: app.isMobile ? 0.5 : 0.8,
    })
    text.position.x -= text.basePosition * 0.5
    // text.position.y -= 0.5;
    engine.add(text)

    /**
     * * *******************
     * * LINES
     * * *******************
     */

    const COLORS = ["#4062BB", "#52489C", "#59C3C3", "#F45B69", "#F45B69"].map(
      col => new Color(col)
    )
    const STATIC_PROPS = {
      width: 0.1,
      nbrOfPoints: 5,
    }

    class CustomLineGenerator extends LineGenerator {
      addLine() {
        super.addLine({
          length: getRandomFloat(8, 15),
          visibleLength: getRandomFloat(0.05, 0.2),
          position: new Vector3(
            (Math.random() - 0.5) * 1.5,
            Math.random() - 1,
            (Math.random() - 0.5) * 2
          ).multiplyScalar(getRandomFloat(5, 20)),
          turbulence: new Vector3(
            getRandomFloat(-2, 2),
            getRandomFloat(0, 2),
            getRandomFloat(-2, 2)
          ),
          orientation: new Vector3(getRandomFloat(-0.8, 0.8), 1, 1),
          speed: getRandomFloat(0.004, 0.008),
          color: getRandomItem(COLORS),
        })
      }
    }
    const lineGenerator = new CustomLineGenerator(
      {
        frequency: 0.5,
      },
      STATIC_PROPS
    )
    engine.add(lineGenerator)

    /**
     * * *******************
     * * START
     * * *******************
     */
    // Show
    engine.start()
    const tlShow = new TimelineLite({
      delay: 0.2,
      onStart: () => {
        lineGenerator.start()
      },
    })
    tlShow.to(".overlay", 0.6, { autoAlpha: 0 })
    tlShow.fromTo(
      engine.lookAt,
      3,
      { y: -4 },
      { y: 0, ease: Power3.easeOut },
      "-=0.4"
    )
    tlShow.add(text.show, "-=2")

    // Hide
    app.onHide(onComplete => {
      const tlHide = new TimelineLite()
      tlHide.to(engine.lookAt, 2, { y: -6, ease: Power3.easeInOut })
      tlHide.add(text.hide, 0)
      tlHide.add(lineGenerator.stop)
      tlHide.to(".overlay", 0.5, { autoAlpha: 1, onComplete }, "-=1.5")
    })
  }

  render() {
    return (
      <Layout>
        <h1>Amazing Pandas Eating Things</h1>
        <div class="overlay" />
        <main>
          <div class="frame">
            <div class="frame__title-wrap">
              <h1 class="frame__title">Animated Mesh Lines</h1>
            </div>
            <a
              class="frame__github"
              href="https://github.com/Jeremboo/animated-mesh-lines"
            >
              GitHub
            </a>
            <div class="frame__links">
              <a href="https://tympanus.net/Development/InteractiveLandscape/">
                Previous Demo
              </a>
              <a href="https://tympanus.net/codrops/?p=37034">Article</a>
            </div>
            <div class="frame__demos">
              <a href="index.html" class="frame__demo">
                demo 1
              </a>
              <a href="demo2.html" class="frame__demo">
                demo 2
              </a>
              <a href="demo3.html" class="frame__demo frame__demo--current">
                demo 3
              </a>
              <a href="demo4.html" class="frame__demo">
                demo 4
              </a>
              <a href="demo5.html" class="frame__demo">
                demo 5
              </a>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default Index
