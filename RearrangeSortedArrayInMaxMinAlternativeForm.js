// TC: O(N) SC: O(1)

function maxMin(arr){ 
  let maxIdx = arr.length - 1;
  let minIdx = 0;
  const maxEl = arr[maxIdx] + 1;
  for(let i=0; i<arr.length; i++) {
    if(i % 2 === 0) arr[i] += Math.floor((arr[maxIdx--] % maxEl) * maxEl);
    else arr[i] += Math.floor((arr[minIdx++] % maxEl) * maxEl);
  }
  for(let i=0; i<arr.length; i++) arr[i] = Math.floor(arr[i] / maxEl);
  return arr;
}
