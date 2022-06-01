import cv2
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
class VideoCamera(object):
  def __init__(self):
    self.video = cv2.VideoCapture(0)
    
  #must delete webcam otherwise the webcam will become "trapped" and you cannot use it for other apps until computer restart
  def __del__(self):
    self.video.release()
    
  # geting the frame and converting it to jpeg format
  def get_frame(self):
    success, frame = self.video.read()
    
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    for (x,y,w,h) in faces:
      cv2.rectangle(frame,(x,y),(x+w,y+h),(255,0,0),3)
      break #exit loop after rendering one face
    
    ret, jpeg = cv2.imencode('.jpg', frame)
    return jpeg.tobytes()