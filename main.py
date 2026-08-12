# Given an integer n, build a right-angled triangle made of stars and return it as an array of strings, where each string is one row of the triangle.
def printPattern():
    for i in range(0,5):
        for j in range(0,i):
            print(i,end=' ')
        print()
printPattern()