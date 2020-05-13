//rohitaas_15
#include<bits/stdc++.h>
//#include<ext/pb_ds/assoc_container.hpp>
//#include<ext/pb_ds/tree_policy.hpp>
//using namespace __gnu_pbds;
using namespace std;
//typedef tree<int, null_type, less<int>, rb_tree_tag,tree_order_statistics_node_update> o_set;
#define ll  long long
#define int ll
#define um(a,b) unordered_map<a,b>
#define fastio() ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0)
#define all(v) v.begin(),v.end()
#define f(a,b) for(ll i=a;i<=b;i++)
#define pb push_back
#define mp make_pair
#define pii pair<ll,ll>
#define ff first
#define ss second
#define lb(v,x) lower_bound(v.begin(),v.end(),x)
#define ub(v,x) upper_bound(v.begin(),v.end(),x)
#define show(x) cout<<x<<"\n"
#define printvector(v,n) f(0,n-1){cout<<v[i]<<" ";}
#define input(v,n) f(0,n-1){cin>>v[i];}
#define vr vector<ll>
#define check() cout<<"hi"<<"\n"
#define MOD 1000000007
//#define endl "\n"
#define len() length()
#define maxv(v) *max_element(all(v));
#define minv(v) *min_element(all(v));
#define sumv(v) accumulate(all(v),0)
#define test() ll t;cin>>t;while(t--)
ll search(vr arr, ll l, ll r, ll x){if (r >= l) {ll mid = l + (r - l) / 2;if (arr[mid] == x)return mid;if (arr[mid] > x)return search(arr, l, mid - 1, x);return search(arr, mid + 1, r, x);} return -1;}
ll gcd(ll a, ll b){if(!b)return a;return gcd(b, a % b);}
ll lcm(ll a , ll b){return (a*b)/ gcd(a,b);}
ll power(ll x, ll y, ll p){ll res = 1;x = x % p;while (y > 0){ if (y & 1) res = (res*x) % p; y = y>>1;x = (x*x) % p; } return res; }
ll modInverse(ll n, ll p){return power(n, p-2, p);}
ll CmP(ll n, ll r, ll p=MOD){if (r==0)return 1;ll fac[n+1];fac[0] = 1;for (ll i=1 ; i<=n; i++)fac[i] = fac[i-1]*i%p; return (fac[n]* modInverse(fac[r], p) % p *modInverse(fac[n-r], p) % p) % p; }
/*ll constructSTUtil(vr v,ll start,ll end,int *st,ll index)
{
	if(start==end)
	{
		st[index]=v[start];
		return st[index];
	}
	ll mid=(start+end)/2;
	st[index]=constructSTUtil(v,start,mid,st,2*index)+constructSTUtil(v,mid+1,end,st,2*index+1);
	return st[index];
}
ll *constructST(vr v,ll n)
{
	ll po=(ll)(ceil(log2(n)));
	ll msize=2*power(2,po)+1;
	vr st[msize];
	constructSTUtil(v,0,n-1,st,1);
	return st;
}*/
ll ask1(ll y)
{
	cout<<1<<" "<<y<<endl;
	ll x;
	cin>>x;
	return x;
}
bool compare(pair<ll,ll> &a,pair<ll,ll> &b)
{
	return a.second<b.second;
}
signed main()
{
	///*
	/*#ifndef ONLINE_JUDGE
	 freopen("input.txt","r",stdin);
	 freopen("output.txt","w",stdout);
	 #endif
	 */

	 ll t;
	 cin>>t;
	 ll cccc=t;
	while(t--)
	 {
	 	ll n;
	 	cin>>n;
	 	vr in(n+1);
	 	f(1,n)
	 	{
	 		cin>>in[i];
	 	}
	 	ll i=1;
	 	ll j=n;
	 	ll alice=0;
	 	ll bob=0;
	 	//ll cursize=0;
	 	ll prevsize=0;
	 	ll move=0;
	 	while(i<=j)
	 	{
	 		if(i==1)
	 		{
	 			ll intake=in[i];
	 			alice+=intake;
	 			prevsize=intake;
	 			i++;
	 			move++;
	 			continue;
	 		}
	 		else
	 		{
	 			if(move%2==1)
	 			{
	 				ll intake=0;
	 				for(ll k=j;k>i;k--)
	 				{
	 					if(intake<=prevsize)
	 					{
	 						intake+=in[k];
	 						j--;
	 					}
	 				}
	 				if(intake<=prevsize)
	 				{
	 				    bob+=in[i];
	 				    bob+=intake;
	 					move++;
	 					break;
	 				}
	 				else
	 				{
	 					move++;
	 					bob+=intake;
	 					prevsize=intake;
	 				}
	 			}
	 			else
	 			{
	 				ll intake=0;
	 				for(ll k=i;k<j;k++)
	 				{
	 					if(intake<=prevsize)
	 					{
	 						intake+=in[k];
	 						i++;
	 					}
	 				}
	 				if(intake<=prevsize)
	 				{
	 				    alice+=intake;
	 				    alice+=in[j];
	 					move++;
	 					break;
	 				}
	 				else
	 				{
	 					move++;
	 					alice+=intake;
	 					prevsize=intake;
	 				}
	 			}
	 		}
	 		//show(alice<<" "<<bob);

	 	}
	 	show(move<<" "<<alice<<" "<<bob);
	 }

	/*cout<<"Case #"<<cccc-t<<": ";*/

}
