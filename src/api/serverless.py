from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api

app = Flask(__name__)
app.url_map.strict_slashes = False

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# Add all endpoints from the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# Generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    return generate_sitemap(app)

# Any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # Avoid cache memory
    return response

# Serverless function entry point
def serverless_handler(event, context):
    return app(event, context)
