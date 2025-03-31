function bank(inititalBalance){
    let totalBalance= inititalBalance;

    return {
        update:function(amount){
               console.log(totalBalance+=amount)
        }
    }
}

let v= bank(2000)

v.update(2000)
v.update(2000)
v.update(2000)