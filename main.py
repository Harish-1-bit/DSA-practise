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
# def square(n):
#     for i in range(n):
#         row=''
#         for j in range(n):
#             if i==0 or i == n-1 or j==0 or j== n-1:
#                 row+='* '
#             else:
#                 row+='  '
#         print(row)

# square(5)

# Given an integer n, build a diamond of * characters that is 2n - 1 rows tall and 2n - 1 characters wide at its widest point. Return the diamond as an array of strings, one per row.
# def diamond(n):
#     for i in range(1,n+1):
#         row=''
#         for m in range(n-i):
#             row+=' '
#         for m in range(2*i-1):
#             row+='*'
#         print(row)
#     for i in range(n-1,0,-1):
#         row =''
#         for m in range(n-i):
#             row+=' '
#         for m in range(2*i-1):
#             row+='*'
#         print(row)


# diamond(4)

# Given an integer n, build Floyd's Triangle and return its rows. Floyd's Triangle fills consecutive integers starting at 1, one row at a time, from left to right. Row i (counting from 1) holds exactly i numbers.
# def floyd(n):
#     num=0
#     newArr=[]
#     for i in range(1,n+1):
#         arr=[]
#         for j in range(i):
#             num=num+1
#             arr.append(num)
#         print(arr)
#         newArr.append(arr)
#     print(newArr)

# floyd(3)
