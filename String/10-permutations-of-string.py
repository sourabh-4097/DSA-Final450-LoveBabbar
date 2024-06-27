# Problem link - https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1

def find_permutation(S):
    # Code here
    vec = []
    def permuteString(s,i,length):
        if i>= length:
            return
        for j in range(i,length):
            s[i],s[j] = s[j],s[i]
            if(i==length-1):
                p = ''.join(s)
                vec.append(p)
            permuteString([k for k in s],i+1,length)
    
    permuteString([i for i in S],0,len(S))
    vec = set(vec)
    vec = list(vec)
    return sorted(vec)
    
print(find_permutation('ABC'))
print(find_permutation('AB'))