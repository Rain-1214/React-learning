interface IFloatObject {
  floatInt: number
  floatIntStr: string
  floatDecimal: number
  floatDecimalStr: string
  allInteger: number
  times: number
}



export class ToolBase {

  public static MAX_ARRAY_INDEX = 2 ** 53
  public static hasOwn = Object.prototype.hasOwnProperty
  public static tag = {
    arrayTag: '[object Array]',
    boolTag: '[object Boolean]',
    dateTag: '[object Date]',
    errorTag: '[object Error]',
    funcTag: '[object Function]',
    mapTag: '[object Map]',
    numberTag: '[object Number]',
    nullTag: '[object Null]',
    objectTag: '[object Object]',
    promiseTag: '[object Promise]',
    regexpTag: '[object RegExp]',
    setTag: '[object Set]',
    stringTag: '[object String]',
    symbolTag: '[object Symbol]',
    undefinedTag: '[object Undefined]'
  }

  public static getValueTag (value: any): string {
    if (value === null) {
      return value === undefined ? this.tag.undefinedTag : this.tag.nullTag
    }
    return Object.prototype.toString.call(value)
  }

  public static isObject (value: any): boolean {
    const valueTag = typeof value
    return valueTag != null && (valueTag === 'object')
  }

  public static isNull (value: any): boolean {
    return value === null
  }

  public static isUndefined (value: any): boolean {
    return value === undefined
  }

  public static isArray (value: any): boolean {
    return Array.isArray(value)
  }

  public static isArrayLike (value: any): boolean {
    if (!this.hasOwn.call(value, 'length')) {
      return false
    }
    const length = value.length
    return typeof length === 'number' && length >= 0 && length <= this.MAX_ARRAY_INDEX
  }

  public static isString (value: any): boolean {
    return typeof value === 'string' || this.getValueTag(value) === this.tag.stringTag
  }

  public static isNumber (value: any): boolean {
    const valueTag = typeof value
    return valueTag === 'number' || (this.isObject(value) && this.getValueTag(value) === this.tag.numberTag)
  }

  public static isMap (value: any) {
    return value != null && this.getValueTag(value) === this.tag.mapTag
  }

  public static isSet (value: any) {
    return value != null && this.getValueTag(value) === this.tag.setTag
  }

  /**
   * 将一个浮点类型值转放大成整数
   * @param {Number} value 需要转换的值
   * @return {Object} -> {
   *  floatInt: 整数部分
   *  floatIntStr: 整数部分(字符串)
   *  floatDecimal: 小数部分
   *  floatDecimalStr: 小数部分(字符串)
   *  allInteger：转换成的整数
   *  times: 放大倍数
   * }
   */
  public static floatToInt (value: number): IFloatObject {
    if (!(this.isNumber(value) && `${value}`.indexOf('.') !== -1)) {
      return {
        floatInt: value,
        floatIntStr: `${value}`,
        floatDecimal: 0,
        floatDecimalStr: '',
        allInteger: value,
        times: 1
      }
    }
    const floatString = `${value}`
    const floatDecimalStr = floatString.split('.')[1]
    const floatIntStr = floatString.split('.')[0]
    const allInteger = Number.parseInt(floatIntStr + floatDecimalStr, 10)
    const times = 10 ** (floatDecimalStr.length)
    const floatInt = Number.parseInt(floatIntStr)
    const floatDecimal = Number.parseInt(floatDecimalStr)
    return {
      floatInt,
      floatIntStr,
      floatDecimal,
      floatDecimalStr,
      allInteger,
      times
    }
  }


  /**
   * 浮点类型计算 加法 或 乘法
   * @param {String} sign 计算符号 '+' '*'
   * @param {...Number} valueArray 累加(乘)的一系列值
   * @return {Number} 计算结果
   */
  public static floatComputeAddorMul (sign: string, ...valueArray: number[]): number {
    return valueArray.reduce((sum, currentValue) => {
      if (!this.isNumber(currentValue)) {
        return sum
      }
      const sumObj = this.floatToInt(sum)
      const currentValueObj = this.floatToInt(currentValue)
      switch (sign) {
        case '+':
          if (sumObj.times === currentValueObj.times) {
            return ((sumObj.allInteger + currentValueObj.allInteger) / sumObj.times)
          }
          return sumObj.times > currentValueObj.times ?
            (sumObj.allInteger + (currentValueObj.allInteger * (sumObj.times / currentValueObj.times))) / sumObj.times
            : (currentValueObj.allInteger + (sumObj.allInteger * (currentValueObj.times / sumObj.times))) / currentValueObj.times
        default:
          return (sumObj.allInteger * currentValueObj.allInteger) / (sumObj.times * currentValueObj.times)
      }
    })
  }


  /**
   * 浮点类型计算 减法 或 除法
   * @param {String} sign 计算符号 '-' '/'
   * @param {Number} firstvalue 被减数/被除数
   * @param {...Number} valueArray 累减(除)的一系列值
   * @return {Number} 计算结果
   */
  public static floatComputeSuborDiv (sign: string, firstvalue: number, ...valueArray: number[]): number {
    return valueArray.reduce((sum, currentValue) => {
      if (!this.isNumber(currentValue)) {
        return sum
      }
      const sumObj = this.floatToInt(sum)
      const currentValueObj = this.floatToInt(currentValue)
      switch (sign) {
        case '-':
          if (sumObj.times === currentValueObj.times) {
            return ((sumObj.allInteger - currentValueObj.allInteger) / sumObj.times)
          }
          return sumObj.times > currentValueObj.times ?
            (sumObj.allInteger - (currentValueObj.allInteger * (sumObj.times / currentValueObj.times))) / sumObj.times
            : (((sumObj.allInteger * (currentValueObj.times / sumObj.times)) - currentValueObj.allInteger) / currentValueObj.times)
        default: return (sumObj.allInteger / currentValueObj.allInteger) * (sumObj.times / currentValueObj.times)
      }
    }, firstvalue)
  }

  /**
   * 生成[min,max]的随机整数,两个参数应该为整数,如果为小数则会忽略小数部分
   * @param min 下限
   * @param max 上限
   * @returns {number} 生成的随机数
   */
  public static randomNum (min: number, max: number): number {
    const maxObject = this.floatToInt(max)
    const minObject = this.floatToInt(min)
    return Math.floor((Math.random() * ((maxObject.floatInt - minObject.floatInt) + 1)) + minObject.floatInt)
  }

  /**
   * 检测一个对象或数组中是否存在无效值 可自定义需要检测属性(数组为自定义下标)
   * @param {Object|Array} target 检测的目标
   * @param {String[]} property? 检测的属性
   * @returns {boolean} 检测的属性当中存在无效值 false 否则 true
   */
  public static checkEmptyProperty (target: any, property?: string[]): boolean {
    if (this.getValueTag(target) === this.tag.objectTag) {
      const checkPropertys = property ? property : Object.keys(target)
      return checkPropertys.every((e) => {
        return target[e] !== undefined && target[e] !== null && target[e] !== ''
      })
    } else if (this.getValueTag(target) === this.tag.arrayTag) {
      let result = true;
      (target as any[]).forEach((e) => {
        const currentTag = this.getValueTag(e)
        if (currentTag === this.tag.objectTag || currentTag === this.tag.arrayTag) {
          result = this.checkEmptyProperty(e, property)
        } else {
          result = e !== undefined && e !== null && e !== ''
        }
      })
      return result
    } else {
      throw new Error('target must be Object or Array')
    }
  }


}

