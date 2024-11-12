import json
import os
import ssl
from http.server import SimpleHTTPRequestHandler, HTTPServer

# Helper function to check credentials from data.txt
def check_credentials(username, email, password):
    if not os.path.exists("data.txt"):
        return False
    with open("data.txt", "r") as file:
        for line in file:
            saved_username, saved_email, saved_password = line.strip().split(',')
            if username == saved_username and email==saved_email and password == saved_password:
                return True
    return False

# Custom handler to handle login requests
class MyHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/login':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))

            username = data.get('username')
            password = data.get('password')

            if check_credentials(username, password):
                response = {"message": f"Welcome, {username}!"}
            else:
                response = {"message": "Login failed. Invalid username or password."}
            
            # Send response
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response).encode('utf-8'))
        else:
            # Default handler for other paths
            super().do_GET()

# Create and start the server
def run():
    httpd = HTTPServer(('localhost', 8443), MyHandler)
    
    # Wrap the server with SSL
    httpd.socket = ssl.wrap_socket(httpd.socket, keyfile='server.key', certfile='server.crt', server_side=True)
    
    print("Server started at https://localhost:8443")
    httpd.serve_forever()

if __name__ == "__main__":
    run()