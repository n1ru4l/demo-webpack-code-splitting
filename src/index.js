//
// Main Application file


const MODULES = {
  A: () => import(`./module-a`),
  B: () => import(`./module-b`),
  C: () => import(`./module-c`),
  CUSTOM: (name) => import(`./module-${name}`),
}


const buttons = document.querySelectorAll(`[data-loader]`)
const customInput = document.querySelector(`[data-custom]`)

const log = document.querySelector(`[data-log]`)

export function appendToLog(message) {
  log.innerHTML = `${log.innerHTML}\n${message}`
}

function registerButtonEvent(button) {
  const moduleKey = button.getAttribute(`data-loader`)

  button.addEventListener(`click`, async () => {

    appendToLog(`[CLICK] Button ${moduleKey}`)

    if ( moduleKey === `CUSTOM` ) {
      const name = customInput.value;
      await MODULES.CUSTOM(name)
      return
    } else if ( moduleKey === `ALL` ) {

      await Promise.all([
        MODULES.A(),
        MODULES.B(),
        MODULES.C(),
        MODULES.CUSTOM(`d`),
        MODULES.CUSTOM(`e`),
      ])
      appendToLog(`all modules are available now`)
      return
    }

    await MODULES[moduleKey]()
  })
}

;[].forEach.call(buttons, registerButtonEvent)
