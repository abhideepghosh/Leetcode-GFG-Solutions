class Solution {
public int numberOfWeakCharacters(int[][] prop) {

//if attack same then  decreasing order of defense else increasing order of attack
	Arrays.sort(prop,(a,b)->  a[0]==b[0]? b[1]-a[1] : a[0]-b[0]);

	int min=Integer.MIN_VALUE;
	int ans=0;

		for(int i=prop.length-1;i>=0;i--){
			int[] arr=prop[i];
			int att=arr[0];
			int def=arr[1];

			if(def<min)
				ans++;

			min=Math.max(def,min);
		}

	return ans;

	}
}
