// Void is a return type for ************mostly************* functions that don’t return anything. It means just - this function is void of any data.

// TypeScript can infer this type fairly well, but sometimes it may want you to annotate a function with a void return explicitly.

// * You can use it for variables, but it’s very unusual to do so.  


const annoyUser = (num: number) void => {
  for (let i = 0; i < num; ++i) {
    alert('HIIIIII!')
  };
};

// In both examples below, the function *printTwice* isn’t returning anything. 

// In printTwice, void is inferred by TypeScript since there is no return statement, however as discussed, it’s good practice to notate your return type for readability and to avoid mistakes as shown in printTwice1


function printTwice(msg: string) {
  console.log(msg);
  console.log(msg);
};

function printTwice1(msg: string): void {
  console.log(msg);
  console.log(msg);
};


// printTwice2 would not be caught by TypeScript as it would infer the return type to be a string since we did not explicitly declare a return type of void and thus cause a potential bug. 

// However, returnTwice3 would be caught by TypeScript and yell at us at the *******return******* line. 

function printTwice2(msg: string) {
  console.log(msg);
  console.log(msg);

  return '';
}

function printTwice3(msg: string): void {
  console.log(msg);
  console.log(msg);

  return '';
}