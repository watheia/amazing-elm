import "../sass/main.scss"
import "../sass/app.scss"
import { withPrefix } from "../utils"

const wideBackground = "images/landscape.png"
const tallBackground = "images/portrait.png"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const imageUrl =
    typeof window === "function" && window.innerWidth >= window.innerHeight ? wideBackground : tallBackground
  return (
    <div className="app" style={{ backgroundImage: `url(${withPrefix(imageUrl)})` }}>
      <div className="app--content">
        <Component {...pageProps} />;
      </div>
    </div>
  )
}
