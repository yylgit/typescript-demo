// egg中的实现 是把 controller和service都挂载在 ctx中 ctx每次创建一个新的。
// controller 也放到app上 
// egg 中就是每个controller都创建好 
// 没有把这些实例 放到单独的类中
// https://mp.weixin.qq.com/s/g07BByYS6yD3QkLsA7zLYQ

class A {
  b: B;
}

class B {
  c: C;
}

class C {
  hello() {
    console.log('hello world');
  }
}


class Container {

  get(Module: any) {
    // 创建对象
    const obj = new Module();
    // 拿到属性
    const properties = Object.getOwnPropertyNames(obj);
    for(let p of properties) {
      if(!obj[p]) {
        // 如果对象不存在，就往下创建
        if(p === 'b') {
          obj[p] = this.get(B);
        } else if(p === 'c') {
          obj[p] = this.get(C);
        } else {}
      }
    }
  }
}

// loc的目的是 每个类都只会有一个对象实例存在啦。
const container = new Container();
const a = container.get(A);
// a.b.c.hello() === 'hello world'
