const allUsers=[
  {
    firstName : 'Aish',
    Gender : 'Male'
  },
  {
    firstName : 'Harkirat',
    Gender : 'Male'
  },
  {
    firstName : 'Priya',
    Gender : 'Female'
  },
]

for(let i= 0 ; i<allUsers.length;i++){
  if(allUsers[i]['Gender']==='Male'){
    console.log(allUsers[i]['firstName']);
  }

}


function findSum(a,b){
  console.log(a+b);
}

findSum(3,5);