
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function* hellowSaga () {
  yield delay(1000);
  console.log('hellow saga');
}