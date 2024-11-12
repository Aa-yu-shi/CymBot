from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse
import json

class SignupHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        # Only handle requests to the /signup endpoint
        if self.path == '/signup':
            # Read the length of the incoming data
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            # Parse the form data
            data = urllib.parse.parse_qs(post_data.decode('utf-8'))
            username = data.get('username', [''])[0]
            email = data.get('email', [''])[0]
            password = data.get('password', [''])[0]
            
            # Save the data to a text file
            with open("data.txt", "a") as file:
                file.write(f"Username: {username}, Email: {email}, Password: {password}\n")
            
            # Send a JSON response
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            response = {'status': 'success', 'message': 'Signup successful!'}
            self.wfile.write(json.dumps(response).encode('utf-8'))

# Set up and start the server
server_address = ('', 8000)
httpd = HTTPServer(server_address, SignupHandler)
print("Server running on port 8000...")
httpd.serve_forever()