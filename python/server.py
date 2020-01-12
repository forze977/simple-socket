import socketio
import eventlet

sio = socketio.Server()

@sio.event
def connect(sid, environ):
    print('connect ', sid)

@sio.event
def disconnect(sid):
    print('disconnect ', sid)

@sio.on('msg')
def my_event(sid, data):
    print(data)

app = socketio.WSGIApp(sio)
eventlet.wsgi.server(eventlet.listen(('127.0.0.1', 3000)), app)