import { ToolBase } from './ToolBase'

export class Clone extends ToolBase {

  private static loopPropertyArray = new Set()
  /**
   * 浅克隆一个对象 或数组
   * @param {Object|Array} target 克隆的目标
   */
  public static shallowCopy (target: any): typeof target {
    if (this.getValueTag(target) !== this.tag.objectTag || this.getValueTag(target) !== this.tag.arrayTag) {
      return target
    }
    const result = this.getValueTag(target) === this.tag.arrayTag ? [] : {}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = target[key]
      }
    }
    return result
  }

  /**
   * 深克隆一个目标 支持循环引用
   * @param {Object|Array} target 克隆的目标
   */
  public static deepCopy (target: any): any {
    const targetTag = this.getValueTag(target)
    if (this.loopPropertyArray.has(target) || (targetTag !== this.tag.objectTag && targetTag !== this.tag.arrayTag)) {
      return target
    }
    const result = targetTag === this.tag.arrayTag ? [] : {}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        const currentTag = this.getValueTag(target[key])
        if (currentTag === this.tag.objectTag || currentTag === this.tag.arrayTag) {
          result[key] = this.deepCopy(target[key])
          this.loopPropertyArray.add(target[key])
        } else {
          result[key] = target[key]
        }
      }
    }
    this.loopPropertyArray = new Set()
    return result
  }
}

