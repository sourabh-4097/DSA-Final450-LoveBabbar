


def solve(string):
    stack = []
    braces = {
        ')':'(',
        ']':'[',
        '}':'{'
    }

    for i in string:
        if i =='(' or i=='[' or i == '{':
            stack.append(i)
        else:
            if len(stack) == 0 or braces[i] != stack[-1]:
                return False
            else:
                stack.pop()
    return len(stack) == 0

# string = '{([])}'

test_cases = [
    '{([])}',
    '([]',
    '()(',
    '))((',
    '{({})}'

]
for string in test_cases:
    print(solve(string))