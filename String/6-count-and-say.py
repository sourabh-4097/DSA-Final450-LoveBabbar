def countAndSay(n):
    if n == 1:
        return "1"
    if n == 2:
        return '11'
    s = '11'
        
    for i in range(2,n):
        t = ''
        s = s + '&'
        c = 1
        for j in range(1,len(s)):
            if s[j] != s[j-1]:
                t += str(c)
                t += s[j-1]
                c = 1
            else:
                c += 1
        s = t
    return s
    


n = 5
print(countAndSay(n))