ans = []
def print_all_subsequence(ip, output):
    if len(ip) == 0:
        print(output)
        ans.append(output)
        return ''
    
    print_all_subsequence(ip[1:], output)
    print_all_subsequence(ip[1:], output + ip[0])



output = ""
ip = "abc"
 
print(print_all_subsequence(ip, output))
print(ans)