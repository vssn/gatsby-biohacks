const IS_DARK = isDark()

function isDark() {
  if (typeof window === 'undefined') {
    global.window = {}
  }
  
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
}

function mode(light, dark, cache = true) {
  if (cache) {
    return IS_DARK ? dark : light
  }

  return isDark() ? dark : light
}

export { isDark, mode }
