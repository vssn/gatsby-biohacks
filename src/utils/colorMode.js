import React from "react"

const IS_DARK = isDark()

async function isDark() {
  return await React.lazy(() => {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
  })
}

function mode(light, dark, cache = true) {
  if (cache) {
    return IS_DARK ? dark : light
  }

  return isDark() ? dark : light
}

export { isDark, mode }
