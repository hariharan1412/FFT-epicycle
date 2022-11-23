import cv2
import numpy as np

img = cv2.imread('/home/hariharan/project/FFT/iamges/2.jpg', 0)
edges = cv2.Canny(img, 100, 255)  

indices = np.where(edges != [0])
coordinates = zip(indices[0], indices[1])

n = 0


with open('co.txt' , 'w') as f:

    for j in coordinates:
        f.writelines(str(j[0]))
        f.writelines(" , ")
   
# with open('y_cor.js' , 'w') as f:

#     for j in coordinates:
#         f.writelines(str(j[1]))
#         f.writelines(" , ")
        