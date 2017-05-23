import { isFalsely } from '../../helper'

export default {
  validate (val, ruleValue) {
    return !isFalsely(val) ? val.replace(/[^\x00-\xff]/g, 'xxx').length >= ruleValue : true
  },
  errMsg: '字节长度不能短于%{ruleValue}',
  priority: 100
}
