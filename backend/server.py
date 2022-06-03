from flask import Flask, render_template, Response
from camera import VideoCamera

app = Flask(__name__, template_folder='../../frontend/src')
#
#@app.route('/members')
#def members():
#    axisGen = VideoCamera().get_axis()
#    return {"members": [axisGen]}

def index():
    return render_template('index.html')
  
def axis(camera):
    while True:
        axisGen = camera.get_axis()
        
        yield (axisGen)

@app.route('/members')
def members():
    return Response(axis(VideoCamera()), mimetype='multipart/x-mixed-replace; boundary=frame')
  
def gen(camera):
    while True:
        frame = camera.get_frame()
        # creates html render template
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
  
@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame') #explains the type of response the html is receiving and sending it to the browser
  
# initialize the server to run the flask app on, debug mode means you do not need to close and reopen the server to see changes
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='4999')
