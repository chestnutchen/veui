import { setBaseZIndex, addOverlay } from './managers/overlay'
import { addRule } from './utils/validators'

export default {
  install (Vue, { baseZIndex = 100 } = {}) {
    setBaseZIndex(baseZIndex)
    Vue.prototype.$veui = {
      addOverlay,
      Validator: {
        addRule
      }
    }
  }
}
