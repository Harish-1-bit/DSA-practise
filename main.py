# Given an integer n, build a right-angled triangle made of stars and return it as an array of strings, where each string is one row of the triangle.
# def printPattern():
#     for i in range(0,5):
#         for j in range(0,i):
#             print(i,end=' ')
#         print()
# printPattern()


# Given an integer n, build a centered pyramid of stars and return it as an array of strings, where each string is one row.
# def pyramids(n):
#     for i in range(1,n+1):
#         row=''
#         for m in range(n-i):
#             row+=' '
#         for m in range(2*i-1):
#             row+='*'
#         print(row)


# pyramids(4)

# Given an integer n, build an inverted pyramid of stars and return it as an array of strings, where each string is one row.
# def invertedPyramids(n):
#     for i in range(1,n+1):
#         row=''
#         for m in range(i-1):
#             row+=' '
#         for m in range(2*(n-i)+1):
#             row+='*'
#         print(row)

# invertedPyramids(4)

# Given an integer n, build an n × n square where the border is drawn with the * character and the inside is left empty. Return the square as an array of n strings, one per row.
def square(n):
    for i in range(n):
        row=''
        for j in range(n):
            if i==0 or i == n-1 or j==0 or j== n-1:
                row+='* '
            else:
                row+='  '
        print(row)

square(5)