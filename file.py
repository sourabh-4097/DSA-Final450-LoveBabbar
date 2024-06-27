
# Longest palindromic substring ----------------------------------->
# def longestPalin(S):
#     longest = ''
        
#     for i in range(len(S)):
#         for j in range(i,len(S)):
#             temp = S[i:j+1]
#             if temp == temp[::-1]:
#                 if len(temp)>len(longest):
#                     longest = temp
#     return longest

# print(longestPalin("aaaabbaa"))
# print(longestPalin("abccbaa"))

st = 'sdf'
stt = st.replace('s','')
print(st)
print(stt)
