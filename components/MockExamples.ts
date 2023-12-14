export function forEach(items: Array<number>, callback:(item : number)=>void) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
}

const doAdd = (a:number, b:number, callback:(value : number)=>void) => {
  callback(a + b);
};

export default doAdd;

