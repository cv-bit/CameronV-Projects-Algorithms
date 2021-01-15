var arr=[4,2,1,3,5];
var min=arr[0]
var temp;

for(let i=0;i<arr.length;i++){
  if(arr[i]<min){
    temp=arr[0];
    min=arr[i];
    arr[0]=min
    arr[i]=temp
  }
}