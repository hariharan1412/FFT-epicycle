import cv2
import numpy as np

img = cv2.imread('YOUR PATH', 0)
edges = cv2.Canny(img, 100, 255)  

indices = np.where(edges != [0])
coordinates = zip(indices[0], indices[1])

with open('co.txt' , '+a') as f:

    f.writelines("x_ = [")

    for i in coordinates:

        f.writelines(',')
        f.writelines(str(i[0]))

    f.writelines("]")

    f.writelines('\n')

with open('co.txt' , '+a') as k:

    k.writelines("y_ = [")
    
    for i in coordinates:

        k.writelines(',')
        k.writelines(str(i[1]))

    k.writelines("]")
