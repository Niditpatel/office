   const last =<T>(arr:T[]) =>{
    return arr[arr.length-1];
   };
   const l = last<number>([1,2,3]);
   const l2 = last<string>(['a','bigint','c']);

   const makeArr =<X ,Y > (x:X ,y:Y):[X,Y]=>{
    return [x,y];
   };
   const v = makeArr(5,6);
   const v2 = makeArr("a","b");
   const v3 = makeArr<string | null ,number>("a",5);

   const makeFullName =<T extends {firstName:string ,lastName:string}>(obj:T) =>{
    return{
        ...obj,
        fullName: obj.firstName + " " + obj.lastName ,
        sexyBoy: obj.firstName,
        
    };
   };
   const v4 = makeFullName({firstName:"nidit",lastName:"Visaveliya",age:15});
   console.table(v4);
  

   interface Tab<T>{
    id:number;
    position:string;
    data:T;
   }

   type numberTab = Tab<number>;
   type stringTab = Tab<string>;