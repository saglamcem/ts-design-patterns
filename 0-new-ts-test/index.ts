type Obj = {
  field: {
    x: boolean,
    y: boolean,
    z?: {
      inner?: number,
      outer?: number
    }
  }
}

export class NewTypescriptTest {
  run() {
    const obj: Obj = {
      field: {
        x: true,
        y: false,
      }
    }

    if (obj?.field?.z?.inner) {
      console.log(obj.field.z.inner);
    }
    else {
      console.log('Yokmuş');
    }
  }
}
