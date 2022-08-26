const promessa = new Promise(function(resolve,reject){
    return('OK')
  })
  
async function start() {
    const result = await promessa
    console.log(result)
  }
  
  
  
  start()